import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Basicdemo from './Basicdemo';
import registerServiceWorker from './registerServiceWorker';

// ReactDOM.render(<App />, document.getElementById('root'));
// registerServiceWorker();

ReactDOM.render(
    <Basicdemo />,document.getElementById('container')
);
