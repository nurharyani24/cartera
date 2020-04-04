import React from 'react';
import {BrowserRouter} from "react-router-dom";
import Navbar from './common/layout/navbar-home';
import Routing from './router/router';
import '../src/assets/css/App.css';

class App extends React.Component {
  render() {
  return ( 
    <div>
        <Navbar/>
        <Routing/>
    </div>
  );
  }
}

export default App;
