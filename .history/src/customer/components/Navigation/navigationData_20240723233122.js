export const navigation = {
    categories: [
      {
        id: 'iphone',
        name: 'iPhone',
        featured: [
          {
            name: 'New Arrivals',
            href: '/',
            imageSrc: './images/iphone1.jpg',
            imageAlt: 'Models sitting back to back, wearing Basic Tee in black and bone.',
          },
          {
            name: 'Basic Tees',
            href: '/',
            imageSrc: './images/iphone1.jpg',
            imageAlt: 'Close up of Basic Tee fall bundle with off-white, ochre, olive, and black tees.',
          },
        ],
        sections: [
          {
            id: 'discover',
            name: 'Khám Phá Tất Cả iPhone',
            items: [
              { name: 'iPhone 15 Pro Max', id:"iphone15_pm", href: `{women/clothing/tops}` },
              { name: 'iPhone 15 Pro', id:"iphone15_p", href: '#' },
              { name: 'iPhone 15', id: 'women_jeans' },
              { name: 'iPhone 14', id: 'lengha_choli' },
              { name: 'iPhone 13', id: 'lengha_choli' },
              { name: 'iPhone 12', id: 'lengha_choli' },
              // { name: 'Sweaters', id: 'sweater' },
              // { name: 'T-Shirts', id: 't-shirt' },
              // { name: 'Jackets', id: 'jacket' },
              // { name: 'Gouns', id: 'gouns' },
              // { name: 'Sarees', id: 'saree' },
              // { name: 'Kurtas', id: 'kurtas' },
            ],
          },
          {
            id: 'buy',
            name: 'Mua iPhone',
            items: [
              { name: 'Mua iPhone', id: 'watch' },
              { name: 'Phụ Kiện iPhone', id: 'wallet' },
              { name: 'Ưu Đãi Cho Sinh Viên Đại Học', id: 'wallet' },
              // { name: 'Bags', id: 'bag' },
              // { name: 'Sunglasses', id: 'sunglasse' },
              // { name: 'Hats', id: 'hat' },
              // { name: 'Belts', id: 'belt' },
            ],
          },
          {
            id: 'learn',
            name: 'Tìm hiểu về iPhone',
            items: [
              { name: 'Full Nelson', id: '#' },
              { name: 'My Way', id: '#' },
              { name: 'Re-Arranged', id: '#' },
              { name: 'Counterfeit', id: '#' },
              { name: 'Significant Other', id: '#' },
            ],
          },
        ],
      },
      {
        id: 'men',
        name: 'Men',
        featured: [
          {
            name: 'New Arrivals',
            id: '#',
            imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-04-detail-product-shot-01.jpg',
            imageAlt: 'Drawstring top with elastic loop closure and textured interior padding.',
          },
          {
            name: 'Artwork Tees',
            id: '#',
            imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-02-image-card-06.jpg',
            imageAlt:
              'Three shirts in gray, white, and blue arranged on table with same line drawing of hands and shapes overlapping on front of shirt.',
          },
        ],
        sections: [
          {
            id: 'clothing',
            name: 'Clothing',
            items: [
              { name: 'Mens Kurtas', id: 'mens_kurta' },
              { name: 'Shirt', id: 'shirt' },
              { name: 'Men Jeans', id: 'men_jeans' },
              { name: 'Sweaters', id: '#' },
              { name: 'T-Shirts', id: 't-shirt' },
              { name: 'Jackets', id: '#' },
              { name: 'Activewear', id: '#' },
              
            ],
          },
          {
            id: 'accessories',
            name: 'Accessories',
            items: [
              { name: 'Watches', id: '#' },
              { name: 'Wallets', id: '#' },
              { name: 'Bags', id: '#' },
              { name: 'Sunglasses', id: '#' },
              { name: 'Hats', id: '#' },
              { name: 'Belts', id: '#' },
            ],
          },
          {
            id: 'brands',
            name: 'Brands',
            items: [
              { name: 'Re-Arranged', id: '#' },
              { name: 'Counterfeit', id: '#' },
              { name: 'Full Nelson', id: '#' },
              { name: 'My Way', id: '#' },
            ],
          },
        ],
      },
    ],
    pages: [
      { name: 'Company', id: '/' },
      { name: 'Stores', id: '/' },
    ],
  }