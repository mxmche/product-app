import React from 'react'
import { observer } from 'mobx-react'
import { v4 as uuidv4 } from 'uuid'

const OrderList = observer(({ cart }) => {
    if (cart.orders.length > 0) {
        return (
            <>
                <div>{cart.orders.length} orders in cart.</div>
                <ol>
                    {cart.orders.map(item => <li key={uuidv4()}>{item.name} {item.count ? `x${item.count}` : ''}</li>)}
                </ol>
                <div><b>Total</b>: {cart.total}</div>
            </>
        )
    }

    return null
})

export default OrderList