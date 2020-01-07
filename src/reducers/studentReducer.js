import { GET_STUDENTS } from '../actions/types';

const INITIAL_STATE = {
    students : []
};

export default (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case GET_STUDENTS:
            return{...state, students: action.payload };
        default:
            return state;
    }
}