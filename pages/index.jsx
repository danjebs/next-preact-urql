import { useQuery } from 'urql'

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

export default Homepage
