# Zoo Application

Welcome to the Zoo Application! This simple Node.js application simulates a zoo environment where animals can "speak" by adding their characteristic sounds to input text.

## Table of Contents
- [Zoo Application](#zoo-application)
  - [Table of Contents](#table-of-contents)
  - [Exercise description](#exercise-description)
    - [Zoo Exercise](#zoo-exercise)
  - [Getting Started](#getting-started)
    - [Prerequisites](#prerequisites)
    - [Install and deploy](#install-and-deploy)
    - [Running Tests](#running-tests)
    - [Deploy using docker](#deploy-using-docker)
    - [Project Structure](#project-structure)

## Exercise description

### Zoo Exercise

We are building a zoo inside a computer. Each animal species in our zoo has lots
of different, particular, behaviors, but all animals talk to each other in a similar
way. Specifically, they all implement a `speak` method, the output of which is the
arbitrary input string interspersed with an "animal sound" that is particular to that
type of animal. For example, the lion's `speak` function behaves like so:

```javascript
> lion.speak( "I'm a lion" );
< "I'm roar a roar lion roar"
```

The tiger's speak function behaves similarly but with a different sound:

```javascript
> tiger.speak( "Lions suck" );
< "Lions grrr suck grrr"
```

Please write logic and classes to support our zoo in JavaScript (using whatever
class model you like) *with attention to code structure and readability*.

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

