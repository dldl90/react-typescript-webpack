/* tslint:disable-next-line */
import React from 'react';
/* tslint:disable-next-line */

import './App.scss';

interface AppProps {
  message: string;
}

export default function ({ message }: AppProps) {
  return (
    <div className="app">
      <h1 className="app__title">Hello {message}</h1>
      <button className="app__button" type="primary">Test</button>
      hellp
    </div>
  );
}
