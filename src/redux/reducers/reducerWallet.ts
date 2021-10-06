const INITIAL_STATE = {
  expenses: [],
};

type InitialState = {
  expenses: Array<[]>
}

type ActionPayload = {
  type: string,
  payload: {
    expenses: Array<[]>
  }
}

const reducerLogin = (state: InitialState = INITIAL_STATE,
  action: ActionPayload): {expenses: Array<[][]>} => {
  switch (action.type) {
    case 'ADD_EXPENSES':
      return {
        ...state,
        expenses: [...state.expenses, action.payload.expenses],
      };
    default:
      return state;
  }
};

export default reducerLogin;
