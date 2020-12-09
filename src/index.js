import React from 'react';
import ReactDOM from 'react-dom';
import store from './redux/state'
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';


let rerenderTree = (state) => {
  ReactDOM.render(
    <React.StrictMode>
      <App state={state} dispatch={store.dispatch.bind(store)}/>
    </React.StrictMode>,
    document.getElementById('root')
  );
}
rerenderTree(store.getState())
store.subscriber(rerenderTree)



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
