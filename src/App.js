import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { AsyncPage, AsyncPost, AsyncHome, AsyncPreview } from './components/slices/async';
import ScrollToTop from './ScrollToTop';

const App = props => (
  <div className="App">
    <Router>
      <ScrollToTop>
        <Switch>
          <Route exact path="/preview" render={routeProps => <AsyncPreview {...routeProps} />} />
          <Route exact path='/' render={() => <AsyncHome prismicCtx={props.prismicCtx}/>}/>
          <Route exact path="/:uid" render={routeProps => <AsyncPage {...routeProps} prismicCtx={props.prismicCtx} />} />
          <Route exact path="/news/:uid" render={routeProps => <AsyncPost {...routeProps} prismicCtx={props.prismicCtx} />} />
        </Switch>
      </ScrollToTop>
    </Router>
  </div>
)

export default App;
