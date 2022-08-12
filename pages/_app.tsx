import '../styles/globals.css';
import type { AppProps } from 'next/app';
import Navigationbar from '../common/components/navigationbar/Navigationbar';
import { LayoutProvider, useLayoutContext } from '../context/LayoutContext';

function MyApp({ Component, pageProps, inProp }: AppProps & { inProp: any }) {
  const Main = () => {
    const { theme } = useLayoutContext();

    return (
      <div className={`${theme} font-montserrat`}>
        <div className="dark:bg-dark-background-tertiary dark:text-dark-text-primary">
          <Navigationbar />
          <Component {...pageProps} />
        </div>
      </div>
    );
  };
  return (
    <LayoutProvider>
      <Main />
    </LayoutProvider>
  );
}

export default MyApp;
