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
    name: "Ao phong tron co ban unisex",
    description: "Ao phong tron cotton 100%, nhieu kich co, de phoi do phong cach toi gian, thanh lich.",
    price: 120000,
    categories: [],
    image: "/ao-phong.jpg"
  },
  {
    id: "2",
    name: "May khuech tan tinh dau",
    description: "May khuech tan tinh dau len den ban kinh 10m2, mui huong vua phai, nang cap chat luong khong gian song cua ban!",
    price: 459000,
    categories: [],
    image: "/placeholder-product.jpg"
  },
  {
    id: "3",
    name: "Binh nuoc bang thep khong gi",
    description: "Binh nuoc chat lieu thep khong gi ben bi, giu nhiet len den 24 tieng.",
    price: 229000,
    categories: ["cho-dong-nghiep"],
    image: "/placeholder-product.jpg"
  },
  {
    id: "4",
    name: "Non luoi trai tron unisex",
    description: "Non luoi trang tron phong cach nang dong toi gian, phu hop cho ca nam va nu.",
    price: 149000,
    categories: [],
    image: "/placeholder-product.jpg"
  },
  {
    id: "5",
    name: "Kinh mat tron",
    description: "Gong kinh thanh lich, thoi trang kem trong chong tia UV, anh sang xanh.",
    price: 199000,
    categories: [],
    image: "/kinh-mat.jpg"
  },
  {
    id: "6",
    name: "Ao len dan tron thanh lich",
    description: "Form dang rong rai, mau sac thanh lich, phong cach toi gian, de phoi do.",
    price: 275000,
    categories: [],
    image: "/placeholder-product.jpg"
  },
  {
    id: "7",
    name: "Tui tote mau tron toi gian",
    description: "Tui tote mau tron toi gian de ung dung, phoi do, tien loi.",
    price: 99000,
    categories: [],
    image: "/placeholder-product.jpg"
  },
  {
    id: "8",
    name: "Binh hoa gom",
    description: "Binh hoa su tinh te, cam hoa nghe thuat nang cap khong gian cho ngoi nha cua ban.",
    price: 270000,
    categories: [],
    image: "/placeholder-product.jpg"
  },
  {
    id: "9",
    name: "Nu Go khoi thom Tram Huong",
    description: "Nu Go khoi thom Tram Huong mang den huong thom diu nhe, tinh te tu nguon nguyen lieu tram huong tu nhien.",
    price: 129000,
    categories: [],
    brand: "Healiverse",
    image: "/placeholder-product.jpg"
  },
  {
    id: "10",
    name: "Nu Go khoi thom Bach Xanh",
    description: "Nu Go khoi thom Bach Xanh mang den trai nghiem thu gian tinh te voi huong thom diu nhe.",
    price: 129000,
    categories: [],
    image: "/placeholder-product.jpg"
  },
  {
    id: "11",
    name: "So tay nho Egg Coffee",
    description: "So tay nho Egg Coffee la lua chon hoan hao cho nhung ai yeu thich su tinh te trong tung chi tiet nho.",
    price: 50000,
    categories: ["dip-tot-nghiep", "cho-dong-nghiep"],
    brand: "OHQUAO",
    image: "/placeholder-product.jpg"
  },
  {
    id: "12",
    name: "So tay nho Nuoc mia",
    description: "So tay nho Nuoc mia la lua chon hoan hao cho nhung ai yeu thich su tien loi va phong cach.",
    price: 50000,
    categories: ["cho-dong-nghiep", "dip-tot-nghiep"],
    image: "/placeholder-product.jpg"
  },
  {
    id: "13",
    name: "Banh kem Sugar Town ma 25",
    description: "Banh kem tuoi ngon tu Sugar Town",
    price: 299000,
    categories: ["dip-sinh-nhat"],
    image: "/placeholder-product.jpg"
  },
  {
    id: "14",
    name: "Banh kem Sugar Town ma 26",
    description: "Banh kem tuoi ngon tu Sugar Town",
    price: 349000,
    categories: ["dip-sinh-nhat"],
    image: "/placeholder-product.jpg"
  },
  {
    id: "15",
    name: "Banh kem Sugar Town ma 27",
    description: "Banh kem tuoi ngon tu Sugar Town",
    price: 349000,
    categories: ["dip-sinh-nhat"],
    brand: "Sugar Town",
    image: "/placeholder-product.jpg"
  },
  {
    id: "16",
    name: "Banh kem Sugar Town ma 28",
    description: "Banh kem tuoi ngon tu Sugar Town",
    price: 349000,
    categories: [],
    brand: "Sugar Town",
    image: "/placeholder-product.jpg"
  },
  {
    id: "17",
    name: "Banh kem Sugar Town ma 29",
    description: "Banh kem tuoi ngon tu Sugar Town",
    price: 349000,
    categories: [],
    brand: "Sugar Town",
    image: "/placeholder-product.jpg"
  },
  {
    id: "18",
    name: "Banh kem Sugar Town ma 30",
    description: "Banh kem tuoi ngon tu Sugar Town",
    price: 349000,
    categories: ["dip-sinh-nhat"],
    brand: "Sugar Town",
    image: "/placeholder-product.jpg"
  },
  {
    id: "19",
    name: "Banh kem Bong benh ma 1 - Cai lo nuong",
    description: "Banh kem bong benh tuoi ngon",
    price: 349000,
    categories: ["dip-sinh-nhat"],
    brand: "Cai lo nuong",
    image: "/placeholder-product.jpg"
  },
  {
    id: "20",
    name: "Banh kem Bong benh ma 2 - Cai lo nuong",
    description: "Banh kem bong benh tuoi ngon",
    price: 349000,
    categories: ["dip-sinh-nhat"],
    brand: "Cai lo nuong",
    image: "/placeholder-product.jpg"
  },
  {
    id: "21",
    name: "Banh kem Tous les Jours vi Dau",
    description: "Banh kem vi dau tu Tous les Jours",
    price: 399000,
    categories: ["dip-sinh-nhat"],
    brand: "TOUS les JOURS",
    image: "/placeholder-product.jpg"
  },
  {
    id: "22",
    name: "Banh kem Tous les Jours vi Matcha",
    description: "Banh kem vi matcha tu Tous les Jours",
    price: 399000,
    categories: ["dip-sinh-nhat"],
    brand: "TOUS les JOURS",
    image: "/placeholder-product.jpg"
  },
  {
    id: "23",
    name: "Banh kem Tous les Jours vi Berries",
    description: "Banh kem vi berries tu Tous les Jours",
    price: 399000,
    categories: ["dip-sinh-nhat"],
    brand: "TOUS les JOURS",
    image: "/placeholder-product.jpg"
  },
  {
    id: "24",
    name: "Banh kem Tous les Jours vi Xoai",
    description: "Banh kem vi xoai tu Tous les Jours",
    price: 399000,
    categories: ["dip-sinh-nhat"],
    brand: "TOUS les JOURS",
    image: "/placeholder-product.jpg"
  },
  {
    id: "25",
    name: "Lich de ban 2026 Crabit Calendar - Ngua Gia",
    description: "Lich de ban nam 2026 thiet ke dep mat",
    price: 70000,
    categories: ["dip-le-tet"],
    brand: "Crabit",
    image: "/placeholder-product.jpg"
  },
  {
    id: "26",
    name: "Lich 2026 Con Ngua lo xo treo tuong Crabit",
    description: "Lich treo tuong 2026 Ma Dao Thanh Cong",
    price: 99000,
    categories: ["dip-le-tet"],
    brand: "Crabit",
    image: "/placeholder-product.jpg"
  },
  {
    id: "27",
    name: "Game Tet 2026 - Co ca ngua Ngua Non Hau Da",
    description: "Boardgame vui nhon cho ngay Tet",
    price: 149000,
    categories: ["dip-le-tet"],
    brand: "Crabit",
    image: "/placeholder-product.jpg"
  },
  {
    id: "28",
    name: "So lich Planner Coquette Limited Edition",
    description: "So lich planner thiet ke dep mat",
    price: 149000,
    categories: ["dip-tot-nghiep", "cho-dong-nghiep"],
    brand: "Crabit",
    image: "/placeholder-product.jpg"
  },
  {
    id: "29",
    name: "So Plain Simplicity - The Black Book 130GSM",
    description: "So plain chat luong cao",
    price: 79000,
    categories: ["dip-tot-nghiep", "cho-dong-nghiep"],
    brand: "Crabit",
    image: "/placeholder-product.jpg"
  },
  {
    id: "30",
    name: "So nhat ky anh memories journal Crabit x SGT",
    description: "So nhat ky anh dep mat",
    price: 145000,
    categories: ["dip-tot-nghiep"],
    brand: "Crabit",
    image: "/placeholder-product.jpg"
  },
  {
    id: "31",
    name: "Nen thom huong hoa AGAYA mui White Tea",
    description: "Nen thom huong hoa tu nhien",
    price: 119000,
    categories: ["cho-nguoi-yeu-crush", "cho-ban-be", "dip-83-2010", "dip-sinh-nhat"],
    brand: "Agaya",
    image: "/placeholder-product.jpg"
  },
  {
    id: "32",
    name: "Nen thom tu nhien AGAYA mui Forest",
    description: "Nen thom huong rung tu nhien",
    price: 119000,
    categories: ["cho-ban-be", "dip-sinh-nhat", "cho-nguoi-yeu-crush"],
    brand: "Agaya",
    image: "/placeholder-product.jpg"
  },
  {
    id: "33",
    name: "Nen thom phong ngu AGAYA mui Goodnight",
    description: "Nen thom giup ngu ngon",
    price: 119000,
    categories: ["cho-ban-be", "dip-sinh-nhat", "cho-nguoi-yeu-crush"],
    brand: "Agaya",
    image: "/placeholder-product.jpg"
  },
  {
    id: "34",
    name: "Nen Thom thien nhien AGAYA mui Bamboo",
    description: "Nen thom huong tre tu nhien",
    price: 119000,
    categories: ["cho-ban-be", "dip-sinh-nhat", "cho-nguoi-yeu-crush"],
    brand: "Agaya",
    image: "/placeholder-product.jpg"
  },
  {
    id: "35",
    name: "Lot coc VN Doc dao - MOJI",
    description: "Lot coc thiet ke doc dao",
    price: 59000,
    categories: ["cho-dong-nghiep", "cho-ban-be"],
    brand: "MOJI",
    image: "/placeholder-product.jpg"
  },
  {
    id: "36",
    name: "Lot coc VN Doc dao 2 - MOJI",
    description: "Lot coc thiet ke doc dao",
    price: 59000,
    categories: ["cho-dong-nghiep", "cho-ban-be"],
    brand: "MOJI",
    image: "/placeholder-product.jpg"
  },
  {
    id: "37",
    name: "Lot coc ca chua bang Gom tham nuoc - MOJI",
    description: "Lot coc gom tham nuoc",
    price: 59000,
    categories: ["cho-dong-nghiep", "cho-ban-be"],
    image: "/placeholder-product.jpg"
  },
  {
    id: "38",
    name: "Natural Spray: Anti Insect - NOTE",
    description: "Xit chong con trung tu nhien",
    price: 249000,
    categories: [],
    brand: "NOTE",
    image: "/placeholder-product.jpg"
  },
  {
    id: "39",
    name: "Mini Perfume: Not A Rose (10ml) - NOTE",
    description: "Nuoc hoa mini huong hoa hong",
    price: 360000,
    categories: ["dip-83-2010", "cho-nguoi-yeu-crush", "dip-anniversary-valentine", "dip-sinh-nhat"],
    brand: "NOTE",
    image: "/placeholder-product.jpg"
  },
  {
    id: "40",
    name: "Mini Perfume: Dance In The Wind (10ml) - NOTE",
    description: "Nuoc hoa mini huong gio",
    price: 340000,
    categories: ["dip-83-2010", "dip-anniversary-valentine", "cho-nguoi-yeu-crush", "dip-sinh-nhat"],
    brand: "NOTE",
    image: "/placeholder-product.jpg"
  },
  {
    id: "41",
    name: "Nuoc hoa kho: Spice Of Love (12g) - NOTE",
    description: "Nuoc hoa kho huong tinh yeu",
    price: 305000,
    categories: ["cho-nguoi-yeu-crush", "dip-anniversary-valentine", "dip-83-2010", "dip-sinh-nhat", "cho-ban-be"],
    brand: "NOTE",
    image: "/placeholder-product.jpg"
  },
  {
    id: "42",
    name: "Nuoc hoa kho: Blackwood (12g) - NOTE",
    description: "Nuoc hoa kho huong go",
    price: 305000,
    categories: ["cho-nguoi-yeu-crush", "dip-anniversary-valentine", "dip-sinh-nhat", "cho-ban-be", "dip-83-2010"],
    brand: "NOTE",
    image: "/placeholder-product.jpg"
  },
  {
    id: "43",
    name: "Nen thom: VE NHA (200g) - NOTE",
    description: "Nen thom huong am cung",
    price: 475000,
    categories: ["cho-ban-be", "dip-sinh-nhat", "cho-nguoi-yeu-crush"],
    brand: "NOTE",
    image: "/placeholder-product.jpg"
  },
  {
    id: "44",
    name: "Nen thom: The Good Old Days (200g) - NOTE",
    description: "Nen thom huong hoai co",
    price: 299000,
    categories: ["cho-ban-be", "dip-sinh-nhat", "cho-nguoi-yeu-crush"],
    brand: "NOTE",
    image: "/placeholder-product.jpg"
  },
  {
    id: "45",
    name: "Nen thom: Giang sinh (200g) - NOTE",
    description: "Nen thom huong Giang sinh",
    price: 299000,
    categories: ["cho-ban-be", "dip-sinh-nhat", "cho-nguoi-yeu-crush"],
    brand: "NOTE",
    image: "/placeholder-product.jpg"
  },
  {
    id: "46",
    name: "Bo hoa Ngay Tuoi Dep - Flowers Corner",
    description: "Hoa hong kem tuong trung cho tinh yeu lang man va chan thanh.",
    price: 350000,
    categories: ["cho-nguoi-yeu-crush", "dip-anniversary-valentine", "dip-sinh-nhat", "dip-83-2010"],
    brand: "Flowers Corner",
    image: "/placeholder-product.jpg"
  },
  {
    id: "47",
    name: "Tra Olong Tuyet Hoa Son 100gr",
    description: "Tra Olong cao cap",
    price: 3000000,
    categories: ["dip-cam-on-tri-an", "cho-sep-doi-tac", "cho-gia-dinh-cha-me"],
    brand: "Long Dinh",
    image: "/placeholder-product.jpg"
  },
  {
    id: "48",
    name: "Bo hoa Ngat Ngay - Flowers Corner",
    description: "Bo hoa Ngat Ngay voi hoa hong sen va cam chuong hong.",
    price: 350000,
    categories: ["dip-tot-nghiep", "cho-nguoi-yeu-crush", "dip-anniversary-valentine", "dip-83-2010"],
    brand: "Flowers Corner",
    image: "/placeholder-product.jpg"
  },
  {
    id: "49",
    name: "Bo hoa Ms Spring - Flowers Corner",
    description: "Bo hoa Ms. Spring voi 10 canh cam chuong hong.",
    price: 390000,
    categories: ["cho-nguoi-yeu-crush", "dip-anniversary-valentine", "dip-83-2010", "dip-sinh-nhat"],
    brand: "Flowers Corner",
    image: "/placeholder-product.jpg"
  },
  {
    id: "50",
    name: "Bo hoa Fairy Tale - Flowers Corner",
    description: "Bo hoa Fairy Tale voi hoa sao xanh va co dong tien.",
    price: 449000,
    categories: ["cho-nguoi-yeu-crush"],
    brand: "Flowers Corner",
    image: "/placeholder-product.jpg"
  },
  {
    id: "51",
    name: "Bo Tu Cau Xanh Bo - Flowers Corner",
    description: "Hoa cam tu cau xanh bo tuong trung cho tinh yeu chan thanh.",
    price: 549000,
    categories: [],
    brand: "Flowers Corner",
    image: "/placeholder-product.jpg"
  },
  {
    id: "52",
    name: "Bo Hoa Hong Pinky Sweety - Vuon Hoa Tuoi",
    description: "Bo hoa cam chuong va hoa hong xinh xan.",
    price: 249000,
    categories: ["dip-anniversary-valentine", "cho-nguoi-yeu-crush", "dip-tot-nghiep", "dip-83-2010", "dip-sinh-nhat", "cho-ban-be"],
    brand: "Vuon Hoa Tuoi",
    image: "/placeholder-product.jpg"
  },
  {
    id: "53",
    name: "Bo Hoa Hong Cam May Gio Dang Yeu - Vuon Hoa Tuoi",
    description: "Bo hoa hong cam tuoi dep.",
    price: 499000,
    categories: ["dip-sinh-nhat", "cho-ban-be"],
    brand: "Vuon Hoa Tuoi",
    image: "/placeholder-product.jpg"
  },
  {
    id: "54",
    name: "Tra O Long Le Do 300gr",
    description: "Tra O Long cao cap",
    price: 600000,
    categories: ["dip-cam-on-tri-an", "cho-sep-doi-tac", "cho-gia-dinh-cha-me"],
    brand: "Long Dinh",
    image: "/placeholder-product.jpg"
  },
  {
    id: "55",
    name: "Bo Hoa Rustic Tana - Vuon Hoa Tuoi",
    description: "Bo hoa Rustic Tana phong cach binh di.",
    price: 499000,
    categories: ["cho-nguoi-yeu-crush", "dip-tot-nghiep", "dip-83-2010", "dip-sinh-nhat", "cho-ban-be"],
    brand: "Vuon Hoa Tuoi",
    image: "/placeholder-product.jpg"
  },
  {
    id: "56",
    name: "Bo tra O long Nam Bong Mai Long Dinh",
    description: "Bo tra O long cao cap",
    price: 1400000,
    categories: ["dip-cam-on-tri-an", "cho-sep-doi-tac", "cho-gia-dinh-cha-me"],
    brand: "Long Dinh",
    image: "/placeholder-product.jpg"
  },
  {
    id: "57",
    name: "Hoa Tot Nghiep Huong Duong SunnyBlack",
    description: "Bo hoa huong duong cho ngay tot nghiep.",
    price: 559000,
    categories: ["dip-tot-nghiep"],
    brand: "Vuon Hoa Tuoi",
    image: "/placeholder-product.jpg"
  },
  {
    id: "58",
    name: "Tranh Hoa Sen Trang",
    description: "Tranh hoa sen trang trang tri noi that.",
    price: 1160000,
    categories: ["cho-sep-doi-tac", "cho-gia-dinh-cha-me", "dip-khai-truong-chuc-mung"],
    brand: "VIET CANVAS",
    image: "/placeholder-product.jpg"
  },
  {
    id: "59",
    name: "Tranh Cuu Ngu Va La Sen",
    description: "Tranh cuu ngu phong thuy.",
    price: 1160000,
    categories: ["cho-gia-dinh-cha-me", "cho-sep-doi-tac", "dip-khai-truong-chuc-mung"],
    brand: "VIET CANVAS",
    image: "/placeholder-product.jpg"
  },
  {
    id: "60",
    name: "Bo qua tang cao cap Long Dinh",
    description: "Bo qua tang tra cao cap.",
    price: 2500000,
    categories: ["cho-sep-doi-tac", "cho-gia-dinh-cha-me", "dip-cam-on-tri-an"],
    brand: "Long Dinh",
    image: "/placeholder-product.jpg"
  },
  {
    id: "61",
    name: "Bo Lan Hoa Diep - Vuon Hoa Tuoi",
    description: "Bo lan ho diep sang trong.",
    price: 890000,
    categories: ["dip-khai-truong-chuc-mung", "cho-sep-doi-tac"],
    brand: "Vuon Hoa Tuoi",
    image: "/placeholder-product.jpg"
  },
  {
    id: "62",
    name: "Gau bong teddy nho",
    description: "Gau bong teddy dang yeu.",
    price: 150000,
    categories: ["cho-nguoi-yeu-crush", "cho-ban-be", "dip-sinh-nhat"],
    image: "/placeholder-product.jpg"
  },
  {
    id: "63",
    name: "Gau bong teddy lon",
    description: "Gau bong teddy lon am ap.",
    price: 350000,
    categories: ["cho-nguoi-yeu-crush", "cho-ban-be", "dip-sinh-nhat", "dip-anniversary-valentine"],
    image: "/placeholder-product.jpg"
  },
  {
    id: "64",
    name: "Hop socola Valentine",
    description: "Hop socola ngot ngao cho ngay Valentine.",
    price: 280000,
    categories: ["cho-nguoi-yeu-crush", "dip-anniversary-valentine"],
    image: "/placeholder-product.jpg"
  },
  {
    id: "65",
    name: "Set qua 8/3 - Nen thom va hoa",
    description: "Set qua danh cho ngay 8/3.",
    price: 450000,
    categories: ["dip-83-2010", "cho-nguoi-yeu-crush", "cho-ban-be"],
    image: "/placeholder-product.jpg"
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
