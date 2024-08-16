export const navigation = {
  categories: [
    // Mac
    {
      id: 'mac',
      name: 'Mac',
      featured: [
        {
          name: 'Macbook Air',
          id: '#',
          imageSrc: '/images/mac1.jpg',
          imageAlt: 'Drawstring top with elastic loop closure and textured interior padding.',
        },
        {
          name: 'Macbook Pro',
          id: '#',
          imageSrc: '/images/mac2.jpg',
          imageAlt:
            'Three shirts in gray, white, and blue arranged on table with same line drawing of hands and shapes overlapping on front of shirt.',
        },
      ],
      sections: [
        {
          id: 'discoer',
          name: 'Khám Phá Tất Cả Mac',
          items: [
            { name: 'Macbook Air', id: "mac_air", href: `{women/clothing/tops}` },
            { name: 'Macbook Pro', id: "mac_pro", href: '#' },
            // { name: 'Mens Kurtas', id: 'mens_kurta' },
            // { name: 'Shirt', id: 'shirt' },
            // { name: 'Men Jeans', id: 'men_jeans' },
            // { name: 'Sweaters', id: '#' },
            // { name: 'T-Shirts', id: 't-shirt' },
            // { name: 'Jackets', id: '#' },
            // { name: 'Activewear', id: '#' },

          ],
        },
        {
          id: 'buy',
          name: 'Mua Mac',
          items: [
            { name: 'Mua Mac', id: 'watch' },
            { name: 'Phụ Kiện Mac', id: 'wallet' },
            { name: 'Ưu Đãi Cho Sinh Viên Đại Học', id: 'wallet' },
            // { name: 'Sunglasses', id: '#' },
            // { name: 'Hats', id: '#' },
            // { name: 'Belts', id: '#' },
          ],
        },
        {
          id: 'learn',
          name: 'Tìm Hiểu Thêm Về Mac',
          items: [
            { name: 'Hỗ Trợ Mac', id: '#' },
            { name: 'AppleCare+ cho Mac', id: '#' },
            { name: 'Xem Trước macOS Sequoia', id: '#' },
            { name: 'Các Ứng Dụng Của Apple', id: '#' },
            { name: 'Apple Intelligence', id: '#' },
            { name: 'ICloud+', id: '#' },
            // { name: 'Re-Arranged', id: '#' },
            // { name: 'Counterfeit', id: '#' },
            // { name: 'Full Nelson', id: '#' },
            // { name: 'My Way', id: '#' },
          ],
        },
      ],
    },

    // iPhone
    {
      id: 'iphone',
      name: 'iPhone',
      featured: [
        {
          name: 'iPhone 15 Pro Max',
          href: '/',
          imageSrc: '/images/sp_iphone15pm.jpg',
          imageAlt: 'Models sitting back to back, wearing Basic Tee in black and bone.',
        },
        {
          name: 'iPhone 15 Pro',
          href: '/',
          imageSrc: '/images/iphone1.jpg',
          imageAlt: 'Close up of Basic Tee fall bundle with off-white, ochre, olive, and black tees.',
        },
      ],
      sections: [
        {
          id: 'discover',
          name: 'Khám Phá Tất Cả iPhone',
          items: [
            { name: 'iPhone 15 Pro Max', id: "iphone15", href: `{women/clothing/tops}` },
            { name: 'iPhone 15 Pro', id: "iphone15", href: '#' },
            { name: 'iPhone 15', id: 'iphone15' },
            { name: 'iPhone 14', id: 'iphone14' },
            { name: 'iPhone 13', id: 'iphone13' },
            { name: 'iPhone 12', id: 'iphone12' },
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
          name: 'Tìm Hiểu Thêm Về iPhone',
          items: [
            { name: 'Hỗ Trợ iPhone', id: '#' },
            { name: 'AppleCare+ cho iPhone', id: '#' },
            { name: 'Xem Trước iOS 18', id: '#' },
            { name: 'Các Ứng Dụng Của Apple', id: '#' },
            { name: 'Apple Intelligence', id: '#' },
            { name: 'ICloud+', id: '#' },
          ],
        },
      ],
    },

    // iPad
    {
      id: 'iPad',
      name: 'iPad',
      featured: [
        {
          name: 'iPad Pro',
          href: '/',
          imageSrc: '/images/ipad1.jpg',
          imageAlt: 'Models sitting back to back, wearing Basic Tee in black and bone.',
        },
        {
          name: 'iPad Air',
          href: '/',
          imageSrc: '/images/ipad2.jpg',
          imageAlt: 'Close up of Basic Tee fall bundle with off-white, ochre, olive, and black tees.',
        },
      ],
      sections: [
        {
          id: 'discover',
          name: 'Khám Phá Tất Cả iPad',
          items: [
            { name: 'iPad Pro', id: "ipad_pro", href: `{women/clothing/tops}` },
            { name: 'iPad Air', id: "ipad_air", href: '#' },
            { name: 'iPad', id: 'women_jeans' },
            { name: 'iPad Mini', id: 'lengha_choli' },
            { name: 'Apple Pencil', id: 'lengha_choli' },
            { name: 'Bàn phím', id: 'lengha_choli' },
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
          name: 'Mua iPad',
          items: [
            { name: 'Mua iPad', id: 'watch' },
            { name: 'Phụ Kiện iPad', id: 'wallet' },
            { name: 'Ưu Đãi Cho Sinh Viên Đại Học', id: 'wallet' },
            // { name: 'Bags', id: 'bag' },
            // { name: 'Sunglasses', id: 'sunglasse' },
            // { name: 'Hats', id: 'hat' },
            // { name: 'Belts', id: 'belt' },
          ],
        },
        {
          id: 'learn',
          name: 'Tìm Hiểu Thêm Về iPad',
          items: [
            { name: 'Hỗ Trợ iPad', id: '#' },
            { name: 'AppleCare+ cho iPad', id: '#' },
            { name: 'Xem Trước iPadOS 18', id: '#' },
            { name: 'Các Ứng Dụng Của Apple', id: '#' },
            { name: 'Apple Intelligence', id: '#' },
            { name: 'ICloud+', id: '#' },
          ],
        },
      ],
    },

    // Phụ kiện
    {
      id: 'accessory',
      name: 'Phụ Kiện',
      featured: [
        {
          name: 'AirPod 3',
          id: '#',
          imageSrc: '/images/airpod.png',
          imageAlt: 'Drawstring top with elastic loop closure and textured interior padding.',
        },
        {
          name: 'Ốp lưng',
          id: '#',
          imageSrc: '/images/op.png',
          imageAlt:
            'Three shirts in gray, white, and blue arranged on table with same line drawing of hands and shapes overlapping on front of shirt.',
        },
      ],
      sections: [
        // {
        //   id: 'discoer',
        //   name: 'Khám Phá Tất Cả Mac',
        //   items: [
        //     { name: 'Macbook Air', id: "mac_air", href: `{women/clothing/tops}` },
        //     { name: 'Macbook Pro', id: "mac_pro", href: '#' },
        //     // { name: 'Mens Kurtas', id: 'mens_kurta' },
        //     // { name: 'Shirt', id: 'shirt' },
        //     // { name: 'Men Jeans', id: 'men_jeans' },
        //     // { name: 'Sweaters', id: '#' },
        //     // { name: 'T-Shirts', id: 't-shirt' },
        //     // { name: 'Jackets', id: '#' },
        //     // { name: 'Activewear', id: '#' },

        //   ],
        // },
        {
          id: 'buy',
          name: 'Mua Phụ Kiện',
          items: [
            { name: 'Mua Tất Cả Phụ Kiện', id: 'watch' },
            { name: 'Mac', id: 'watch' },
            { name: 'iPad', id: 'wallet' },
            { name: 'iPhone', id: 'wallet' },
            // { name: 'Sunglasses', id: '#' },
            // { name: 'Hats', id: '#' },
            // { name: 'Belts', id: '#' },
          ],
        },
        {
          id: 'discover',
          name: 'Khám Phá Phụ Kiện',
          items: [
            { name: 'Phụ Kiện Chính Hãng', id: '#' },
            { name: 'Sản Phẩm', id: '#' },
            { name: 'Apple Intelligence', id: '#' },
            { name: 'ICloud+', id: '#' },
            // { name: 'Re-Arranged', id: '#' },
            // { name: 'Counterfeit', id: '#' },
            // { name: 'Full Nelson', id: '#' },
            // { name: 'My Way', id: '#' },
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