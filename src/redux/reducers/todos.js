import { ADD_TODO, TOGGLE_TODO } from '../actionTypes';

const initialState = {
    allIds: [],
    byIds: {}
};

export default function(state = initialState, action) {
    switch(action.type) {
        // Todo追加
        case ADD_TODO: {
            // IDとTodo内容を受け取る
            const { id, content } = action.payload;
            return {
                ...state,
                // IDを追加
                allIds: [...state.allIds, id],
                // 追加したIDが持つTodo内容を追加し、完了状況を初期化
                byIds: {
                    ...state.byIds,
                    [id]: {
                        content,
                        completed: false
                    }
                }
            };
        }

        // Todo切り替え
        case TOGGLE_TODO: {
            // Id受け取る
            const { id } = action.payload;
            return {
                ...state,
                byIds: {
                    ...state.byIds,
                    // 対応するIDのcontentはそのままに、
                    // 完了状況のみをトグルする
                    [id]: {
                        ...state.byIds[id],
                        completed: !state.byIds[id].completed
                    }
                }
            };
        }

        default: return initialState;
    }
}
