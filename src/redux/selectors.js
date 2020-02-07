import { VISIBILITY_FILTERS } from '../constants';

// stateのtodoを取り出す共通処理
export const getTodosState = store => store.todos;

// 全てのTodoのIdの配列を取得
export const getTodoList = store => getTodosState(store) ? ...getTodosState(store).allIds : [];

// IDで指定してTODOの情報を取得
export const getTodoById = (store, id) => getTodosState(store) ? {...getTodosState(store).byIds[id], id} : {};

// 全てのTODOの情報を取得
export const getTodods = store => getTodoList(store).map(id => getTodoById(store, id));

// フィルター条件
export const getTodosByVisibilityFilter = (store, visibilityFilter) => {
		const allTodos = getTodos(store);
		switch (visibilityFilter) {
				case VISIBILITY_FILTERS.COMPLETED:
						return allTodos.filter(todo => todo.completed);

				case VISIBILITY_FILTERS.INCOMPLETE:
						return allTodos.filter(todo => !todo.completed);

				case VISIBILITY_FILTERS.ALL:
						return allTodos;

				default: 
						return allTodos;
		}
};

