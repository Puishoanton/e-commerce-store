import React, { FC } from 'react'
import SearchBar from './Search-bar.component'
import Select from './Select.component'

type Props = {
  debouncedSearch: (newSearch: string) => void;
  onChooseCategory: (category: string) => void
}

const categorys = ['All', 'Smartphones', 'Laptops']

const Filter: FC<Props> = ({ debouncedSearch, onChooseCategory }) => {
  return (
    <div className="mb-8 flex flex-col space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4">
      <Select onChooseCategory={onChooseCategory} categorys={categorys} />
      <SearchBar debouncedSearch={debouncedSearch} />
    </div>
  )
}

export default Filter
