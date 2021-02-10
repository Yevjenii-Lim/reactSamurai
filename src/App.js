import "./App.css";
import React from 'react';
import Profile from "./components/Profile/ProfileContainer.jsx";
import HeaderContainer from "./components/Header/HeaderContainer.jsx";
import Nav from "./components/Navbar/Nav.jsx";
import Aside from "./components/Aside/Aside.jsx";
import News from "./components/News/News";
import { BrowserRouter, Route } from "react-router-dom";
import Photo from "./components/Photo/Photo";
import About from "./components/About/About";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import Clock from "./components/Clock/Clock";
import Login from "./components/Login/Login";
import { setHeaderThunkCreator } from "./redux/header-reducer";
import { connect } from "react-redux";
import { getAuthUserData } from "./redux/app-reducer";
import Preloader from "./components/common/Preloader";

class App extends React.Component {
  componentDidMount() {
    this.props.getAuthUserData()
  }

  render() {
    if(!this.props.initialized) return <Preloader></Preloader>
    return (
      <BrowserRouter>
        <div className="app-wrapper">
          <HeaderContainer logo={this.props.store}></HeaderContainer>
          <Nav friends={this.props.store}></Nav>
          <div className="app-wrapper__content">
            <Route path="/clock">
              {" "}
              <Clock></Clock>
            </Route>
            <Route path="/profile/:userId?">
              {" "}
              <Profile></Profile>
            </Route>
            <Route
              path="/dialogs"
              render={() => <DialogsContainer></DialogsContainer>}
            ></Route>
            <Route path="/news" render={() => <News></News>}></Route>
            <Route path="/photo" render={() => <Photo></Photo>}></Route>
            <Route path="/about" render={() => <About></About>}></Route>
            <Route
              path="/users"
              render={() => <UsersContainer></UsersContainer>}
            ></Route>
            <Route path="/login" render={() => <Login></Login>}></Route>
          </div>

          <Aside></Aside>
        </div>
      </BrowserRouter>
    );
  }
}
// store={props.store}
// store={props.store}

let mapStateToProps = (state) => {
  return {
    initialized: state.app.initialized
  }
}

export default connect(mapStateToProps, {getAuthUserData})(App);
