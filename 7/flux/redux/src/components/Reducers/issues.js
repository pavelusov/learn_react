export default (issues=[], action) => {
    switch (action.type) {
        case "LOAD_ISSUES":
            return [...issues, ...action.payload];
        default:
            return issues;
    }
};
