import React from 'react'
import { Provider } from 'urql'
import { withUrqlClient } from 'next-urql'

const App = ({ Component, pageProps, err, urqlClient }) => (
  <Provider value={urqlClient}>
    <Component {...pageProps} {...{err}} />
  </Provider>
)

export default withUrqlClient((ssrExchange, ctx) => ({
  url: 'https://spotify-graphql-server.herokuapp.com/graphql',
}))(App)
