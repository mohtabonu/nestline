import type { User } from "../types";

export const properties = [
  {
    id: 1,
    image:
      "https://a0.muscache.com/im/pictures/fe26ab03-15a0-46ee-a459-9046dee911ea.jpg?im_w=720",
    price: 250000,
    title: "Zamonaviy kvartira Toshkent markazida",
    description: "2 xona, Wi-Fi, konditsioner, metro yaqinida",
    location: "Yunusobod tumani",
    isFavorite: false,
  },
  {
    id: 2,
    image:
      "https://a0.muscache.com/im/pictures/4a5f2387-7386-4a8e-ba4a-c3a69c44e492.jpg?im_w=720",
    price: 180000,
    title: "Issiq hovuzli villa Chirchiq shahrida",
    description: "3 xona, hovuz, barbekyu, tabiat qo'ynida",
    location: "Chirchiq shahri",
    isFavorite: true,
  },
  {
    id: 3,
    image:
      "https://a0.muscache.com/im/pictures/miso/Hosting-907864679276364991/original/82b397f9-de86-47e6-9622-843501368d30.jpeg?im_w=720",
    price: 320000,
    title: "Lux penthouse Samarqand yo'lida",
    description: "4 xona, panorama ko'rinish, premium jihozlar",
    location: "Mirobod tumani",
    isFavorite: true,
  },
  {
    id: 4,
    image:
      "https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6MTIyOTc2MjM0MTg5NjgyNjUwMg%3D%3D/original/8d289944-910f-47dc-b589-b6b8045be73d.jpeg?im_w=1200",
    price: 150000,
    title: "Oilaviy uy Olmazor tumanida",
    description: "3 xona, hovli, bolalar uchun o'yin maydoni",
    location: "Olmazor tumani",
    isFavorite: false,
  },
  {
    id: 5,
    image:
      "https://a0.muscache.com/im/pictures/miso/Hosting-798341444482534238/original/6232ccbb-be39-4915-ad0b-0c4a43a31a01.jpeg?im_w=1200",
    price: 200000,
    title: "Qulay studiya Yakkasaroyda",
    description: "1 xona, tez Wi-Fi, zamonaviy mebel",
    location: "Yakkasaroy tumani",
    isFavorite: true,
  },
  {
    id: 6,
    image:
      "https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6MTMwNzgzMzI2Mzk1NTI1ODE4Mg%3D%3D/original/f39b70fe-d879-42e1-ac09-9a5ec8b8dfc8.jpeg?im_w=1200",
    price: 270000,
    title: "Do‘stlik metrosi yaqinida kvartira",
    description: "2 xona, lift, balkon, yaqin bozor",
    location: "Chilonzor tumani",
    isFavorite: false,
  },
  {
    id: 7,
    image:
      "https://a0.muscache.com/im/pictures/miso/Hosting-28562915/original/ee4f8e94-0f8d-4ec1-8b17-62d9263e517a.jpeg?im_w=1200",
    price: 350000,
    title: "Qulay villa Toshkent viloyatida",
    description: "4 xona, katta hovli, 2 ta hammom",
    location: "Qibray tumani",
    isFavorite: false,
  },
  {
    id: 8,
    image:
      "https://a0.muscache.com/im/pictures/miso/Hosting-1125642170009532485/original/6d1b5a7e-3848-4c3c-94f8-e6ff90268016.jpeg?im_w=1200",
    price: 120000,
    title: "Mini uy Bektemirda",
    description: "1 xona, arzon va qulay, xavfsiz hudud",
    location: "Bektemir tumani",
    isFavorite: false,
  },
  {
    id: 9,
    image:
      "https://a0.muscache.com/im/pictures/miso/Hosting-769454552597427567/original/cc37897f-39f3-4e76-8f11-d834df0e7430.jpeg?im_w=1200",
    price: 400000,
    title: "Yangi zamonaviy uy Mirzo Ulug'bekda",
    description: "5 xona, zamonaviy ta'mir, garaj",
    location: "Mirzo Ulug'bek tumani",
    isFavorite: false,
  },
  {
    id: 10,
    image:
      "https://a0.muscache.com/im/pictures/580e9ef5-657f-4268-878b-e5d6a4992e01.jpg?im_w=1200",
    price: 220000,
    title: "Qulay kvartira metroga yaqin",
    description: "2 xona, konditsioner, yaqin savdo markazi",
    location: "Shayxontohur tumani",
    isFavorite: false,
  },
  {
    id: 11,
    image:
      "https://a0.muscache.com/im/pictures/hosting/Hosting-1183918355261758860/original/af195a55-24fc-4816-94e5-f46863c49e11.jpeg?im_w=1200",
    price: 275000,
    title: "Yashnoboddagi shinam uy",
    description: "3 xona, hovli, konditsioner, Wi-Fi",
    location: "Yashnobod tumani",
    isFavorite: false,
  },
  {
    id: 12,
    image:
      "https://a0.muscache.com/im/pictures/604de4a3-4427-4c6b-8c70-8c746e3aca51.jpg?im_w=960",
    price: 310000,
    title: "Panoramalik zamonaviy uy",
    description: "4 xona, keng derazalar, balkon, lift",
    location: "Sergeli tumani",
    isFavorite: true,
  },
];

