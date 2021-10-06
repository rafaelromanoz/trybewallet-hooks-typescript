import React, { Dispatch, ReactElement, SetStateAction } from 'react';

type TPropsFromWallet = {
  estados: {
    setCurrency: Dispatch<SetStateAction<string>>,
    setValue: Dispatch<SetStateAction<number>>,
    setDescription: Dispatch<SetStateAction<string>>,
    setTag: Dispatch<SetStateAction<string>>,
    setMethod: Dispatch<SetStateAction<string>>,
  },
  currency: {
  },
}

const Form: React.FC<TPropsFromWallet> = ({ estados, currency }): ReactElement => {
  const {
    setCurrency, setValue, setDescription, setMethod, setTag,
  } = estados;
  return (
    <div>
      <form className="field">
        <label className="label" htmlFor="value">
          Valor
          <div className="control">
            <input
              type="number"
              className="input"
              style={{ width: '100px' }}
              onChange={({ target }) => setValue(Number(target.value))}
            />
          </div>
        </label>
        <div className="field">
          <label className="label" htmlFor="description">
            Descrição
            <input
              className="input"
              type="text"
              name="description"
              onChange={({ target }) => setDescription(target.value)}
            />
          </label>
        </div>
        <label htmlFor="currency">
          Moeda
          <select name="currency" onChange={({ target }) => setCurrency(target.value)}>
            {Object.keys(currency)
              .filter((element) => element !== 'USDT')
              .map((element) => (
                <option>{element}</option>
              ))}
          </select>
        </label>
        <label htmlFor="method">
          Método de pagamento
          <select name="method" onChange={({ target }) => setMethod(target.value)}>
            <option>Dinheiro</option>
            <option>Cartão de crédito</option>
            <option>Cartão de débito</option>
          </select>
        </label>
        <label htmlFor="tag">
          Tag
          <select name="tag" onChange={({ target }) => setTag(target.value)}>
            <option>Alimentação</option>
            <option>Lazer</option>
            <option>Trabalho</option>
            <option>Transporte</option>
            <option>Saúde</option>
          </select>
        </label>
      </form>
    </div>
  );
};

export default Form;
