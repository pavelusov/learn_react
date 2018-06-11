import {C} from "./index";

export const addBook = (title, price) =>
    ({
        type: C.ADD_BOOK,
        title,
        price
    });

export const removeBook = id => ({
    type: C.REMOVE_BOOK,
    id
});
// В создатель действий нужно помещать
// всю логику обмена данными с серверными API
