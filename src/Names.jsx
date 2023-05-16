import React from 'react'

const Names = ({items}) => {
 
  return (
    <div className='main'>
      {
        items.map((item) => {
         const {id, name, category} = item 
         return (
          <div key={id} className='btn-container'>
            <button type='button' className='filter-btn'>{name}</button>
          </div>
         )
        })
      }
    </div>
  )
}

export default Names