<div id="top"></div>

<!-- PROJECT LOGO -->
<br />
<div align="center">
<h3 align="center">easydocs</h3>

  <p align="center">
    A CLI to measure your code's documentation and generate a docs site
  </p>
</div>

<!-- GETTING STARTED -->

## Getting Started

Use easydocs on any npm package!

### Prerequisites

- npm
  ```sh
  npm install easy-docs -g
    ```

then add the following to your package.json

- npm
  ```json
    "scripts": {
        "generate-docs-coverage-report": "easydocs-coverage-report",
        "build-docs-site": "easydocs-build-docs",
    }
  ```

and add a configuration file called ".easydocsconfig.json"

- npm
  ```json
  {
    "build": {
      "source": "./js/src",
      "target": "./docs"
    },
    "meta": {
      "docsDescription": "Test Description",
      "docsName": "Easy Docs",
      "github": "https://www.github.com",
      "author": "Elliott Sencan"
    },
    "coverage": {
      "required": ["FunctionDeclaration"]
    }
    }
  ```

<!-- USAGE EXAMPLES -->

## Usage

To generate a coverage report, run

- npm
  ```sh
  npm run generate-docs-coverage-report
  ```

To build a docs site, run

- npm
  ```sh
  npm run build-docs-site
  ```

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- LICENSE -->

## License

Distributed under the MIT License. See `LICENSE.txt` for more information.

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- CONTACT -->

## Contact

Elliott Sencan - elliott.sencan@hey.com

<p align="right">(<a href="#top">back to top</a>)</p>
