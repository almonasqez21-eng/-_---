/**
 * A.M. Sport - Application Core (Mobile Optimized - Separated Governorates & Address Input)
 */

const products = [
    {
        id: 1,
        name: "ترنج Adidas رياضي كلاسيك",
        category: "sets",
        price: 380,
        oldPrice: 450,
        rating: 4.8,
        stock: 3,
        sizes: ["L", "XL", "2XL"],
        colors: ["أبيض وزيتي", "أزرق وبنطلون"],
        images: ["اديدس.ابيض وزيتي.jfif", "اديدس.ازرق وبنطلون.jfif"],
        colorImages: {
            "أبيض وزيتي": "اديدس.ابيض وزيتي.jfif",
            "أزرق وبنطلون": "اديدس.ازرق وبنطلون.jfif"
        },
        description: "ترنج رياضي قطني مريح وعالي الجودة مناسب للأنشطة الرياضية واليومية مع خامة ممتازة ومقاومة للتعرق.",
        brand: "Adidas"
    },
    {
        id: 2,
        name: "طقم Adidas شورت وتيشيرت",
        category: "sets",
        price: 350,
        oldPrice: 420,
        rating: 4.9,
        stock: 5,
        sizes: ["L", "XL", "2XL"],
        colors: ["أزرق وشورت", "أسود وشورت"],
        images: ["اديدس.ازرق وشرت.jfif", "اديدس.اسود وشرت.jfif"],
        colorImages: {
            "أزرق وشورت": "اديدس.ازرق وشرت.jfif",
            "أسود وشورت": "اديدس.اسود وشرت.jfif"
        },
        description: "طقم صيفي مريح جداً بخامة ميلتون صيفي خفيف ومعالج توفر أقصى أنواع الراحة أثناء التمرين.",
        brand: "Adidas"
    },
    {
        id: 3,
        name: "طقم Puma رياضي موحد",
        category: "sets",
        price: 350,
        oldPrice: 400,
        rating: 4.7,
        stock: 2,
        sizes: ["M", "L", "XL"],
        colors: ["أبيض وبرتقالي", "أزرق وبرتقالي", "أسود وبرتقالي"],
        images: ["بوما.ابيض وبرتقالي.jfif", "بوما.ازرق وبرتقالي.jfif", "بوما.اسود وبرتقالي.jfif"],
        colorImages: {
            "أبيض وبرتقالي": "بوما.ابيض وبرتقالي.jfif",
            "أزرق وبرتقالي": "بوما.ازرق وبرتقالي.jfif",
            "أسود وبرتقالي": "بوما.اسود وبرتقالي.jfif"
        },
        description: "تصميم عصري رياضي من Puma بلمسات برتقالية مميزة، خامة خفيفة وعالية المرونة.",
        brand: "Puma"
    },
    {
        id: 4,
        name: "شورت Jordan 23 شبك",
        category: "shorts",
        price: 180,
        oldPrice: 220,
        rating: 4.6,
        stock: 8,
        sizes: ["L", "XL", "2XL"],
        colors: ["أبيض", "أصفر/أسود"],
        images: ["شورت.ولد.ابيض.jfif", "شورت.ولد.اصفر.jfif"],
        colorImages: {
            "أبيض": "شورت.ولد.ابيض.jfif",
            "أصفر/أسود": "شورت.ولد.اصفر.jfif"
        },
        description: "شورت شبكي مخصص لكرة السلة والتمارين الرياضية المكثفة، خفيف الوزن ويوفر تهوية ممتازة.",
        brand: "Jordan"
    },
    {
        id: 5,
        name: "طقم Nike مطبوع دايتك",
        category: "sets",
        price: 380,
        oldPrice: 460,
        rating: 5.0,
        stock: 4,
        sizes: ["M", "L", "XL", "2XL"],
        colors: ["أبيض وأسود", "أبيض ورمادي"],
        images: ["نايكل.ابيض واسود.jfif", "نايكل.ابيض ورمادي.jfif"],
        colorImages: {
            "أبيض وأسود": "نايكل.ابيض واسود.jfif",
            "أبيض ورمادي": "نايكل.ابيض ورمادي.jfif"
        },
        description: "طقم نايك خامة دايتك معالجة بطبعة مميزة ومظهر كاجوال راقي.",
        brand: "Nike"
    },
    {
        id: 6,
        name: "شورت Adidas سوفت كلاسيك",
        category: "shorts",
        price: 150,
        oldPrice: 190,
        rating: 4.5,
        stock: 6,
        sizes: ["M", "L", "XL", "2XL"],
        colors: ["أبيض"],
        images: ["اديدس.شورت.png"],
        colorImages: {
            "أبيض": "اديدس.شورت.png"
        },
        description: "شورت أديداس خامة سوفت ناعمة، تصميم كلاسيكي عملي ومناسب لجميع الأوقات.",
        brand: "Adidas"
    }
];

