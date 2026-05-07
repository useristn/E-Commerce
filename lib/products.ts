export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  categories: string[];
  image?: string;
  brand?: string;
}

// Parsed from the CSV file - only PRODUCT rows with prices
export const products: Product[] = [
  {
    id: "1",
    name: "Áo phông trơn cơ bản unisex",
    description: "Áo phông trơn cotton 100%, nhiều kích cỡ, dễ phối đồ phong cách tối giản, thanh lịch.",
    price: 120000,
    categories: [],
    image: "/images/ao-phong.jpg"
  },
  {
    id: "2",
    name: "Máy khuếch tán tinh dầu",
    description: "Máy khuếch tán tinh dầu lên đến bán kính 10m2, mùi hương vừa phải, nâng cấp chất lượng không gian sống của bạn!",
    price: 459000,
    categories: [],
    image: "/images/ML 1.jpg"
  },
  {
    id: "3",
    name: "Bình nước bằng thép không gỉ",
    description: "Bình nước chất liệu thép không gỉ bền bỉ, giữ nhiệt lên đến 24 tiếng.",
    price: 229000,
    categories: ["cho-dong-nghiep"],
    image: "/images/blx.jpg"
  },
  {
    id: "4",
    name: "Nón lưỡi trai trơn unisex",
    description: "Nón lưỡi trai trơn phong cách năng động tối giản, phù hợp cho cả nam và nữ.",
    price: 149000,
    categories: [],
    image: "/images/btre.jpg"
  },
  {
    id: "5",
    name: "Kính mắt tròn",
    description: "Gọng kính thanh lịch, thời trang kèm tròng chống tia UV, ánh sáng xanh.",
    price: 199000,
    categories: [],
    image: "/images/mat-kinh.jpg"
  },
  {
    id: "6",
    name: "Áo len đan trơn thanh lịch",
    description: "Form dáng rộng rãi, màu sắc thanh lịch, phong cách tối giản, dễ phối đồ.",
    price: 275000,
    categories: [],
    image: "/images/ao-len.jpg"
  },
  {
    id: "7",
    name: "Túi tote màu trơn tối giản",
    description: "Túi tote màu trơn tối giản dễ ứng dụng, phối đồ, tiện lợi.",
    price: 99000,
    categories: [],
    image: "/images/trop.jpg"
  },
  {
    id: "8",
    name: "Bình hoa gốm",
    description: "Bình hoa sứ tinh tế, cắm hoa nghệ thuật nâng cấp không gian cho ngôi nhà của bạn.",
    price: 270000,
    categories: [],
    image: "/images/cây 1.jpg"
  },
  {
    id: "9",
    name: "Nụ Gỗ khói thơm Trầm Hương",
    description: "Nụ Gỗ khói thơm Trầm Hương mang đến hương thơm dịu nhẹ, tinh tế từ nguồn nguyên liệu trầm hương tự nhiên.",
    price: 129000,
    categories: [],
    brand: "Healiverse",
    image: "/images/Nụ 1.jpg"
  },
  {
    id: "10",
    name: "Nụ Gỗ khói thơm Bách Xanh",
    description: "Nụ Gỗ khói thơm Bách Xanh mang đến trải nghiệm thư giãn tinh tế với hương thơm dịu nhẹ.",
    price: 129000,
    categories: [],
    image: "/images/Nụ 2.jpg"
  },
  {
    id: "11",
    name: "Sổ tay nhỏ Egg Coffee",
    description: "Sổ tay nhỏ Egg Coffee là lựa chọn hoàn hảo cho những ai yêu thích sự tinh tế trong từng chi tiết nhỏ.",
    price: 50000,
    categories: ["dip-tot-nghiep", "cho-dong-nghiep"],
    brand: "OHQUAO",
    image: "/images/SỔ OHQUAO 1.jpg"
  },
  {
    id: "12",
    name: "Sổ tay nhỏ Nước mía",
    description: "Sổ tay nhỏ Nước mía là lựa chọn hoàn hảo cho những ai yêu thích sự tiện lợi và phong cách.",
    price: 50000,
    categories: ["cho-dong-nghiep", "dip-tot-nghiep"],
    image: "/images/SỔ OHQUAO 2.jpg"
  },
  {
    id: "13",
    name: "Bánh kem Sugar Town mã 25",
    description: "Bánh kem tươi ngon từ Sugar Town",
    price: 299000,
    categories: ["dip-sinh-nhat"],
    image: "/images/SGT 1.jpg"
  },
  {
    id: "14",
    name: "Bánh kem Sugar Town mã 26",
    description: "Bánh kem tươi ngon từ Sugar Town",
    price: 349000,
    categories: ["dip-sinh-nhat"],
    image: "/images/SGT 2.jpg"
  },
  {
    id: "15",
    name: "Bánh kem Sugar Town mã 27",
    description: "Bánh kem tươi ngon từ Sugar Town",
    price: 349000,
    categories: ["dip-sinh-nhat"],
    brand: "Sugar Town",
    image: "/images/SGT 3.jpg"
  },
  {
    id: "16",
    name: "Bánh kem Sugar Town mã 28",
    description: "Bánh kem tươi ngon từ Sugar Town",
    price: 349000,
    categories: [],
    brand: "Sugar Town",
    image: "/images/SGT 4 Ktr.jpg"
  },
  {
    id: "17",
    name: "Bánh kem Sugar Town mã 29",
    description: "Bánh kem tươi ngon từ Sugar Town",
    price: 349000,
    categories: [],
    brand: "Sugar Town",
    image: "/images/SGT 5 ktr.jpg"
  },
  {
    id: "18",
    name: "Bánh kem Sugar Town mã 30",
    description: "Bánh kem tươi ngon từ Sugar Town",
    price: 349000,
    categories: ["dip-sinh-nhat"],
    brand: "Sugar Town",
    image: "/images/SGT 5 vlt.jpg"
  },
  {
    id: "19",
    name: "Bánh kem Bồng bềnh mã 1 - Cái lò nướng",
    description: "Bánh kem bồng bềnh tươi ngon",
    price: 349000,
    categories: ["dip-sinh-nhat"],
    brand: "Cái lò nướng",
    image: "/images/CLN 1.jpg"
  },
  {
    id: "20",
    name: "Bánh kem Bồng bềnh mã 2 - Cái lò nướng",
    description: "Bánh kem bồng bềnh tươi ngon",
    price: 349000,
    categories: ["dip-sinh-nhat"],
    brand: "Cái lò nướng",
    image: "/images/CLN 2.jpg"
  },
  {
    id: "21",
    name: "Bánh kem Tous les Jours vị Dâu",
    description: "Bánh kem vị dâu từ Tous les Jours",
    price: 399000,
    categories: ["dip-sinh-nhat"],
    brand: "TOUS les JOURS",
    image: "/images/TLJ 1.jpg"
  },
  {
    id: "22",
    name: "Bánh kem Tous les Jours vị Matcha",
    description: "Bánh kem vị matcha từ Tous les Jours",
    price: 399000,
    categories: ["dip-sinh-nhat"],
    brand: "TOUS les JOURS",
    image: "/images/TLJ 1 matcha.jpg"
  },
  {
    id: "23",
    name: "Bánh kem Tous les Jours vị Berries",
    description: "Bánh kem vị berries từ Tous les Jours",
    price: 399000,
    categories: ["dip-sinh-nhat"],
    brand: "TOUS les JOURS",
    image: "/images/TLJ 2.jpg"
  },
  {
    id: "24",
    name: "Bánh kem Tous les Jours vị Xoài",
    description: "Bánh kem vị xoài từ Tous les Jours",
    price: 399000,
    categories: ["dip-sinh-nhat"],
    brand: "TOUS les JOURS",
    image: "/images/TLJ 3.jpg"
  },
  {
    id: "25",
    name: "Lịch để bàn 2026 Crabit Calendar - Ngự Giá",
    description: "Lịch để bàn năm 2026 thiết kế đẹp mắt",
    price: 70000,
    categories: ["dip-le-tet"],
    brand: "Crabit",
    image: "/images/Crabit lịch 1.jpg"
  },
  {
    id: "26",
    name: "Lịch 2026 Con Ngựa lò xo treo tường Crabit",
    description: "Lịch treo tường 2026 Mã Đáo Thành Công",
    price: 99000,
    categories: ["dip-le-tet"],
    brand: "Crabit",
    image: "/images/Crabit lịch 2.jpg"
  },
  {
    id: "27",
    name: "Game Tết 2026 - Cờ cá ngựa Ngựa Non Háu Đá",
    description: "Boardgame vui nhộn cho ngày Tết",
    price: 149000,
    categories: ["dip-le-tet"],
    brand: "Crabit",
    image: "/images/Crabit bg.jpg"
  },
  {
    id: "28",
    name: "Sổ lịch Planner Coquette Limited Edition",
    description: "Sổ lịch planner thiết kế đẹp mắt",
    price: 149000,
    categories: ["dip-tot-nghiep", "cho-dong-nghiep"],
    brand: "Crabit",
    image: "/images/C Sổ 1.jpg"
  },
  {
    id: "29",
    name: "Sổ Plain Simplicity - The Black Book 130GSM",
    description: "Sổ plain chất lượng cao",
    price: 79000,
    categories: ["dip-tot-nghiep", "cho-dong-nghiep"],
    brand: "Crabit",
    image: "/images/c sổ 2.jpg"
  },
  {
    id: "30",
    name: "Sổ nhật ký ảnh memories journal Crabit x SGT",
    description: "Sổ nhật ký ảnh đẹp mắt",
    price: 145000,
    categories: ["dip-tot-nghiep"],
    brand: "Crabit",
    image: "/images/album.jpg"
  },
  {
    id: "31",
    name: "Nến thơm hương hoa AGAYA mùi White Tea",
    description: "Nến thơm hương hoa tự nhiên",
    price: 119000,
    categories: ["cho-nguoi-yeu-crush", "cho-ban-be", "dip-83-2010", "dip-sinh-nhat"],
    brand: "Agaya",
    image: "/images/agaya 1.jpg"
  },
  {
    id: "32",
    name: "Nến thơm tự nhiên AGAYA mùi Forest",
    description: "Nến thơm hương rừng tự nhiên",
    price: 119000,
    categories: ["cho-ban-be", "dip-sinh-nhat", "cho-nguoi-yeu-crush"],
    brand: "Agaya",
    image: "/images/agaya 3.jpg"
  },
  {
    id: "33",
    name: "Nến thơm phòng ngủ AGAYA mùi Goodnight",
    description: "Nến thơm giúp ngủ ngon",
    price: 119000,
    categories: ["cho-ban-be", "dip-sinh-nhat", "cho-nguoi-yeu-crush"],
    brand: "Agaya",
    image: "/images/agaya 4.jpg"
  },
  {
    id: "34",
    name: "Nến thơm thiên nhiên AGAYA mùi Bamboo",
    description: "Nến thơm hương tre tự nhiên",
    price: 119000,
    categories: ["cho-ban-be", "dip-sinh-nhat", "cho-nguoi-yeu-crush"],
    brand: "Agaya",
    image: "/images/AGAYA 2.jpg"
  },
  {
    id: "35",
    name: "Lót cốc VN Độc đáo - MOJI",
    description: "Lót cốc thiết kế độc đáo",
    price: 59000,
    categories: ["cho-dong-nghiep", "cho-ban-be"],
    brand: "MOJI",
    image: "/images/lót cốc 1.jpg"
  },
  {
    id: "36",
    name: "Lót cốc VN Độc đáo 2 - MOJI",
    description: "Lót cốc thiết kế độc đáo",
    price: 59000,
    categories: ["cho-dong-nghiep", "cho-ban-be"],
    brand: "MOJI",
    image: "/images/lót cc 2.jpg"
  },
  {
    id: "37",
    name: "Lót cốc cà chua bằng Gốm thấm nước - MOJI",
    description: "Lót cốc gốm thấm nước",
    price: 59000,
    categories: ["cho-dong-nghiep", "cho-ban-be"],
    image: "/images/lót ccoosc 3.jpg"
  },
  {
    id: "38",
    name: "Natural Spray: Anti Insect - NOTE",
    description: "Xịt chống côn trùng tự nhiên",
    price: 249000,
    categories: [],
    brand: "NOTE",
    image: "/images/note 1.jpg"
  },
  {
    id: "39",
    name: "Mini Perfume: Not A Rose (10ml) - NOTE",
    description: "Nước hoa mini hương hoa hồng",
    price: 360000,
    categories: ["dip-83-2010", "cho-nguoi-yeu-crush", "dip-anniversary-valentine", "dip-sinh-nhat"],
    brand: "NOTE",
    image: "/images/note 2.jpg"
  },
  {
    id: "40",
    name: "Mini Perfume: Dance In The Wind (10ml) - NOTE",
    description: "Nước hoa mini hương gió",
    price: 340000,
    categories: ["dip-83-2010", "dip-anniversary-valentine", "cho-nguoi-yeu-crush", "dip-sinh-nhat"],
    brand: "NOTE",
    image: "/images/NOTE 3.jpg"
  },
  {
    id: "41",
    name: "Nuoc hoa kho: Spice Of Love (12g) - NOTE",
    description: "Nước hoa khô hương tình yêu",
    price: 305000,
    categories: ["cho-nguoi-yeu-crush", "dip-anniversary-valentine", "dip-83-2010", "dip-sinh-nhat", "cho-ban-be"],
    brand: "NOTE",
    image: "/images/note 4.jpg"
  },
  {
    id: "42",
    name: "Nuoc hoa kho: Blackwood (12g) - NOTE",
    description: "Nước hoa khô hương gỗ",
    price: 305000,
    categories: ["cho-nguoi-yeu-crush", "dip-anniversary-valentine", "dip-sinh-nhat", "cho-ban-be", "dip-83-2010"],
    brand: "NOTE",
    image: "/images/note 5.jpg"
  },
  {
    id: "43",
    name: "Nen thom: VE NHA (200g) - NOTE",
    description: "Nến thơm hương ấm cúng",
    price: 475000,
    categories: ["cho-ban-be", "dip-sinh-nhat", "cho-nguoi-yeu-crush"],
    brand: "NOTE",
    image: "/images/note 6.jpg"
  },
  {
    id: "44",
    name: "Nen thom: The Good Old Days (200g) - NOTE",
    description: "Nến thơm hương hoài cổ",
    price: 299000,
    categories: ["cho-ban-be", "dip-sinh-nhat", "cho-nguoi-yeu-crush"],
    brand: "NOTE",
    image: "/images/note 7.jpg"
  },
  {
    id: "45",
    name: "Nen thom: Giang sinh (200g) - NOTE",
    description: "Nến thơm hương Giáng sinh",
    price: 299000,
    categories: ["cho-ban-be", "dip-sinh-nhat", "cho-nguoi-yeu-crush"],
    brand: "NOTE",
    image: "/images/note 8.jpg"
  },
  {
    id: "46",
    name: "Bó hoa Ngày Tươi Đẹp - Flowers Corner",
    description: "Hoa hồng kem tượng trưng cho tình yêu lãng mạn và chân thành.",
    price: 350000,
    categories: ["cho-nguoi-yeu-crush", "dip-anniversary-valentine", "dip-sinh-nhat", "dip-83-2010"],
    brand: "Flowers Corner",
    image: "/images/FC 1.jpg"
  },
  {
    id: "47",
    name: "Trà Olong Tuyết Hoa Sơn 100gr",
    description: "Trà Olong cao cấp",
    price: 3000000,
    categories: ["dip-cam-on-tri-an", "cho-sep-doi-tac", "cho-gia-dinh-cha-me"],
    brand: "Long Đỉnh",
    image: "/images/LC 1.jpg"
  },
  {
    id: "48",
    name: "Bó hoa Ngất Ngây - Flowers Corner",
    description: "Bó hoa Ngất Ngây với hoa hồng sen và cẩm chướng hồng.",
    price: 350000,
    categories: ["dip-tot-nghiep", "cho-nguoi-yeu-crush", "dip-anniversary-valentine", "dip-83-2010"],
    brand: "Flowers Corner",
    image: "/images/FC 2.jpg"
  },
  {
    id: "49",
    name: "Bó hoa Ms Spring - Flowers Corner",
    description: "Bó hoa Ms. Spring với 10 cành cẩm chướng hồng.",
    price: 390000,
    categories: ["cho-nguoi-yeu-crush", "dip-anniversary-valentine", "dip-83-2010", "dip-sinh-nhat"],
    brand: "Flowers Corner",
    image: "/images/FC 3.jpg"
  },
  {
    id: "50",
    name: "Bó hoa Fairy Tale - Flowers Corner",
    description: "Bó hoa Fairy Tale với hoa sao xanh và cỏ đồng tiền.",
    price: 449000,
    categories: ["cho-nguoi-yeu-crush"],
    brand: "Flowers Corner",
    image: "/images/FC 4.jpg"
  },
  {
    id: "51",
    name: "Bó Tú Cầu Xanh Bơ - Flowers Corner",
    description: "Hoa cẩm tú cầu xanh bơ tượng trưng cho tình yêu chân thành.",
    price: 549000,
    categories: [],
    brand: "Flowers Corner",
    image: "/images/FC 5.jpg"
  },
  {
    id: "52",
    name: "Bó Hoa Hồng Pinky Sweety - Vườn Hoa Tươi",
    description: "Bó hoa cẩm chướng và hoa hồng xinh xắn.",
    price: 249000,
    categories: ["dip-anniversary-valentine", "cho-nguoi-yeu-crush", "dip-tot-nghiep", "dip-83-2010", "dip-sinh-nhat", "cho-ban-be"],
    brand: "Vườn Hoa Tươi",
    image: "/images/VHT 1.jpg"
  },
  {
    id: "53",
    name: "Bo Hoa Hong Cam May Gio Dang Yeu - Vườn Hoa Tươi",
    description: "Bó hoa hồng cam tươi đẹp.",
    price: 499000,
    categories: ["dip-sinh-nhat", "cho-ban-be"],
    brand: "Vườn Hoa Tươi",
    image: "/images/VHT 2.jpg"
  },
  {
    id: "54",
    name: "Trà Ô Long Lễ Đỏ 300gr",
    description: "Trà Ô Long cao cấp",
    price: 600000,
    categories: ["dip-cam-on-tri-an", "cho-sep-doi-tac", "cho-gia-dinh-cha-me"],
    brand: "Long Đỉnh",
    image: "/images/LC 2.jpg"
  },
  {
    id: "55",
    name: "Bo Hoa Rustic Tana - Vườn Hoa Tươi",
    description: "Bó hoa Rustic Tana phong cách bình dị.",
    price: 499000,
    categories: ["cho-nguoi-yeu-crush", "dip-tot-nghiep", "dip-83-2010", "dip-sinh-nhat", "cho-ban-be"],
    brand: "Vườn Hoa Tươi",
    image: "/images/VHT 3.jpg"
  },
  {
    id: "56",
    name: "Bo tra O long Nam Bong Mai Long Đỉnh",
    description: "Bộ trà Ô long cao cấp",
    price: 1400000,
    categories: ["dip-cam-on-tri-an", "cho-sep-doi-tac", "cho-gia-dinh-cha-me"],
    brand: "Long Đỉnh",
    image: "/images/LC 3.jpg"
  },
  {
    id: "57",
    name: "Hoa Tốt Nghiệp Hướng Dương SunnyBlack",
    description: "Bó hoa hướng dương cho ngày tốt nghiệp.",
    price: 559000,
    categories: ["dip-tot-nghiep"],
    brand: "Vườn Hoa Tươi",
    image: "/images/VHT 4.jpg"
  },
  {
    id: "58",
    name: "Tranh Hoa Sen Trắng",
    description: "Tranh hoa sen trắng trang trí nội thất.",
    price: 1160000,
    categories: ["cho-sep-doi-tac", "cho-gia-dinh-cha-me", "dip-khai-truong-chuc-mung"],
    brand: "VIET CANVAS",
    image: "/images/sen.jpg"
  },
  {
    id: "59",
    name: "Tranh Cửu Ngư Và Lá Sen",
    description: "Tranh cửu ngư phong thủy.",
    price: 1160000,
    categories: ["cho-gia-dinh-cha-me", "cho-sep-doi-tac", "dip-khai-truong-chuc-mung"],
    brand: "VIET CANVAS",
    image: "/images/RC 1.jpg"
  },
  {
    id: "60",
    name: "Bo qua tang cao cap Long Đỉnh",
    description: "Bộ quà tặng trà cao cấp.",
    price: 2500000,
    categories: ["cho-sep-doi-tac", "cho-gia-dinh-cha-me", "dip-cam-on-tri-an"],
    brand: "Long Đỉnh",
    image: "/images/qt 1.jpg"
  },
  {
    id: "61",
    name: "Bo Lan Hoa Diep - Vườn Hoa Tươi",
    description: "Bó lan hồ điệp sang trọng.",
    price: 890000,
    categories: ["dip-khai-truong-chuc-mung", "cho-sep-doi-tac"],
    brand: "Vườn Hoa Tươi",
    image: "/images/VHT Ktr.jpg"
  },
  {
    id: "62",
    name: "Gấu bông teddy nhỏ",
    description: "Gấu bông teddy đáng yêu.",
    price: 150000,
    categories: ["cho-nguoi-yeu-crush", "cho-ban-be", "dip-sinh-nhat"],
    image: "/images/gau-bong-2.jpg"
  },
  {
    id: "63",
    name: "Gấu bông teddy lớn",
    description: "Gấu bông teddy lớn ấm áp.",
    price: 350000,
    categories: ["cho-nguoi-yeu-crush", "cho-ban-be", "dip-sinh-nhat", "dip-anniversary-valentine"],
    image: "/images/gau-bong-1.jpg"
  },
  {
    id: "64",
    name: "Hộp socola Valentine",
    description: "Hộp socola ngọt ngào cho ngày Valentine.",
    price: 280000,
    categories: ["cho-nguoi-yeu-crush", "dip-anniversary-valentine"],
    image: "/images/colbr.jpg"
  },
  {
    id: "65",
    name: "Set quà 8/3 - Nến thơm và hoa",
    description: "Set quà dành cho ngày 8/3.",
    price: 450000,
    categories: ["dip-83-2010", "cho-nguoi-yeu-crush", "cho-ban-be"],
    image: "/images/qt 3.jpg"
  }
];

