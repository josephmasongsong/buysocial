import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom'
import Navigation from './components/Navigation';
import Footer from './components/Footer';

import asyncComponent from "./AsyncComponents";

import GlobalStyle from './GlobalStyle';

const AsyncHome = asyncComponent(() => import("./Home"));
const AsyncPage = asyncComponent(() => import("./Page"));
const AsyncPost = asyncComponent(() => import("./Post"));



class App extends Component {

  render() {
    return (
      <div className="App">
        <GlobalStyle />
        <Navigation />
          <Switch>
            <Route exact path='/' component={AsyncHome}/>
            <Route exact path="/:uid" render={routeProps => <AsyncPage {...routeProps} prismicCtx={this.props.prismicCtx} />} />
            <Route exact path="/news/:uid" render={routeProps => <AsyncPost {...routeProps} prismicCtx={this.props.prismicCtx} />} />

          </Switch>
        <Footer />
      </div>
    );
  }
}

export default App;
