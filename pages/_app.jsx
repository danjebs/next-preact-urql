import React from 'react'
import { Provider } from '@urql/preact'
import withUrqlClient from '../lib/urql/withUrqlClient'

const App = ({ Component, pageProps, err, urqlClient }) => (
  <Provider value={urqlClient}>
    <Component {...pageProps} {...{err}} />
  </Provider>
)

export default withUrqlClient(App)
