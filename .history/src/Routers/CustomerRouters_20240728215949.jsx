import React from 'react'
import { Route, Routes } from 'react-router-dom'

const CustomerRouters = () => {
  return (
    <div>
        <div>

        </div>
        <Routes>
            <Route path='/' element={<Home}></Route>
        </Routes>
    </div>
  )
}

export default CustomerRouters