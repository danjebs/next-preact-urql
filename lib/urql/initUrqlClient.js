import {
  createClient,
  dedupExchange,
  cacheExchange,
  fetchExchange,
  ssrExchange,
} from 'urql'

let urqlClient = null
let ssrCache = null

export default function initUrqlClient(initialState) {
  // Create a new client for every server-side rendered request to reset its state
  // for each rendered page
  // Reuse the client on the client-side however
  const isServer = typeof window === 'undefined'
  if (isServer || !urqlClient) {
    ssrCache = ssrExchange({ initialState })

    urqlClient = createClient({
      url: 'https://spotify-graphql-server.herokuapp.com/graphql',
      // Active suspense mode on the server-side
      suspense: isServer,
      exchanges: [dedupExchange, cacheExchange, ssrCache, fetchExchange],
    })
  }

  // Return both the cache and the client
  return [urqlClient, ssrCache]
}