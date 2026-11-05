export interface MenuItem {
  id: string;
  name: string;
  category: 'ayam' | 'daging' | 'ikan-seafood' | 'sayuran' | 'nasi-pelengkap' | 'snack';
  categoryLabel: string;
  price: number;
  formattedPrice: string;
  description: string;
  tags?: string[];
  isBestSeller?: boolean;
  image: string;
}

export interface CateringPackage {
  id: string;
  name: string;
  category: 'daily' | 'family' | 'office' | 'event' | 'wedding' | 'snack';
  categoryLabel: string;
  pricePerPax: number;
  formattedPrice: string;
  minPax: number;
  description: string;
  includedItems: string[];
  image: string;
  isPopular?: boolean;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'menu' | 'nasi-box' | 'prasmanan' | 'snack-box' | 'event';
  categoryLabel: string;
  image: string;
  caption: string;
}

export interface TestimonialItem {
  id: string;
  clientType: string;
  quote: string;
  event: string;
  isPlaceholder: boolean;
}

export interface ServiceItem {
  id: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  image: string;
  link: string;
  features: string[];
}

export interface FaqItem {
  question: string;
  answer: string;
}

export const BRAND_INFO = {
  name: "FindSeleroo",
  tagline: "Hidangan Istimewa, Momen Lebih Bermakna.",
  subTagline: "Pilihan catering berkualitas untuk setiap kebutuhan di Semarang, mulai dari hidangan harian hingga momen spesial bersama orang-orang terdekat.",
  location: "Semarang, Jawa Tengah, Indonesia",
  phone: "+62 812-3456-7890",
  whatsappNumber: "6281234567890", // Ubah nomor ini ke nomor resmi WhatsApp FindSeleroo
  email: "halo@findseleroo.com",
  operatingHours: "Senin – Sabtu: 08.00 – 17.00 WIB (Pemesanan event & konsultasi dapat dijadwalkan)",
  addressPlaceholder: "Jl. Pandanaran No. XX, Semarang, Jawa Tengah (Alamat operasional resmi dapat dikonfirmasi saat pemesanan)",
  mapsEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126715.9324647318!2d110.33466245820312!3d-7.012521199999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e708b4d3f0d024d%3A0x1e0432f9da3c7d0!2sSemarang%2C%20Kota%20Semarang%2C%20Jawa%20Tengah!5e0!3m2!1sid!2sid!4v1710000000000!5m2!1sid!2sid",
  pricingNote: "Catatan: Harga yang tertera merupakan harga estimasi/ilustratif untuk panduan awal. Harga final dapat disesuaikan dengan kebutuhan porsi, kemasan, dan permintaan khusus Anda bersama tim FindSeleroo.",
  minOrderRule: "Minimum pemesanan: 10 pax untuk seluruh paket catering.",
};

export const QUALITY_BADGES = [
  {
    title: "Bahan Segar Harian",
    desc: "Dipasok segar setiap pagi tanpa bahan pengawet berbahaya.",
    icon: "leaf"
  },
  {
    title: "100% Halal-Friendly",
    desc: "Bahan dan proses pengolahan bersih sesuai kaidah higienitas.",
    icon: "shield-check"
  },
  {
    title: "Kemasan Food-Grade",
    desc: "Bento box tebal bersekat, aman & higienis untuk dikonsumsi.",
    icon: "box"
  },
  {
    title: "Antar Tepat Waktu",
    desc: "Tim kurir khusus menjamin makanan tiba hangat sebelum acara.",
    icon: "clock"
  }
];

export const SEMARANG_DISTRICTS = [
  "Semarang Tengah",
  "Semarang Barat",
  "Semarang Timur",
  "Semarang Selatan",
  "Semarang Utara",
  "Banyumanik",
  "Tembalang",
  "Candisari",
  "Gajahmungkur",
  "Ngaliyan",
  "Pedurungan",
  "Gayamsari",
  "Genuk",
  "Gunungpati",
  "Mijen",
  "Tugu",
  "Ungaran & Sekitarnya"
];

