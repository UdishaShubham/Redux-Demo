import { createStore } from 'redux';
 
function counter(state = 0, action) {
  switch (action.type) {
  case 'INCREMENT':
    return state + action.param
  case 'DECREMENT':
    return state - 1
  default:
    return state
  }
}
 
let store = createStore(counter);
 

store.subscribe(() =>
  console.log(store.getState())
)

store.dispatch({ type: 'INCREMENT', param:2})

store.dispatch({ type: 'INCREMENT', param:2 })

store.dispatch({ type: 'INCREMENT', param:2 })

store.dispatch({ type: 'DECREMENT' })
