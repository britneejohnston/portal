import React from 'react'

export default class Signup extends React.Component {
  render() {
    return (
      <div>
        <div>
          <div className="container">
            <div className="row">
              <br />
                <div>
                  <div className="card-panel">
                  <form onSubmit={this.signUp}>
                    <h4 className="center">Sign up today!</h4>
                    <div className="input-field"> 
                      <i className="material-icons prefix">account_circle</i>
                      <input ref="displayName" type="text" className="active validate" placeholder="Display Name " />
                    </div>
                    <div className="input-field">
                      <i className="material-icons prefix">vpn_key</i>
                      <input ref="password" type="password" placeholder="Password" />
                    </div>
                    <div className="input-field">
                      <i className="material-icons prefix">email</i>
                      <input ref="email" type="email" className="validate" placeholder="Email" />
                    </div>
                    <div className="input-field">
                      <i className="material-icons prefix">phone</i>
                      <input ref="phoneNumber" type="tel" pattern="^\d{3}-\d{3}-\d{4}$" required className="validate" placeholder="Mobile Number (XXX-XXX-XXXX)"/>
                    </div>
                    <p>I am a:</p>
                    <select className="browser-default" onChange={ this.change } >
                      <option value="vendor">Vendor</option>
                      <option value="distributor">Distributor</option>
                    </select>
                    <br />   
                    <button className="waves-effect waves-green btn teal accent-4" type="submit" name="action">Sign Up
                      <i className="material-icons right">send</i>
                    </button>
                  </form> 
                  </div>
                </div> 
            </div>
          </div>
        </div>
      </div>
    )
  }
}


