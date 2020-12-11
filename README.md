<!-- PROJECT LOGO -->
<br />
<p align="center">
  <h3 align="center">React Link Preview 🎉👀</h3>
  <p align="center">
    A pure front-end link preview for React. I needed something like this for a project so I made this.It doesn't require any backend server nor depends on anyone else's server. Hopefully, it will be of use for your projects. MIT 
    <br />
    <a href="https://react-link-preview.firebaseapp.com/"><strong>Demo »</strong></a>
  </p>
</p>

<!-- GETTING STARTED -->

## Getting Started

This is build on top of [Metascraper](https://github.com/microlinkhq/metascraper)

### Prerequisites

- npm
  ```sh
  npm install npm@latest -g
  ```

### Installation

1. Clone the repo
   ```sh
   git clone https://github.com/Tumuchcoding/React-Link-Preview
   ```
2. Install NPM packages
   ```sh
   npm install
   ```

<!-- USAGE EXAMPLES -->

## Usage

On LinkPreview.js, you have:

```sh
 const [preview, setPreview] = useState({});
```

You would need to pass a URL and the output will be in the preview state. I render it to a card but you may do whatever you wish with it.

Example output when console-loging preview:

```sh
{
author: "Mindy Weisberger"
description: "Pandas enjoy rolling in horse manure; this smelly habit may help them keep warm."
image: "https://cdn.mos.cms.futurecdn.net/8b8aUfPdFZ89X7QSZbUnnM-1200-80.jpg"
logo: "https://vanilla.futurecdn.net/livescience/media/img/ls-logo-inverted.svg"
publisher: "Live Science"
title: "Giant pandas have winter poop parties, rolling around in horse manure"
url: "https://www.livescience.com/pandas-roll-in-horse-poo.html"
}
```

I bypass the cors header requirement using [cor-anywhere](https://github.com/Rob--W/cors-anywhere). Big thanks to him!
If you are planing to use this for production, delete the cors link because it does hinder some websites readability.

<!-- LICENSE -->

## License

Distributed under the MIT License. See `LICENSE` for more information.

<!-- CONTACT -->

## Contact

Contact me here on Github
Project Link: [React Link Preview](https://github.com/Tumuchcoding/React-Link-Preview)

<!-- ACKNOWLEDGEMENTS -->

## Acknowledgements

- [Metascraper](https://github.com/microlinkhq/metascraper)
- [cor-anywhere](https://github.com/Rob--W/cors-anywhere)
