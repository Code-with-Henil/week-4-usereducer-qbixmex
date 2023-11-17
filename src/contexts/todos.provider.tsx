import React, { Dispatch, FC, ReactNode, createContext } from 'react';
import { Todo } from '../interfaces';
import todosReducer, { TodosAction } from './todos.reducer';

type TodosContextType = {
  todos: Todo[];
  dispatch: Dispatch<TodosAction>;
};

const TodosContext = createContext<TodosContextType>({} as TodosContextType);

const INITIAL_TODOS: Todo[] = [
  { id: crypto.randomUUID(), task: 'Go to the Shopping Mall', isComplete: true },
  { id: crypto.randomUUID(), task: 'Go to the Gym', isComplete: true },
  { id: crypto.randomUUID(), task: 'Go to the School', isComplete: false },
];

const TodosProvider: FC<{ children: ReactNode }> = ({ children }) => {

  const [ todos, dispatch ] = React.useReducer(todosReducer, INITIAL_TODOS);

  return (
    <TodosContext.Provider value={{ todos, dispatch }}>
      {children}
    </TodosContext.Provider>
  );

};

export {
  TodosProvider,
  TodosContext,
};
