export const filters = [
    {
        id: 'price',
        name: 'Price',
        options: [
            { value: '0-2', label: 'Dưới 2 triệu', checked: false },
            { value: '2-4', label: '2 - 4 triệu', checked: false },
            { value: '4-7', label: '4- 7 triệu', checked: true },
            { value: '7-13', label: '7 - 13 triệu', checked: false },
            { value: '13-20', label: '13- 20 triệu', checked: false },
            { value: '20', label: 'Purple', checked: false },
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