export const SERVICES_LIST: ServiceItem[] = [
  {
    id: "catering-harian",
    title: "Catering Harian",
    shortDesc: "Solusi santap harian bergizi, variatif, dan higienis untuk keluarga maupun perorangan tanpa repot memasak.",
    fullDesc: "Menu berganti setiap hari dengan cita rasa masakan rumah yang lezat, menggunakan bahan baku segar pilihan serta pengantaran tepat waktu di area Semarang.",
    image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=800&q=80",
    link: "/paket#daily",
    features: ["Variasi menu setiap hari", "Porsi pas & bergizi seimbang", "Kemasan food-grade & higienis", "Pengiriman terjadwal"]
  },
  {
    id: "catering-event",
    title: "Catering Event",
    shortDesc: "Penyajian eksklusif untuk acara syukuran, arisan, ulang tahun, dan pertemuan istimewa lainnya.",
    fullDesc: "Pengalaman kuliner yang membahagiakan tamu Anda dengan ragam pilihan menu tradisional dan nusantara modern yang tertata apik.",
    image: "https://images.unsplash.com/photo-1555244162-803834f70033?auto=format&fit=crop&w=800&q=80",
    link: "/paket#event",
    features: ["Pilihan Nasi Box atau Prasmanan", "Dekorasi meja saji elegan", "Pelayanan staf terlatih", "Fleksibel sesuai tema acara"]
  },
  {
    id: "prasmanan",
    title: "Prasmanan",
    shortDesc: "Layanan buffet istimewa untuk pernikahan, gathering kantor, seminar besar, dan perayaan keluarga.",
    fullDesc: "Peralatan saji premium dan kebersihan berstandar tinggi yang memastikan setiap tamu menikmati hidangan hangat nan menggugah selera.",
    image: "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?auto=format&fit=crop&w=800&q=80",
    link: "/paket#wedding",
    features: ["Peralatan buffet & chafing dish lengkap", "Pramusaji berseragam rapi", "Pilihan dessert & stall gubukan", "Setup rapi & tepat waktu"]
  },
  {
    id: "snack-box",
    title: "Snack Box",
    shortDesc: "Aneka kue tradisional premium dan kudapan gurih pilihan untuk rapat kerja, seminar, atau break meeting.",
    fullDesc: "Kombinasi snack manis dan gurih dibuat dari bahan terbaik dengan kemasan eksklusif yang mencerminkan profesionalisme acara Anda.",
    image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=800&q=80",
    link: "/paket#snack",
    features: ["Kue basah & kering kualitas premium", "Pilihan paket 2, 3, atau 4 macam kue", "Sudah termasuk air mineral", "Box berdesain eksklusif"]
  }
];

export const BEST_SELLERS: MenuItem[] = [
  {
    id: "ayam-bakar-taliwang",
    name: "Ayam Bakar Rempah Istimewa",
    category: "ayam",
    categoryLabel: "Ayam",
    price: 32000,
    formattedPrice: "Rp 32.000",
    description: "Ayam bakar pilihan dengan bumbu rempah kelapa khas yang meresap sempurna hingga ke serat daging, disajikan dengan lalapan segar dan sambal terasi gurih.",
    tags: ["Best Seller", "Signature", "Favorit Acara"],
    isBestSeller: true,
    image: "https://images.unsplash.com/photo-1598515214211-89d3c73ae83b?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "rendang-daging-padang",
    name: "Rendang Daging Sapi Pilihan",
    category: "daging",
    categoryLabel: "Daging",
    price: 38000,
    formattedPrice: "Rp 38.000",
    description: "Potongan daging sapi empuk dimasak perlahan berjam-jam dengan santan murni dan rempah nusantara otentik menghasilkan kuah kering karamel yang kaya rasa.",
    tags: ["Best Seller", "Otentik", "Favorit Keluarga"],
    isBestSeller: true,
    image: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "gurame-asam-manis",
    name: "Gurame Fillet Saus Asam Manis",
    category: "ikan-seafood",
    categoryLabel: "Ikan & Seafood",
    price: 35000,
    formattedPrice: "Rp 35.000",
    description: "Ikan gurame segar fillet goreng renyah disiram saus asam manis spesial dengan potongan nanas manis, paprika segar, dan aroma sedap.",
    tags: ["Best Seller", "Segar", "Paling Dicari"],
    isBestSeller: true,
    image: "https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?auto=format&fit=crop&w=800&q=80"
  }
];

