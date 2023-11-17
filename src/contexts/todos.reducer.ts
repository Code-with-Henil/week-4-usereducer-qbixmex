import { Todo } from "../interfaces";

export type TodosAction = {
  type: 'create' | 'edit' | 'delete';
  payload: {
    task: string;
  };
};

const todosReducer = (state: Todo[], action: TodosAction) => {
  switch (action.type) {
    case 'create':
    return [
      {
        id: crypto.randomUUID(),
        task: action.payload.task,
        isComplete: false,
      },
      ...state,
    ]
    case 'edit':
      return state;
    case 'delete':
      return state;
    default:
      return state;
  }
};

export default todosReducer;