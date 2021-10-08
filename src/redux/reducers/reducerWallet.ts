import { RootStateOrAny } from 'react-redux';

const INITIAL_STATE = {
  expenses: [],
};

type InitialState = {
  expenses: Array<[]>
}

type ActionPayload = {
  type: string,
  payload: {
    expenses: Array<[]>,
  }
  id: number,
}

const reducerLogin = (state: InitialState = INITIAL_STATE,
  action: ActionPayload): {expenses: Array<[][]>} => {
  switch (action.type) {
    case 'ADD_EXPENSES':
      return {
        ...state,
        expenses: [...state.expenses, action.payload.expenses],
      };
    case 'DELETE_EXPENSES':
      console.log(action.id);
      return {
        ...state,
        expenses: state.expenses
          .filter((element: RootStateOrAny) => element.id !== action.id),
      };
    default:
      return state;
  }
};

export default reducerLogin;