export const ALL_MENU_ITEMS: MenuItem[] = [
  ...BEST_SELLERS,
  {
    id: "ayam-goreng-lengkuas",
    name: "Ayam Goreng Serundeng Lengkuas",
    category: "ayam",
    categoryLabel: "Ayam",
    price: 28000,
    formattedPrice: "Rp 28.000",
    description: "Ayam ungkep rempah kunyit goreng garing dengan taburan serundeng lengkuas renyah harum menggoda selera.",
    tags: ["Tradisional", "Gurih"],
    image: "https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "ayam-woku-belanga",
    name: "Ayam Woku Belanga Wangi",
    category: "ayam",
    categoryLabel: "Ayam",
    price: 30000,
    formattedPrice: "Rp 30.000",
    description: "Olahan ayam dengan rempah daun kemangi segar, serai, daun jeruk, dan cabai rawit dengan kuah kental hangat.",
    tags: ["Pedas Segar", "Kemangi"],
    image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "empal-gentong-semarang",
    name: "Empal Daging Sapi Gurih Manis",
    category: "daging",
    categoryLabel: "Daging",
    price: 36000,
    formattedPrice: "Rp 36.000",
    description: "Daging sapi pilihan bertekstur empuk yang dimasak dengan bumbu ketumbar gula jawa kemudian digoreng sebentar.",
    tags: ["Khas Jawa", "Manis Gurih"],
    image: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "semur-daging-kentang",
    name: "Semur Daging Sapi & Kentang",
    category: "daging",
    categoryLabel: "Daging",
    price: 34000,
    formattedPrice: "Rp 34.000",
    description: "Kuah semur pekat manis beraroma cengkeh dan pala berpadu dengan kelembutan potongan daging sapi dan kentang.",
    tags: ["Comfort Food", "Kuah"],
    image: "https://images.unsplash.com/photo-1588168333986-5078d3ae3976?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "udang-bakar-madu",
    name: "Udang Bakar Madu Bawang",
    category: "ikan-seafood",
    categoryLabel: "Ikan & Seafood",
    price: 38000,
    formattedPrice: "Rp 38.000",
    description: "Udang laut segar dibakar dengan olesan madu hutan, kecap manis kualitas terbaik, dan sedikit perasan jeruk nipis.",
    tags: ["Favorit", "Seafood"],
    image: "https://images.unsplash.com/photo-1565680018434-b513d5e5fd47?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "cumi-asin-cabai-hijau",
    name: "Tumis Cumi Cabai Hijau & Jagung",
    category: "ikan-seafood",
    categoryLabel: "Ikan & Seafood",
    price: 32000,
    formattedPrice: "Rp 32.000",
    description: "Cumi segar ditumis wangi dengan irisan cabai hijau besar, tomat hijau, dan butiran jagung manis.",
    tags: ["Pedas Gurih", "Tumisan"],
    image: "https://images.unsplash.com/photo-1559847844-5315695dadae?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "tumis-buncis-daging",
    name: "Baby Buncis Tumis Daging Cincang",
    category: "sayuran",
    categoryLabel: "Sayuran",
    price: 18000,
    formattedPrice: "Rp 18.000",
    description: "Baby buncis muda bertekstur renyah segar ditumis cepat dengan daging sapi cincang berbumbu bawang putih dan saus tiram.",
    tags: ["Sehat", "Renyah", "Sayuran"],
    image: "https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "capcay-kuah-kental",
    name: "Capcay Seafood Spesial",
    category: "sayuran",
    categoryLabel: "Sayuran",
    price: 22000,
    formattedPrice: "Rp 22.000",
    description: "Paduan brokoli, kembang kol, wortel, jamur kuping, dan bakso ikan dalam kuah kaldu udang kental nan gurih.",
    tags: ["Sayur Segar", "Sehat"],
    image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "nasi-kuning-gurih",
    name: "Nasi Kuning Harum Pandan",
    category: "nasi-pelengkap",
    categoryLabel: "Nasi & Pelengkap",
    price: 9000,
    formattedPrice: "Rp 9.000",
    description: "Nasi pulen dimasak dengan santan kental, kunyit segar, dan daun pandan wangi beraroma khas nusantara.",
    tags: ["Pilihan Nasi", "Wangi"],
    image: "https://images.unsplash.com/photo-1516684732162-798a0062be99?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "nasi-liwet-teri",
    name: "Nasi Liwet Sunda Teri Medan",
    category: "nasi-pelengkap",
    categoryLabel: "Nasi & Pelengkap",
    price: 10000,
    formattedPrice: "Rp 10.000",
    description: "Nasi liwet beraroma serai, daun salam, bawang merah utuh, dan taburan teri medan gurih garing.",
    tags: ["Pilihan Nasi", "Gurih"],
    image: "https://images.unsplash.com/photo-1604382355076-af4b0eb60143?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "sambal-goreng-kentang-ati",
    name: "Sambal Goreng Ati Ampela & Kentang",
    category: "nasi-pelengkap",
    categoryLabel: "Nasi & Pelengkap",
    price: 18000,
    formattedPrice: "Rp 18.000",
    description: "Pelengkap wajib acara nusantara: dadu kentang goreng dan ati sapi lembut dalam bumbu balado santan gurih berpadu petai segar.",
    tags: ["Pelengkap Pilihan", "Balado"],
    image: "https://images.unsplash.com/photo-1574484284002-952d92456975?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "snack-risoles-ragout",
    name: "Risoles Ragout Ayam Keju Premium",
    category: "snack",
    categoryLabel: "Snack",
    price: 6000,
    formattedPrice: "Rp 6.000",
    description: "Kulit risoles tipis lembut berlapis tepung roti renyah dengan isian ragout ayam suwir, wortel manis, dan lelehan keju.",
    tags: ["Kudapan Favorit", "Gurih"],
    image: "https://images.unsplash.com/photo-1541592106381-b31e9677c0e5?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "snack-lemper-bakar",
    name: "Lemper Ayam Bakar Daun Pisang",
    category: "snack",
    categoryLabel: "Snack",
    price: 6500,
    formattedPrice: "Rp 6.500",
    description: "Ketan gurih pulen isi suwiran ayam rempah padat, dibungkus daun pisang lalu dipanggang wangi.",
    tags: ["Kue Tradisional", "Wangi"],
    image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=800&q=80"
  }
];

