// eslint-disable-next-line no-use-before-define
import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';

ReactDOM.render(<App />, document.getElementById('app'));

// Hot Module Replacement
declare let module: { hot: any };

if (module.hot) {
  module.hot.accept('./App', () => {
    // eslint-disable-next-line @typescript-eslint/no-var-requires,global-require
    const NewApp = require('./App').default;

    ReactDOM.render(<NewApp />, document.getElementById('app'));
  });
}
