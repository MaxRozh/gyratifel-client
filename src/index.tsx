// eslint-disable-next-line no-use-before-define
import React from 'react';
import ReactDOM from 'react-dom';

// import App from "./App";

// eslint-disable-next-line react/jsx-filename-extension
const App = () => <h1>My React and TypeScript App!</h1>;

ReactDOM.render(<App />, document.getElementById('app'));

/* eslint @typescript-eslint/no-unsafe-member-access: "off",
          @typescript-eslint/no-unsafe-call: "off",
          @typescript-eslint/no-unsafe-assignment: "off",
          @typescript-eslint/no-var-requires: "off"
*/
// Hot Module Replacement
declare let module: { hot: any };

if (module.hot) {
  module.hot.accept('./App', () => {
    // const NewApp = require('./App').default;
    const NewApp = App;

    ReactDOM.render(<NewApp />, document.getElementById('app'));
  });
}
