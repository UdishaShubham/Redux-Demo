export default function CounterReducer(state = 0, action) {
  switch (action.type) {
  case 'INCREMENT':
    return state + action.param
  case 'DECREMENT':
    return state - action.param
  default:
    return state
  }
}