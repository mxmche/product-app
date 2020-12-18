import React from 'react'

const Filters = ({ products }) => {

    const onFilter = ({ target: { value } }) => {
        products.filterProducts(value)
    }

    return (
        <input placeholder='Type text to search...' onChange={onFilter} />
    )
}

export default Filters