import { SET_MESSAGE, RESET_MESSAGE } from "../actions/actionsConst";

const initialState = '';

const reducer = (state = initialState, action) => {
    const { type, payload } = action;

    switch (type) {
        case SET_MESSAGE:
            return payload;
        case RESET_MESSAGE:
            return '';
        default:
            return state;
    }
};

export default reducer;