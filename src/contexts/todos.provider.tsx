import { Dispatch, FC, ReactNode, createContext, useReducer } from 'react';
import todosReducer, { TodosAction, TodosState } from './todos.reducer';

type TodosContextType = {
  state: TodosState;
  dispatch: Dispatch<TodosAction>;
};

const TodosContext = createContext<TodosContextType>({} as TodosContextType);

const INITIAL_STATE: TodosState = {
  todos: [],
  todo: null,
};

const TodosProvider: FC<{ children: ReactNode }> = ({ children }) => {

  const [ state, dispatch ] = useReducer(todosReducer, INITIAL_STATE);

  return (
    <TodosContext.Provider value={{ state, dispatch }}>
      {children}
    </TodosContext.Provider>
  );

};

export {
  TodosProvider,
  TodosContext,
};
