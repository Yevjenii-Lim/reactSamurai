import { useDebugValue } from "react";
import "./App.css";
import Profile from "./components/Profile/Profile.jsx";
import Header from "./components/Header/Header.jsx";
import Nav from "./components/Navbar/Nav.jsx";
import Aside from "./components/Aside/Aside.jsx";
import Dialogs from "./components/Dialogs/Dialogs";
import News from './components/News/News'
import { BrowserRouter, Route } from "react-router-dom";
import Photo from "./components/Photo/Photo";
import About from "./components/About/About";

const App = (props) => {

 
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header></Header>
        <Nav></Nav>

        <div className="app-wrapper__content">
          <Route path='/profile' render={() => <Profile posts={props.posts}></Profile>}></Route>
          <Route path='/dialogs' render={() => <Dialogs messages={props.messages} dialogs={props.dialogs}></Dialogs>}></Route>
          <Route path='/news' render={() => <News></News>}></Route>
          <Route path='/photo' render={() => <Photo></Photo>}></Route>
          <Route path='/about' render={() => <About></About>}></Route>
        </div>

        <Aside></Aside>
      </div>
    </BrowserRouter>
  );
};

export default App;
