# URL Parser

## Table of Contents
- [URL Parser](#url-parser)
  - [Table of Contents](#table-of-contents)
  - [Exercise description](#exercise-description)
    - [URL Parser Exercise](#url-parser-exercise)
  - [Getting Started](#getting-started)
    - [Prerequisites](#prerequisites)
    - [Install and deploy](#install-and-deploy)
    - [Running Tests](#running-tests)
    - [Deploy using docker](#deploy-using-docker)
    - [Project Structure](#project-structure)

## Exercise description

### URL Parser Exercise

We need some logic that extracts the variable parts of a url into a hash. The keys of the
extract hash will be the "names" of the variable parts of a url, and the values of the hash will be the values. We will be supplied with:

1. A **url format string**, which describes the format of a url. A url format string can
contain constant parts and variable parts, in any order, where "parts" of a url are
separated with "/". All variable parts begin with a colon. Here is an example of
such a url format string:

    `'/:version/api/:collection/:id'`

2. A particular **url instance** that is *guaranteed* to have the format given by the url
format string. It may also contain url parameters. For example, given the example
url format string above, the url instance might be:

    `'/6/api/listings/3?sort=desc&limit=10'`

Given this example url format string and url instance, the hash we want that maps all the variable parts of the url instance to their values would look like this:
```json
{
    version: 6,
    collection: 'listings',
    id: 3,
    sort: 'desc',
    limit: 10
}
```
Please implement a solution to this problem in JavaScript (or your programming language of choice, if applying for a DevOps position) *with attention to code structure
and readability*. Feel free to use low-level libraries like Lodash.

## Getting Started

### Prerequisites
You might choose running the application natively or inside docker:
- Node.js and npm installed on your machine.
- Docker and docker-compose.

### Install and deploy
1. Clone the repository:
   ```bash
   git clone https://github.com/juanchiriera/rotunda-challenge.git
   cd url-parser
   ```
2. Install Dependencies:
   ```bash
   npm install
   ```
Run the application by executing the following command:
```bash
npm start
```
Follow the on-screen instructions to input the URL Parser and URL to be parsed.

### Running Tests
To run the application's tests, use the following command:
```bash
npm test
```

### Deploy using docker
Using docker compose, execute the following command:
```bash
cd url-parser
docker compose run url-parser
```

### Project Structure
```bash
url-parser
├── docker-compose.yaml
├── Dockerfile
├── package.json
├── package-lock.json
├── README.md
├── src
│   ├── index.js
│   └── modules
│       └── UrlParser.js
└── tests
    └── urlParser.test.js
```