let currentCategory = 'all';
let cart = JSON.parse(localStorage.getItem('am_cart')) || [];
let wishlist = JSON.parse(localStorage.getItem('am_wishlist')) || [];
let selectedColorTemp = "";
let selectedSizeTemp = "";

// أسعار ومواعيد الشحن لكل محافظة على حدة
const shippingRates = {
    pickup: { cost: 0, text: "استلام فوري بنفس اليوم من الفرع (أسيوط - كوبري العصارة)" },
    assiut: { cost: 40, text: "التوصيل خلال 24 ساعة داخل محافظة أسيوط" },
    sohag: { cost: 60, text: "التوصيل خلال 48 ساعة لمحافظة سوهاج" },
    qena: { cost: 60, text: "التوصيل خلال 48 ساعة لمحافظة قنا" },
    luxor: { cost: 70, text: "التوصيل خلال 48 ساعة لمحافظة الأقصر" },
    aswan: { cost: 70, text: "التوصيل خلال 48 ساعة لمحافظة أسوان" },
    minya: { cost: 60, text: "التوصيل خلال 48 ساعة لمحافظة المنيا" },
    beni_suef: { cost: 60, text: "التوصيل خلال 48 ساعة لمحافظة بني سويف" },
    fayoum: { cost: 60, text: "التوصيل خلال 48 ساعة لمحافظة الفيوم" },
    cairo: { cost: 80, text: "التوصيل خلال 2 - 3 أيام لمحافظة القاهرة" },
    giza: { cost: 80, text: "التوصيل خلال 2 - 3 أيام لمحافظة الجيزة" },
    alexandria: { cost: 85, text: "التوصيل خلال 2 - 3 أيام لمحافظة الإسكندرية" },
    delta: { cost: 90, text: "التوصيل خلال 3 أيام لمحافظات وجه بحري وباقي المحافظات" }
};

document.addEventListener('DOMContentLoaded', () => {
    initTheme();
    applyFilters();
    updateCartUI();
    updateWishlistUI();
    startExtendedCountdown();

    document.getElementById('cartBtn')?.addEventListener('click', openCartModal);
    document.getElementById('closeCart')?.addEventListener('click', closeCartModal);
});

// العداد التنازلي للشريط الخارجي
function startExtendedCountdown() {
    let offerEndTime = localStorage.getItem('am_offer_end');
    const SEVEN_DAYS_MS = 7 * 24 * 60 * 60 * 1000;

    if (!offerEndTime || new Date().getTime() > parseInt(offerEndTime)) {
        offerEndTime = new Date().getTime() + SEVEN_DAYS_MS;
        localStorage.setItem('am_offer_end', offerEndTime);
    }

    const timerElement = document.getElementById('bannerCountdown');

    function updateTimer() {
        const now = new Date().getTime();
        const diff = parseInt(offerEndTime) - now;

        if (diff <= 0) {
            localStorage.setItem('am_offer_end', new Date().getTime() + SEVEN_DAYS_MS);
            return;
        }

        const days = Math.floor(diff / (1000 * 60 * 60 * 24));
        const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((diff % (1000 * 60)) / 1000);

        const pad = (n) => n.toString().padStart(2, '0');
        if (timerElement) {
            timerElement.textContent = `${pad(days)}D ${pad(hours)}:${pad(minutes)}:${pad(seconds)}`;
        }
    }

    updateTimer();
    setInterval(updateTimer, 1000);
}

