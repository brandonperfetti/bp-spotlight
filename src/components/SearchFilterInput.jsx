import { SearchIcon } from '@heroicons/react/outline'
import { useEffect, useRef } from 'react'
import { Input } from './Input'

export function ShortcutIcon(props) {
  return (
    <svg
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <path
        d="M0 5a5 5 0 0 1 5-5h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H5a5 5 0 0 1-5-5V5Z"
        fill="#D1D5DB"
      />
      <path
        d="M9.033 15.805 12.074 5.14h-1.113L7.926 15.805h1.107Z"
        fill="currentColor"
      />
    </svg>
  )
}

export const SearchFilterInput = ({ value, placeholder, onChange }) => {
  const searchInputRef = useRef(null)

  useEffect(() => {
    function onKeyPress(event) {
      if (
        event.key === '/' &&
        document.activeElement !== searchInputRef.current
      ) {
        event.preventDefault()
        searchInputRef.current?.focus()
      }
    }
    document.body.addEventListener('keydown', onKeyPress)
    return () => {
      document.body.removeEventListener('keydown', onKeyPress)
    }
  }, [])

  return (
    <Input
      ref={searchInputRef}
      aria-label="search"
      leftIcon={<SearchIcon />}
      rightIcon={<ShortcutIcon className="text-gray-700" />}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    />
  )
}
