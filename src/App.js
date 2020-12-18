import { configure } from 'mobx'
import ProductView from './components/ProductView'
import OrderList from './components/OrderList'
import Filters from './components/Filters'
import Cart from './stores/Cart'
import Product from './stores/Product'

configure({ enforceActions: 'always' })

const cart = new Cart()
const productStore = new Product()

const App = () => {
    return (
        <div style={{ margin: '0 auto', width: '50%' }}>
            <Filters products={productStore} />
            <ProductView products={productStore} cart={cart} />
            <OrderList cart={cart} />
        </div>
    )
}

export default App;
