import Link from 'next/link'
import { connectStateResults, Hits, Index } from 'react-instantsearch-dom'

const HitCount = connectStateResults(({ searchState, searchResults }) => {
  const validQuery = searchState?.query?.length >= 3
  const hitCount =
    searchResults?.hits.length && validQuery && searchResults.nbHits

  console.log('searchResults', searchResults)

  return hitCount > 0 ? (
    <div className="float-right flex">
      <div className="text-small py-2">
        {hitCount} result{hitCount !== 1 ? `s` : ``}
      </div>
    </div>
  ) : null
})

const PageHit = connectStateResults(({ searchState, searchResults, hit }) => {
  const validQuery = searchState?.query?.length >= 3
  const hitCount =
    searchResults?.hits.length && validQuery && searchResults.nbHits

  return hitCount > 0 ? (
    <div>
      <div className="my-4 grid">
        <Link href={hit.pathname}>
          <h2 className="text-base font-semibold text-zinc-800 hover:text-teal-500 dark:text-zinc-100">
            {hit.title}
          </h2>
          <div className="w-5/6 py-2">
            <p className="text-base text-zinc-600 dark:text-zinc-400">
              {hit.description}
            </p>
          </div>
          {/* <div className="text">Published {hit.context?.article?.date}</div> */}
          {/* <img src={hit.context?.article?.hero?.narrow?.src}></img> */}
        </Link>
      </div>
    </div>
  ) : null
})

const HitsInIndex = ({ index }) => {
  return (
    <div className="max-h-[calc(100vh-15rem)] overflow-scroll">
      {console.log('index', index)}
      <Index indexName={index.name}>
        <HitCount />
        <Hits className="Hits" hitComponent={PageHit} />
      </Index>
    </div>
  )
}

const SearchResult = ({ indices, className }) => (
  <div className={className}>
    {indices.map((index) => (
      <HitsInIndex index={index} key={index.name} />
    ))}
  </div>
)

export default SearchResult
