import React from 'react'
import { Route, Routes } from 'react-router-dom'
import HomePage from '../customer/pages/HomePage/HomePage'

const CustomerRouters = () => {
  return (
    <div>
        <div>

        </div>
        <Routes>
            <Route path='/' element={<HomePage/>}></Route>
            <Route path='/cart' element={<HomePage/>}></Route>
        </Routes>
    </div>
  )
}

export default CustomerRouters