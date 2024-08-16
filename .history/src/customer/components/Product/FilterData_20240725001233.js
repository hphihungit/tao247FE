export const filters = [
    {
        id: 'price',
        name: 'Price',
        options: [
            { value: 'white', label: 'White', checked: false },
            { value: 'beige', label: 'Beige', checked: false },
            { value: 'blue', label: 'Blue', checked: true },
            { value: 'brown', label: 'Brown', checked: false },
            { value: 'green', label: 'Green', checked: false },
            { value: 'purple', label: 'Purple', checked: false },
        ],
    },
    {
        id: 'capacity',
        name: 'Capacity',
        options: [
            { value: '512', label: '512GB'},
            { value: '256', label: '256GB'},
            { value: '128', label: '12L'},
            { value: '18l', label: '18L', },
            { value: '20l', label: '20L', },
            { value: '40l', label: '40L', },
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