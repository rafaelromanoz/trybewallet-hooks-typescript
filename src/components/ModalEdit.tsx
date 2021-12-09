import React, { ReactElement, useState } from 'react';
import { RootStateOrAny, useDispatch, useSelector } from 'react-redux';
import {
  Modal,
  Button,
} from 'react-bootstrap';
import { closeModal, saveChangeEdit } from '../redux/actions';

type TPropsFromWallet = {
  currency: {
  },
}

const ModalEdit: React.FC<TPropsFromWallet> = ({ currency }): ReactElement => {
  const [value, setValue] = useState<number>(0);
  const [description, setDescription] = useState<string>('');
  const [method, setMethod] = useState<string>('');
  const [tag, setTag] = useState('');
  const [currencyFind, setCurrencyFind] = useState<string>('');
  const dispatch = useDispatch();
  const { editSwitch } = useSelector((state: RootStateOrAny) => state.reducerWallet);
  const { idEdit } = useSelector((state: RootStateOrAny) => state.reducerWallet);
  const objExpenses = {
    value,
    description,
    currencyFind,
    method,
    tag,
  };

  const methods: Array<string> = ['Dinheiro', 'Cartão de Crédito', 'Cartão de débito'];
  const tags: Array<string> = ['Alimentação', 'Lazer', 'Trabalho', 'Transporte', 'Saúde'];
  return (
    <>
      <Modal show={editSwitch} onHide>
        <Modal.Header>
          <Modal.Title> Editar despesa </Modal.Title>
        </Modal.Header>
        <Modal.Body>
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
          <label className="label" htmlFor="description">
            Descrição
            <div className="control">
              <input
                type="text"
                className="input"
                style={{ width: '100px' }}
                onChange={({ target }) => setDescription(target.value)}
              />
            </div>
          </label>
          <label htmlFor="method" className="label">
            Tag
            <div className="control">
              <select
                className="select"
                onChange={({ target }) => setCurrencyFind(target.value)}
              >
                {Object.keys(currency).map((met) => <option>{met}</option>)}
              </select>
            </div>
          </label>
          <label htmlFor="method" className="label">
            Método
            <div className="control">
              <select
                className="select"
                onChange={({ target }) => setMethod(target.value)}
              >
                {methods.map((met) => <option>{met}</option>)}
              </select>
            </div>
          </label>
          <label htmlFor="method" className="label">
            Tag
            <div className="control">
              <select
                className="select"
                onChange={({ target }) => setTag(target.value)}
              >
                {tags.map((met) => <option>{met}</option>)}
              </select>
            </div>
          </label>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => dispatch(closeModal())}>
            Fechar
          </Button>
          <Button
            variant="primary"
            onClick={() => dispatch(saveChangeEdit(idEdit, objExpenses))}
          >
            Salvar
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ModalEdit;
