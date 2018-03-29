import React, { Component } from 'react';
import { Route, Switch, Link } from 'react-router-dom';
import Navbar from './components/navbar/navbar';
import Home from './container/home/home';
import NotFound from './container/NotFound/notFound';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
      <Navbar/>
        {/* <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/page" component={Page} />
          <Route exact path="/form" component={Form} />
          <Route exact path="/chart" component={Chart} />
          <Route exact path="/dialog" component={Dialog} />
          <Route exact path="/calendar" component={Calendar} />
          <Route exact path="**" component={NotFound} />
        </Switch> */}
      </div>
    );
  }
}

export default App;
