import '../styles/globals.scss';
import '../styles/button.scss';
import '../styles/input.scss';
import type { AppProps } from 'next/app';

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
export default MyApp;
