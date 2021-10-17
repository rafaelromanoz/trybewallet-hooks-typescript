import React, { ReactElement, useState } from 'react';
import { RootStateOrAny, useDispatch, useSelector } from 'react-redux';
import {
  Form,
  Modal,
  Button,
  Row,
  Col,
} from 'react-bootstrap';

type TPropsFromWallet = {
  currency: {
  },
}

const ModalEdit: React.FC<TPropsFromWallet> = ({ currency }): ReactElement => {
  const [value, setValue] = useState<number>(0);
  const [id, setId] = useState<number>(0);
  const [description, setDescription] = useState<string>('');
  const [method, setMethoda] = useState<string>('');
  const [tag, setTag] = useState('');
  const dispatch = useDispatch();
  const { editSwitch } = useSelector((state: RootStateOrAny) => state.reducerWallet);
  const objExpenses = {
    value,
    id,
    description,
    currency,
    method,
    tag,
  };
  

  const onClickAddExpenses = (): void => {
    setId((prevState) => (prevState + 1));
  };

  const methods: Array<string> = ['Dinheiro', 'Cartão de Crédito', 'Cartão de débito'];
  const tags: Array<string> = ['Alimentação', 'Lazer', 'Trabalho', 'Transporte', 'Saúde'];
  return (
    <>
      <Modal show={editSwitch} onHide={handleShow}>
        <Modal.Header>
          <Modal.Title> Editar algo </Modal.Title>
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
        </Modal.Body>
      </Modal>
    </>
  );
};

export default ModalEdit;
