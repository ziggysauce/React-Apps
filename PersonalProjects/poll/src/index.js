import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { createStore } from 'redux';
import myApp from './reducers';
import Results from './components/results';
import Credits from './components/credits';

let store = createStore(myApp);

function render() {
  ReactDOM.render(
    <div className="container">
      <App store={store}/>
      <hr />
      <Results store={store}/>
      <Credits />
    </div>,
    document.getElementById('root')
  );
}

store.subscribe(render);
render();

registerServiceWorker();
