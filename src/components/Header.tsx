import React, { ReactElement } from 'react';
import { RootStateOrAny, shallowEqual, useSelector } from 'react-redux';
import walletPage from '../images/wallet-page.svg';

type State = {
  reducerLogin: {
    email: string,
  },
}

const Header: React.FC = (): ReactElement => {
  const { email } = useSelector((state:State) => state.reducerLogin);
  const { expenses } = useSelector((state:RootStateOrAny) => state.reducerWallet,
    shallowEqual);
  const sumExpenses = (): number => {
    if (expenses.length !== 0) {
      const sum = expenses.reduce((accu: number, curr: RootStateOrAny) => {
        accu += curr.data[curr.currency].ask * curr.value;
        return accu;
      }, 0);
      return sum.toFixed(2);
    }
    return 0;
  };
  return (
    <nav className="navbar is-light" role="navigation" aria-label="main navigation">
      <div className="navbar-brand">
        <a className="navbar-item" href="/login">
          <img src={walletPage} alt="walletIcon" />
        </a>
        <h1 className="navbar-item title">TrybeWallet</h1>
      </div>
      <div className="navbar-menu">
        <h3 className="subtitle is-4 navbar-item ">
          {`Total de despesas: ${sumExpenses()}`}
        </h3>
      </div>
      <div className="navbar-menu">
        <p className="navbar-item navbar-end">{`Email: ${email}`}</p>
      </div>
    </nav>
  );
};

export default Header;
