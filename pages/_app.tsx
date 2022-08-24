import '../styles/globals.css'
import type { AppProps } from 'next/app'

import { wrapper } from '../store/index';

import {Provider} from 'react-redux'

import { makeStore } from '../store/index';



function MyApp({ Component, pageProps }: AppProps) {
  return(
    // <Provider store={makeStore} >
      <Component {...pageProps} />
    //  </Provider>
  )
}

// export default MyApp
export default wrapper.withRedux(MyApp);
