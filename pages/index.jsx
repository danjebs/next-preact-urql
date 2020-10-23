import { useQuery } from 'urql'
import { withUrqlClient } from 'next-urql'

const getStuff = `
  query {
    queryArtists(byName:"Bob") {
      name
      id
      image
    }
  }
`

const Homepage = ({ headers }) => {
  const [result] = useQuery({ query: getStuff })

  return (
    <ul>
      {result && result.data && result.data.queryArtists && result.data.queryArtists.map((artist) => (
        <li>
          {artist.name}
        </li>
      ))}
    </ul>
  )
}

Homepage.getInitialProps = ({ req }) => {
  const headers = req && req.headers && req.headers.cookie ? { Cookie: req.headers.cookie } : {}

  return { headers }
}

export default withUrqlClient((ssrExchange, ctx) => ({
  url: 'https://spotify-graphql-server.herokuapp.com/graphql',
}))(Homepage)