export const properties2 = [
  {
    id: 1,
    landlordId: 1,
    districtId: 1,
    regionId: 1,
    title: "Toshkent shahrida zamonaviy kvartira",
    description:
      "Shahar markazida joylashgan, yangi ta'mirlangan 2 xonali kvartira. Metro bekati yaqin.",
    price: 3500000,
    latitude: 41.2995,
    longitude: 69.2401,
    allowsPets: true,
    isFurnished: true,
  },
  {
    id: 2,
    landlordId: 2,
    districtId: 2,
    regionId: 1,
    title: "Chilonzor tumanida oilaviy uy",
    description:
      "3 xonali, hovli bilan birga. Maktab va do'konlar yaqin atrofda.",
    price: 2800000,
    latitude: 41.2756,
    longitude: 69.2034,
    allowsPets: false,
    isFurnished: false,
  },
  {
    id: 3,
    landlordId: 3,
    districtId: 3,
    regionId: 2,
    title: "Samarqand shahrida tarixy joy",
    description:
      "Registon yaqinida, meros hududida joylashgan mahalliy me'morchilik uslubidagi uy.",
    price: 2200000,
    latitude: 39.627,
    longitude: 66.975,
    allowsPets: true,
    isFurnished: true,
  },
  {
    id: 4,
    landlordId: 4,
    districtId: 4,
    regionId: 3,
    title: "Buxoro shahrida qadimiy uy",
    description:
      "Buxoro eski shahrida, turistik joylar yaqinida. Milliy bezak elementlari bilan.",
    price: 1900000,
    latitude: 39.7674,
    longitude: 64.4286,
    allowsPets: false,
    isFurnished: true,
  },
  {
    id: 5,
    landlordId: 5,
    districtId: 5,
    regionId: 4,
    title: "Andijon shahrida tinch muhit",
    description: "Shahar chetida, tabiat yaqinida. Katta hovli va bog' bilan.",
    price: 1600000,
    latitude: 40.7821,
    longitude: 72.3442,
    allowsPets: true,
    isFurnished: false,
  },
  {
    id: 6,
    landlordId: 6,
    districtId: 6,
    regionId: 5,
    title: "Namangan viloyatida zamonaviy kvartira",
    description:
      "Yangi qurilgan turar-joy majmuasida. Barcha qulayliklar mavjud.",
    price: 2100000,
    latitude: 40.9983,
    longitude: 71.6726,
    allowsPets: true,
    isFurnished: true,
  },
  {
    id: 7,
    landlordId: 7,
    districtId: 7,
    regionId: 6,
    title: "Farg'ona shahrida oilaviy uy",
    description: "4 xonali keng uy, meva daraxtlari bilan o'ralgan hovli.",
    price: 1800000,
    latitude: 40.3842,
    longitude: 71.7843,
    allowsPets: false,
    isFurnished: false,
  },
  {
    id: 8,
    landlordId: 8,
    districtId: 8,
    regionId: 7,
    title: "Nukus shahrida iqlim qulay joy",
    description: "Aral dengizi yaqinida, havo toza va salqin muhit.",
    price: 1400000,
    latitude: 42.4731,
    longitude: 59.6103,
    allowsPets: true,
    isFurnished: true,
  },
  {
    id: 9,
    landlordId: 9,
    districtId: 9,
    regionId: 8,
    title: "Urganch shahrida biznes markazi yaqinida",
    description:
      "Shahar markazida, ofis va savdo markazlari yaqinida joylashgan.",
    price: 1700000,
    latitude: 41.55,
    longitude: 60.6167,
    allowsPets: false,
    isFurnished: true,
  },
  {
    id: 10,
    landlordId: 10,
    districtId: 10,
    regionId: 9,
    title: "Qarshi shahrida student uchun qulay",
    description: "Universitet yaqinida, kutubxona va transport bekatiga yaqin.",
    price: 1300000,
    latitude: 38.8404,
    longitude: 65.789,
    allowsPets: true,
    isFurnished: false,
  },
];

