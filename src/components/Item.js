import React from 'react'
import ItemCard from './ItemCard';

const Card = ({ items }) => {
    // console.log(items)
    // This console.log returns an array which includes 20 items
    return (
            <section className="items">

                {items.map(item => (
                    <ItemCard item={item} key={item.id}>
                    </ItemCard>
                ))}
            </section>
    )
}

export default Card
