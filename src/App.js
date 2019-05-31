import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom'

import Navigation from './components/Navigation'
import Footer from './components/Footer'

import { AsyncPage, AsyncPost, AsyncHome, AsyncPreview } from './components/slices/async';

class App extends Component {

  render() {
    return (
      <div className="App">
        <Navigation />
          <Switch>
            <Route exact path="/preview" render={routeProps => <AsyncPreview {...routeProps} />} />
            <Route exact path='/' render={() => <AsyncHome prismicCtx={this.props.prismicCtx}/>}/>
            <Route exact path="/:uid" render={routeProps => <AsyncPage {...routeProps} prismicCtx={this.props.prismicCtx} />} />
            <Route exact path="/news/:uid" render={routeProps => <AsyncPost {...routeProps} prismicCtx={this.props.prismicCtx} />} />
          </Switch>
        <Footer />
      </div>
    );
  }
}

export default App;
