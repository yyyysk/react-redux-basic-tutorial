import { ADD_TODO, TOGGLE_TODO, SET_FILTER } from './actionTypes';

let nextTodoId = 0;

// TODO追加
export const addTodo = (content) => {

    return({
        type: ADD_TODO,
        payload: {
            id: ++nextTodoId,
            content
        }
    });
};

// Todo切り替え
export const toggleTodo = id => {

    return({
        type: TOGGLE_TODO,
        payload: { id }
    });
};

// フィルタリング
export const setFilter = filter => {
    
    return({
        type: SET_FILTER,
        payload: filter
    });
};
