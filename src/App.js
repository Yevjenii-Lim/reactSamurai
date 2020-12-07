
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
        <Nav friends={props.state.friendsPage}></Nav>
        <div className="app-wrapper__content">
          <Route path='/profile'> <Profile profile={props.state.profilePage.profileData} updateNewPost={props.updateNewPost} addPost={props.addPost} newPost={props.state.profilePage.newPostText} posts={props.state.profilePage.postsData}></Profile></Route>
          <Route path='/dialogs' render={() => <Dialogs messages={props.state.messagesPage.messagesData} dialogs={props.state.messagesPage.dialogData}></Dialogs>}></Route>
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
