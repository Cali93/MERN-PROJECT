import React, { Component } from 'react';

import  Navbar from './components/layer/Navbar';
import { BrowserRouter, Route } from 'react-router-dom'; 

import { Home } from './pages/Home';
import { Features } from './pages/Features';
import { About } from './pages/About';
import { Contact } from './pages/Contact';
import Register  from './core/auth/Register';
import Login from './core/auth/Login';
import { Provider } from 'react-redux';
import { store } from './store';


class App extends Component {

  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <div className="main">
            <Navbar/>
            <Route exact path='/' component={Home} />
              <div className="container">
                <Route path='/Features' component={Features} />
                <Route path='/About' component={About} />
                <Route path='/Contact' component={Contact} />
                <Route path='/Register' component={Register} />
                <Route path='/Login' component={Login} />
              </div>
          </div>
      </BrowserRouter>
     </Provider>
    );
  }
}

export default App;
