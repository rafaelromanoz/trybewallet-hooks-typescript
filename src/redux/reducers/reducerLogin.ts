const INITIAL_STATE = {
  email: '',
};

type TReducerLogin = {
  type: string,
  payload: {
    email: string,
  }
}

type TInicialState = {
  email: string,
}

const reducerLogin = (state: TInicialState = INITIAL_STATE,
  action: TReducerLogin): {email: string} => {
  switch (action.type) {
    case 'ACTION_LOGIN':
      return {
        ...state,
        email: action.payload.email,
      };

    default:
      return state;
  }
};

export default reducerLogin;
