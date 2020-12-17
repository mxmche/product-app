import { makeObservable, observable, computed, action } from 'mobx'
import ProductList from './components/ProductList'

const products = [
    { id: 1, name: 'Coffee', cost: 100 },
    { id: 2, name: 'Cake', cost: 80 },
    { id: 3, name: 'Pasta', cost: 50 }
]

class Cart {

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
            const newOrder = { count: 1, ...item }
            this.orders.push(newOrder)
        }
    }
}

const cart = new Cart()

function App() {
  return (
    <div>
        <ProductList products={products} cart={cart} />
    </div>
  );
}

export default App;
