import React, { ReactElement, useState } from 'react';
import { RootStateOrAny, useDispatch, useSelector } from 'react-redux';
import {
  Form,
  Modal,
  Button,
  Row,
  Col,
} from 'react-bootstrap';
import { closeModal, saveChangeEdit } from '../redux/actions';

type TPropsFromWallet = {
  currency: {
  },
}

const ModalEdit: React.FC<TPropsFromWallet> = ({ currency }): ReactElement => {
  const [value, setValue] = useState<number>(0);
  const [show, setShow] = useState(false);
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
  const handleClose = (): void => {
    setId((prevState) => (prevState + 1));
    closeModal();
  };

  const methods: Array<string> = ['Dinheiro', 'Cartão de Crédito', 'Cartão de débito'];
  const tags: Array<string> = ['Alimentação', 'Lazer', 'Trabalho', 'Transporte', 'Saúde'];
  return (
    <>
      <Modal show={editSwitch} onHide>
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
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Fechar
          </Button>
          <Button variant="secondary" onClick={handleClose}>
            Salvar
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ModalEdit;
