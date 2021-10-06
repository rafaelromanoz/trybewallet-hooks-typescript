import React, { ReactElement } from 'react';
import { useSelector } from 'react-redux';
import walletPage from '../images/wallet-page.svg';

type State = {
  reducerLogin: {
    email: string,
  },
}

const Header: React.FC = (): ReactElement => {
  const { email } = useSelector((state:State) => state.reducerLogin);

  return (
    <nav className="navbar is-light" role="navigation" aria-label="main navigation">
      <div className="navbar-brand">
        <a className="navbar-item" href="/login">
          <img src={walletPage} alt="walletIcon" />
        </a>
        <h1 className="navbar-item title">TrybeWallet</h1>
      </div>
      <div className="navbar-menu">
        <h3 className="subtitle is-4 navbar-item ">Total é 0</h3>
      </div>
      <div className="navbar-menu">
        <p className="navbar-item navbar-end">{`Email: ${email}`}</p>
      </div>
    </nav>
  );
};

export default Header;
