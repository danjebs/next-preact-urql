import React from 'react'
import App from 'next/app'
import { createClient, Provider } from 'urql'
import { withUrqlClient } from 'next-urql'

const client = createClient({
  url: 'https://spotify-graphql-server.herokuapp.com/graphql',
})

class AppBase extends App {
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {}

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx)
    }

    return { pageProps }
  }

  render() {
    const {
      Component, pageProps, err,
    } = this.props

    return (
      <Provider value={client}>
        <Component {...pageProps} err={err} />
      </Provider>
    )
  }
}

// export default withUrqlClient((ssrExchange, ctx) => ({
//   url: 'https://spotify-graphql-server.herokuapp.com/graphql',
// }))(AppBase)
export default AppBase
