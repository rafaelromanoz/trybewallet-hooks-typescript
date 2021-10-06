import React, { ReactElement } from 'react';

const Form: React.FC = () : ReactElement => {
  return (
    <form>
        <label>
          Valor
          <input type="number" name="value" onChange={ handChang } />
        </label>
        <label>
          Descrição
          <input type="text" name="description" onChange={ handChang } />
        </label>
        <label>
          Moeda
          <select name="currency" onChange={ handChang }>
            {Object.keys(correctCurrency).map((element, index) => (
              <option key={ index }>{element}</option>
            ))}
          </select>
        </label>
        <label>
          Método de pagamento
          <select name="method" onChange={ }>
            <option>Dinheiro</option>
            <option>Cartão de crédito</option>
            <option>Cartão de débito</option>
          </select>
        </label>
        <label>
          Tag
          <select name="tag" onChange={  }>
            <option>Alimentação</option>
            <option>Lazer</option>
            <option>Trabalho</option>
            <option>Transporte</option>
            <option>Saúde</option>
          </select>
        </label>
      </form>
    );
  }

  )
}

export default Form;