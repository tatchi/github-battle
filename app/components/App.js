import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Popular from './Popular';
import Home from './Home';
import Battle from './Battle';
import Nav from './Nav';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="container">
          <Nav />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/popular" component={Popular} />
            <Route exact path="/battle" component={Battle} />
            <Route render={() => <p>Not Found!</p>} /> {/*If none route match this component is rendered.*/}
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
