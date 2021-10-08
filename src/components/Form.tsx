import React, {
  Dispatch, PropsWithChildren, ReactElement, SetStateAction,
} from 'react';

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
  onClickAdd: PropsWithChildren<()=> void>;
}

const Form: React.FC<TPropsFromWallet> = ({
  estados,
  currency,
  onClickAdd,
}): ReactElement => {
  const {
    setCurrency, setValue, setDescription, setMethod, setTag,
  } = estados;
  const method: Array<string> = ['Dinheiro', 'Cartão de Crédito', 'Cartão de débito'];
  const tag: Array<string> = ['Alimentação', 'Lazer', 'Trabalho', 'Transporte', 'Saúde'];
  return (
    <div>
      <form className="level-left">
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
          <label className="label" htmlFor="description" style={{ marginTop: '5px' }}>
            Descrição
            <div className="control">
              <input
                className="input"
                type="text"
                name="description"
                onChange={({ target }) => setDescription(target.value)}
              />
            </div>
          </label>
        </div>
        <div className="field">
          <label htmlFor="asad" className="label" style={{ marginTop: '5px' }}>
            Moeda
            <div className="control">
              <div className="select">
                <select
                  name="currency"
                  onChange={({ target }) => setCurrency(target.value)}
                >
                  {Object.keys(currency)
                    .filter((element) => element !== 'USDT')
                    .map((element) => (
                      <option>{element}</option>
                    ))}
                </select>
              </div>
            </div>
          </label>
        </div>
        <div className="field">
          <label htmlFor="asad" className="label" style={{ marginTop: '5px' }}>
            Método de pagamento
            <div className="control">
              <div className="select">
                <select
                  onChange={({ target }) => setMethod(target.value)}
                >
                  {method.map((element) => (
                    <option>{element}</option>
                  ))}
                </select>
              </div>
            </div>
          </label>
        </div>
        <div className="field">
          <label htmlFor="asad" className="label" style={{ marginTop: '6px' }}>
            Tag
            <div className="control">
              <div className="select">
                <select
                  onChange={({ target }) => setTag(target.value)}
                >
                  {tag.map((element) => (
                    <option>{element}</option>
                  ))}
                </select>
              </div>
            </div>
          </label>
        </div>
        <button
          type="button"
          className="button is-primary"
          onClick={() => onClickAdd()}
          style={{ marginLeft: '17px', marginTop: '15px' }}
        >
          Adicionar despesa
        </button>
      </form>
    </div>
  );
};

export default Form;
