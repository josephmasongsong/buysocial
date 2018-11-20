import React, { Component } from 'react';
import Navigation from './components/Navigation';

import Footer from './components/Footer';
import { Route, Switch } from 'react-router-dom'
import Home from './Home';
import Page from './Page';
import Library from './Library';

class App extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div className="App">
        <Navigation />
          <Switch>
            <Route exact path='/' component={Home}/>

            <Route path='/library' component={Library}/>


            <Route exact path="/:uid" render={routeProps => <Page {...routeProps} prismicCtx={this.props.prismicCtx} />} />

          </Switch>
        <Footer />
      </div>
    );
  }
}

export default App;
