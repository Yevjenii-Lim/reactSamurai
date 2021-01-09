import "./App.css";
import Profile from "./components/Profile/ProfileContainer.jsx";
import HeaderContainer from "./components/Header/Header.jsx";
import Nav from "./components/Navbar/Nav.jsx";
import Aside from "./components/Aside/Aside.jsx";
import News from './components/News/News'
import { BrowserRouter, Route } from "react-router-dom";
import Photo from "./components/Photo/Photo";
import About from "./components/About/About";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import Clock from "./components/Clock/Clock";

const App = (props) => {
  
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <HeaderContainer logo={props.store}></HeaderContainer>
        <Nav friends={props.store}></Nav>
        <div className="app-wrapper__content">
          <Route path='/clock'> <Clock></Clock></Route>
          <Route path='/profile/:userId'> <Profile></Profile></Route>
          <Route path='/dialogs' render={() => <DialogsContainer ></DialogsContainer>}></Route>
          <Route path='/news' render={() => <News></News>}></Route>
          <Route path='/photo' render={() => <Photo></Photo>}></Route>
          <Route path='/about' render={() => <About></About>}></Route>
          <Route path='/users' render={() => <UsersContainer></UsersContainer>}></Route>
        </div>

        <Aside></Aside>
      </div>
    </BrowserRouter>
  );
};
// store={props.store}
// store={props.store}
export default App;
