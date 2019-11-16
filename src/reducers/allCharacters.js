export default (state = {}, action) => {
    switch (action.type) {
        case 'GET_STAR_WARS_CHARACTERS':
            return action.payload;
        default:
            return state;
    }
};