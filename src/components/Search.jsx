import algoliasearch from 'algoliasearch/lite'
import { createRef, useState } from 'react'
import { InstantSearch } from 'react-instantsearch-dom'
import SearchBox from './SearchBox'
import StyledSearchResult from './SearchResult'
import useClickOutside from './useClickOutside'

const searchClient = algoliasearch(
  process.env.NEXT_PUBLIC_ALGOLIA_APP_ID,
  process.env.NEXT_PUBLIC_ALGOLIA_SEARCH_API_KEY
)

function Search({ indices }) {
  const rootRef = createRef()
  const [query, setQuery] = useState()
  const [hasFocus, setFocus] = useState(false)
  useClickOutside(rootRef, () => setFocus(false))
  return (
    <>
      <InstantSearch
        searchClient={searchClient} // this is the Algolia client
        indexName={indices[0].name}
        onSearchStateChange={({ query }) => setQuery(query)}>
        <SearchBox />
        <StyledSearchResult
          show={query && query.length > 0 && hasFocus}
          indices={indices}
        />
      </InstantSearch>
    </>
  )
}

export default Search

