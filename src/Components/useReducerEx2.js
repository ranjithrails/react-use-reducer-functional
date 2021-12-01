import { useReducer } from "react";

const initialState = {
  firstName: '',
  lastName: '',
  password: '',
  repeatPassword: '',
  email: '',
};

function reducer(state, action) {
  switch (action.type) {
    case 'changeValue':
      return {...state, [action.field]: action.value};
    case 'reset':
      return initialState;
    default:
      throw new Error();
  }
}

const UseReducerEx2 = () => {
const [state, dispatch] = useReducer(reducer, initialState);
return (
  <>
  FirstName: {state.firstName}
  LastName: {state.lastName}
  <button onClick={()=>dispatch({type: 'changeValue', field: 'firstName', value: 'Ranjith'})}>Update Names</button>
  <button onClick={()=>dispatch({type: 'reset'})}>Reset</button>
  </>
)
};

export default UseReducerEx2;