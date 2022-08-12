import React, { useEffect } from 'react';
import {} from 'react-dom';
import { createContext, FunctionComponent, ReactNode, useContext, useState } from 'react';
import { useErrorHandler } from '../common/hooks/error-handler';
import { StorageKey } from '../common/enums';
export type Theme = 'light' | 'dark';

const LayoutContext = createContext<{ theme: Theme; setTheme: any }>({} as any);

const useLayoutContext = () => useContext(LayoutContext);

type Props = { children: ReactNode };

const LayoutProvider = (props: Props) => {
  const { handleError } = useErrorHandler();
  const [theme, setTheme] = useState<Theme>('dark');
  useEffect(() => {
    const themeData = window.localStorage.getItem(StorageKey.THEME) as Theme;

    if (themeData) {
      try {
        setTheme(themeData == 'dark' ? 'dark' : 'light');
      } catch (err) {
        handleError(err);
      }
    }
    return () => {};
  }, []);

  return (
    <LayoutContext.Provider value={{ theme, setTheme }}>{props.children}</LayoutContext.Provider>
  );
};

export { LayoutProvider, useLayoutContext };
