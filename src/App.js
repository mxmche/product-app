import ProductList from './components/ProductList'
import OrderList from './components/OrderList'
import Cart from './stores/Cart'

const products = [
    { id: 1, name: 'Coffee', cost: 100 },
    { id: 2, name: 'Cake', cost: 80 },
    { id: 3, name: 'Pasta', cost: 50 }
]

const cart = new Cart()

function App() {
    return (
        <>
            <ProductList products={products} cart={cart} />
            <OrderList cart={cart} />
        </>
    )
}

export default App;
