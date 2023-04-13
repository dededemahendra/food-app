import React from 'react'
import {categories} from '../data/data.js'

const Category = () => {
  return (
    <div>
        <h1>Top Rated Menu Items</h1>
        {/* Categories */}
        <div>
            {categories.map((item, index) => (
                <div key={index}>

                </div>
            ))}
        </div>
    </div>
  )
}

export default Category