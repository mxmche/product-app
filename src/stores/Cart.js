import { makeObservable, observable, computed, action } from 'mobx'

export default class Cart {

    orders = []

    constructor() {
        makeObservable(this, {
            orders: observable,
            totalSum: computed,
            totalCount: computed,
            addToCart: action,
            deleteOrder: action
        })
    }

    get totalSum() {
        let sum = 0

        this.orders.forEach(order => {
            sum += order.cost * order.count
        })

        return sum
    }

    get totalCount() {
        let count = 0

        this.orders.forEach(order => {
            count += order.count
        })

        return count
    }

    addToCart(item) {
        const existedIndex = this.orders.findIndex(order => order.id === item.id)

        if (existedIndex > -1) {
            this.orders[existedIndex].count++
        } else {
            this.orders.push({ count: 1, ...item })
        }
    }

    deleteOrder(id) {
        const index = this.orders.findIndex(order => order.id === id)
        this.orders.splice(index, 1)
    }
}