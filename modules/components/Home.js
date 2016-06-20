import React from 'react'
import Signup from './Signup'

export default class Home extends React.Component {
  render() {
    return (
      <div>
      <div className="row">
        <div className="vertical wrapper col s12 center-align teal accent-4 z-depth-0">
          <br/>
          <h3 className="valign white-text">Connecting Vendors with Distributors</h3>
          <br/>
        </div>
      </div>
      <div className="row">
        <div className="col s12 m7 l7 center-align">
          <br />
          <br />
          <i className="small material-icons">code</i>
          <h5>Vendors</h5>
          <div className="container left-align">
            <p>Are you looking for a place to connect with all your distributors? Look no further than Portal.
            Sign up and begin uploading important data and information to your distributors.</p>
          <br />
          <div className="center-align">
            <i className="small material-icons">invert_colors</i>
            <h5>Distributors</h5>
          </div>
            <div className="left-align">
                <p>Are you looking for a place to download all your vendor's pricing files or see your rebate status? Look no further than Portal.
                Sign up and easily download files and view your rebate information. Your vendors will thank you for having the right prices.</p>
            </div>
          </div>
        </div>
          <div className="col s12 m5 l5 center-align">
            <Signup />
          </div>
        </div>
          <footer className="page-footer black">
            <div className="container black">
              <div className="row">
                <div className="col l6 s12">
                  <h5 className="white-text">Portal</h5>
                  <p className="grey-text text-lighten-4">Connecting distributors with vendors.</p>
                  <p className="grey-text text-lighten-4">&copy; 2016 Copyright</p>
                </div>
                <div className="col l4 offset-l2 s12">
                  <h5 className="white-text">Spread the word!</h5>
                  <ul>
                  <li><a className="grey-text text-lighten-3" href="#!">Like us on Facebook</a></li>
                  <li><a className="grey-text text-lighten-3" href="#!">Follow us on Instagram</a></li>
                  <li><a className="grey-text text-lighten-3" href="#!">Back to main page</a></li>
                  <li><a className="grey-text text-lighten-3" href="#!"></a></li>
                  </ul>
              </div>
            </div>
          </div>
          </footer>
        </div>
    )
  }
}

