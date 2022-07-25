import '../styles/globals.css';
import type { AppProps } from 'next/app';
import Navigationbar from '../common/components/Navigationbar';
import { LayoutProvider, useLayoutContext } from '../context/LayoutContext';
import { Transition } from 'react-transition-group';
const duration = 300;

const defaultStyle = {
  transition: `opacity ${duration}ms ease-in-out`,
  opacity: 0,
};

const transitionStyles = {
  entering: { opacity: 1 },
  entered: { opacity: 1 },
  exiting: { opacity: 0 },
  exited: { opacity: 1 },
};

function MyApp({ Component, pageProps, inProp }: AppProps & { inProp: any }) {
  const Main = () => {
    const { theme } = useLayoutContext();

    return (
      <Transition in={inProp} timeout={duration}>
        {(state) => (
          <div
            style={{
              ...defaultStyle,
              ...transitionStyles['exited'],
            }}
          >
            <div className={theme}>
              <div className="dark:bg-dark-background-tertiary dark:text-dark-text-primary">
                <Navigationbar />
                <Component {...pageProps} />
              </div>
            </div>
          </div>
        )}
      </Transition>
    );
  };
  return (
    <LayoutProvider>
      <Main />
    </LayoutProvider>
  );
}

export default MyApp;
