import React from 'react';
import { Route, Switch } from 'react-router-dom'

import Home from '../Home';
import About from '../About';
import Library from '../Library';
// import Purchasers from '../Purchasers';
import Suppliers from '../Suppliers';
import Page from '../Page';

const Main = (props) => (
  <main>
    <Switch>
      <Route exact path='/' component={Home}/>
      <Route path='/who-we-are' component={About}/>
      <Route path='/purchasers' component={Page}/>
      <Route path='/suppliers' component={Suppliers}/>
	  <Route exact path="/page/:uid" render={routeProps => <Page {...routeProps} prismicCtx={props.prismicCtx} />} />

      <Route path='/library' component={Library}/>
    </Switch>
  </main>
)

export default Main