import '../modules/styles.css'
import React from 'react'
import { Route, IndexRoute } from 'react-router'
import App from './components/App'
import Home from './components/Home'
import NoMatch from './components/NoMatch'
import Signin from './components/Signin'
import Signup from './components/Signup'

export default (
  <Route>
    <Route path="/" component={App}>
      <IndexRoute component={Home}/>
      <Route path="signin" component={Signin}/>
      <Route path="signup" component={Signup}/>
    </Route>
    <Route path="*" status={404} component={NoMatch}/>
  </Route>
)