function dismissBanner() {
    const banner = document.getElementById('bundleOfferBanner');
    if (banner) banner.style.display = 'none';
}

function showToast(message, isError = false) {
    const toast = document.getElementById('toast');
    const toastMsg = document.getElementById('toastMsg');
    const toastIcon = document.getElementById('toastIcon');

    if (!toast || !toastMsg || !toastIcon) return;

    toastMsg.textContent = message;
    toastIcon.className = isError ? "fas fa-exclamation-circle text-red-400 text-xl" : "fas fa-check-circle text-green-400 text-xl";

    toast.classList.remove('translate-y-20', 'opacity-0');
    setTimeout(() => toast.classList.add('translate-y-20', 'opacity-0'), 3000);
}

function toggleDarkMode() {
    const html = document.documentElement;
    const icon = document.getElementById('darkModeIcon');
    
    if (html.classList.contains('dark')) {
        html.classList.remove('dark');
        if (icon) icon.className = "fas fa-moon text-base";
        localStorage.setItem('am_theme', 'light');
    } else {
        html.classList.add('dark');
        if (icon) icon.className = "fas fa-sun text-base text-yellow-300";
        localStorage.setItem('am_theme', 'dark');
    }
}

function initTheme() {
    const savedTheme = localStorage.getItem('am_theme');
    const icon = document.getElementById('darkModeIcon');
    
    if (savedTheme === 'dark' || (!savedTheme && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
        document.documentElement.classList.add('dark');
        if (icon) icon.className = "fas fa-sun text-base text-yellow-300";
    } else {
        document.documentElement.classList.remove('dark');
        if (icon) icon.className = "fas fa-moon text-base";
    }
}

function setCategoryFilter(category, btnElement) {
    currentCategory = category;
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.classList.remove('bg-slate-900', 'dark:bg-blue-600', 'text-white');
        btn.classList.add('bg-gray-100', 'dark:bg-slate-700', 'text-gray-800', 'dark:text-gray-100');
    });
    btnElement.classList.remove('bg-gray-100', 'dark:bg-slate-700', 'text-gray-800', 'dark:text-gray-100');
    btnElement.classList.add('bg-slate-900', 'dark:bg-blue-600', 'text-white');

    applyFilters();
}

function applyFilters() {
    const searchQuery = document.getElementById('searchInput')?.value.toLowerCase().trim() || "";
    const selectedSize = document.getElementById('filterSize')?.value || "all";
    const sortValue = document.getElementById('sortPrice')?.value || "default";

    let result = products.filter(p => {
        const matchesCategory = (currentCategory === 'all' || p.category === currentCategory);
        const matchesSearch = p.name.toLowerCase().includes(searchQuery) || p.brand.toLowerCase().includes(searchQuery) || p.description.toLowerCase().includes(searchQuery);
        const matchesSize = (selectedSize === 'all' || p.sizes.includes(selectedSize));

        return matchesCategory && matchesSearch && matchesSize;
    });

    if (sortValue === 'lowToHigh') result.sort((a, b) => a.price - b.price);
    else if (sortValue === 'highToLow') result.sort((a, b) => b.price - a.price);

    displayProducts(result);
}

