import React from 'react'

const ProductItem = ({ item, cart }) => {

    const onAdd = () => {
        cart.addToCart(item)
    }

    return (
        <tr key={item.id}>
            <td>{item.name}</td>
            <td>{item.cost}</td>
            <td><button onClick={onAdd}>Add to cart</button></td>
        </tr>
    )
}

export default ProductItem