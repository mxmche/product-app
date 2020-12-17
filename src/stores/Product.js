import { makeObservable, observable, action, computed } from 'mobx'
import { v4 as uuidv4 } from 'uuid'

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
            addProduct: action,
            filtered: computed
        })
    }

    filterProducts(text) {
        this.searchText = text
    }

    addProduct(name, cost) {
        if (name && cost) {
            this.items.push({
                id: uuidv4(),
                name,
                cost: parseInt(cost)
            })
        } else {
            alert('Enter name and cost both')
        }
    }

    get filtered() {
        const re = new RegExp(this.searchText, 'i')
        return this.items.filter(product => re.test(product.name))
    }
}