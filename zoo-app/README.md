# Zoo Application

Welcome to the Zoo Application! This simple Node.js application simulates a zoo environment where animals can "speak" by adding their characteristic sounds to input text.

## Table of Contents
- [Zoo Application](#zoo-application)
  - [Table of Contents](#table-of-contents)
  - [Getting Started](#getting-started)
    - [Prerequisites](#prerequisites)
    - [Install and deploy](#install-and-deploy)
    - [Running Tests](#running-tests)
    - [Deploy using docker](#deploy-using-docker)
    - [Project Structure](#project-structure)

## Getting Started

### Prerequisites
You might choose running the application natively or inside docker:
- Node.js and npm installed on your machine.
- Docker and docker-compose.

### Install and deploy
1. Clone the repository:
   ```bash
   git clone https://github.com/juanchiriera/rotunda-challenge.git
   cd zoo-app
   ```
2. Install Dependencies:
   ```bash
   npm install
   ```
Run the application by executing the following command:
```bash
npm start
```
Follow the on-screen instructions to choose an animal and make it speak by entering text.

### Running Tests
To run the application's tests, use the following command:
```bash
npm test
```

### Deploy using docker
Using docker compose, execute the following command:
```bash
cd zoo-app
docker compose run zoo-app
```

### Project Structure
```bash
zoo-app
├── docker-compose.yaml # Docker and docker-compose files.
├── Dockerfile
├── index.js            # The main script for running the zoo application.
├── package.json
├── package-lock.json
├── README.md
├── src
│   └── model           # Contains classes for different animals and base model.
│       ├── base
│       │   └── Animal.js
│       ├── Lion.js
│       └── Tiger.js
└── tests               # Contains test files for the animal classes.
    ├── Animal.test.js
    ├── Lion.test.js
    └── Tiger.test.js
```