function displayProducts(items) {
    const grid = document.getElementById('productsGrid');
    if (!grid) return;

    if (items.length === 0) {
        grid.innerHTML = `<div class="col-span-full text-center py-12 text-gray-700 dark:text-gray-200 font-black text-sm">لا توجد منتجات مطابقة للخيارات المختارة.</div>`;
        return;
    }

    grid.innerHTML = items.map(product => {
        const discount = product.oldPrice ? Math.round(((product.oldPrice - product.price) / product.oldPrice) * 100) : 0;
        const isWish = wishlist.includes(product.id);

        return `
        <div class="bg-white dark:bg-slate-800 rounded-2xl shadow-sm hover:shadow-xl transition duration-300 overflow-hidden border border-gray-200 dark:border-slate-700 flex flex-col justify-between group relative">
            <button onclick="toggleWishlist(${product.id}, event)" class="absolute top-2.5 left-2.5 z-10 w-8 h-8 bg-white/90 dark:bg-slate-800/90 backdrop-blur-md rounded-full flex items-center justify-center text-gray-400 hover:text-red-500 transition shadow">
                <i class="fa-heart ${isWish ? 'fas text-red-500' : 'far'} text-xs"></i>
            </button>

            <div onclick="openProductDetail(${product.id})" class="cursor-pointer">
                <div class="relative bg-gray-100 dark:bg-slate-700 h-48 sm:h-60 overflow-hidden">
                    <img src="${product.images[0]}" alt="${product.name}" class="w-full h-full object-cover group-hover:scale-105 transition duration-500">
                    
                    <div class="absolute top-2.5 right-2.5 flex flex-col gap-1 items-start">
                        <span class="bg-slate-900/90 text-white text-[10px] px-2 py-0.5 rounded-full font-black">${product.brand}</span>
                        ${discount > 0 ? `<span class="bg-red-600 text-white text-[10px] px-1.5 py-0.5 rounded-full font-black">خصم ${discount}%</span>` : ''}
                    </div>

                    <span class="absolute bottom-2.5 right-2.5 bg-blue-600/90 text-white text-[10px] px-2 py-0.5 rounded-md font-bold">
                        ${product.colors.length} ألوان
                    </span>
                </div>

                <div class="p-3">
                    <div class="flex items-center justify-between mb-1">
                        <div class="flex items-center gap-1 text-yellow-500 text-[11px] font-black">
                            <i class="fas fa-star text-[10px]"></i>
                            <span class="text-gray-800 dark:text-gray-200">${product.rating}</span>
                        </div>
                        ${product.stock <= 3 ? `<span class="text-[10px] font-black text-red-600 dark:text-red-400 bg-red-50 dark:bg-red-950/60 px-1.5 py-0.5 rounded border border-red-200 dark:border-red-900"><i class="fas fa-bolt ml-0.5"></i>متبقي ${product.stock}</span>` : ''}
                    </div>

                    <h3 class="font-black text-gray-900 dark:text-white text-xs sm:text-sm mb-1.5 leading-snug group-hover:text-blue-600 dark:group-hover:text-blue-400 transition line-clamp-1">${product.name}</h3>
                    
                    <div class="flex items-baseline gap-1.5">
                        <span class="text-blue-600 dark:text-blue-400 font-black text-sm sm:text-base">${product.price} <span class="text-[10px] font-bold text-gray-700 dark:text-gray-300">ج.م</span></span>
                        ${product.oldPrice ? `<span class="text-gray-400 dark:text-gray-400 text-[10px] line-through font-bold">${product.oldPrice} ج.م</span>` : ''}
                    </div>
                </div>
            </div>

            <div class="p-3 pt-0">
                <button onclick="openProductDetail(${product.id})" class="w-full bg-blue-50 dark:bg-slate-700 text-blue-600 dark:text-blue-300 hover:bg-blue-600 hover:text-white font-bold py-2 rounded-xl text-xs transition flex items-center justify-center gap-1.5 border border-blue-200 dark:border-slate-600">
                    <i class="fas fa-eye"></i> عرض التفاصيل والمقاسات
                </button>
            </div>
        </div>
    `}).join('');
}

