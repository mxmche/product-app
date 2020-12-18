import React from 'react'
import ProductList from './ProductList'
import ProductForm from './ProductForm'

const ProductView = ({ products, cart }) => {
    return (
        <>
            <ProductList products={products} cart={cart} />
            <ProductForm products={products} />
        </>
    )
}

export default ProductView