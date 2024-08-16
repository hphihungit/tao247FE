import React from 'react'

const AddressCard = () => {
    return (
        <div>
            <div className='space-y-3'>
                <div className='space-y-1'>
                    <div className='space-y-1'>
                        <p className='font-semibold'>Địa chỉ</p>
                        <p>123 Lý Nhân Tông, Hương Chữ, Hương Trà, Thừa Thiên Huế</p>
                    </div>
                    <p className='font-semibold'>Họ và Tên</p>
                    <p>Hoàng Phi Hùng</p>
                </div>
                <div className='space-y-1'>
                    <p className='font-semibold'>Số điện thoại</p>
                    <p>12312312312</p>
                </div>
            </div>
        </div>
    )
}

export default AddressCard