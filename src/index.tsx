/* tslint:disable-next-line */
import React from 'react';
import { render } from 'react-dom';
import App from './components/App';

import './index.scss';

render(
    <App message="World" />,
    document.getElementById('root'),
);
