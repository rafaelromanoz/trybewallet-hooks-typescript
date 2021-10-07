import React, {
  ReactElement, useState, useEffect, Dispatch, SetStateAction,
} from 'react';
import { useDispatch } from 'react-redux';
import { addExpenses } from '../redux/actions';
import Header from '../components/Header';
import fetchApi from '../services/fetch';
import gifWallet from '../images/gifWallet.gif';
import Form from '../components/Form';

const Wallet: React.FC = (): ReactElement => {
  const [data, setData] = useState<undefined>();
  const [value, setValue] = useState<number>(0);
  const [id, setId] = useState<number>(0);
  const [description, setDescription] = useState<string>('');
  const [currency, setCurrency] = useState<string>('');
  const [method, setMethod] = useState('');
  const [tag, setTag] = useState('');
  const dispatch = useDispatch();
  const onStartPage = async (): Promise<void> => {
    setData(await fetchApi());
  };
  useEffect(() => {
    onStartPage();
  }, []);

  const objExpenses = {
    value,
    id,
    description,
    currency,
    data,
    method,
    tag,
  };

  const onClickAddExpenses = (): void => {
    setId((prevState) => (prevState + 1));
    dispatch(addExpenses(objExpenses));
  };

  type TSetToState = {
    setValue: Dispatch<SetStateAction<number>>,
    setCurrency: Dispatch<SetStateAction<string>>,
    setDescription: Dispatch<SetStateAction<string>>,
    setMethod: Dispatch<SetStateAction<string>>,
    setTag: Dispatch<SetStateAction<string>>,
  }

  const setToState: TSetToState = {
    setValue,
    setCurrency,
    setDescription,
    setMethod,
    setTag,
  };
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
      <Form estados={setToState} currency={data} onClickAdd={onClickAddExpenses} />
    </div>
  );
};

export default Wallet;
