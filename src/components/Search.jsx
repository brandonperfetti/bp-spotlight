import algoliasearch from 'algoliasearch/lite'
import { InstantSearch } from 'react-instantsearch-dom'

const searchClient = algoliasearch(
  process.env.NEXT_PUBLIC_ALGOLIA_APP_ID,
  process.env.NEXT_PUBLIC_ALGOLIA_SEARCH_API_KEY
)

return (
  <>
    <InstantSearch
      searchClient={searchClient} // this is the Algolia client
      indexName="bp_spotlight" // this is your index name
    >
      <SearchBox />
      <Hits />
    </InstantSearch>
  </>
)
