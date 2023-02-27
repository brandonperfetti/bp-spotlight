import algoliasearch from 'algoliasearch/lite'
import { InstantSearch } from 'react-instantsearch-dom'
import Hits from './Hits'
import SearchBox from './SearchBox'

const searchClient = algoliasearch(
  process.env.NEXT_PUBLIC_ALGOLIA_APP_ID,
  process.env.NEXT_PUBLIC_ALGOLIA_SEARCH_API_KEY
)

function Search() {
  return (
    <>
      <InstantSearch
        searchClient={searchClient} // this is the Algolia client
        indexName="netlify_269427d9-5dba-4f9a-ae29-b7433d850412_main_all" // this is your index name
      >
        <SearchBox />
        <Hits />
      </InstantSearch>
    </>
  )
}

export default Search

