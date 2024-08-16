export const navigation = {
    categories: [
      {
        id: 'iphone',
        name: 'iPhone',
        featured: [
          {
            name: 'iPhone 15 Pro Max',
            href: '/',
            imageSrc: './images/iphone1.jpg',
            imageAlt: 'Models sitting back to back, wearing Basic Tee in black and bone.',
          },
          {
            name: 'iPhone 15 Pro',
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
              { name: 'Hỗ Trợ iPhone', id: '#' },
              { name: 'AppleCare+ cho iPhone', id: '#' },
              { name: 'Xem Trước iOS 18', id: '#' },
              { name: 'Các Ứng Dụng Của Apple', id: '#' },
              { name: 'Apple Intelligence', id: '#' },
              { name: 'Icloud+', id: '#' },
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