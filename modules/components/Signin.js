import React from 'react'
import { Link } from 'react-router'

export default class Signin extends React.Component {
  render() {
    return (
      <div>
        <br /> <br />
        <div className="container center-align">
          <form onSubmit={this.Signin}>
            <div className="row">
              <div className="input-field col s12 l6">
                <i className="material-icons prefix">account_circle</i>
                <input ref="email" type="email" placeholder="Email" />
                  <br /> <br />
                <i className="material-icons prefix">vpn_key</i>
                  <input ref="password" type="password" placeholder="Password" />              
                    <Link to="/fileupload" className="btn waves-effect btn teal accent-4">Log in</Link>
                      <br /> <br />  
                      Forgot Password?
                </div>
                </div> 
              </form>
            </div>
          </div>
        )
      }
    }

