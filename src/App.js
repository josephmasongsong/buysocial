import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { AsyncPage, AsyncPost, AsyncHome, AsyncPreview, AsyncNotFound } from './components/slices/async';
import SupplierDirectory from './components/SupplierDirectory'
import ScrollToTop from './ScrollToTop';

const App = props => (
  <div className="App">
    <Router>
      <ScrollToTop>
        <Switch>
          <Route exact path="/preview" render={routeProps => <AsyncPreview {...routeProps} />} />
          <Route exact path='/' render={() => <AsyncHome prismicCtx={props.prismicCtx}/>}/>
          <Route exact path="/:uid" render={routeProps => <AsyncPage {...routeProps} prismicCtx={props.prismicCtx} />} />
          <Route path="/news/:uid" render={routeProps => <AsyncPost {...routeProps} prismicCtx={props.prismicCtx} />} />
          {/* <Route path="/suppliers/directory" component={SupplierDirectory} /> */}
          <Route exact path="/suppliers/directory" render={routeProps =>  <SupplierDirectory {...routeProps}  prismicCtx={props.prismicCtx} />  } />
          <Route component={AsyncNotFound} />
        </Switch>
      </ScrollToTop>
    </Router>
  </div>
)

export default App;
