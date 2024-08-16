export const filters = [
    {
        id: 'capacity',
        name: 'Dung Lượng',
        options: [
            { value: '512', label: '512GB'},
            { value: '256', label: '256GB'},
            { value: '128', label: '128GB'},
            { value: '64', label: '64GB'},
            { value: '32', label: '32GB'},
        ],
    },
    // {
    //   id: 'category',
    //   name: 'Category',
    //   options: [
    //     { value: 'new-arrivals', label: 'New Arrivals', checked: false },
    //     { value: 'sale', label: 'Sale', checked: false },
    //     { value: 'travel', label: 'Travel', checked: true },
    //     { value: 'organization', label: 'Organization', checked: false },
    //     { value: 'accessories', label: 'Accessories', checked: false },
    //   ],
    // },
];

export const singleFilter = [
    {
        id: 'price',
        name: 'Giá',
        options: [
            { value: '0-5000000', label: 'Dưới 5 triệu'},
            { value: '5000000-10000000', label: '5 - 10 triệu'},
            { value: '10000000-15000000', label: '10 - 15 triệu'},
            { value: '15000000-20000000', label: '15 - 20 triệu'},
            { value: '20000000-25000000', label: '20 - 25 triệu'},
            { value: '25000000-10000000000', label: 'Trên 25 triệu'},
        ],
    },
    {
        id: 'stock',
        name: 'Hàng trong kho',
        options: [
            { value: 'in_stock', label: 'Còn hàng'},
            { value: 'out_of_stock', label: 'Hết hàng'},
        ],
    },
]