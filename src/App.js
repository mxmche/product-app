import ProductList from './components/ProductList'
import OrderList from './components/OrderList'
import Filters from './components/Filters'
import Cart from './stores/Cart'
import Product from './stores/Product'

const cart = new Cart()
const productStore = new Product()

function App() {
    return (
        <>
            <Filters products={productStore} />
            <ProductList products={productStore} cart={cart} />
            <OrderList cart={cart} />
        </>
    )
}

export default App;
