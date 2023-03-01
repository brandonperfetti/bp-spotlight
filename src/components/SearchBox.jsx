import { connectSearchBox } from 'react-instantsearch-dom'
import { SearchFilterInput } from './SearchFilterInput'

function SearchBox({ refine }) {
  return (
    <>
      <SearchFilterInput
        id="algolia_search"
        type="search"
        placeholder="Search for anything!"
        onChange={(e) => refine(e.currentTarget.value)}
      />
    </>
  )
}

export default connectSearchBox(SearchBox)