// Category mappings for filtering
export const recipientCategories: Record<string, string[]> = {
  "nguoi-yeu-crush": ["cho-nguoi-yeu-crush"],
  "ban-be": ["cho-ban-be"],
  "gia-dinh": ["cho-gia-dinh-cha-me"],
  "dong-nghiep": ["cho-dong-nghiep"],
  "sep-doi-tac": ["cho-sep-doi-tac"],
};

export const occasionCategories: Record<string, string[]> = {
  "sinh-nhat": ["dip-sinh-nhat"],
  "anniversary-valentine": ["dip-anniversary-valentine"],
  "8-3-20-10": ["dip-83-2010"],
  "tot-nghiep": ["dip-tot-nghiep"],
  "khai-truong": ["dip-khai-truong-chuc-mung"],
  "cam-on-tri-an": ["dip-cam-on-tri-an"],
  "tet-le": ["dip-le-tet"],
};

export const budgetRanges: Record<string, { min: number; max: number }> = {
  "duoi-200k": { min: 0, max: 200000 },
  "200k-500k": { min: 200000, max: 500000 },
  "500k-1trieu": { min: 500000, max: 1000000 },
  "tren-1trieu": { min: 1000000, max: Infinity },
};

export function filterProducts(
  recipient: string | null,
  occasion: string | null,
  budget: string | null
): Product[] {
  let filtered = [...products];

  // Filter by recipient
  if (recipient && recipientCategories[recipient]) {
    const cats = recipientCategories[recipient];
    filtered = filtered.filter(
      (p) => p.categories.length === 0 || p.categories.some((c) => cats.includes(c))
    );
  }

  // Filter by occasion
  if (occasion && occasionCategories[occasion]) {
    const cats = occasionCategories[occasion];
    filtered = filtered.filter(
      (p) => p.categories.length === 0 || p.categories.some((c) => cats.includes(c))
    );
  }

  // Filter by budget
  if (budget && budgetRanges[budget]) {
    const { min, max } = budgetRanges[budget];
    filtered = filtered.filter((p) => p.price >= min && p.price <= max);
  }

  // If no results, return some general products
  if (filtered.length === 0) {
    return products.slice(0, 6);
  }

  return filtered;
}