export const PACKAGES_LIST: CateringPackage[] = [
  {
    id: "daily-hemat",
    name: "Paket Harian Keluarga Hemat",
    category: "daily",
    categoryLabel: "Daily Meal",
    pricePerPax: 28000,
    formattedPrice: "Rp 28.000",
    minPax: 10,
    description: "Pilihan hemat untuk kebutuhan makan siang harian keluarga atau komunitas. Menu berganti setiap hari dengan nutrisi lengkap.",
    includedItems: [
      "1 Menu Olahan Ayam / Telur",
      "1 Sayuran Segar Harian (Tumisan / Kuah)",
      "1 Lauk Pendamping (Tempe / Tahu / Bakwan)",
      "Sambal Khas & Kerupuk Renyah",
      "Nasi Putih Pulen Wangi"
    ],
    image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=800&q=80",
    isPopular: false
  },
  {
    id: "daily-premium",
    name: "Paket Harian Premium Nutrisi",
    category: "daily",
    categoryLabel: "Daily Meal",
    pricePerPax: 38000,
    formattedPrice: "Rp 38.000",
    minPax: 10,
    description: "Pilihan santap harian dengan protein ganda dan potongan buah segar. Ideal untuk gaya hidup sehat tanpa kompromi rasa.",
    includedItems: [
      "1 Menu Protein Utama (Daging Sapi / Ikan Segar / Ayam)",
      "1 Menu Protein Pendamping (Telur Balado / Perkedel / Rolade)",
      "1 Menu Sayuran Pilihan Segar",
      "Buah Potong Segar (Semangka / Melon)",
      "Nasi Putih / Nasi Merah (Sesuai Permintaan)",
      "Sambal Nusantara & Kerupuk Udang"
    ],
    image: "https://images.unsplash.com/photo-1498837167922-ddd27525d352?auto=format&fit=crop&w=800&q=80",
    isPopular: true
  },
  {
    id: "family-dining-gathering",
    name: "Paket Family Dining Silaturahmi",
    category: "family",
    categoryLabel: "Family Dining",
    pricePerPax: 55000,
    formattedPrice: "Rp 55.000",
    minPax: 10,
    description: "Didesain untuk kehangatan kumpul keluarga besar, arisan, atau syukuran rumah baru dengan porsi berlimpah dan penyajian rapi.",
    includedItems: [
      "Ayam Bakar Madu / Ayam Goreng Lengkuas",
      "Rendang Daging Sapi / Empal Manis",
      "Sambal Goreng Ati Kentang",
      "Capcay Seafood / Tumis Buncis Daging",
      "Nasi Putih Pulen / Nasi Liwet Gurih",
      "Kerupuk Udang, Sambal Terasi & Lalapan",
      "Puding Buah / Buah Iris Segar"
    ],
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=800&q=80",
    isPopular: true
  },
  {
    id: "office-lunch-box",
    name: "Paket Nasi Box Kantor Eksklusif",
    category: "office",
    categoryLabel: "Office Catering",
    pricePerPax: 35000,
    formattedPrice: "Rp 35.000",
    minPax: 10,
    description: "Solusi praktis dan profesional untuk meeting direksi, makan siang karyawan, atau pelatihan internal dalam bento box bersekat higienis.",
    includedItems: [
      "Ayam Bakar Rempah / Daging Lada Hitam",
      "Sayuran Buncis Cah Daging / Capcay",
      "Tahu / Tempe Bacem Gurih",
      "Nasi Putih Pulen / Nasi Kuning",
      "Air Mineral Cup & Buah Pisang / Jeruk",
      "Sendok, Garpu, Tisu Higienis Bersegel"
    ],
    image: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=800&q=80",
    isPopular: true
  },
  {
    id: "office-executive-meeting",
    name: "Paket Executive Meeting & VIP",
    category: "office",
    categoryLabel: "Office Catering",
    pricePerPax: 50000,
    formattedPrice: "Rp 50.000",
    minPax: 10,
    description: "Penyajian premium dalam hard box bento eksklusif untuk tamu kehormatan, ekspatriat, dan dewan komisaris perusahaan.",
    includedItems: [
      "Gurame Fillet Saus Asam Manis / Rendang Daging",
      "Ayam Suwir Bali / Ayam Goreng Mentega",
      "Tumis Baby Buncis Jamur Shitake",
      "Telur Balado / Sambal Goreng Udang",
      "Nasi Liwet Harum / Nasi Putih",
      "Pudding Mangga Susu & Air Mineral Botol",
      "Sendok, Garpu Stainless / Premium Cutlery"
    ],
    image: "https://images.unsplash.com/photo-1555244162-803834f70033?auto=format&fit=crop&w=800&q=80",
    isPopular: false
  },
  {
    id: "event-syukuran-gathering",
    name: "Paket Event & Gathering Komunitas",
    category: "event",
    categoryLabel: "Event Catering",
    pricePerPax: 48000,
    formattedPrice: "Rp 48.000",
    minPax: 10,
    description: "Cocok untuk ulang tahun, seminar, reuni sekolah, dan pertemuan komunitas di Semarang dengan cita rasa yang disukai semua umur.",
    includedItems: [
      "Nasi Kuning / Nasi Uduk / Nasi Liwet",
      "Ayam Goreng Kalasan / Ayam Bakar",
      "Sambal Goreng Kentang Kering Balado",
      "Telur Rawis & Urap Sayur Segar",
      "Kerupuk Bawang, Sambal & Lalapan",
      "Air Mineral & Es Teh / Es Sirup Selasih"
    ],
    image: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=800&q=80",
    isPopular: false
  },
  {
    id: "wedding-prasmanan-agung",
    name: "Paket Prasmanan Pernikahan Agung",
    category: "wedding",
    categoryLabel: "Wedding & Celebration",
    pricePerPax: 85000,
    formattedPrice: "Rp 85.000",
    minPax: 10,
    description: "Layanan buffet istimewa untuk pernikahan dan resepsi akbar. Dilengkapi chafing dish pemanas, dekorasi meja saji, dan waiter berseragam.",
    includedItems: [
      "Soup Pembuka: Sup Kimlo / Sup Ayam Jamur",
      "Menu Utama 1: Rendang Sapi Pilihan / Beef Teriyaki",
      "Menu Utama 2: Gurame Fillet Asam Manis",
      "Menu Utama 3: Ayam Bakar Rempah / Ayam Kodok Slices",
      "Menu Sayuran: Cha Brokoli Jamur Kuping",
      "Nasi Putih Pulen & Nasi Goreng Spesial",
      "Dessert Corner: Aneka Pudding, Es Buah Segar, Tartlets",
      "Lengkap Meja Buffet, Alat Makan & Staf Pelayan"
    ],
    image: "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?auto=format&fit=crop&w=800&q=80",
    isPopular: true
  },
  {
    id: "snack-coffee-break-classic",
    name: "Paket Snack Box Seminar & Rapat",
    category: "snack",
    categoryLabel: "Snack & Coffee Break",
    pricePerPax: 18000,
    formattedPrice: "Rp 18.000",
    minPax: 10,
    description: "Pilihan praktis 3 macam kudapan (2 gurih + 1 manis) dikemas dalam kardus elegan untuk coffee break seminar atau meeting kantor.",
    includedItems: [
      "1 Risoles Ragout Ayam Keju Renyah",
      "1 Lemper Ayam Bakar Wangi",
      "1 Pie Buah / Bolu Gulung Keju Lembut",
      "Air Mineral Gelas 220ml",
      "Tissue Higienis & Permen Mint"
    ],
    image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=800&q=80",
    isPopular: true
  },
  {
    id: "snack-coffee-break-deluxe",
    name: "Paket Coffee Break Deluxe Setup",
    category: "snack",
    categoryLabel: "Snack & Coffee Break",
    pricePerPax: 32000,
    formattedPrice: "Rp 32.000",
    minPax: 10,
    description: "Layanan live coffee & tea station lengkap dengan pemanas air, cangkir keramik, 4 variasi pastry dan jajanan pasar premium.",
    includedItems: [
      "Live Coffee Station (Kopi Hitam & Susu)",
      "Live Tea Station (Teh Melati & Chamomile)",
      "2 Pastry Modern (Croissant Mini / Danish)",
      "2 Jajanan Tradisional Premium (Semar Mendem / Pastel)",
      "Gula Pasir, Gula Aren Cair, Creamer",
      "Peralatan Cangkir & Staf Standby"
    ],
    image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=800&q=80",
    isPopular: false
  }
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: "gal-1",
    title: "Ayam Bakar Rempah Istimewa",
    category: "menu",
    categoryLabel: "Menu Makanan",
    image: "https://images.unsplash.com/photo-1598515214211-89d3c73ae83b?auto=format&fit=crop&w=800&q=80",
    caption: "Ayam bakar bumbu rempah khas FindSeleroo dengan kematangan sempurna dan aroma asap sedap."
  },
  {
    id: "gal-2",
    title: "Rendang Daging Sapi Karamel",
    category: "menu",
    categoryLabel: "Menu Makanan",
    image: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=800&q=80",
    caption: "Rendang daging sapi paduan santan murni dan rempah pilihan dimasak perlahan berjam-jam."
  },
  {
    id: "gal-3",
    title: "Gurame Fillet Saus Asam Manis",
    category: "menu",
    categoryLabel: "Menu Makanan",
    image: "https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?auto=format&fit=crop&w=800&q=80",
    caption: "Ikan gurame fillet segar bertekstur krispi berbalut saus asam manis nan harum."
  },
  {
    id: "gal-4",
    title: "Nasi Bento Box Eksekutif Bersekat",
    category: "nasi-box",
    categoryLabel: "Nasi Box",
    image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=800&q=80",
    caption: "Penyajian nasi bento box eksklusif yang rapi, bersih, dan mengutamakan estetika visual."
  },
  {
    id: "gal-5",
    title: "Nasi Kotak Syukuran Nusantara",
    category: "nasi-box",
    categoryLabel: "Nasi Box",
    image: "https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?auto=format&fit=crop&w=800&q=80",
    caption: "Paket nasi box syukuran dengan lauk pauk komplit bercita rasa masakan nusantara."
  },
  {
    id: "gal-6",
    title: "Setup Prasmanan Mewah Pernikahan",
    category: "prasmanan",
    categoryLabel: "Prasmanan",
    image: "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?auto=format&fit=crop&w=800&q=80",
    caption: "Tata meja buffet dan chafing dish dengan dekorasi floral dan pencahayaan hangat."
  },
  {
    id: "gal-7",
    title: "Buffet Saji Pertemuan Perusahaan",
    category: "prasmanan",
    categoryLabel: "Prasmanan",
    image: "https://images.unsplash.com/photo-1555244162-803834f70033?auto=format&fit=crop&w=800&q=80",
    caption: "Layanan prasmanan korporat di Semarang dengan alur antrean tertata dan staf sigap."
  },
  {
    id: "gal-8",
    title: "Koleksi Snack Box Rapat Kantor",
    category: "snack-box",
    categoryLabel: "Snack Box",
    image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=800&q=80",
    caption: "Kue basah tradisional dan pastry modern bermutu tinggi dalam kemasan cantik."
  },
  {
    id: "gal-9",
    title: "Coffee Break & Kudapan Pertemuan",
    category: "snack-box",
    categoryLabel: "Snack Box",
    image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=800&q=80",
    caption: "Sajian kudapan manis dan kopi hangat untuk menyegarkan peserta meeting dan seminar."
  },
  {
    id: "gal-10",
    title: "Jamuan Hangat Acara Keluarga",
    category: "event",
    categoryLabel: "Event Catering",
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=800&q=80",
    caption: "Suasana kehangatan bersantap bersama sajian istimewa dari FindSeleroo."
  },
  {
    id: "gal-11",
    title: "Dekorasi Meja Jamuan Resepsi",
    category: "event",
    categoryLabel: "Event Catering",
    image: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=800&q=80",
    caption: "Detail penataan alat saji dan dekorasi meja untuk momen perayaan yang berkesan."
  },
  {
    id: "gal-12",
    title: "Keseruan Jamuan Temu Mitra Bisnis",
    category: "event",
    categoryLabel: "Event Catering",
    image: "https://images.unsplash.com/photo-1498837167922-ddd27525d352?auto=format&fit=crop&w=800&q=80",
    caption: "Pelayanan profesional yang mendukung kesuksesan setiap acara dan networking bisnis."
  }
];

