import { SET_USER_INFO } from './userInfoActionTypes';

const initialUserInfoState = {
    name: '',
    email: '',
    age: '',
};

function userInfoReducer(state = initialUserInfoState, action) {
    switch (action.type) {
        case SET_USER_INFO:
            return action.payload;
        default:
            return state;
    }
}

export default userInfoReducer;
