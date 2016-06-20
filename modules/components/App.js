import React from 'react'
import Home from './Home'
import { Link } from 'react-router'

export default React.createClass({
  render() {
    return (
      <div>
      <div className="navbar-fixed">
        <nav>
          <div className={"black nav-wrapper"}>
            <a href="/" className="brand-logo white-text accent-3">Portal - Home</a>
            <a href="#" data-activates="mobile-demo" className="button-collapse"><i className="material-icons">menu</i></a>
            <ul id="nav-mobile" className={"right hide-on-med-and-down"}>
              <li><a href="#">About</a></li>
              <li><a href="#">Help</a></li>
              <li><Link to="/signin">Sign In</Link></li>
            </ul>
            <ul className="side-nav" id="mobile-demo">
              <li><a href="#">About</a></li>
              <li><a href="#">Help</a></li>
              <li><Link to="/signin">Sign In</Link></li>
            </ul>
          </div>
        </nav>
      </div>
        <Home />
      </div>
    )
  }
})

