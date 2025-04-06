import React from 'react'

const Loader = () => {
  return (
    <div className="flex flex-col items-center justify-center space-y-4 py-12">
      <div className="flex space-x-2">
        <div className="h-3 w-3 animate-bounce rounded-full bg-indigo-600 [animation-delay:-0.3s]"></div>
        <div className="h-3 w-3 animate-bounce rounded-full bg-indigo-600 [animation-delay:-0.15s]"></div>
        <div className="h-3 w-3 animate-bounce rounded-full bg-indigo-600"></div>
      </div>

      <p className="text-lg font-medium text-gray-600 animate-pulse dark:text-gray-400">
        Loading...
      </p>
    </div>
  )
}

export default Loader
