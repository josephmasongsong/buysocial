import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom'
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import Home from './Home';
import Page from './Page';
import Post from './Post';

import GlobalStyle from './GlobalStyle';

class App extends Component {

  render() {
    return (
      <div className="App">
        <GlobalStyle />
        <Navigation />
          <Switch>
            <Route exact path='/' component={Home}/>
            <Route exact path="/:uid" render={routeProps => <Page {...routeProps} prismicCtx={this.props.prismicCtx} />} />
            <Route exact path="/news/:uid" render={routeProps => <Post {...routeProps} prismicCtx={this.props.prismicCtx} />} />

          </Switch>
        <Footer />
      </div>
    );
  }
}

export default App;