export const TESTIMONIALS_LIST: TestimonialItem[] = [
  {
    id: "testi-1",
    clientType: "Perwakilan Keluarga (Acara Syukuran Rumah di Candisari)",
    quote: "Rasa ayam bakar dan rendangnya benar-benar di luar ekspektasi kami sekeluarga. Bumbunya meresap sampai ke dalam, dagingnya empuk, dan kemasannya sangat rapi. Seluruh tamu memuji hidangannya.",
    event: "Syukuran Keluarga 60 Pax",
    isPlaceholder: true
  },
  {
    id: "testi-2",
    clientType: "HR & General Affair Officer (Perusahaan IT di Kawasan Simpang Lima)",
    quote: "Untuk meeting direksi bulanan, FindSeleroo selalu konsisten tepat waktu. Nasi box bento eksekutifnya bersih, higienis, dan porsi nasinya sangat pas. Sangat membantu operasional kantor kami.",
    event: "Monthly Executive Lunch 35 Pax",
    isPlaceholder: true
  },
  {
    id: "testi-3",
    clientType: "Event Organizer Acara Seminar Kesehatan (Gedung Pertemuan Semarang Barat)",
    quote: "Snack box dan coffee station-nya segar dan kuenya premium, bukan kue pasaran. Koordinasi via WhatsApp sangat responsif dan fleksibel saat kami meminta penyesuaian menu.",
    event: "Seminar Nasional 120 Pax",
    isPlaceholder: true
  }
];

