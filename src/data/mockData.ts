import { Product, NewsArticle } from "@/types";

export const mockProducts: Product[] = [
  {
    id: "1",
    name: "Classic Jade Bangle",
    name_vi: "Vòng Ngọc Lục Bảo Cổ Điển",
    description: "Premium quality natural jade bangle with deep green color. A symbol of harmony and balance.",
    description_vi: "Vòng ngọc lục bảo chất lượng cao, màu xanh đậm tự nhiên. Biểu tượng của sự hài hòa và cân bằng.",
    price: 2500000,
    originalPrice: 3000000,
    images: [
      "https://mandalay.com.vn/wp-content/uploads/2023/06/v%C3%B2ng-ng%E1%BB%8Dc-b%C3%ADch.jpg", // Cận cảnh vòng ngọc xanh trên nền lụa
      "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?q=80&w=1000&auto=format&fit=crop"
    ],
    category: "bangle",
    material: "Natural Jade",
    color: "Green",
    size: "54mm",
    inStock: true,
    featured: true,
    createdAt: "2024-01-01"
  },
  {
    id: "2",
    name: "White Jade Lotus Bracelet",
    name_vi: "Vòng Tay Bạch Ngọc Liên Hoa",
    description: "Pure white jade beads with a silver lotus charm. Delicate and spiritual.",
    description_vi: "Hạt bạch ngọc tinh khiết kết hợp charm hoa sen bạc. Tinh tế và mang ý nghĩa tâm linh.",
    price: 1200000,
    images: [
      "https://images.unsplash.com/photo-1605100804763-247f67b3557e?q=80&w=1000&auto=format&fit=crop", // Vòng hạt trắng tinh khôi
    ],
    category: "bracelet",
    material: "White Jade, Silver",
    color: "White",
    size: "Adjustable",
    inStock: true,
    featured: true,
    createdAt: "2024-01-05"
  },
  {
    id: "3",
    name: "Lavender Jade Pendant",
    name_vi: "Mặt Dây Chuyền Ngọc Tím",
    description: "Rare lavender jade carved pendant. Elegant and unique.",
    description_vi: "Mặt dây chuyền ngọc tím quý hiếm được chạm khắc tinh xảo. Sang trọng và độc đáo.",
    price: 3500000,
    originalPrice: 3800000,
    images: [
      "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?q=80&w=1000&auto=format&fit=crop", // Mặt dây chuyền đá quý sang trọng
    ],
    category: "necklace",
    material: "Lavender Jade, 18k Gold",
    color: "Purple",
    size: "20mm",
    inStock: true,
    featured: false,
    createdAt: "2024-01-10"
  },
  {
    id: "4",
    name: "Imperial Green Ring",
    name_vi: "Nhẫn Ngọc Cẩm Thạch",
    description: "Imperial green jadeite ring set in gold. A statement piece.",
    description_vi: "Nhẫn ngọc cẩm thạch xanh lý bọc vàng. Một món trang sức đẳng cấp.",
    price: 5000000,
    images: [
      "https://images.unsplash.com/photo-1602173574767-37ac01994b2a?q=80&w=1000&auto=format&fit=crop", // Nhẫn đá quý xanh lục bảo
    ],
    category: "ring",
    material: "Jadeite, Gold",
    color: "Green",
    size: "US 6",
    inStock: true,
    featured: true,
    createdAt: "2024-01-12"
  },
  {
    id: "5",
    name: "Red Agate Bracelet",
    name_vi: "Vòng Tay Mã Não Đỏ",
    description: "Vibrant red agate beads for energy and vitality.",
    description_vi: "Hạt mã não đỏ rực rỡ mang lại năng lượng và sức sống.",
    price: 850000,
    images: [
      "https://images.unsplash.com/photo-1584302179602-e4c3d3fd629d?q=80&w=1000&auto=format&fit=crop", 
    ],
    category: "bracelet",
    material: "Red Agate",
    color: "Red",
    size: "16cm",
    inStock: true,
    featured: false,
    createdAt: "2024-01-15"
  },
  {
    id: "6",
    name: "Mixed Gemstone Mala",
    name_vi: "Chuỗi Hạt Đa Bảo",
    description: "A combination of various gemstones for holistic balance.",
    description_vi: "Sự kết hợp của nhiều loại đá quý giúp cân bằng toàn diện.",
    price: 1500000,
    images: [
      "https://images.unsplash.com/photo-1531995811006-35cb42e1a022?q=80&w=1000&auto=format&fit=crop", // Chuỗi hạt đa sắc thái đá tự nhiên
    ],
    category: "necklace",
    material: "Mixed Gemstones",
    color: "Multicolor",
    size: "108 beads",
    inStock: true,
    featured: true,
    createdAt: "2024-01-18"
  },
  {
    id: "7",
    name: "Yellow Jade Pi Xiu Ring",
    name_vi: "Nhẫn Tỳ Hưu Hoàng Ngọc",
    description: "Hand-carved yellow jade Pi Xiu for wealth and protection. Set in 14k gold-plated silver.",
    description_vi: "Tỳ Hưu hoàng ngọc chạm khắc tay giúp chiêu tài giữ lộc. Khung bạc mạ vàng 14k.",
    price: 1850000,
    images: ["https://images.unsplash.com/photo-1605100804763-247f67b3557e?q=80&w=1000&auto=format&fit=crop"],
    category: "ring",
    material: "Yellow Jade, Silver",
    color: "Yellow",
    size: "US 7",
    inStock: true,
    featured: true,
    createdAt: "2024-02-01"
  },
  {
    id: "8",
    name: "Double Circle Jade Pendant",
    name_vi: "Mặt Dây Chuyền Đồng Điếu Ngọc",
    description: "Classic 'Bi' disc jade pendant representing eternal wealth and smooth life.",
    description_vi: "Mặt dây chuyền đồng điếu ngọc cẩm thạch tượng trưng cho sự vẹn tròn và tài lộc thông suốt.",
    price: 950000,
    images: ["https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?q=80&w=1000&auto=format&fit=crop"],
    category: "necklace",
    material: "Green Jade",
    color: "Light Green",
    size: "25mm",
    inStock: true,
    featured: false,
    createdAt: "2024-02-05"
  },
  {
    id: "9",
    name: "Black Obsidian Protection Bracelet",
    name_vi: "Vòng Tay Đá Thạch Anh Đen",
    description: "Powerful grounding beads made of natural black obsidian with a gold-etched mantra bead.",
    description_vi: "Chuỗi hạt đá Obsidian đen tự nhiên giúp trừ tà, đi kèm một hạt khắc chú bình an mạ vàng.",
    price: 650000,
    images: ["https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?q=80&w=1000&auto=format&fit=crop"],
    category: "bracelet",
    material: "Obsidian",
    color: "Black",
    size: "10mm beads",
    inStock: true,
    featured: false,
    createdAt: "2024-02-10"
  },
  {
    id: "10",
    name: "Cylindrical Jade 'Lu Thong'",
    name_vi: "Lu Thống Ngọc Cẩm Thạch",
    description: "Unique cylindrical jade bead designed to balance energy and bring luck in career.",
    description_vi: "Lu thống ngọc cẩm thạch giúp điều hòa năng lượng, mang lại sự hanh thông trong công việc.",
    price: 1350000,
    images: ["https://images.unsplash.com/photo-1602173574767-37ac01994b2a?q=80&w=1000&auto=format&fit=crop"],
    category: "necklace",
    material: "Burmese Jadeite",
    color: "Variegated Green",
    size: "18mm",
    inStock: true,
    featured: true,
    createdAt: "2024-02-12"
  },
  {
    id: "11",
    name: "Rose Quartz Heart Necklace",
    name_vi: "Dây Chuyền Trái Tim Thạch Anh Hồng",
    description: "Gentle rose quartz carved into a heart shape. The stone of universal love.",
    description_vi: "Thạch anh hồng được chạm khắc hình trái tim dịu dàng. Viên đá của tình yêu và sự bao dung.",
    price: 720000,
    images: [
      "https://images.unsplash.com/photo-1621307372217-c3a44b363193?q=80&w=1000&auto=format&fit=crop", // Trái tim thạch anh hồng
      "https://images.unsplash.com/photo-1596462502278-27bfdc4023c6?q=80&w=1000&auto=format&fit=crop"
    ],
    category: "necklace",
    material: "Rose Quartz, 18k Rose Gold Plated",
    color: "Pink",
    size: "15mm",
    inStock: true,
    featured: false,
    createdAt: "2024-02-15"
  },
  {
    id: "12",
    name: "Men's Nephrite Jade Band",
    name_vi: "Nhẫn Bản Hẹ Ngọc Bích Nam",
    description: "Solid dark green nephrite jade band ring. Minimalist and masculine.",
    description_vi: "Nhẫn bản hẹ ngọc bích xanh đậm nguyên khối. Thiết kế tối giản, nam tính và mạnh mẽ.",
    price: 2800000,
    images: [
      "https://images.unsplash.com/photo-1605100804763-247f67b3557e?q=80&w=1000&auto=format&fit=crop"
    ],
    category: "ring",
    material: "Nephrite Jade",
    color: "Deep Green",
    size: "US 10",
    inStock: true,
    featured: false,
    createdAt: "2024-02-18"
  }
];

