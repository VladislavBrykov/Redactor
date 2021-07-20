import "./styles.css";
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
import NotFound404 from "./components/404/404";
import AppHeader from './components/app-header'
import Footer from './components/Footer'
import LoginPage from './pages/LoginPage'
import RegistrationPage from './pages/RegistrationPage';
import MainPage from './pages/MainPage';
import Redactor from './pages/Redactor'
import Price from './pages/Price'
import AppNews from './pages/News'
import Galery from './pages/Galery'
import React, { useState } from "react";

const App = () => {
    const [loggedIn, setloggedIn] = useState()
    const changeLoggedIn = (state) => setloggedIn(state)

    return (
        <Router>
              <AppHeader loggedIn={loggedIn} changeLoggedIn={changeLoggedIn} />
              <div>
                  <Switch>
                      <Route exact path="/login" render={() => <LoginPage changeLoggedIn={changeLoggedIn} />} />
                      <Route exact path="/registration" render={() => <RegistrationPage />} />
                      <Route exact path="/" render={() => <MainPage />} />
                      <Route exact path="/red" render={() => <Redactor />} />
                      <Route exact path="/price" render={() => <Price />} />
                      <Route exact path="/news" render={() => <AppNews />} />
                      <Route exact path="/galery" render={() => <Galery />} />
                      <Route component={NotFound404} />
                  </Switch>
              </div>
              <Footer />
        </Router>
    )
}

export default App;
