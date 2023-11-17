import React, { Dispatch, FC, ReactNode, createContext } from 'react';
import { Todo } from '../interfaces';

type TodosContextType = {
  todos: Todo[];
  setTodos: Dispatch<Todo[]>;
};

const TodosContext = createContext<TodosContextType>({} as TodosContextType);

const INITIAL_TODOS: Todo[] = [
  { id: crypto.randomUUID(), task: 'Go to the Shopping Mall', isComplete: true },
  { id: crypto.randomUUID(), task: 'Go to the Gym', isComplete: true },
  { id: crypto.randomUUID(), task: 'Go to the School', isComplete: false },
];

const TodosProvider: FC<{ children: ReactNode }> = ({ children }) => {

  const [ todos, setTodos ] = React.useState<Todo[]>(INITIAL_TODOS);

  return (
    <TodosContext.Provider value={{ todos, setTodos }}>
      {children}
    </TodosContext.Provider>
  );

};

export {
  TodosProvider,
  TodosContext,
};
