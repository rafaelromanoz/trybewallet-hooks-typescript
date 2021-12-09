import { RootStateOrAny } from 'react-redux';

const INITIAL_STATE = {
  expenses: [],
  editSwitch: false,
  idEdit: 0,
};

type InitialState = {
  expenses: Array<[]>,
  idEdit: number,
  editSwitch: boolean,
}

type ActionPayload = {
  type: string,
  id: number,
  payload: {
    expenses: Array<[]>,
  },
  idEdit: number,
  expenses: Array<[]>,
}

const reducerLogin = (state: InitialState = INITIAL_STATE,
  action: ActionPayload): {expenses: Array<[][]>,
    idEdit: number, editSwitch: boolean} => {
  switch (action.type) {
    case 'ADD_EXPENSES':
      return {
        ...state,
        expenses: [...state.expenses, action.payload.expenses],
      };
    case 'DELETE_EXPENSES':
      return {
        ...state,
        expenses: state.expenses
          .filter((element: RootStateOrAny) => element.id !== action.id),
      };
    case 'ACTION_EDIT':
      return {
        ...state,
        idEdit: action.id,
        editSwitch: true,
      };
    case 'CLOSE_MODAL':
      return {
        ...state,
        editSwitch: false,
      };
    case 'SAVE_EDIT':
      return {
        ...state,
        expenses: [
          ...state.expenses.map((element: RootStateOrAny) => {
            if (element.id === action.idEdit) {
              return {
                ...element,
                ...action.expenses,
              };
            } return element;
          }),
        ],
        editSwitch: false,
      };
    default:
      return state;
  }
};

export default reducerLogin;
