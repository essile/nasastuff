import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './i18n';
import App from './App';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.css';

// ReactDOM.render(<App />, document.getElementById('root'));
ReactDOM.render(
        <App />,
    document.getElementById("root")
  );

serviceWorker.unregister();
