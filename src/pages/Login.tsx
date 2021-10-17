import React, { useState, FunctionComponent, ReactElement } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import loginWallet from '../images/wallet.svg';
import actionLogin from '../redux/actions';

const Login: FunctionComponent = (): ReactElement => {
  const [email, setEmail] = useState<string>('');
  const history = useHistory();
  const [password, setPassword] = useState<string>('');
  const dispatch = useDispatch();

  const onClickLogin = (): void => {
    dispatch(actionLogin(email));
    history.push('/carteira');
  };

  const validateEmailAndPassword = (): boolean => {
    const validationEmail = /(.*)@(.*).com/;
    const PASSWORD_LENGTH = 6;
    if (validationEmail.test(email)
    && password.length >= PASSWORD_LENGTH) {
      return false;
    }
    return true;
  };

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
                <img
                  style={{ width: '130px' }}
                  src={loginWallet}
                  alt="login wallet"
                />
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
                      onChange={({ target }) => setPassword(target.value)}
                    />
                  </div>
                </div>
                <button
                  type="button"
                  className="button is-block is-info is-large is-fullwidth"
                  disabled={validateEmailAndPassword()}
                  onClick={() => onClickLogin()}
                >
                  Login
                  <i className="fa fa-sign-in" aria-hidden="true" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
