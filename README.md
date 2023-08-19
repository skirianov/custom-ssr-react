## Custom React SSR functionality

This is a custom React SSR functionality that I have created for learning purposes.
In the `server.jsx` file you can see how Node.js server (powered by Express.js library) is rendering the React app on server, injecting the initial data (fetch on server) and sending the HTML to the client, hydrating the app on the client side to allow for Client Side React functionality like useState, useEffect, etc.

### How to run the app

1. Clone the repo
2. Run `yarn install` to install the dependencies
3. Run `yarn build` to build files
4. Run `yarn start` to start the server
5. Open `http://localhost:3000` in your browser

