import { FC, useCallback, useState } from 'react'

type Props = {
  debouncedSearch: (newSearch: string) => void;
}

const SearchBar: FC<Props> = ({ debouncedSearch }) => {
  const [value, setValue] = useState('')

  const handleSearchChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    setValue(newValue);
    debouncedSearch(newValue);
  }, [debouncedSearch])
  return (
    <input
      type="text"
      placeholder="Search..."
      className="rounded-lg border border-gray-300 bg-white px-4 py-2 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400"
      onChange={handleSearchChange}
      value={value}
    />
  )
}

export default SearchBar
