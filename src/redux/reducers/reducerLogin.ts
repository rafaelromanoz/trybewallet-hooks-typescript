const INITIAL_STATE = {
  email: '',
  user: '',
}

interface ReducerLogin {
  action: (param: any) => any;
  type: string;
  payload: {email: string, user: string};
}

const reducerLogin = (state = INITIAL_STATE, action: ReducerLogin) => {
  switch(action.type){
    case 'ACTION_LOGIN':
      return {
        ...state,
        email: action.payload.email,
        user: action.payload.user,
      }
  }
}

export default reducerLogin;