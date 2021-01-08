import React,{useEffect,useContext,useReducer} from "react"
import './App.css';
import Navbar from "./components/Navbar"
import {BrowserRouter,Route,Router,Switch} from "react-router-dom"
import Home from "./components/screen/Home"
import Signin from "./components/screen/Login"
import Signup from "./components/screen/Signup"
import Profile from "./components/screen/Profile"
import Createpost from "./components/screen/Createpost"
import {reducer,initialState} from "./reducer/userReducer"

const UserContext=createContext()

const routing=()=>{
  return(
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/signin">
        <Signin />
      </Route>
      <Route path="/signup">
        <Signup />
      </Route>
      <Route path="/profile">
        <Profile />
      </Route>
      <Route path="/Createpost">
        <Createpost />
      </Route>
    </Switch>
  )
}

function App() {
  const[state,dispatch]=useReducer(reducer,initialState)
  return (
    <UserContext.Provider value={{state,dispatch}}>
    <BrowserRouter>
      <Navbar />
      <routing />
    </BrowserRouter>
    </UserContext.Provider>
  );
}

export default App;
