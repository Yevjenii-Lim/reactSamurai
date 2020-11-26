import { useDebugValue } from "react";
import "./App.css";
import Profile from "./components/Profile.jsx";
import Header from "./components/Header.jsx";
import Nav from "./components/Nav.jsx";
import Aside from "./components/Aside.jsx";

const App = () => {
  return (
    <div className="app-wrapper">
   <Header></Header>
    <Nav></Nav>
    <Profile></Profile>
    <Aside></Aside>
    </div>
  );
};

export default App;
