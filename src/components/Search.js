import React from 'react'

const Search = ({ searched, handleSearch }) => {
  return (
    <div>
      Find countries <input onChange={handleSearch} value={searched} />
    </div>
  )
}

export default Search