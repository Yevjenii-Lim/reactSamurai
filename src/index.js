import React from 'react';
import ReactDOM from 'react-dom';
import store from './redux/redux-store'
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';


let rerenderTree = () => {

  ReactDOM.render(
    <React.StrictMode>
      <App store={store}/>
    </React.StrictMode>,
    document.getElementById('root')
  );
}
rerenderTree(store)
store.subscribe(() => {
  rerenderTree(store)
})



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
