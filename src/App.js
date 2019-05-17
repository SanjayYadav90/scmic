import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import './App.css';
import Header from './Containers/Headers/Header';
import Home from './Containers/Homes/Home'
import Footer from './Containers/Footers/Footer'

const Routing = props => (
  <div>
    <Switch>
      <Route path="/" exact component={Home} />
      {/* <Route path="/about" component={About} /> */}
    </Switch>
  </div>
)

function App() {
  return (
    <Router>
      <body>
        <Header />        
          <Routing/>
        <Footer/>
      </body>
    </Router>
  );
}

export default App;
