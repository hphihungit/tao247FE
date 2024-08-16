export const filters = [
    {
        id: 'price',
        name: 'Price',
        options: [
            { value: '0-5', label: 'Dưới 5 triệu', checked: false },
            { value: '5-10', label: '5 - 10 triệu', checked: false },
            { value: '10-15', label: '10 - 15 triệu', checked: true },
            { value: '15-20', label: '15 - 20 triệu', checked: false },
            { value: '20-25', label: '20 - 25 triệu', checked: false },
            { value: '25-100', label: 'Trên 20 triệu', checked: false },
        ],
    },
    {
        id: 'capacity',
        name: 'Capacity',
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
]