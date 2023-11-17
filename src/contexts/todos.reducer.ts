import { Todo } from '../interfaces';

export type TodosState = {
  todos: Todo[];
  todo: Todo | null;
};

type CreateAction = {
  type: 'CREATE';
  payload: { task: string };
};

type EditAction = {
  type: 'EDIT';
  payload: {
    todo: Todo,
  };
};

type UpdateAction = {
  type: 'UPDATE';
  payload: {
    todo: Todo,
  };
};

type ToggleCompleteAction = {
  type: 'TOGGLE-COMPLETE';
  payload: { id: string };
};

type DeleteAction = {
  type: 'DELETE';
  payload: { id: string };
};

export type TodosAction =
  CreateAction
  | EditAction
  | UpdateAction
  | ToggleCompleteAction
  | DeleteAction;

const todosReducer = (state: TodosState, action: TodosAction): TodosState => {
  switch (action.type) {
    case 'CREATE':
      return {
        ...state,
        todos: [
          {
            id: crypto.randomUUID(),
            task: action.payload.task,
            isComplete: false,
          },
          ...state.todos,
        ],
      };

    case 'TOGGLE-COMPLETE':
      return {
        ...state,
        todos: state.todos.map((todo) => {
          if (todo.id === action.payload.id) {
            return {
              ...todo,
              isComplete: !todo.isComplete
            };
          }
          return todo;
        }),
      };

    case 'EDIT':
      return {
        ...state,
        todo: action.payload.todo,
      };

    case 'UPDATE':
      return {
        ...state,
        todos: state.todos.map((todo) => {
          if (todo.id === action.payload.todo.id) {
            return {
              ...todo,
              task: action.payload.todo.task,
            };
          }
          return todo;
        }),
        todo: null,
      };

    case 'DELETE':
      return {
        ...state,
        todos: state.todos.filter((todo) => {
          return todo.id !== action.payload.id;
        }),
      }

    default:
      return state;
  }
};

export default todosReducer;