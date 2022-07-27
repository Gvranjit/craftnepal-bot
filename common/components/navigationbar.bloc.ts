import { useLayoutContext } from '../../context/LayoutContext';
import { useErrorHandler } from '../hooks/error-handler';

const useNavigationBar = () => {
  //hooks
  const {} = useErrorHandler();
  const { theme, setTheme } = useLayoutContext();

  //handlers
  function onThemeSwitchHandler() {
    setTheme(theme == 'dark' ? 'light' : 'dark');
  }
  return { onThemeSwitchHandler, theme };
};
export { useNavigationBar };
