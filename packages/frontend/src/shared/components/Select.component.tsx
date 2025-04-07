import { ChangeEvent, FC } from 'react'

type Props = {
  onChooseCategory: (category: string) => void
  categorys: Array<string>
}

const Select: FC<Props> = ({ onChooseCategory, categorys }) => {
  const onChooseHandler = (e: ChangeEvent<HTMLSelectElement>) => {
    onChooseCategory(e.target.value);
  };
  return (
    <select onChange={onChooseHandler} className="rounded-lg border border-gray-300 bg-white px-4 py-2 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white">
      {categorys.map((category) => (
        <option key={category} value={category === 'All' ? '' : category}>
          {category}
        </option>))
      }
    </select>
  )
}

export default Select