function toggleWishlist(productId, event) {
    if(event) event.stopPropagation();
    const index = wishlist.indexOf(productId);
    if (index > -1) {
        wishlist.splice(index, 1);
        showToast("تم إزالة المنتج من المفضلة");
    } else {
        wishlist.push(productId);
        showToast("تم إضافة المنتج للمفضلة ❤️");
    }
    localStorage.setItem('am_wishlist', JSON.stringify(wishlist));
    updateWishlistUI();
    applyFilters();
}

function updateWishlistUI() {
    const countEl = document.getElementById('wishlistCount');
    if (countEl) countEl.textContent = wishlist.length;
}

function openWishlistModal() {
    const container = document.getElementById('wishlistItems');
    if (!container) return;

    if (wishlist.length === 0) {
        container.innerHTML = `<p class="text-center text-gray-700 dark:text-gray-300 py-8 font-black text-xs">لا توجد منتجات في المفضلة بعد.</p>`;
    } else {
        const wishProducts = products.filter(p => wishlist.includes(p.id));
        container.innerHTML = wishProducts.map(p => `
            <div class="flex items-center justify-between border-b border-gray-200 dark:border-slate-700 pb-2.5">
                <div class="flex items-center gap-2.5 cursor-pointer" onclick="closeWishlistModal(); openProductDetail(${p.id})">
                    <img src="${p.images[0]}" class="w-12 h-12 object-cover rounded-lg border border-gray-200 dark:border-slate-700">
                    <div>
                        <h4 class="font-bold text-xs text-gray-900 dark:text-white">${p.name}</h4>
                        <span class="text-blue-600 dark:text-blue-400 font-bold text-xs">${p.price} ج.م</span>
                    </div>
                </div>
                <button onclick="toggleWishlist(${p.id}, event)" class="text-red-500 hover:text-red-700 text-xs font-bold p-2 transition">
                    <i class="fas fa-trash-alt"></i>
                </button>
            </div>
        `).join('');
    }
    document.getElementById('wishlistModal')?.classList.remove('hidden');
}

function closeWishlistModal() { document.getElementById('wishlistModal')?.classList.add('hidden'); }

function showCatalogView() {
    document.getElementById('catalogView').classList.remove('hidden');
    document.getElementById('productDetailView').classList.add('hidden');
}

