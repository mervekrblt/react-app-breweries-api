import React from 'react'

const ItemCard = ({ item }) => {
    // console.log(item)
    // This console.log returns 20 objects (those come from item.js)
    return (
        <div className="card">
            <h1 >{ item.name }</h1>
            <h1> { item.street } </h1>
        </div>
    )
}

export default ItemCard
