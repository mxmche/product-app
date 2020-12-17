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

            {cart.orders.length > 0 &&
                <>
                    <div>{cart.orders.length} orders in cart.</div>
                    <ol>
                        {cart.orders.map(item => <li key={uuidv4()}>{item.name} {item.count ? `X${item.count}` : ''}</li>)}
                    </ol>
                    <div><b>Total</b>: {cart.total}</div>
                </>
            }
        </>
    )
})

export default ProductList