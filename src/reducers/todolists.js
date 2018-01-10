import * as types from '../constants/ActionTypes';

const initialState = {
    data: ['Simon Mignolet','Nathaniel Clyne','Dejan Lovren','Mama Sakho','Emre Can']
};

export default function (state = initialState, action = {}) {
    switch (action.type) {
        case types.ADD_NEW_TASK:
            return {
                data: [...state.data, action.data],
                // data: state.data.concat(action.data)
            };
        default:
            return {
                data: state.data
            };
    }
}
