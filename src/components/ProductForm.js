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
        <form style={{ marginTop: '10px' }}>
            <div>
                <input
                    placeholder='Enter name'
                    value={name}
                    onChange={(e) => { setName(e.target.value) }}
                    style={{ marginBottom: '10px' }}
                />
            </div>
            <div>
                <input
                    type='number'
                    placeholder='Enter cost'
                    value={cost}
                    onChange={(e) => { setCost(e.target.value) }}
                    style={{ marginBottom: '10px' }}
                />
            </div>
            <div>
                <button onClick={onAdd}>Add</button>
            </div>
        </form>
    )
}

export default ProductForm