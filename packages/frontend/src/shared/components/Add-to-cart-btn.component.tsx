import { FC } from 'react'

type Props = {
  handler: () => void
}

const AddToCartBtn: FC<Props> = ({ handler }) => {
  return (
    <button className="w-full py-2 px-4 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg transition-colors duration-200 text-sm font-medium cursor-pointer"
      onClick={handler}
    >
      Add to basket
    </button>
  )
}

export default AddToCartBtn
