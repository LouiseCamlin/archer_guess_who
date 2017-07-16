import React from 'react';
import ReactDOM from 'react-dom';
import GuessWhoContainer from './containers/GuessWhoContainer.jsx';

window.addEventListener('load', function () {
  ReactDOM.render(
    <GuessWhoContainer />,
    document.getElementById('app')
  );
});
