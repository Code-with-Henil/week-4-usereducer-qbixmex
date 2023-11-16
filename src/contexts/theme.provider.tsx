import React, { Dispatch, FC, ReactNode } from "react";

type ThemeContextType = {
  theme: string;
  setTheme: Dispatch<string>;
};

const ThemeContext = React.createContext<ThemeContextType>({} as ThemeContextType);

const ThemeProvider: FC<{ children: ReactNode }> = ({ children }) => {

  const [ theme, setTheme ] = React.useState('dark');

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );

};

export {
  ThemeProvider,
  ThemeContext,
};
