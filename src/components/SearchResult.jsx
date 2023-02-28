import Link from 'next/link'
import { connectStateResults, Hits, Index } from 'react-instantsearch-dom'
import styled from 'styled-components'

const SearchResultStyles = styled.div`
  display: grid;
  margin-bottom: 1em;
  margin-top: 1em;
  &:hover {
    h4 {
      color: #b28c17;
    }
  }
  .text {
    float: left;
    width: 63%;
    padding: 0.2em;
    margin-bottom: 1em;
    font-size: small;
  }
  img {
    margin-top: -2.5em;
    width: 33%;
    height: 110px;
    vertical-align: middle;
    object-fit: cover;
  }
`
const HitCountStyles = styled.div`
  padding-bottom: 2em;
  padding-top: 2em;
  font-size: small;
`

const HitCount = connectStateResults(({ searchState, searchResults }) => {
  const validQuery = searchState?.query?.length >= 3
  const hitCount =
    searchResults?.hits.length && validQuery && searchResults.nbHits

  // console.log('searchResults', searchResults)

  return hitCount > 0 ? (
    <HitCountStyles className="HitCount">
      {hitCount} result{hitCount !== 1 ? `s` : ``}
    </HitCountStyles>
  ) : null
})

const PageHit = ({ hit }) => {
  //  console.log('hit', hit)
  // const [showModal, setShowModal] = useState(true)
  return (
    <SearchResultStyles>
      <Link href={hit.pathname}>
        <h4>{hit.title}</h4>
        <div className="text">{hit.description}</div>
        {/* <div className="text">Published {hit.context?.article?.date}</div> */}
        {/* <img src={hit.context?.article?.hero?.narrow?.src}></img> */}
      </Link>
    </SearchResultStyles>
  )
}

const HitsInIndex = ({ index }) => (
  <div className="h-[calc(100vh-15rem)] overflow-scroll">
    <Index indexName={index.name}>
      <HitCount />
      <Hits className="Hits" hitComponent={PageHit} />
    </Index>
  </div>
)

const SearchResult = ({ indices, className }) => (
  <div className={className}>
    {indices.map((index) => (
      <HitsInIndex index={index} key={index.name} />
    ))}
  </div>
)

export default SearchResult
