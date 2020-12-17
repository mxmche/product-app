import ProductView from './components/ProductView'
import OrderList from './components/OrderList'
import Filters from './components/Filters'
import Cart from './stores/Cart'
import Product from './stores/Product'

const cart = new Cart()
const productStore = new Product()

const App = () => {
    return (
        <>
            <Filters products={productStore} />
            <hr/>
            <ProductView products={productStore} cart={cart} />
            <hr/>
            <OrderList cart={cart} />
        </>
    )
}

export default App;
