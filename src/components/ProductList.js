import React from 'react'
import { observer } from 'mobx-react'
import ProductItem from './ProductItem'

const ProductList = observer(({ products, cart }) => {
    return (
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
    )
})

export default ProductList