export const FAQ_LIST: FaqItem[] = [
  {
    question: "Berapa batas minimum pemesanan catering di FindSeleroo?",
    answer: "Batas minimum pemesanan di FindSeleroo adalah 10 pax untuk seluruh kategori paket (Daily Meal, Family Dining, Office Box, Event, dan Snack Box). Kami memastikan kuantitas ini tetap terjaga mutunya."
  },
  {
    question: "Berapa hari sebelum acara pemesanan harus dilakukan?",
    answer: "Untuk nasi box dan snack box harian, kami sarankan konfirmasi minimal H-2 sebelum pengiriman. Untuk acara besar seperti prasmanan, gathering, atau pernikahan, kami menyarankan konsultasi dan booking jadwal minimal H-7 hingga H-14 agar tim kami dapat mempersiapkan logistik dengan sempurna."
  },
  {
    question: "Apakah bisa request menu custom di luar daftar paket?",
    answer: "Tentu bisa! Kami sangat terbuka untuk pesanan custom menu sesuai tema acara, selera keluarga, atau anggaran yang Anda miliki. Cukup hubungi kami melalui WhatsApp untuk berdiskusi langsung dengan tim FindSeleroo."
  },
  {
    question: "Apakah FindSeleroo melayani pengantaran ke seluruh area Semarang?",
    answer: "Ya, kami melayani pengantaran ke seluruh wilayah Kota Semarang dan sekitarnya (Semarang Tengah, Barat, Timur, Selatan, Banyumanik, Tembalang, Ngaliyan, hingga Ungaran). Biaya pengiriman akan diinfokan secara transparan berdasarkan jarak lokasi acara."
  },
  {
    question: "Bagaimana cara melakukan pemesanan dan pembayaran?",
    answer: "Pemesanan dapat dilakukan langsung dengan mengklik tombol WhatsApp di website ini. Tim kami akan mengirimkan rincian pesanan dan total biaya. Pembayaran dapat dilakukan via transfer bank resmi dengan sistem DP (Down Payment) untuk konfirmasi tanggal dan pelunasan sesuai kesepakatan."
  },
  {
    question: "Apakah harga yang tertera di website sudah final?",
    answer: "Harga yang tertera merupakan estimasi harga acuan/demo untuk memudahkan perencanaan anggaran Anda. Harga final akan dikonfirmasi resmi oleh tim FindSeleroo saat konsultasi berdasarkan jumlah porsi, pilihan kemasan, dan request tambahan."
  }
];

export const WHY_US_LIST = [
  {
    title: "Pilihan Menu Berkualitas",
    desc: "Bahan pangan segar harian dipadukan dengan bumbu rempah pilihan tanpa kompromi pada cita rasa dan kebersihan.",
    icon: "chef-hat"
  },
  {
    title: "Fleksibel Sesuai Kebutuhan",
    desc: "Pilihan menu dapat dikustomisasi mengikuti tema acara, selera tamu, maupun batasan anggaran yang Anda rencanakan.",
    icon: "adjustments"
  },
  {
    title: "Minimum Pemesanan yang Jelas",
    desc: "Mulai dari 10 pax, melayani kebutuhan keluarga kecil, kantor, hingga perhelatan besar dengan transparansi penuh.",
    icon: "scale"
  },
  {
    title: "Pelayanan Profesional",
    desc: "Pengantaran tepat waktu, kemasan rapi berstandar food-grade, serta komunikasi konsultasi yang ramah dan solutif.",
    icon: "sparkles"
  }
];
