import '@/styles/globals.css'
import GlobalState from '@/components/contextApi/GlobalState';

export default function App({ Component, pageProps }) {
  return <GlobalState>
      <Component {...pageProps} />
    </GlobalState>
}
