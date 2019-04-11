# **StarWars characters search project!**

## Two words about design choices:

The application is created with create-react-app utility, because it’s the easiest way to setup and configure all necessary environment ( like webpack and babel ) and start coding.
Redux is used as state container library, along with redux-thunk middleware - to make it possible to make async requests inside action creators.

## Things to improve:

1. Unit tests
2. Handle possible error response from API request. Now it is assumed API request will return only successful responses
3. Add loader for heavy requests

## How to start the application:

1. Clone repo
2. From root project’s directory run `npm install` to install required dependencies
3. From root project’s directory run `npm start` to build the application.
4. Once it’s built, web page will be opened automatically.
