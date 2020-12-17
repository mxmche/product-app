import React from 'react'

const Filters = ({ products }) => {

    const onFilter = ({ target: { value } }) => {
        products.filterProducts(value)
    }

    return (
        <>
            <label>Search: </label>
            <input onChange={onFilter} />
        </>
    )
}

export default Filters