function openProductDetail(productId) {
    const product = products.find(p => p.id === productId);
    if (!product) return;

    selectedColorTemp = product.colors[0] || "";
    selectedSizeTemp = product.sizes[0] || "";

    const discount = product.oldPrice ? Math.round(((product.oldPrice - product.price) / product.oldPrice) * 100) : 0;
    const content = document.getElementById('productDetailContent');

    content.innerHTML = `
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div class="space-y-3">
                <div class="relative bg-gray-100 dark:bg-slate-700 rounded-2xl overflow-hidden h-72 sm:h-80 shadow-md border border-gray-200 dark:border-slate-600">
                    <img id="mainDetailImg" src="${product.images[0]}" alt="${product.name}" class="w-full h-full object-cover cursor-pointer" onclick="openImageZoom('${product.images[0]}')">
                </div>
                <div class="flex gap-2.5 overflow-x-auto pb-1">
                    ${product.images.map((img) => `
                        <img src="${img}" onclick="changeDetailImage('${img}')" class="w-16 h-16 object-cover rounded-xl border-2 border-transparent hover:border-blue-600 cursor-pointer transition">
                    `).join('')}
                </div>
            </div>

            <div class="flex flex-col justify-between space-y-4">
                <div>
                    <span class="bg-blue-100 dark:bg-blue-900/60 text-blue-600 dark:text-blue-300 text-[10px] font-black px-2.5 py-0.5 rounded-full">${product.brand}</span>
                    <h2 class="text-xl sm:text-2xl font-black text-gray-900 dark:text-white mt-1.5 mb-2">${product.name}</h2>
                    <p class="text-gray-600 dark:text-gray-300 text-xs sm:text-sm leading-relaxed mb-3">${product.description}</p>
                    
                    <div class="flex items-baseline gap-2.5 mb-4">
                        <span class="text-2xl sm:text-3xl font-black text-blue-600 dark:text-blue-400">${product.price} ج.م</span>
                        ${product.oldPrice ? `<span class="text-gray-400 text-sm sm:text-lg line-through font-bold">${product.oldPrice} ج.م</span>` : ''}
                        ${discount > 0 ? `<span class="bg-red-600 text-white text-[10px] px-2 py-0.5 rounded-full font-black">خصم ${discount}%</span>` : ''}
                    </div>

                    <div class="mb-4">
                        <label class="block text-xs sm:text-sm font-black text-gray-900 dark:text-white mb-1.5">اللون المتاح:</label>
                        <div class="flex flex-wrap gap-2">
                            ${product.colors.map((color, idx) => `
                                <button type="button" onclick="selectDetailColor('${color}', '${product.colorImages[color] || product.images[0]}', this)" class="detail-color-btn ${idx === 0 ? 'bg-blue-600 text-white border-blue-600' : 'bg-gray-100 dark:bg-slate-700 text-gray-800 dark:text-white border-gray-300 dark:border-slate-600'} font-bold px-3 py-1.5 rounded-xl text-xs border transition">
                                    ${color}
                                </button>
                            `).join('')}
                        </div>
                    </div>

                    <div class="mb-4">
                        <div class="flex justify-between items-center mb-1.5">
                            <label class="block text-xs sm:text-sm font-black text-gray-900 dark:text-white">المقاس:</label>
                            <button onclick="openSizeGuide()" class="text-[11px] text-blue-600 dark:text-blue-400 font-black hover:underline flex items-center gap-1">
                                <i class="fas fa-ruler-horizontal"></i> دليل المقاسات
                            </button>
                        </div>
                        <div class="flex flex-wrap gap-2">
                            ${product.sizes.map((size, idx) => `
                                <button type="button" onclick="selectDetailSize('${size}', this)" class="detail-size-btn ${idx === 0 ? 'bg-blue-600 text-white border-blue-600' : 'bg-gray-100 dark:bg-slate-700 text-gray-800 dark:text-white border-gray-300 dark:border-slate-600'} font-bold px-3.5 py-1.5 rounded-xl text-xs border transition">
                                    ${size}
                                </button>
                            `).join('')}
                        </div>
                    </div>
                </div>

                <button onclick="addToCartFromDetail(${product.id})" class="w-full bg-blue-600 hover:bg-blue-700 text-white font-black py-3 rounded-xl shadow-lg transition flex items-center justify-center gap-2 text-sm sm:text-base">
                    <i class="fas fa-shopping-cart"></i> إضافة إلى السلة
                </button>
            </div>
        </div>
    `;

    document.getElementById('catalogView').classList.add('hidden');
    document.getElementById('productDetailView').classList.remove('hidden');
}

function selectDetailColor(color, imgUrl, btn) {
    selectedColorTemp = color;
    document.querySelectorAll('.detail-color-btn').forEach(b => {
        b.classList.remove('bg-blue-600', 'text-white', 'border-blue-600');
        b.classList.add('bg-gray-100', 'dark:bg-slate-700', 'text-gray-800', 'dark:text-white', 'border-gray-300', 'dark:border-slate-600');
    });
    btn.classList.remove('bg-gray-100', 'dark:bg-slate-700', 'text-gray-800', 'dark:text-white', 'border-gray-300', 'dark:border-slate-600');
    btn.classList.add('bg-blue-600', 'text-white', 'border-blue-600');

    if (imgUrl) changeDetailImage(imgUrl);
}

function selectDetailSize(size, btn) {
    selectedSizeTemp = size;
    document.querySelectorAll('.detail-size-btn').forEach(b => {
        b.classList.remove('bg-blue-600', 'text-white', 'border-blue-600');
        b.classList.add('bg-gray-100', 'dark:bg-slate-700', 'text-gray-800', 'dark:text-white', 'border-gray-300', 'dark:border-slate-600');
    });
    btn.classList.remove('bg-gray-100', 'dark:bg-slate-700', 'text-gray-800', 'dark:text-white', 'border-gray-300', 'dark:border-slate-600');
    btn.classList.add('bg-blue-600', 'text-white', 'border-blue-600');
}

