import React, { useState } from 'react'

const ProductForm = ({ products }) => {

    const [name, setName] = useState('')
    const [cost, setCost] = useState('')
    const onAdd = (e) => {
        e.preventDefault()
        products.addProduct(name, cost)
        setName('')
        setCost('')
    }

    return (
        <form>
            <div>
                <label>Name: </label>
                <input value={name} onChange={(e) => { setName(e.target.value) }} />
            </div>
            <div>
                <label>Cost: </label>
                <input type='number' value={cost} onChange={(e) => { setCost(e.target.value) }} />
            </div>
            <div>
                <button onClick={onAdd}>Add</button>
            </div>
        </form>
    )
}

export default ProductForm