import { createStore } from 'redux';
import rootReducer from './reducers';

// const initialState = {
//     user: null
// };


const store = createStore(rootReducer);

export default store;

// console.log(store);
// console.log(rootReducer);
