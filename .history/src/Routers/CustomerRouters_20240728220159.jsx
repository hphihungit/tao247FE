import React from 'react'
import { Route, Routes } from 'react-router-dom'
import HomePage from '../customer/pages/HomePage/HomePage'
import { Cart } from '../customer/components/Cart/Cart'
import Navigation from '../customer/components/Navigation/Navigation'

const CustomerRouters = () => {
    return (
        <div>
            <div>
                <Navigation />
            </div>
            <Routes>
                <Route path='/' element={<HomePage />}></Route>
                <Route path='/cart' element={<Cart />}></Route>
            </Routes>
        </div>
    )
}

export default CustomerRouters