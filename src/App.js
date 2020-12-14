
import "./App.css";
import Profile from "./components/Profile/Profile.jsx";
import Header from "./components/Header/Header.jsx";
import Nav from "./components/Navbar/Nav.jsx";
import Aside from "./components/Aside/Aside.jsx";
// import Dialogs from "./components/Dialogs/Dialogs";
import News from './components/News/News'
import { BrowserRouter, Route } from "react-router-dom";
import Photo from "./components/Photo/Photo";
import About from "./components/About/About";
import DialogsContainer from "./components/Dialogs/DialogsContainer";

const App = (props) => {
  
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header logo={props.store}></Header>
        <Nav friends={props.store}></Nav>
        <div className="app-wrapper__content">
          <Route path='/profile'> <Profile store={props.store}></Profile></Route>
          <Route path='/dialogs' render={() => <DialogsContainer store={props.store}></DialogsContainer>}></Route>
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
