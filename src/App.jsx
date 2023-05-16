import React, { useState } from 'react'
import Names from './Names'
import Categories from './Categories'
import items from './data'
import './App.css'

const allCategories = ['all', ...new Set(items.map((item) => item.category))];

const App = () => {
  const [names, setNames] = useState(items)
  const [categories, setCategories] = useState(allCategories)
 
  const filterItems = (category) => {
    if(category === 'all') {
      setNames(items)
      return;
    }
    const newItems = items.filter((item) => item.category === category);
    setNames(newItems);
  };



  return (
    <main>
      <section className='menu-section'>
        <div className="title">
          <h2>Baby Names</h2>
          <div className="underline"></div>
        </div>
        <Categories categories={categories} filterItems={filterItems}/>
         <Names items={names}/>
      </section>
    </main>
  )
}

export default App