export const mockNews: NewsArticle[] = [
  {
    id: "1",
    title: "The Art of Jade Selection",
    title_vi: "Nghệ Thuật Chọn Ngọc",
    excerpt: "Learn how to identify quality jade and its characteristics.",
    excerpt_vi: "Học cách nhận biết ngọc chất lượng và đặc điểm của nó. Phân biệt ngọc A, B, C và cách bảo quản.",
    content: "Jade has been cherished for thousands of years...",
    content_vi: "Ngọc đã được trân quý hàng ngàn năm nay. Để chọn được một món trang sức ngọc ưng ý, bạn cần quan tâm đến 3 yếu tố chính: Màu sắc (Chủng), Độ trong (Thủy) và Độ hoàn thiện (Nhuận). Ngọc cẩm thạch loại A là ngọc hoàn toàn tự nhiên, không qua xử lý hóa chất, giữ trọn vẹn năng lượng và vẻ đẹp nguyên bản.",
    image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?q=80&w=1200&auto=format&fit=crop", 
    author: "Tiệm Ngọc Nhỏ",
    publishedAt: "2024-01-15",
    slug: "nghe-thuat-chon-ngoc"
  },
  {
    id: "2",
    title: "Meaning of Gemstone Colors",
    title_vi: "Ý Nghĩa Màu Sắc Đá Quý",
    excerpt: "Discover what each gemstone color represents in Feng Shui.",
    excerpt_vi: "Khám phá ý nghĩa của từng màu sắc đá quý trong Phong Thủy. Màu xanh cho sức khỏe, màu đỏ cho may mắn...",
    content: "Each color carries a different vibration...",
    content_vi: "Mỗi màu sắc mang một tần số rung động khác nhau. Màu xanh lục (Green) tượng trưng cho sự sinh sôi, sức khỏe và sự bình an. Màu trắng (White) đại diện cho sự tinh khiết, minh mẫn và khởi đầu mới. Trong khi đó, ngọc tím (Lavender) lại mang vẻ đẹp quý phái, tượng trưng cho trí tuệ và sự thấu hiểu tâm linh.",
    image: "https://images.unsplash.com/photo-1531995811006-35cb42e1a022?q=80&w=1200&auto=format&fit=crop",
    author: "Tiệm Ngọc Nhỏ",
    publishedAt: "2024-01-20",
    slug: "y-nghia-mau-sac-da-quy"
  },
  {
    id: "3",
    title: "New Collection Launch: Spring Lotus",
    title_vi: "Ra Mắt BST: Liên Hoa Mùa Xuân",
    excerpt: "Introducing our Spring collection inspired by blooming lotus.",
    excerpt_vi: "Giới thiệu bộ sưu tập Mùa Xuân lấy cảm hứng từ hoa sen nở rộ. Thiết kế tinh xảo kết hợp giữa bạc và ngọc.",
    content: "Our Spring collection features...",
    content_vi: "Bộ sưu tập Mùa Xuân của chúng tôi mang đến những thiết kế nhẹ nhàng, lấy hình tượng hoa sen thanh cao làm chủ đạo. Sự kết hợp giữa chất liệu bạc S925 tinh khiết và những viên bạch ngọc mềm mại tạo nên vẻ đẹp thanh lịch, phù hợp cho những dịp du xuân và lễ chùa đầu năm.",
    image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?q=80&w=1200&auto=format&fit=crop",
    author: "Tiệm Ngọc Nhỏ",
    publishedAt: "2024-02-01",
    slug: "ra-mat-bo-suu-tap-moi"
  },
  {
    id: "4",
    title: "How to Clean and Recharge Your Crystals",
    title_vi: "Cách Vệ Sinh và Thanh Tẩy Đá Năng Lượng",
    excerpt: "Keeping your gemstones clean physically and energetically is essential.",
    excerpt_vi: "Giữ cho đá quý của bạn luôn sạch sẽ về mặt vật lý và năng lượng là điều vô cùng quan trọng.",
    content: "After wearing your stones for a while, they might collect dust and absorb negative energy...",
    content_vi: "Sau một thời gian đeo, đá có thể bám bụi và hấp thụ năng lượng tiêu cực. Bạn có thể vệ sinh nhẹ nhàng bằng nước ấm và xà phòng trung tính. Để thanh tẩy năng lượng, hãy đặt trang sức dưới ánh trăng rằm hoặc sử dụng trầm hương để khói thơm bao quanh, giúp viên đá lấy lại sự thuần khiết.",
    image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?q=80&w=1200&auto=format&fit=crop",
    author: "Tiệm Ngọc Nhỏ",
    publishedAt: "2024-02-10",
    slug: "cach-ve-sinh-thanh-tay-da"
  },
  {
    id: "5",
    title: "The Legend of Pi Xiu",
    title_vi: "Truyền Thuyết Về Tỳ Hưu Tài Lộc",
    excerpt: "Why Pi Xiu is the most powerful symbol for wealth and luck in Asian culture.",
    excerpt_vi: "Tại sao Tỳ Hưu lại là linh vật quyền năng nhất để cầu tài lộc và may mắn trong văn hóa Á Đông.",
    content: "Pi Xiu is a mythical hybrid creature that has a voracious appetite for gold and silver...",
    content_vi: "Tỳ Hưu là linh vật chỉ ăn vàng bạc, châu báu mà không có hậu môn, tượng trưng cho việc giữ tiền của cho gia chủ. Đeo trang sức Tỳ Hưu bằng ngọc không chỉ giúp chiêu tài mà còn có tác dụng trấn trạch, trừ tà và mang lại sự bình an cho người sở hữu.",
    image: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?q=80&w=1200&auto=format&fit=crop",
    author: "Tiệm Ngọc Nhỏ",
    publishedAt: "2024-02-15",
    slug: "truyen-thuyet-ve-ty-huu"
  },
  {
    id: "6",
    title: "Gifts for Your Loved Ones",
    title_vi: "Quà Tặng Ý Nghĩa Từ Ngọc",
    excerpt: "Choosing the perfect jade jewelry for anniversaries or birthdays.",
    excerpt_vi: "Cách chọn món trang sức ngọc hoàn hảo làm quà tặng kỷ niệm hoặc sinh nhật cho người thân yêu.",
    content: "Giving jade is a way to wish someone health, safety, and prosperity...",
    content_vi: "Tặng ngọc là cách để gửi lời chúc sức khỏe, bình an và thịnh vượng đến người nhận. Một chiếc vòng tay bạch ngọc cho mẹ, hay một mặt dây chuyền bình an cho người thương đều mang những tâm tư tình cảm chân thành nhất, là món quà vĩnh cửu theo thời gian.",
    image: "https://images.unsplash.com/photo-1549439602-43ebca2327af?q=80&w=1200&auto=format&fit=crop",
    author: "Tiệm Ngọc Nhỏ",
    publishedAt: "2024-02-20",
    slug: "qua-tang-y-nghia-tu-ngoc"
  },
  {
    id: "7",
    title: "Jadeite vs Nephrite: The Differences",
    title_vi: "Phân Biệt Ngọc Cẩm Thạch và Ngọc Bích",
    excerpt: "Understanding the two main types of jade used in jewelry.",
    excerpt_vi: "Hiểu rõ sự khác biệt giữa hai loại ngọc phổ biến nhất: Ngọc Cẩm Thạch (Jadeite) và Ngọc Bích (Nephrite).",
    content: "Both are called 'Jade' but have different mineral compositions...",
    content_vi: "Dù cùng được gọi là 'Ngọc', nhưng Cẩm Thạch và Ngọc Bích có cấu tạo khoáng chất khác nhau. Cẩm Thạch (Jadeite) thường có màu sắc rực rỡ và độ trong cao hơn, trong khi Ngọc Bích (Nephrite) lại có độ bền cực cao và vẻ đẹp trầm mặc, bóng mịn như mỡ. Hiểu rõ sự khác biệt sẽ giúp bạn chọn được loại ngọc phù hợp với sở thích cá nhân.",
    image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?q=80&w=1200&auto=format&fit=crop",
    author: "Tiệm Ngọc Nhỏ",
    publishedAt: "2024-03-01",
    slug: "phan-biet-cam-thach-va-ngoc-bich"
  },
  {
    id: "8",
    title: "How to Measure Your Bangle Size",
    title_vi: "Hướng Dẫn Cách Đo Size Vòng Tay",
    excerpt: "A simple guide to finding your perfect bangle fit at home.",
    excerpt_vi: "Hướng dẫn đơn giản để bạn tự đo và chọn size vòng tay vừa vặn nhất ngay tại nhà.",
    content: "Finding the right bangle size is crucial for comfort...",
    content_vi: "Chọn đúng size vòng là yếu tố quan trọng nhất để đeo vòng thoải mái. Bạn có thể sử dụng thước dây để đo chu vi lòng bàn tay tại điểm rộng nhất, hoặc đo đường kính trong của chiếc vòng cũ đang đeo. Tiệm Ngọc Nhỏ luôn sẵn sàng tư vấn trực tuyến để giúp bạn tìm được size vòng 'chân ái'.",
    image: "https://images.unsplash.com/photo-1589128777073-263566ae5e4d?q=80&w=1200&auto=format&fit=crop",
    author: "Tiệm Ngọc Nhỏ",
    publishedAt: "2024-03-05",
    slug: "huong-dan-do-size-vong-tay"
  }
];