export const photos = [
  {
    propertyId: 1,
    url: "https://picsum.photos/800/600?random=1",
    isMain: true,
    order: 0,
  },
  {
    propertyId: 1,
    url: "https://picsum.photos/800/600?random=2",
    isMain: false,
    order: 1,
  },
  {
    propertyId: 1,
    url: "https://picsum.photos/800/600?random=3",
    isMain: false,
    order: 2,
  },
  {
    propertyId: 1,
    url: "https://picsum.photos/800/600?random=20",
    isMain: false,
    order: 2,
  },
  {
    propertyId: 1,
    url: "https://picsum.photos/800/600?random=10",
    isMain: false,
    order: 2,
  },
  {
    propertyId: 2,
    url: "https://picsum.photos/800/600?random=4",
    isMain: true,
    order: 0,
  },
  {
    propertyId: 2,
    url: "https://picsum.photos/800/600?random=5",
    isMain: false,
    order: 1,
  },
  {
    propertyId: 2,
    url: "https://picsum.photos/800/600?random=6",
    isMain: false,
    order: 2,
  },
  {
    propertyId: 3,
    url: "https://picsum.photos/800/600?random=7",
    isMain: true,
    order: 0,
  },
  {
    propertyId: 3,
    url: "https://picsum.photos/800/600?random=8",
    isMain: false,
    order: 1,
  },
  {
    propertyId: 3,
    url: "https://picsum.photos/800/600?random=9",
    isMain: false,
    order: 2,
  },
  {
    propertyId: 4,
    url: "https://picsum.photos/800/600?random=10",
    isMain: true,
    order: 0,
  },
  {
    propertyId: 4,
    url: "https://picsum.photos/800/600?random=11",
    isMain: false,
    order: 1,
  },
  {
    propertyId: 4,
    url: "https://picsum.photos/800/600?random=12",
    isMain: false,
    order: 2,
  },
  {
    propertyId: 5,
    url: "https://picsum.photos/800/600?random=13",
    isMain: true,
    order: 0,
  },
  {
    propertyId: 5,
    url: "https://picsum.photos/800/600?random=14",
    isMain: false,
    order: 1,
  },
  {
    propertyId: 5,
    url: "https://picsum.photos/800/600?random=15",
    isMain: false,
    order: 2,
  },
  {
    propertyId: 6,
    url: "https://picsum.photos/800/600?random=16",
    isMain: true,
    order: 0,
  },
  {
    propertyId: 6,
    url: "https://picsum.photos/800/600?random=17",
    isMain: false,
    order: 1,
  },
  {
    propertyId: 6,
    url: "https://picsum.photos/800/600?random=18",
    isMain: false,
    order: 2,
  },
  {
    propertyId: 7,
    url: "https://picsum.photos/800/600?random=19",
    isMain: true,
    order: 0,
  },
  {
    propertyId: 7,
    url: "https://picsum.photos/800/600?random=20",
    isMain: false,
    order: 1,
  },
  {
    propertyId: 7,
    url: "https://picsum.photos/800/600?random=21",
    isMain: false,
    order: 2,
  },
  {
    propertyId: 8,
    url: "https://picsum.photos/800/600?random=22",
    isMain: true,
    order: 0,
  },
  {
    propertyId: 8,
    url: "https://picsum.photos/800/600?random=23",
    isMain: false,
    order: 1,
  },
  {
    propertyId: 8,
    url: "https://picsum.photos/800/600?random=24",
    isMain: false,
    order: 2,
  },
  {
    propertyId: 9,
    url: "https://picsum.photos/800/600?random=25",
    isMain: true,
    order: 0,
  },
  {
    propertyId: 9,
    url: "https://picsum.photos/800/600?random=26",
    isMain: false,
    order: 1,
  },
  {
    propertyId: 9,
    url: "https://picsum.photos/800/600?random=27",
    isMain: false,
    order: 2,
  },
  {
    propertyId: 10,
    url: "https://picsum.photos/800/600?random=28",
    isMain: true,
    order: 0,
  },
  {
    propertyId: 10,
    url: "https://picsum.photos/800/600?random=29",
    isMain: false,
    order: 1,
  },
  {
    propertyId: 10,
    url: "https://picsum.photos/800/600?random=30",
    isMain: false,
    order: 2,
  },
];

