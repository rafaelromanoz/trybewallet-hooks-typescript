import React, { useState } from 'react';
import loginWallet from '../images/wallet.svg';

function Login() {
  const [email, setEmail] = useState<string>('');

  return (
    <section className="hero is-light  is-fullheight">
      <div className="hero-body">
        <div className="container has-text-centered">
          <div className="column is-4 is-offset-4">
            <h3 className="title has-text-black">Login</h3>
            <hr className="login-hr" />
            <p className="subtitle has-text-black">Please login to proceed.</p>
            <div className="box">
              <figure className="avatar">
                <img style={{ width: '130px' }} src={loginWallet} alt="login wallet" />
              </figure>
              <form>
                <div className="field">
                  <div className="control">
                    <input
                      className="input is-large"
                      type="email"
                      placeholder="Your Email"
                      onChange={({ target }) => setEmail(target.value)}
                    />
                  </div>
                </div>

                <div className="field">
                  <div className="control">
                    <input
                      className="input is-large"
                      type="password"
                      placeholder="Your Password"
                    />
                  </div>
                </div>
                <button className="button is-block is-info is-large is-fullwidth">
                  Login
                  {' '}
                  <i className="fa fa-sign-in" aria-hidden="true" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Login;
