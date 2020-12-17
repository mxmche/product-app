import React from 'react'
import { observer } from 'mobx-react'
import { v4 as uuidv4 } from 'uuid'

const OrderList = observer(({ cart }) => {

    const onClickTip = (e) => {
        cart.applyTip(e.target.checked)
    }

    if (cart.orders.length > 0) {
        return (
            <>
                <div>{cart.totalCount} order(s) in cart.</div>
                <input type='checkbox' onClick={onClickTip} />
                <label>Include tip?</label>
                <ol>
                    {cart.orders.map(item => {
                        return (
                            <li key={uuidv4()}>
                                {item.name} <button onClick={() => { cart.addCount(item.id) }}>+</button> {item.count} <button onClick={() => { cart.deleteCount(item.id) }}>-</button> {/*item.count ? `x${item.count}` : ''*/}
                                <button onClick={() => { cart.deleteOrder(item.id) }}>Delete</button>
                            </li>
                        )
                    })}
                </ol>
                <div><b>Total</b>: {cart.totalSum}</div>
            </>
        )
    }

    return null
})

export default OrderList