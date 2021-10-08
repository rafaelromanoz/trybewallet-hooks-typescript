import React, { ReactElement } from 'react';
import {
  RootStateOrAny, useSelector, connect, shallowEqual, useDispatch,
} from 'react-redux';
import { AiOutlineEdit, AiOutlineDelete } from 'react-icons/ai';
import toast from 'react-hot-toast';
import { actionDelete } from '../redux/actions';

const Table: React.FC = (): ReactElement => {
  const { expenses } = useSelector((state:RootStateOrAny) => state.reducerWallet,
    shallowEqual);
  const dispatch = useDispatch();
  const deleteNotify = (): string => toast.error('Despesa excluida');
  const onClickDelete = (id: number): void => {
    dispatch(actionDelete(id));
    deleteNotify();
  };

  if (expenses.length === 0) {
    return (
      <h3>Não possui despesas cadastradas</h3>
    );
  }
  return (
    <table className="table">
      <thead>
        <tr>
          <th>Valor</th>
          <th>Descrição</th>
          <th>Moeda</th>
          <th>Método de pagamento</th>
          <th>Tag</th>
          <th>Câmbio utilizado</th>
          <th>Moeda de conversão</th>
          <th>Valor convertido</th>
          <th>Real</th>
          <th>Editar/Excluir</th>
        </tr>
      </thead>
      <tbody>
        {expenses.map((element: RootStateOrAny) => (
          <tr>
            <td>{element.value}</td>
            <td>{element.description}</td>
            <td>{element.currency}</td>
            <td>{element.method}</td>
            <td>{element.tag}</td>
            <td>{element.data[element.currency].name.split('/')[0]}</td>
            <td>{parseFloat(element.data[element.currency].ask).toFixed(2)}</td>
            <td>{(element.data[element.currency].ask * element.value).toFixed(2)}</td>
            <td>Real</td>
            <div style={{ marginLeft: '15px' }}>
              <button type="button" className="button is-warning">
                <AiOutlineEdit />
              </button>
              <button
                type="button"
                onClick={() => onClickDelete(element.id)}
                className="button is-danger"
              >
                <AiOutlineDelete />
              </button>
            </div>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

const mapStateToProps = (state: RootStateOrAny): RootStateOrAny => ({
  expenses: state.reducerWallet,
});

export default connect(mapStateToProps)(Table);
