import { SET_MESSAGE, RESET_MESSAGE } from "../actions/actionsConst";

const initialState = null;

const reducer = (state = initialState, action) => {
    const { type, payload } = action;

    switch (type) {
        case SET_MESSAGE:
            console.log("HELELELASDASD", payload);
            return payload;
        case RESET_MESSAGE:
            return null;
        default:
            return state;
    }
};

export default reducer;