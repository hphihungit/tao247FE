import React from 'react'
import AddressCard from '../AddressCard/AddressCard'

const OrderDetails = () => {
    return (
        <div className='px:5 lg:px-20'>
            <div>
                <h1 className='font-semibold textlg'>Địa chỉ giao hàng</h1>
                <AddressCard />
            </div>
        </div>
    )
}

export default OrderDetails