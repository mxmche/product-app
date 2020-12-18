import React from 'react'
import { observer } from 'mobx-react'
import ProductItem from './ProductItem'

const ProductList = observer(({ products, cart }) => {
    return (
        <table style={{ marginTop: '10px' }}>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Cost</th>
                </tr>
            </thead>
            <tbody>
                {products.filtered.map(item => <ProductItem key={item.id} item={item} cart={cart} /> )}
            </tbody>
        </table>
    )
})

export default ProductList