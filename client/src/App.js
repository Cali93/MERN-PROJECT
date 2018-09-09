import React, { Component } from 'react';

import  Navbar from './core/layout/Navbar';
import { BrowserRouter, Route, Switch} from 'react-router-dom'; 

import jwt_decode from 'jwt-decode';
import { setAuthToken } from './utils/setAuthToken';
import { setCurrentUser, logoutUser } from './actions/authActions';
import { clearCurrentProfile } from './actions/profileActions';

import PrivateRoute from './common/PrivateRoute';

import { Home } from './pages/Home';
import { Features } from './pages/Features';
import { About } from './pages/About';
import { Contact } from './pages/Contact';
import Dashboard from './components/dashboard/Dashboard';
import Register  from './core/auth/Register';
import Login from './core/auth/Login';
import CreateProfile from './components/profile/create-profile/CreateProfile';
import EditProfile from './components/profile/edit-profile/EditProfile';
import Profiles from './components/profiles/Profiles';
import Profile from './components/profile/profile/Profile';
import AddExperience from './components/profile/add-experience/AddExperience';
import AddEducation from './components/profile/add-education/AddEducation';
import { Provider } from 'react-redux';
import { store } from './store';

import './App.css';
// Check for token
if (localStorage.jwtToken){
  // Set auth token header auth
  setAuthToken(localStorage.jwtToken);
  // Decode token and get user info and exp
  const decoded = jwt_decode(localStorage.jwtToken);
  // Set user and isAuthenticated && userLevel
  store.dispatch(setCurrentUser(decoded));

  // Check for expired token
  const currentTime = Date.now() / 1800;
  if(decoded.exp < currentTime){
    // Logout user
    store.dispatch(logoutUser());
    //  Clear current profile
    store.dispatch(clearCurrentProfile());
    // redirect to login 
    window.location.href = '/login';
  }
}

class App extends Component {

  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <div>
            <Navbar/>
            <Route exact path='/' component={Home} />
                <Route path='/Features' component={Features} />
                <Switch><PrivateRoute path='/Dashboard' component={Dashboard} /></Switch>
                <Route path='/About' component={About} />
                <Route path='/Contact' component={Contact} />
                <Route path='/Register' component={Register} />
                <Route path='/Login' component={Login} />
                <Route path='/Profiles' component={Profiles} />
                <Route path='/Profile/:handle' component={Profile} />
                <Switch><PrivateRoute path='/create-profile' component={CreateProfile} /></Switch>                
                <Switch><PrivateRoute path='/edit-profile' component={EditProfile} /></Switch>                
                <Switch><PrivateRoute path='/add-experience' component={AddExperience} /></Switch>                
                <Switch><PrivateRoute path='/add-education' component={AddEducation} /></Switch>                
          </div>
      </BrowserRouter>
     </Provider>
    );
  }
}

export default App;
