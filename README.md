# Video Conferencing App  <br/>


<img align="left" width="100" height="100" src="https://icons-for-free.com/iconfiles/png/512/design+development+facebook+framework+mobile+react+icon-1320165723839064798.png"> 


## Overview:

The project is carried out as part of an additional course at the Faculty of Electronics of the [Wrocław University of Technology](http://pwr.edu.pl/en/).

> SUBJECT OBJECTIVES
>
>  * Learning about multimedia processing methods
>  * Acquiring knowledge of programming multimedia processing applications
>  * Acquisition of knowledge in the use of multimedia containers
>  * Acquisition of knowledge in the field of software testing
>  * Acquiring the ability to analyze multimedia signals
>  * Acquiring the ability to use tools that facilitate planning and running a programming project
>  * Acquiring the skills to automate software tests

The project is carried out by specialists from [Dolby](https://www.dolby.com/) Poland Sp. z o.o. from Wroclaw.

## Project assumptions

> TODO

## Host of the frontend application:

https://video-conferencing-app-pwr.herokuapp.com/  <br/>

## Preview Images:

![Welcome](img/welcome.png?raw=true "Preview welcome screen")

![Preview Image](img/preview.png?raw=true "Preview Image")

## Prerequisites [for developers]

You’ll want to make sure that you have a decent understanding of the following:

  * JavaScript/[ Node.js](https://nodejs.org/en/) (v14.16.0 or above)
  * React
  * Redux/Redux Saga

You will also want to ensure that you have the following installed on your machine:

  * Homebrew (Latest)
  * Node.js (v12.10.0 or above)
  * Yarn (Latest)
  * Create React App (CRA)

Ensure that you have the following installed on your machine:
> And, you’ll need to have created free accounts with the following services:

* [Heroku](https://signup.heroku.com/login) (for hosting the API)  
* [Stream](https://getstream.io/chat/) (for real-time chat functionality)
* [Dolby.io](https://auth.dolby.io/realms/Dolby.io/protocol/openid-connect/auth?client_id=dolby-io-website&redirect_uri=https%3A%2F%2Fdolby.io%2Fdashboard&state=651dfb2b-136c-45b4-930b-7719d5e1a7ce&response_mode=fragment&response_type=code&scope=openid&nonce=90ab9c07-a5d8-4b5a-be77-ab47cf93bc18) (for video conferencing)

## Getting started [for developers/  Happy coding! ✌️]

 This project only includes the Frontend UI!
 
 Step 1: Open Your terminal in the target directory and run:
 
 ```bash
 # Node Package Execute
 npx create-react-app your_application_name
 ```
 > Note: With create-react-app, you must prepend all environment variables with REACT_APP.
 > You will need the following environment variables in your .env file:
 >
 > * REACT_APP_STREAM_KEY
 > * REACT_APP_VOX_KEY
 > * REACT_APP_VOX_SECRET
 
 Step 2: Replace all files with those contained in this repository
  
 Step 3: Setting up the Backend API & Authentication
 
 >TODO :) 

## Running the application [for developers]

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.
