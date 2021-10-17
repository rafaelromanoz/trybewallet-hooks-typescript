const actionLogin = (email: string): {type: string, payload: {email: string}} => ({
  type: 'ACTION_LOGIN',
  payload: {
    email,
  },
});

export const actionDelete = (id:number): {type: string, id:number} => ({
  type: 'DELETE_EXPENSES',
  id,
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

export const actEdit = (id: number): {type: string, id: number } => ({
  type: 'ACTION_EDIT',
  id,
});

export default actionLogin;
