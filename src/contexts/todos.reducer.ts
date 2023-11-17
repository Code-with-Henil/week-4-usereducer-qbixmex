import { Todo } from "../interfaces";

type Action = {
  type: 'create' | 'edit' | 'delete';
  action: {
    payload: {
      task: boolean;
    }
  }
};

const todosReducer = (state: Todo[], action: Action) => {
  switch (action.type) {
    case 'create':
      return state;
    case 'edit':
      return state;
    case 'delete':
      return state;
    default:
      return state;
  }
};

export default todosReducer;