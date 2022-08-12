import { useLayoutContext } from '../../../context/LayoutContext';
import { StorageKey } from '../../enums';
import { useErrorHandler } from '../../hooks/error-handler';

const useNavigationBar = () => {
  //hooks
  const {} = useErrorHandler();
  const { theme, setTheme } = useLayoutContext();

  //handlers
  function onThemeSwitchHandler() {
    localStorage.setItem(StorageKey.THEME, theme === 'dark' ? 'light' : 'dark');
    setTheme(theme === 'dark' ? 'light' : 'dark');
  }
  return { onThemeSwitchHandler, theme };
};
export { useNavigationBar };
