import { GET_TEAM, RESET_TEAM } from "../actions/actionsConst";

const initialState = [];

const reducer = (state = initialState, action) => {
    const { type, payload } = action;

    switch (type) {
        case GET_TEAM:
            console.log(payload);
            return [ ...payload ];
        case RESET_TEAM:
            return [];
        default:
            return state;
    }
};

export default reducer;