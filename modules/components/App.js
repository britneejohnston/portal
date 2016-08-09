import React from 'react'
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
              <li><Link to="/">About</Link></li>
              <li><Link to="/">Help</Link></li>
              <li><Link to="/signin">Sign In</Link></li>
            </ul>
            <ul className="side-nav" id="mobile-demo">
              <li><Link to="/">About</Link></li>
              <li><Link to="/">Help</Link></li>
              <li><Link to="/signin">Sign In</Link></li>
            </ul>
          </div>
        </nav>
      </div>
        {this.props.children}
      </div>
    )
  }
})

