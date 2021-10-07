const actionLogin = (email: string): {type: string, payload: {email: string}} => ({
  type: 'ACTION_LOGIN',
  payload: {
    email,
  },
});

type TExpenses = {
  value: number,
  id: number,
  description: string,
  currency: string,
  data: unknown,
  method: string,
  tag: string,
}

export const addExpenses = (expenses:
  TExpenses): {type:string, payload:{expenses: TExpenses}} => ({
  type: 'ADD_EXPENSES',
  payload: {
    expenses,
  },
});

export default actionLogin;
