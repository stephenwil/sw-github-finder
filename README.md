This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

1. To get this project started:

- Clone this repo from github using your preferred method of HTTPS or SSL
- This project is built using create-react-app, so typical commands to get started are after cloning:
  -   yarn install

  and then

  - yarn start : To run the application
  - yarn test: To run the unit test.

2. Dependancies

The only thing required to run this application is a .env file, place at the root of the directory, with your github credentials, in the following format:

REACT_APP_GITHUB_USERNAME="myusername"
REACT_APP_GITHUB_PASSWORD="mypassword"

This is such that the github search API can be called with less restrictions and rate limiting.

