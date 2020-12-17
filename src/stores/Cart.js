import { makeObservable, observable, computed, action } from 'mobx'

export default class Cart {

    orders = []

    constructor() {
        makeObservable(this, {
            orders: observable,
            total: computed,
            addToCart: action
        })
    }

    get total() {
        let sum = 0

        this.orders.forEach(order => {
            sum += order.cost * order.count
        })

        return sum
    }

    addToCart(item) {
        const existedIndex = this.orders.findIndex(order => order.id === item.id)

        if (existedIndex > -1) {
            this.orders[existedIndex].count++
        } else {
            this.orders.push({ count: 1, ...item })
        }
    }
}