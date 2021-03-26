
import React, { useState }from 'react'
import { AddCategory } from './components/AddCategory'
import { GiftGrid } from './components/GiftGrid'

export const GifExpertApp = () => {
    const [categories, setCategories] = useState([''])
    return (
        <>
        <h2 className="animate__bounceIn">Get Gift App</h2>
        <AddCategory setCategories={ setCategories }/>
        <hr />
       <ol>
           {
                categories.map( category =>(
                    <GiftGrid 
                    key = {category}
                    category={category} />
                )  
               )

           }
       </ol>
        </>
    )
}

