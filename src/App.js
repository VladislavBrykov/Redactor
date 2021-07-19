import axios from 'axios';

//import React from "react";
import "./styles.css";
import { Route, Link, Switch, BrowserRouter as Router } from "react-router-dom";
// import Games from "./components/Games";
// import Teams from "./components/AllTeams/team";
// import OneTeam from "./components/OneTeam/oneTeam";
// import GameStats from "./components/GameStats/gameStats";
// import CalendarPage from "./pages/Calendar";
// import AllPlayers from "./components/AllPlayers/players";
// import PlayerStats from "./components/PlayerStats/playerStats";
import NotFound404 from "./components/404/404";

import AppHeader from './components/app-header'
import Footer from './components/Footer'
import LoginPage from './pages/LoginPage'
// import NewCalendar from './pages/NewCalendar'
import RegistrationPage from './pages/RegistrationPage';
import MainPage from './pages/MainPage';
// import HolidayPage from './pages/HolidayPage';
import AppMenu from './components/menu'
// import AllCalendars from './pages/AllCalendars';
// import PublicPostsPage from './pages/PublicCalendars'
// import OneEvent from './pages/OneEvent';
// import Public_OneEvent from './pages/Public_OneEvent';

import Redactor from './pages/Redactor'
import Price from './pages/Price'
import AppNews from './pages/News'
import Galery from './pages/Galery'


import React, { useEffect, useState } from "react";



// export default function App() {
//   return (
//     <Router>
//       <div className="App">
//         <ul className="links">
//           <li>
//             <Link to="/">Home</Link>
//           </li>
//           <li>
//             <Link to="/teams">Teams</Link>
//           </li>
//           <li>
//             <Link to="/players/">Players</Link>
//           </li>
//         </ul>
//         <Switch>
//           <Route exact path="/" component={Games} />
//           <Route exact path="/teams" component={Teams} />
//           <Route exact path="/teams/:id" component={OneTeam} />
//           <Route exact path="/games/" component={GameStats} />
//           <Route exact path="/players/" component={AllPlayers} />
//           <Route exact path="/players/:id" component={PlayerStats} />
//           <Route component={NotFound404} />
//         </Switch>
//       </div>
//     </Router>
//   );
// }

const App = () => {
  const [loggedIn, setloggedIn] = useState()

  const changeLoggedIn = (state) => setloggedIn(state)


  return (
    <Router>
        {/* <AppMenu loggedIn={loggedIn} changeLoggedIn={changeLoggedIn} /> */}
        <AppHeader loggedIn={loggedIn} changeLoggedIn={changeLoggedIn} />

        <div>

      {/* <div className="App"> */}
        {/* //         <ul className="links"> */}
        
        {/* //           <li>
//             <Link to="/">Home</Link>
//           </li>
//           <li>
//             <Link to="/teams">Teams</Link>
//           </li>
//           <li>
//             <Link to="/players/">Players</Link>
//           </li> */}
        {/* </ul>         */}

        <Switch>
          <Route exact path="/login" render={() => <LoginPage changeLoggedIn={changeLoggedIn} />} />
          <Route exact path="/registration" render={() => <RegistrationPage />} />
          {/* <Route exact path="/new_calendar" render={() => <NewCalendar />} /> */}
          <Route exact path="/" render={() => <MainPage />} />
          <Route exact path="/red" render={() => <Redactor />} />
          <Route exact path="/price" render={() => <Price />} />
          <Route exact path="/news" render={() => <AppNews />} />
          <Route exact path="/galery" render={() => <Galery />} />

          {/* <Route exact path="/calendar" component={Games} />
          <Route exact path="/exemple-calendar" render={() => <CalendarPage />} />
          <Route exact path="/all-calendars" render={() => <AllCalendars />} />
          <Route exact path="/all-public-calendars" render={() => <PublicPostsPage />} />

          <Route exact path="/event/:title" render={() => <OneEvent />} /> 
          <Route exact path="/public_event/:title" render={() => <Public_OneEvent />} />          


          <Route exact path="/holidays/:id" render={() => <HolidayPage />} />

          <Route exact path="/teams" component={Teams} />
          <Route exact path="/teams/:id" component={OneTeam} />
          {/* <Route exact path="/games/" component={GameStats} /> */}
          {/* <Route exact path="/players/" component={AllPlayers} />
          <Route exact path="/players/:id" component={PlayerStats} /> */} 
          <Route component={NotFound404} />





        </Switch>
        </div>
        <Footer />
      
      
    </Router>
  )
}

export default App;
