import React from 'react'

const Filters = (props) => {
    const onFilter = ({ target: { value } }) => {
        props.products.filterProducts(value)
    }

    return (
        <>
            <label>Search: </label>
            <input onChange={onFilter} />
        </>
    )
}

export default Filters