function changeDetailImage(src) {
    const mainImg = document.getElementById('mainDetailImg');
    if (mainImg) {
        mainImg.src = src;
        mainImg.onclick = () => openImageZoom(src);
    }
}

function openImageZoom(src) {
    document.getElementById('zoomedImg').src = src;
    document.getElementById('imageZoomModal').classList.remove('hidden');
}
function closeImageZoom() { document.getElementById('imageZoomModal').classList.add('hidden'); }

function openSizeGuide() { document.getElementById('sizeGuideModal').classList.remove('hidden'); }
function closeSizeGuide() { document.getElementById('sizeGuideModal').classList.add('hidden'); }

function addToCartFromDetail(productId) {
    const product = products.find(p => p.id === productId);
    if (!product) return;

    const existingIndex = cart.findIndex(item => item.id === productId && item.color === selectedColorTemp && item.size === selectedSizeTemp);

    if (existingIndex > -1) {
        cart[existingIndex].qty += 1;
    } else {
        cart.push({
            id: product.id,
            name: product.name,
            price: product.price,
            image: product.colorImages[selectedColorTemp] || product.images[0],
            color: selectedColorTemp,
            size: selectedSizeTemp,
            qty: 1
        });
    }

    localStorage.setItem('am_cart', JSON.stringify(cart));
    updateCartUI();
    showToast("تم إضافة المنتج إلى السلة 🛒");
}

function calculateShipping() {
    const cityKey = document.getElementById('shippingCity')?.value || 'pickup';
    const rateObj = shippingRates[cityKey] || shippingRates.pickup;
    const noticeEl = document.getElementById('shippingNotice');

    if (noticeEl) {
        noticeEl.innerHTML = `<i class="fas fa-info-circle"></i> ${rateObj.text}`;
    }

    updateCartUI();
}

function updateCartUI() {
    const countEl = document.getElementById('cartCount');
    const subtotalEl = document.getElementById('cartSubtotal');
    const discountRow = document.getElementById('bundleDiscountRow');
    const discountValEl = document.getElementById('bundleDiscountVal');
    const shippingCostVal = document.getElementById('shippingCostVal');
    const totalEl = document.getElementById('cartTotal');
    const container = document.getElementById('cartItems');

    const totalQty = cart.reduce((acc, item) => acc + item.qty, 0);
    const subtotal = cart.reduce((acc, item) => acc + (item.price * item.qty), 0);

    let bundleDiscount = 0;
    if (totalQty >= 2) {
        bundleDiscount = Math.round(subtotal * 0.10);
        if (discountRow) discountRow.classList.remove('hidden');
        if (discountValEl) discountValEl.textContent = `-${bundleDiscount} ج.م`;
    } else {
        if (discountRow) discountRow.classList.add('hidden');
    }

    const cityKey = document.getElementById('shippingCity')?.value || 'pickup';
    const shippingCost = shippingRates[cityKey] ? shippingRates[cityKey].cost : 0;
    if (shippingCostVal) shippingCostVal.textContent = `${shippingCost} ج.م`;

    const grandTotal = (subtotal - bundleDiscount) + shippingCost;

    if (countEl) countEl.textContent = totalQty;
    if (subtotalEl) subtotalEl.textContent = `${subtotal} ج.م`;
    if (totalEl) totalEl.textContent = `${grandTotal} ج.م`;

    if (!container) return;

    if (cart.length === 0) {
        container.innerHTML = `<p id="emptyCartMsg" class="text-center text-gray-500 dark:text-gray-400 py-8 font-bold text-xs">السلة فارغة حالياً.</p>`;
    } else {
        container.innerHTML = cart.map((item, idx) => `
            <div class="flex items-center justify-between bg-gray-50 dark:bg-slate-700/50 p-2.5 rounded-xl border border-gray-200 dark:border-slate-700">
                <div class="flex items-center gap-2.5">
                    <img src="${item.image}" class="w-12 h-12 object-cover rounded-lg border border-gray-200 dark:border-slate-600">
                    <div>
                        <h4 class="font-bold text-xs text-gray-900 dark:text-white line-clamp-1">${item.name}</h4>
                        <div class="text-[10px] text-gray-500 dark:text-gray-300 font-semibold">لون: ${item.color} | مقاس: ${item.size}</div>
                        <div class="text-blue-600 dark:text-blue-400 font-bold text-[11px] mt-0.5">${item.price} × ${item.qty} = ${item.price * item.qty} ج.م</div>
                    </div>
                </div>
                <div class="flex items-center gap-1.5">
                    <button onclick="changeQty(${idx}, -1)" class="w-6 h-6 bg-gray-200 dark:bg-slate-600 text-gray-800 dark:text-white rounded-md font-bold flex items-center justify-center text-xs">-</button>
                    <span class="font-bold text-xs dark:text-white">${item.qty}</span>
                    <button onclick="changeQty(${idx}, 1)" class="w-6 h-6 bg-gray-200 dark:bg-slate-600 text-gray-800 dark:text-white rounded-md font-bold flex items-center justify-center text-xs">+</button>
                </div>
            </div>
        `).join('');
    }
}

