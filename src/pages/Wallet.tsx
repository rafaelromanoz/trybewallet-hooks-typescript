import React, { ReactElement, useState, useEffect } from 'react';
import Header from '../components/Header';
import fetchApi from '../services/fetch';
import gifWallet from '../images/gifWallet.gif';

const Wallet: React.FC = (): ReactElement => {
  const [data, setData] = useState<unknown | undefined>();
  const [value, setValue] = useState<number>(0);
  const [id, setId] = useState<number>(0);

  const onStartPage = async (): Promise<void> => {
    setData(await fetchApi());
  };
  useEffect(() => {
    onStartPage();
  }, []);
  if (data === undefined) {
    return (
      <img
        src={gifWallet}
        alt="gifWallet"
      />
    );
  }
  return (
    <div>
      <Header />
      {console.log(data)}
    </div>
  );
};

export default Wallet;
