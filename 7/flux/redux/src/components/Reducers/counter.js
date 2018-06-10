export default (count=0, action) => {
    switch (action.type) {
        case "INCREASE_COUNTER":
            return count += 1;
        case "RESET_COUNTER":
            return 0;
        default:
            return count;
    }
};
