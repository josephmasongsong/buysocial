import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom'
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import Loadable from 'react-loadable'
import Loading from './Loading'
import GlobalStyle from './GlobalStyle';

const AsyncHome = Loadable({
  loader: () => import("./Home" /* webpackChunkName: "home" */),
  loading: Loading
});
const AsyncPage = Loadable({
  loader: () => import("./Page" /* webpackChunkName: "page" */),
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
