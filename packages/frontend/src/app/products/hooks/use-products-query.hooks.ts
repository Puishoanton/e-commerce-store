import { ITEM_PER_PAGE } from '@/shared/constants'
import { Dispatch, SetStateAction, useEffect, useState } from "react"
import { useDebounceCallback } from 'usehooks-ts'

type ReturnType = {
  page: number,
  onPageChange: () => (newPage: number) => void,
  onChooseCategory: (category: string) => void,
  limit: number,
  setLimit: Dispatch<SetStateAction<number>>,
  search: string,
  category: string,
  debouncedSearch: (newSearch: string) => void,
  setCategory: Dispatch<SetStateAction<string>>
}

export const useProductsQuery = (): ReturnType => {
  const [page, setPage] = useState(1)
  const [limit, setLimit] = useState(ITEM_PER_PAGE)
  const [search, setSearch] = useState('');
  const [category, setCategory] = useState('')
  const debouncedSearch = useDebounceCallback((newSearch: string) => {
    setSearch(newSearch.trim());
    setPage(1)
  }, 500);

  const onPageChange = () => (newPage: number): void => {
    localStorage.setItem('page', `${newPage}`)
    setPage(newPage)
  }
  const onChooseCategory = (category: string): void => setCategory(category)

  useEffect(() => {
    const storedPage = localStorage.getItem('page');
    if (storedPage) {
      setPage(Number(storedPage));
    }
  }, []);
  return { page, limit, search, category, onPageChange, onChooseCategory, setLimit, setCategory, debouncedSearch }
}
