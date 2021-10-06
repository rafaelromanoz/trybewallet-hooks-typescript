const actionLogin = (email: string): {type: string, payload: {email: string}} => ({
  type: 'ACTION_LOGIN',
  payload: {
    email,
  },
});

export default actionLogin;
