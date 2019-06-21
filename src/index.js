import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import { run } from './playground';

run();

ReactDOM.render(
  <Fragment>
    <App />
  </Fragment>,
  document.getElementById('root')
);
