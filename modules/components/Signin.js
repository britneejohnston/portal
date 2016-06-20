import React from 'react'

export default class Signin extends React.Component {
  render() {
    return (
      <div>
        <div className="row">
          <form className="col s12" onSubmit={this.logIn}>
            <div className="row">
              <div className="input-field col s4">
                <i className="material-icons prefix">account_circle</i>
                <input ref="email" type="email" placeholder="Email" />
              </div>
              <div className="row">
              <div className="input-field col s4">
                <i className="material-icons prefix">vpn_key</i>
                <input ref="password" type="password" placeholder="Password" />
              </div>
              </div>
              <button className="btn waves-effect btn teal accent-4">Log in</button>
            </div> 
          </form>
        </div>
      </div>
    )
  }
}