export const regions = [
  {
    id: 1,
    name: "Toshkent shahri",
  },
  {
    id: 2,
    name: "Samarqand viloyati",
  },
  {
    id: 3,
    name: "Buxoro viloyati",
  },
  {
    id: 4,
    name: "Andijon viloyati",
  },
  {
    id: 5,
    name: "Namangan viloyati",
  },
  {
    id: 6,
    name: "Farg'ona viloyati",
  },
  {
    id: 7,
    name: "Qoraqalpog'iston Respublikasi",
  },
  {
    id: 8,
    name: "Xorazm viloyati",
  },
  {
    id: 9,
    name: "Qashqadaryo viloyati",
  },
];

export const districts = [
  {
    id: 1,
    name: "Yunusobod tumani",
    regionId: 1,
  },
  {
    id: 2,
    name: "Chilonzor tumani",
    regionId: 1,
  },
  {
    id: 3,
    name: "Samarqand shahri",
    regionId: 2,
  },
  {
    id: 4,
    name: "Buxoro shahri",
    regionId: 3,
  },
  {
    id: 5,
    name: "Andijon shahri",
    regionId: 4,
  },
  {
    id: 6,
    name: "Namangan shahri",
    regionId: 5,
  },
  {
    id: 7,
    name: "Farg'ona shahri",
    regionId: 6,
  },
  {
    id: 8,
    name: "Nukus shahri",
    regionId: 7,
  },
  {
    id: 9,
    name: "Urganch shahri",
    regionId: 8,
  },
  {
    id: 10,
    name: "Qarshi shahri",
    regionId: 9,
  },
];

export const landlords = [
  {
    userId: 1,
    companyName: "Nestline Group",
    bio: "10 yillik tajribaga ega ko'chmas mulk agentligi",
    isVerified: true,
  },
  {
    userId: 2,
    companyName: "Elite Homes",
    bio: "Biz bilan uy topish oson",
    isVerified: true,
  },
  {
    userId: 3,
    companyName: "Comfort Real Estate",
    bio: "Shinam va arzon uylar bizda!",
    isVerified: true,
  },
  {
    userId: 4,
    companyName: "Top Rent Uzbekistan",
    bio: "O'zbekistondagi yetakchi ijarachilar platformasi",
    isVerified: true,
  },
  {
    userId: 5,
    companyName: "Tashkent Rentals",
    bio: "Toshkentda qulay kvartiralar",
    isVerified: true,
  },
  {
    userId: 6,
    companyName: "Global Properties",
    bio: "Har qanday byudjet uchun mos uylar",
    isVerified: true,
  },
  {
    userId: 7,
    companyName: "Sunrise Housing",
    bio: "Ertalab uyg'onish yanada yoqimli bo'ladi",
    isVerified: true,
  },
  {
    userId: 8,
    companyName: "Real Comfort",
    bio: "Uylaringiz – bizning g‘amxo‘rligimizda",
    isVerified: true,
  },
  {
    userId: 9,
    companyName: "MetroHome",
    bio: "Metroga yaqin uylar – tez va qulay",
    isVerified: true,
  },
  {
    userId: 10,
    companyName: "Qulay Uylar",
    bio: "Sifatli uylar arzon narxda",
    isVerified: true,
  },
];


export const user: User = {
  email: 'bonu@gmail.com',
  password: 'root123',
  userName: 'Mohtabonu Qudratova',
  phoneNumber: '+998331213113',
  isAdminSite: false

}