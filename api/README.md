# Backend
The following backend it's a really simple API which returns *reverted* the received **text** query param by consuming it's only endpoint.
Developed under the __technical challenge__ for Coprywrite co enterprise for a remote *fullstack web developer* position.

This server can be used either remotely or locally.

## Remote

> [Link]()

## Local
You need to either clone or fork this repository. Once there you only need to open a terminal standing on ```./api``` folder and run the following commands:

```
$ npm install
```
```
$ npm start
```

If you are using *node package manager* otherway you need to run the command for your proper package manager.

Once done, you are ready to work with this server! Running on **http://localhost:3001/**

### Usage
This server currently counts only with one endpoint:

```
/iecho?text=${your_value_here}
```

**STATUS 200**
```
    {
        "status": 200,
        "text": ${YOUR_VALUE_REVERSED},
        "palindrome"?: true
    }
```

**STATUS 400**
```
    {
        "status": 400,
        "error": "no text"
    }
```

## Develop
The backend was built for **Copywrite (CO)** as part of a __technical challenge__ for a remote *fullstack web developer* position. The ```stack``` used was: [Node](https://nodejs.org/es/) + [Express](https://expressjs.com/es/) mainly but also for *developing* purposes were use other technologies such as: [Morgan](https://github.com/expressjs/morgan#readme), [Nodemon](https://nodemon.io/) and [Standard](https://standardjs.com/) as a formatter.

For purposes of *scalating capability* despite counting with only one endpoint the server architechture counts with a __solid__ structure of routing plus the respective **controller** for ```/iecho``` route and a **middleware** for error handling and bad requests.

### Testing
The process of mounting and building the server was under the implementation of **TDD/BDD** philosophy for success requests, error requests, palindrome requests and object type responses.

As part of the process on testing the following technologies were used: [Mocha](https://mochajs.org/), [Chai](https://www.chaijs.com/) and [Supertest](https://github.com/visionmedia/supertest).

In case of running the server **locally** you can check this out by running on your terminal (always standing on **./api** directory):
```
npm run test
```