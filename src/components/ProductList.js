import React from 'react'
import { observer } from 'mobx-react'
import { v4 as uuidv4 } from 'uuid'

import ProductItem from './ProductItem'

const ProductList = observer(({ products, cart }) => {
    return (
        <>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Cost</th>
                    </tr>
                </thead>
                <tbody>
                    {products.map(item => <ProductItem item={item} cart={cart} /> )}
                </tbody>
            </table>

            <div>{cart.orders.length} orders in cart.</div>
            {cart.orders.map(item => <div key={uuidv4()}>{item.name}</div>)}
            <div>Total: {cart.total}</div>
        </>
    )
})

export default ProductList