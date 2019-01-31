import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom'
import Loadable from 'react-loadable'
import Loading from './Loading'

import Navigation from './components/Navigation'
import Footer from './components/Footer'
import NotFound from './NotFound';
import Preview from './Preview';

const AsyncHome = Loadable({
  loader: () => import("./Home" /* webpackChunkName: "home" */),
  loading: Loading
});
const AsyncPage = Loadable({
  loader: () => import("./Page" /* webpackChunkName: "page", wepbackPreload: true */),
  loading: Loading
});
const AsyncPost = Loadable({
  loader: () => import("./Post" /* webpackChunkName: "post" */),
  loading: Loading
});

class App extends Component {

  render() {
    return (
      <div className="App">
        <Navigation />
          <Switch>
            <Route exact path="/preview" render={routeProps => <Preview {...routeProps} />} />
            <Route exact path='/' component={AsyncHome}/>
            <Route exact path="/:uid" render={routeProps => <AsyncPage {...routeProps} prismicCtx={this.props.prismicCtx} />} />
            <Route exact path="/news/:uid" render={routeProps => <AsyncPost {...routeProps} prismicCtx={this.props.prismicCtx} />} />
             <Route component={NotFound} />
          </Switch>
        <Footer />
      </div>
    );
  }
}

export default App;
