import { useDebugValue } from "react";
import "./App.css";
import Profile from "./components/Profile/Profile.jsx";
import Header from "./components/Header/Header.jsx";
import Nav from "./components/Navbar/Nav.jsx";
import Aside from "./components/Aside/Aside.jsx";
import Dialogs from "./components/Dialogs/Dialogs";
import { BrowserRouter, Route } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header></Header>
        <Nav></Nav>

        <div className="app-wrapper__content">
          <Route path='/profile' component={Profile}></Route>
          <Route path='/dialogs' component={Dialogs}></Route>
        </div>

        <Aside></Aside>
      </div>
    </BrowserRouter>
  );
};

export default App;
