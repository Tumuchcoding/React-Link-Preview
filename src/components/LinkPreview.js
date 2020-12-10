import React, { useState, useEffect } from "react";
import axios from "axios";
import Input from "./Input";
import CardOutput from "./CardOutput";

const metascraper = require("metascraper")([
  require("metascraper-youtube")(),
  require("metascraper-author")(),
  require("metascraper-description")(),
  require("metascraper-image")(),
  require("metascraper-logo")(),
  require("metascraper-title")(),
  require("metascraper-url")(),
  require("metascraper-publisher")(),
]);

function LinkPreview() {
  ///main output preview, you may console.log it to get info
  const [preview, setPreview] = useState({});

  const [urlData, setUrlData] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  let url = urlData;
  useEffect(() => {
    const get = async () => {
      setError(null);
      setIsLoading(true);
      if (url) {
        try {
          const body = await axios.get(
            /// delete cors-link for production, use in development to bypass cors
            "https://cors-anywhere.herokuapp.com/" + url
            // url
          );
          const html = body.data;
          const metadata = await metascraper({ html, url });
          setPreview(metadata);
        } catch (error) {
          setError(error);
        }
      }
      setIsLoading(false);
    };
    get();
  }, [url]);

  const getUrlData = (input) => {
    setUrlData(input);
  };

  return (
    <div className="output">
      <Input getUrlData={getUrlData} />
      {error ? (
        <h2 className="error">there was an error, please try again</h2>
      ) : null}
      {isLoading ? (
        <h2>Loading...</h2>
      ) : (
        <CardOutput preview={preview} urlData={urlData} />
      )}
    </div>
  );
}

export default LinkPreview;
