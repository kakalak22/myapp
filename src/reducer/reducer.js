function reducer(state, action) {
    switch (action.type) {
        case 'saveLog':
            return { input: action.payload };
        default:
            throw new Error();
    }
}
export default reducer;