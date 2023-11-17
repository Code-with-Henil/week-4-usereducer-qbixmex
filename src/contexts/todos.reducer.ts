import { Todo } from "../interfaces";

type CreateAction = {
  type: 'CREATE';
  payload: { task: string };
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
  | ToggleCompleteAction
  | DeleteAction;

const todosReducer = (state: Todo[], action: TodosAction) => {
  switch (action.type) {
    case 'CREATE':
      return [
        {
          id: crypto.randomUUID(),
          task: action.payload.task,
          isComplete: false,
        },
        ...state,
      ];

    case 'TOGGLE-COMPLETE':
      return state.map((todo) => {
        if (todo.id === action.payload.id) {
          return {
            ...todo,
            isComplete: !todo.isComplete
          };
        }
        return todo;
      });

    case 'DELETE':
      return state.filter((todo) => todo.id !== action.payload.id);

    default:
      return state;
  }
};

export default todosReducer;