import React from 'react'
import { Route, Routes } from 'react-router-dom'
import HomePage from '../customer/pages/HomePage/HomePage'
import { Cart } from '../customer/components/Cart/Cart'
import Navigation from '../customer/components/Navigation/Navigation'
import Footer from '../customer/components/Footer/Footer'

const CustomerRouters = () => {
    return (
        <div>
            <div>
                <Navigation />
            </div>
            <Routes>
                <Route path='/' element={<HomePage />}></Route>
                <Route path='/cart' element={<Cart />}></Route>
                <Route path='/:levelOne/:levelTwo/:' element={<Cart />}></Route>


                {/* <HomePage/> */}
                {/* <Product/> */}
                {/* <ProductDetails/> */}
                {/* <Cart/> */}
                {/* <Checkout/> */}
                {/* <Order/> */}
                {/* <OrderDetails/> */}
            </Routes>
            <div>
                <Footer />
            </div>
        </div>
    )
}

export default CustomerRouters