import { makeObservable, observable, computed, action } from 'mobx'

export default class Cart {

    tip = 0

    orders = []

    constructor() {
        makeObservable(this, {
            orders: observable,
            tip: observable,
            totalSum: computed,
            totalCount: computed,
            addToCart: action,
            deleteOrder: action,
            applyTip: action
        })
    }

    get totalSum() {
        let sum = 0

        this.orders.forEach(order => {
            sum += order.cost * order.count
        })

        if (this.tip > 0) {
            const tip = sum * this.tip
            sum += tip
        }

        return sum
    }

    get totalCount() {
        let count = 0

        this.orders.forEach(order => {
            count += order.count
        })

        return count
    }

    applyTip(needToAdd) {
        this.tip = needToAdd ? 0.1 : 0
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