
export const Searchbar = () => {
  return (
    <div className="flex items-center space-x-4 searchbar justify-between">
    <div className="relative">
      <input
        type="text"
        placeholder="Search"
        className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
      />
      <svg
        className="absolute left-3 top-3 h-5 w-7 text-gray-500"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="11" cy="11" r="8" />
        <line x1="21" y1="21" x2="16.65" y2="16.65" />
      </svg>
    </div>

    <select className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500">
      <option value="option1">Option 1</option>
      <option value="option2">Option 2</option>
    </select>
    <select className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500">
      <option value="option1">Option 1</option>
      <option value="option2">Option 2</option>
    </select>

    <button className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
      Find Job
    </button>
  </div>
  )
}
