import React from 'react'

export default function ProductItem(props) {
    const onAdd = () => {
        props.cart.addToCart(props.item)
    }

    return (
        <tr key={props.item.id}>
            <td>{props.item.name}</td>
            <td>{props.item.cost}</td>
            <td><button onClick={onAdd}>Add to cart</button></td>
        </tr>
    )
}