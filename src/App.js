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
        return this.orders.reduce((prev, current) => prev + current.cost, 0)
    }

    addToCart(item) {
        this.orders.push(item)
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
