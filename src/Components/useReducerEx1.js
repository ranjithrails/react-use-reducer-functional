import { useReducer } from "react";

const initialState = {count: 0};
const reducer = (state, action) => {
switch (action.type) {
  case 'increment':
    return {count: state.count + 1};
  case 'decrement':
    return {count: state.count - 1};
  default:
    throw new Error();
}
};

const UseReducerEx1 = () => {
const [state, dispatch] = useReducer(reducer, initialState);
return (
  <>
  Count: {state.count}
  <button onClick={()=>{dispatch({type: 'increment'})}}>Increment</button>
  <button onClick={()=>{dispatch({type: 'decrement'})}}>Decrement</button>
  </>
)
}

export default UseReducerEx1;