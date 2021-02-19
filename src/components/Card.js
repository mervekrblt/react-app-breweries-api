import React from 'react'

const Card = ({items}) => {
    return (
        <div>
            <p>{ items.map(item => (
                <h1>{ item.name }</h1>
            )) }</p>
        </div>
    )
}

export default Card
