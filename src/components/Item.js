import React from 'react'

const Item = ({ item, onDetailClick }) => {
  return (
    <div>
      <span>{item.name}</span>
      <button type="button" onClick={() => onDetailClick(item)}>
        Details
      </button>
    </div>
  )
}

export default Item
