import { makeObservable, observable, action, computed } from 'mobx'

export default class Product {

    searchText = ''

    items = [
        { id: 1, name: 'Coffee', cost: 100 },
        { id: 2, name: 'Cake', cost: 80 },
        { id: 3, name: 'Pasta', cost: 50 }
    ]

    constructor() {
        makeObservable(this, {
            searchText: observable,
            items: observable,
            filterProducts: action,
            filtered: computed
        })
    }

    filterProducts(text) {
        this.searchText = text
    }

    get filtered() {
        const re = new RegExp(this.searchText, 'i')
        return this.items.filter(product => re.test(product.name))
    }
}