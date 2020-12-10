import React from "react";
import psl from "psl";
import ori from "../assets/default-image.png";

function CardOutput({ preview, urlData }) {
  const hostname = psl.get(extractHostname(preview.url));

  let description;
  if (preview.description) {
    description = removeTags(preview.description);
  }

  let url = urlData;

  return (
    <>
      {url ? (
        <div className="card">
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="link"
          >
            {preview.image ? (
              <img src={preview.image} alt="" className="image" />
            ) : (
              <img src={ori} alt="" className="image" />
            )}
            <div className="content">
              <h2 className="title">{preview.title}</h2>
              <div className="description"> {description}</div>
              <p className="hostname">
                {url && (
                  <img
                    className="icon"
                    src={`https://www.google.com/s2/favicons?domain=${url}`}
                    alt="icon"
                  />
                )}
                {hostname}
              </p>
            </div>
          </a>
        </div>
      ) : null}
    </>
  );
}

export default CardOutput;

function extractHostname(url) {
  let hostname;
  //find & remove protocol (http, ftp, etc.) and get hostname
  if (url) {
    if (url.indexOf("//") > -1) {
      hostname = url.split("/")[2];
    } else {
      hostname = url.split("/")[0];
    }
  }

  //find & remove port number
  if (hostname) hostname = hostname.split(":")[0];
  //find & remove "?"
  if (hostname) hostname = hostname.split("?")[0];

  return hostname;
}

function removeTags(str) {
  if (str === null || str === "") return false;
  else str = str.toString();
  return str.replace(/(<([^>]+)>)/gi, "");
}