function changeQty(index, delta) {
    if (cart[index]) {
        cart[index].qty += delta;
        if (cart[index].qty <= 0) cart.splice(index, 1);
        localStorage.setItem('am_cart', JSON.stringify(cart));
        updateCartUI();
    }
}

function openCartModal() { document.getElementById('cartModal')?.classList.remove('hidden'); }
function closeCartModal() { document.getElementById('cartModal')?.classList.add('hidden'); }

function checkoutWhatsApp() {
    if (cart.length === 0) {
        showToast("السلة فارغة، أضف بعض المنتجات أولاً", true);
        return;
    }

    const citySelect = document.getElementById('shippingCity');
    const cityKey = citySelect?.value || 'pickup';
    const cityName = citySelect?.options[citySelect.selectedIndex]?.text.split('[')[0].trim() || "";
    const shippingObj = shippingRates[cityKey];
    const userAddressDetail = document.getElementById('userAddressDetail')?.value.trim() || "لم يكتب تفاصيل إضافية";

    const totalQty = cart.reduce((acc, item) => acc + item.qty, 0);
    const subtotal = cart.reduce((acc, item) => acc + (item.price * item.qty), 0);
    let bundleDiscount = totalQty >= 2 ? Math.round(subtotal * 0.10) : 0;
    const grandTotal = (subtotal - bundleDiscount) + shippingObj.cost;

    let msg = "مرحباً A.M. Sport 👋\nأود إتمام طلب الشراء التالي:\n\n";

    cart.forEach((item, index) => {
        msg += `${index + 1}. *${item.name}*\n   - اللون: ${item.color}\n   - المقاس: ${item.size}\n   - الكمية: ${item.qty}\n   - السعر: ${item.price * item.qty} ج.م\n\n`;
    });

    msg += `---------------------------\n`;
    msg += `📍 *المحافظة:* ${cityName}\n`;
    msg += `🏠 *تفاصيل العنوان:* ${userAddressDetail}\n`;
    msg += `📊 *المجموع الفرعي:* ${subtotal} ج.م\n`;
    if (bundleDiscount > 0) {
        msg += `🎉 *خصم العرض (10%):* -${bundleDiscount} ج.م\n`;
    }
    msg += `🚚 *مصاريف الشحن (${shippingObj.text.split(' ')[0]}):* ${shippingObj.cost} ج.م\n`;
    msg += `✨ *الإجمالي الكلي المطلوب:* ${grandTotal} ج.م\n\n`;
    msg += `يرجى تأكيد تجهيز الطلب!`;

    window.open(`https://wa.me/201151944700?text=${encodeURIComponent(msg)}`, '_blank');
}