const INITIAL_STATE = {
  email: '',
};

interface ReducerLogin {
  action: () => any;
  type: string;
  payload: { email: string; user: string };
}

const reducerLogin = (state = INITIAL_STATE, action: ReducerLogin) => {
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
