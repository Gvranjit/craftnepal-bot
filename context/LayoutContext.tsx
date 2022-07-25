import React, { useEffect } from 'react';
import {} from 'react-dom';
import { createContext, FunctionComponent, ReactNode, useContext, useState } from 'react';
import { useErrorHandler } from '../common/hooks/error-handler';
export type Theme = 'light' | 'dark';

const LayoutContext = createContext<{ theme: Theme; setTheme: any }>({} as any);

const useLayoutContext = () => useContext(LayoutContext);

type Props = { children: ReactNode };

const LayoutProvider = (props: Props) => {
  // useEffect(() => {
  //   const themeData = window.localStorage.getItem('dark-theme') as Theme;
  //   console.log(themeData);
  //   themeData == 'dark' ? 'dark' : 'light';
  //   if (themeData) {
  //     try {
  //       const dark = JSON.parse(themeData);
  //       setTheme(themeData == 'dark' ? 'dark' : 'light');
  //     } catch (err) {
  //       handleError(err);
  //     }
  //   }
  //   return () => {};
  // }, []);

  const { handleError } = useErrorHandler();
  const [theme, setTheme] = useState<Theme>('dark');
  return (
    <LayoutContext.Provider value={{ theme, setTheme }}>{props.children}</LayoutContext.Provider>
  );
};

export { LayoutProvider, useLayoutContext };
