# Frontend
The following frontend it's a really simple client which shows a very simple **search bar** where anybody can type in the text that whish to *reverse*. And below a simple board whil eventually show the resulting **text**.

Developed under the __technical challenge__ for Coprywrite co enterprise for a remote *fullstack web developer* position.

This client can be used either remotelly or locally.

## Remote

> [Link](https://copywrite-reverse-word.vercel.app/)

## Local
You need to either clone or fork this repository. Once there you only need to open a terminal standing on the ```./client``` directory and run the following commands:

```
$ npm install
```
```
$ npm start
```

If you are using *node package manager* otherwise you need to run the proper command for your own package manager.

Once done, you are ready to work with this client! Running on **http://localhost:3000/**

### Usage
This client currently counts only with one *functional* route:

```
/
```

and a *legacy* route with original **npx create-react-app** header.

```
/icon
```
<hr>

> **Search Bar:** 
On the top of the screen a wide red bar with a textfield displays. The *send* button remains __disabled__ until some **text** may be type on the named textfield when the button will enable *colorizing* itself.
This is the main function of the client, allowing you to automatically **reverse** any text you introduce in the textfield after pressing the *Send* button.

<hr>

> **Dashboard:**
The main screen displays a smaller board which eventually will show the *results* of the proper button sendings. The resulting **text** from any user search will be displayed on the *Last Result* section. While the history of the __last__ 10 searchs will be shown below on the *Results* section under the form of a list.

<hr>

## Develop
This frontend was built for **Copywrite (CO)** as part of a __technical challenge__ for a remote *fullstack web developer* position. The ```stack```is: [React](https://en.reactjs.org/) + [Redux](https://redux.js.org/) mainly but also for *developing* purposes were use other technologies such as: [SASS](https://sass-lang.com/) and [@MUI](https://mui.com/) for enhancing **UX/UI** construction. Alson [Jest](https://jestjs.io/) and [Standard](https://standardjs.com/) were used along the developing process.

### Testing
The process of mounting and building the server was under the implementation of **TDD/BDD** philosophy for *redux/toolkit* slices. More specifically their corresponding **actions** and **reducers**.

Unit testing was made for that purposes and the beforehand mentioned main technology was **Jest** with standard default **testing-library**.

In case of running the client **locally** you can check this out by running on your terminal (always standing on **./client** directory):
```
npm run test
```