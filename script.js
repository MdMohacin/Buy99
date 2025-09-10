




// Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBet7btzILdzKdSxBg3R80L1dIic5vR734",
    authDomain: "buy-99.firebaseapp.com",
    databaseURL: "https://buy-99-default-rtdb.firebaseio.com",
    projectId: "buy-99",
    storageBucket: "buy-99.appspot.com",
    messagingSenderId: "600126667480",
    appId: "1:600126667480:web:343535e09ad6c945be75ad",
    measurementId: "G-P04PG87W69"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const database = firebase.database();
const auth = firebase.auth();

// Global variables

const data = {
    Bangladesh: {
    "ঢাকা": {
        "ঢাকা জেলা": ["সাভার", "ধামরাই", "কেরাণীগঞ্জ","নবাবগঞ্জ", "দোহার"],
        "নরসিংদী জেলা": ["বেলাবো", "মনোহরদী", "পলাশ","রায়পুরা", "শিবপুর", "নরসিংদী "],
        "নারায়ণগঞ্জ জেলা": ["আড়াইহাজার", "বন্দর", "নারায়ণগঞ্জ সদর", "রূপগঞ্জ", "সোনারগাঁ"],
        "গাজীপুর জেলা": ["কালীগঞ্জ", "কালিয়াকৈর", "কাপাসিয়া", "গাজীপুর সদর", "শ্রীপুর"],
        "শরীয়তপুর জেলা": ["শরিয়তপুর সদর", "নড়িয়া", "জাজিরা", "গোসাইরহাট", "ভেদরগঞ্জ", "ডামুড্যা"],
        "টাঙ্গাইল জেলা": ["বাসাইল", "ভুয়াপুর", "দেলদুয়ার","ঘাটাইল", "গোপালপুর", "মধুপুর","মির্জাপুর", "নাগরপুর", "সখিপুর","টাঙ্গাইল সদর", "কালিহাতী", "ধনবাড়ী"],            
        "কিশোরগঞ্জ জেলা": ["ইটনা", "কটিয়াদী", "ভৈরব","সাভার", "তাড়াইল", "হোসেনপুর","পাকুন্দিয়া", "কুলিয়ারচর", "কিশোরগঞ্জ সদর","করিমগঞ্জ", "বাজিতপুর", "অষ্টগ্রাম", "মিঠামইন", "নিকলী"],          
        "মানিকগঞ্জ জেলা": ["মানিকগঞ্জ সদর", "ঘিওর", "শিবালয়","দৌলতপুর","সিংগাইর"],          
        "মুন্সিগঞ্জ জেলা": ["মুন্সিগঞ্জ সদর", "শ্রীনগর", "সিরাজদিখান","লৌহজং","গজারিয়া","টংগীবাড়ি"],          
        "রাজবাড়ী জেলা": ["রাজবাড়ী সদর", "গোয়ালন্দ", "পাংশা","বালিয়াকান্দি","কালুখালী", "মাদারীপুর সদর", "শিবচর", "কালকিনি","রাজৈর","ডাসার"],          
        "গোপালগঞ্জ জেলা": ["গোপালগঞ্জ সদর", "কাশিয়ানী", "টুংগীপাড়া","কোটালীপাড়া","মুকসুদপুর"],          
        "ফরিদপুর জেলা": ["ফরিদপুর সদর", "আলফাডাঙ্গা", "বোয়ালমারী","সদরপুর","নগরকান্দা","ভাঙ্গা","চরভদ্রাসন","মধুখালী","সালথা"],        
    },
    "চট্টগ্রাম": {
        "চট্টগ্রাম জেলা": ["রাঙ্গুনিয়া", "সীতাকুন্ড", "মীরসরাই","পটিয়া","সন্দ্বীপ","বাঁশখালী","বোয়ালখালী","আনোয়ারা","চন্দনাইশ","সাতকানিয়া","লোহাগাড়া","হাটহাজারী","ফটিকছড়ি","রাউজান","কর্ণফুলী"],                    
        "কুমিল্লা জেলা": ["দ্বার", "বরুড়া", "ব্রাহ্মণপাড়া","চান্দিনা","চৌদ্দগ্রাম","দাউদকান্দি","হোমনা","লাকসাম","মুরাদনগর","নাঙ্গলকোট","কুমিল্লা সদর","মেঘনা","মনোহরগঞ্জ","সদর দক্ষিণ","তিতাস","বুড়িচং","লালমাই"],          
        "ফেনী জেলা": ["গলনাইয়া", "ফেনী সদর", "সোনাগাজী","ফুলগাজী","পরশুরাম","দাগনভূঞা"],          
        "ব্রাহ্মণবাড়িয়া জেলা": ["রাহ্মণবাড়িয়া সদর", "কসবা", "নাসিরনগর","সরাইল","আশুগঞ্জ","আখাউড়া","নবীনগর","বাঞ্ছারামপুর","বিজয়নগর"],          
        "রাঙ্গামাটি জেলা": ["ঙ্গামাটি সদর", "কাপ্তাই", "কাউখালী","বাঘাইছড়ি","বরকল","লংগদু","রাজস্থলী","বিলাইছড়ি","জুরাছড়ি","নানিয়ারচর"],          
        "নোয়াখালী জেলা": ["য়াখালী সদর", "কোম্পানীগঞ্জ", "বেগমগঞ্জ","হাতিয়া","সুবর্ণচর","কবিরহাট","সেনবাগ","চাটখিল","সোনাইমুড়ী"],          
        "চাঁদপুর জেলা": ["ইমচর", "কচুয়া", "শাহরাস্তি","চাঁদপুর সদর","মতলব দক্ষিণ","হাজীগঞ্জ","মতলব উত্তর","ফরিদগঞ্জ"],          
        "লক্ষ্মীপুর জেলা": ["ক্ষ্মীপুর সদর", "কমলনগর", "রায়পুর","রামগতি","রামগঞ্জ"],          
        "কক্সবাজার জেলা": ["ক্সবাজার সদর", "চকরিয়া", "কুতুবদিয়া","উখিয়া","মহেশখালী",'পেকুয়া',"রামু","টেকনাফ","ঈদগাঁও"],          
        "খাগড়াছড়ি জেলা": ["গড়াছড়ি সদর", "দিঘীনালা", "পানছড়ি","লক্ষীছড়ি","মহালছড়ি","মানিকছড়ি","রামগড়","মাটিরাঙ্গা","গুইমারা"],        
        "বান্দরবান জেলা": ["সুন্দরবান সদর", "আলীকদম", "নাইক্ষ্যংছড়ি","রোয়াংছড়ি","লামা","রুমা","থানচি"],          
    },
    "রাজশাহী": {
        "সিরাজগঞ্জ জেলা": ["বেলকুচি", "চৌহালি", "কামারখন্দ","কাজীপুর","রায়গঞ্জ","শাহজাদপুর","সিরাজগঞ্জ সদর","তাড়াশ","উল্লাপাড়া"],          
        "পাবনা জেলা": ["সুজানগর", "ঈশ্বরদী", "ভাঙ্গুড়া","পাবনা সদর","বেড়া","আটঘরিয়া","চাটমোহর","সাঁথিয়া","ফরিদপুর"],          
        "বগুড়া জেলা": ["কাহালু", "বগুড়া সদর", "সারিয়াকান্দি","শাজাহানপুর","দুপচাচিঁয়া",'আদমদিঘি',"নন্দিগ্রাম","সোনাতলা","ধুনট","গাবতলী","শেরপুর","শিবগঞ্জ"],          
        "রাজশাহী জেলা": ["পবা", "দুর্গাপুর", "মোহনপুর","চারঘাট","পুঠিয়া","বাঘা","গোদাগাড়ী","তানোর","বাগমারা"],          
        "নাটোর জেলা": ["নাটোর সদর", "সিংড়া", "বড়াইগ্রাম","বাগাতিপাড়া","লালপুর","গুরুদাসপুর","নলডাঙ্গা"],          
        "জয়পুরহাট জেলা": ["আক্কেলপুর", "কালাই", "ক্ষেতলাল","পাঁচবিবি","জয়পুরহাট সদর"],          
        "চাঁপাইনবাবগঞ্জ জেলা": ["চাঁপাইনবাবগঞ্জ সদর", "গোমস্তাপুর", "নাচোল","ভোলাহাট","শিবগঞ্জ"],          
        "নওগাঁ জেলা": ["মহাদেবপুর", "বদলগাছী", "পত্নিতলা","ধামইরহাট","নিয়ামতপুর","মান্দা","আত্রাই","নওগাঁ সদর","পোরশা","সাপাহার"],          
    },
    "খুলনা": {
        "যশোর জেলা": ["মণিরামপুর", "অভয়নগর", "বাঘারপাড়া","চৌগাছা","ঝিকরগাছা","কেশবপুর","যশোর সদর","শার্শা"],          
        "সাতক্ষীরা জেলা": ["আশাশুনি", "দেবহাটা", "কলারোয়া","সাতক্ষীরা সদর","শ্যামনগর","তালা","কালিগঞ্জ"],          
        "মেহেরপুর জেলা": ["মুজিবনগর", "মেহেরপুর সদর", "গাংনী"],          
        "নড়াইল জেলা": ["নড়াইল সদর", "লোহাগড়া", "কালিয়া"],          
        "চুয়াডাঙ্গা জেলা": ["চুয়াডাঙ্গা সদর", "আলমডাঙ্গা", "দামুড়হুদা","জীবননগর"],          
        "কুষ্টিয়া জেলা": ["কুষ্টিয়া সদর", "কুমারখালী", "খোকসা","মিরপুর","দৌলতপুর","ভেড়ামারা"],          
        "মাগুরা জেলা": ["শালিখা", "শ্রীপুর", "মাগুরা সদর","মহম্মদপুর"],          
        "খুলনা জেলা": ["পাইকগাছা", "ফুলতলা", "দিঘলিয়া","রূপসা","তেরখাদা","ডুমুরিয়া","বটিয়াঘাটা","দাকোপ","কয়রা"],
        "বাগেরহাট জেলা": ["ফকিরহাট", "বাগেরহাট সদর", "মোল্লাহাট","শরণখোলা","মোড়েলগঞ্জ","কচুয়া","মোংলা","চিতলমারী"],          
        "ঝিনাইদহ জেলা": ["ঝিনাইদহ সদর", "শৈলকুপা", "হরিণাকুন্ডু","কালীগঞ্জ","কোটচাঁদপুর","মহেশপুর"],          
    },
    "বরিশাল": {
        "ঝালকাঠি জেলা": ["ঝালকাঠি সদর", "কাঠালিয়া", "নলছিটি","রাজাপুর"],          
        "পটুয়াখালী জেলা": ["পটুয়াখালী সদর", "দুমকি", "দশমিনা","কলাপাড়া","মির্জাগঞ্জ","গলাচিপা","রাঙ্গাবালী"],          
        "বরিশাল জেলা": ["পিরোজপুর সদর", "নাজিরপুর", "কাউখালী","জিয়ানগর","ভান্ডারিয়া","মঠবাড়ীয়া","নেছারাবাদ"],          
        "ভোলা জেলা": ["বরিশাল সদর", "বাকেরগঞ্জ", "বাবুগঞ্জ","উজিরপুর","বানারীপাড়া","গৌরনদী","আগৈলঝাড়া","মেহেন্দিগঞ্জ","মুলাদী","হিজলা"],          
        "বরগুনা জেলা": ["ভোলা সদর", "বোরহান উদ্দিন", "চরফ্যাশন","দৌলতখান","মনপুরা","তজুমদ্দিন","লালমোহন"],          
        "পিরোজপুর জেলা": ["আমতলী", "বরগুনা সদর", "বেতাগী","বামনা","পাথরঘাটা","তালতলি"],
    },
    "সিলেট": {
        "সিলেট জেলা": ["বালাগঞ্জ", "বিয়ানীবাজার", "মীরসরাই","বিশ্বনাথ","কোম্পানীগঞ্জ","ফেঞ্চুগঞ্জ","গোলাপগঞ্জ","গোয়াইনঘাট","জৈন্তাপুর","কানাইঘাট","সিলেট সদর","জকিগঞ্জ","জকিগঞ্জ","দক্ষিণ সুরমা","ওসমানী নগর"],          
        "মৌলভীবাজার জেলা": ["বড়লেখা", "কমলগঞ্জ", "কুলাউড়া","মৌলভীবাজার সদর","রাজনগর","শ্রীমঙ্গল","জুড়ী"],          
        "হবিগঞ্জ জেলা": ["নবীগঞ্জ", "বাহুবল", "আজমিরীগঞ্জ","বানিয়াচং","লাখাই","চুনারুঘাট","হবিগঞ্জ সদর",'মাধবপুর',"শায়েস্তাগঞ্জ"],      
        "সুনামগঞ্জ জেলা": ["সুনামগঞ্জ সদর", "দক্ষিণ সুনামগঞ্জ", "বিশ্বম্ভরপুর","ছাতক","জগন্নাথপুর","দোয়ারাবাজার","তাহিরপুর","ধর্মপাশা","জামালগঞ্জ","শাল্লা","দিরাই","মধ্যনগর"],          
    },

    "রংপুর": {
        "পঞ্চগড় জেলা": ["পঞ্চগড় সদর", "দেবীগঞ্জ", "বোদা","আটোয়ারী","তেতুলিয়া"],          
        "দিনাজপুর জেলা": ["আদিতমারী", "বীরগঞ্জ", "ঘোড়াঘাট","বিরামপুর","পার্বতীপুর","বোচাগঞ্জ","কাহারোল","ফুলবাড়ী","দিনাজপুর সদর","হাকিমপুর","খানসামা","বিরল","চিরিরবন্দর"],          
        "লালমনিরহাট জেলা": ["লালমনিরহাট সদর", "কালীগঞ্জ", "হাতীবান্ধা","পাটগ্রাম","আদিতমারী"],        
        "নীলফামারী জেলা": ["সৈয়দপুর", "ডোমার", "ডিমলা","জলঢাকা","কিশোরগঞ্জ","নীলফামারী সদর"],          
        "গাইবান্ধা জেলা": ["সাদুল্লাপুর", "গাইবান্ধা সদর", "পলাশবাড়ী","সাঘাটা","গোবিন্দগঞ্জ","সুন্দরগঞ্জ","ফুলছড়ি"],
        "ঠাকুরগাঁও জেলা": ["ঠাকুরগাঁও সদর", "পীরগঞ্জ", "রাণীশংকৈল","হরিপুর","বালিয়াডাঙ্গী"],
        "রংপুর জেলা": ["রংপুর সদর", "গংগাচড়া", "তারাগঞ্জ","বদরগঞ্জ","মিঠাপুকুর","পীরগঞ্জ","কাউনিয়া","পীরগাছা"],
        "কুড়িগ্রাম জেলা": ["কুড়িগ্রাম সদর", "নাগেশ্বরী", "ভুরুঙ্গামারী","ফুলবাড়ী","রাজারহাট","উলিপুর","চিলমারী","রৌমারী","চর রাজিবপুর"],
    },
    "ময়মনসিংহ": {
        "শেরপুর জেলা": ["শেরপুর সদর", "নালিতাবাড়ী", "শ্রীবরদী","নকলা","ঝিনাইগাতী"],
        "ময়মনসিংহ জেলা": ["ফুলবাড়ীয়া", "ত্রিশাল", "ভালুকা","মুক্তাগাছা","ময়মনসিংহ সদর","ধোবাউড়া","ফুলপুর","হালুয়াঘাট","গৌরীপুর","গফরগাঁও","ঈশ্বরগঞ্জ","নান্দাইল","তারাকান্দা"],
        "জামালপুর জেলা": ["জামালপুর সদর", "মেলান্দহ", "ইসলামপুর","দেওয়ানগঞ্জ","সরিষাবাড়ী","মাদারগঞ্জ","বকশীগঞ্জ"],
        "নেত্রকোণা জেলা": ["বারহাট্টা", "দুর্গাপুর", "কেন্দুয়া","বারহাট্টা", "আটপাড়া", "মদন","খালিয়াজুরী", "কলমাকান্দা", "মোহনগঞ্জ","পূর্বধলা","নেত্রকোণা সদর"],
    }
    },
    India: {
    "দিল্লি": {
        "নতুন দিল্লি": ["চানাক্যাপুরি", "কারোল বাগ"]
    },
    "মুম্বাই": {
        "মুম্বাই শহরতলি": ["আন্ধেরি", "বান্দ্রা"]
    }
    }
};

let products = [];
let cart = [];
let currentSlide = 0;
let filtered = [];
let currentUser = null;
let userAddress = null;
let productDetails = null;

// DOM elements
const productGrid = document.getElementById('product-grid');
const Allprodact = document.querySelector(".Allprodact");
const recommendationProdact = document.querySelector(".recommendationprodact");
const cartItemsContainer = document.getElementById('cart-items');
const cartSummaryContainer = document.getElementById('cart-summary');
const closeCart = document.getElementById('close-cart');
const authModal = document.getElementById('auth-modal');
const modalClose = document.getElementById('modal-close');
const loginLink = document.getElementById('login-link');
const registerLink = document.getElementById('register-link');
const accountLink = document.getElementById('account-link');
const authForm = document.getElementById('auth-form');
const modalTitle = document.getElementById('modal-title');
const authSubmit = document.getElementById('auth-submit');
const nameGroup = document.getElementById('name-group');
const cancelBtn = document.getElementById('cancel-btn');
const searchBox = document.getElementById('searchBox');
const cartToggle = document.getElementById('cart-toggle');
const cartSidebar = document.getElementById('cart-sidebar');
const slides = document.querySelectorAll('.hero-slide');
const indicators = document.querySelectorAll('.indicator');
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-categories');
const totalSlides = slides.length;

// Address data (খালি রাখা হয়েছে)

// Initialize the page
function init() {
    // Check authentication state
    auth.onAuthStateChanged((user) => {
        if (user) {
            currentUser = user;
            updateUserUI(user);
            loadUserAddress(user.uid);
        } else {
            currentUser = null;
            updateUserUI(null);
        }
    });
    
    fetchProductsFromFirebase();
    setupEventListeners();
    initRouter();
    setupAddressDropdowns();
    startSlideshow();
}

// Fetch products from Firebase
function fetchProductsFromFirebase() {
    showLoadingState();
    
    const productsRef = database.ref('products');
    
    productsRef.on('value', (snapshot) => {
        const productsData = snapshot.val();
        
        if (productsData) {
            // Convert Firebase object to array
            products = Object.entries(productsData).map(([id, product]) => {
                return {
                    id: id,
                    title: product.title || '',
                    price: product.price || 0,
                    originalPrice: product.originalPrice || 0,
                    discount: product.discount || 0,
                    rating: product.rating || 0,
                    reviewCount: product.reviewCount || 0,
                    image: product.image || '',
                    description: product.description || ''
                };
            });
            
            renderProducts();
            hideLoadingState();
        } else {
            showEmptyState();
        }
    }, (error) => {
        console.error('Error fetching products:', error);
        showErrorState('Failed to load products from Firebase.');
    });
}

// Show loading state
function showLoadingState() {
    if (productGrid) {
        productGrid.innerHTML = `
            <div class="loading" style="grid-column: 1 / -1; text-align: center; padding: 40px;">
                <div class="spinner"></div>
                <p>Loading products from Firebase...</p>
            </div>
        `;
    }
}

// Hide loading state
function hideLoadingState() {
    // You can implement this based on your UI
}

// Show empty state
function showEmptyState() {
    if (productGrid) {
        productGrid.innerHTML = `
            <div class="empty-state" style="grid-column: 1 / -1; text-align: center; padding: 40px;">
                <i class="fas fa-box-open" style="font-size: 48px; color: #ccc; margin-bottom: 16px;"></i>
                <h3>No products found</h3>
                <p>There are no products in the database yet.</p>
            </div>
        `;
    }
}

// Show error state
function showErrorState(message) {
    if (productGrid) {
        productGrid.innerHTML = `
            <div class="error-state" style="grid-column: 1 / -1; text-align: center; padding: 40px;">
                <i class="fas fa-exclamation-triangle" style="font-size: 48px; color: #e53e3e; margin-bottom: 16px;"></i>
                <h3>Error Loading Products</h3>
                <p>${message}</p>
                <button onclick="fetchProductsFromFirebase()" style="margin-top: 16px; padding: 8px 16px; background: #4f46e5; color: white; border: none; border-radius: 4px; cursor: pointer;">
                    Try Again
                </button>
            </div>
        `;
    }
}

// Render products
function renderProducts(productsToRender = products) {
    if (!productGrid) return;
    
    productGrid.innerHTML = '';
    
    productsToRender.forEach(product => {
        const productCard = document.createElement('div');
        productCard.className = 'product-card';
        
        productCard.innerHTML = `
            <div class="product-img" data-id="${product.id}">
                <img src="${product.image}" alt="${product.title}" onerror="this.src='https://via.placeholder.com/300x200?text=Image+Not+Found'">
                ${product.discount > 0 ? `<span class="discount-badge">-${product.discount}%</span>` : ''}
            </div>
            <div class="product-info">
                <h3 class="product-title">${product.title}</h3>
                <div class="product-price">
                    <span class="current-price">BT ${product.price}</span>
                    ${product.originalPrice > product.price ? `<span class="original-price">BT ${product.originalPrice}</span>` : ''}
                </div>
                <div class="product-rating">
                    <div class="stars">
                        ${generateStars(product.rating)}
                    </div>
                    <span class="rating-count">(${product.reviewCount})</span>
                    <div class="Favorite">
                        <div class="wishlist"><i class="far fa-heart"></i></div>                    
                        <p id="FavoriteNumber">(12)</p>
                    </div>
                </div>
                <div class="buttons">
                    <button class="add-to-cart" data-id="${product.id}" onclick="cartSidebarActive()">Buy Now</button>
                    <button class="add-to-cart" data-id="${product.id}">Add to Cart</button>
                </div>
            </div>
        `;
        
        productGrid.appendChild(productCard);
    });

    // Add event listeners
    addCartEventListeners();
    addProductImageEventListeners();
}

// Add event listeners to add to cart buttons
function addCartEventListeners() {
    document.querySelectorAll('.add-to-cart').forEach(button => {
        button.addEventListener('click', function() {
            const productId = this.getAttribute('data-id');
            addToCart(productId);
        });
    });
}

// Add event listeners to product images
function addProductImageEventListeners() {
    document.querySelectorAll('.product-img').forEach(productImg => {
        productImg.addEventListener('click', function() {
            const productId = this.getAttribute('data-id');
            ViewProdact(productId);
        });
    });
}

// Generate star rating
function generateStars(rating) {
    let stars = '';
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;
    
    for (let i = 0; i < fullStars; i++) {
        stars += '<i class="fas fa-star"></i>';
    }
    
    if (hasHalfStar) {
        stars += '<i class="fas fa-star-half-alt"></i>';
    }
    
    const emptyStars = 5 - Math.ceil(rating);
    for (let i = 0; i < emptyStars; i++) {
        stars += '<i class="far fa-star"></i>';
    }
    
    return stars;
}

// Search functionality
searchBox.addEventListener('input', () => {
    const query = searchBox.value.toLowerCase();
    
    filtered = products.filter(p => 
        p.title.toLowerCase().includes(query)
    );
    
    renderProducts(filtered.length ? filtered : []);
    
    const sectionTitle = document.querySelector(".section-title");
    if (sectionTitle && query) {
        sectionTitle.innerHTML = 'Search Results';
    }
});

// Add to cart function
function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    
    if (product) {
        const existingItem = cart.find(item => item.id === productId);
        
        if (existingItem) {
            existingItem.quantity += 1;
        } else {
            cart.push({
                ...product,
                quantity: 1
            });
        }
        
        updateCartUI();
        showNotification(`${product.title} added to cart!`);
    }
}

// Update cart UI
function updateCartUI() {
    // Update cart count
    const totalItems = cart.reduce((total, item) => total + item.quantity, 0);
    const cartCountElement = document.querySelector('.cart-count');
    if (cartCountElement) {
        cartCountElement.textContent = totalItems;
    }
    
    // Update cart items
    if (cartItemsContainer) {
        cartItemsContainer.innerHTML = '';
        
        cart.forEach(item => {
            const cartItem = document.createElement('div');
            cartItem.className = 'cart-item';
            
            cartItem.innerHTML = `
                <img src="${item.image}" alt="${item.title}" class="cart-item-img">
                <div class="cart-item-info">
                    <h4 class="cart-item-title">${item.title}</h4>
                    <div class="cart-item-price">$${item.price.toFixed(2)}</div>
                    <div class="cart-item-quantity">
                        <button class="quantity-btn decrease-quantity" data-id="${item.id}">-</button>
                        <input type="text" class="quantity-input" value="${item.quantity}" readonly>
                        <button class="quantity-btn increase-quantity" data-id="${item.id}">+</button>
                        <button class="quantity-btn remove-item" data-id="${item.id}" style="margin-left: 10px; background-color: var(--danger-color); color: white;">
                            <i class="fas fa-trash"></i>
                        </button>
                    </div>
                </div>
            `;
            
            cartItemsContainer.appendChild(cartItem);
        });
        
        // Add event listeners to quantity buttons
        document.querySelectorAll('.decrease-quantity').forEach(button => {
            button.addEventListener('click', function() {
                const productId = this.getAttribute('data-id');
                decreaseQuantity(productId);
            });
        });
        
        document.querySelectorAll('.increase-quantity').forEach(button => {
            button.addEventListener('click', function() {
                const productId = this.getAttribute('data-id');
                increaseQuantity(productId);
            });
        });
        
        document.querySelectorAll('.remove-item').forEach(button => {
            button.addEventListener('click', function() {
                const productId = this.getAttribute('data-id');
                removeFromCart(productId);
            });
        });
    }
    
    // Update cart summary
    updateCartSummary();
}

// Update cart summary
function updateCartSummary() {
    if (!cartSummaryContainer) return;
    
    const subtotal = cart.reduce((total, item) => total + (item.price * item.quantity), 0);
    const shipping = 10;
    const tax = subtotal * 0.1;
    const total = subtotal + shipping + tax;
    
    cartSummaryContainer.innerHTML = `
        <div class="summary-row">
            <span>Subtotal</span>
            <span>$${subtotal.toFixed(2)}</span>
        </div>
        <div class="summary-row">
            <span>Shipping</span>
            <span>$${shipping.toFixed(2)}</span>
        </div>
        <div class="summary-row">
            <span>Tax</span>
            <span>$${tax.toFixed(2)}</span>
        </div>
        <div class="summary-row total">
            <span>Total</span>
            <span>$${total.toFixed(2)}</span>
        </div>
        <button class="checkout-btn" onclick="processCheckout()">Proceed to Checkout</button>
    `;
}

// Process checkout
function processCheckout() {
    if (!currentUser) {
        // User not logged in, show auth modal
        showPopup('auth-modal');
        showNotification('Please login to complete your order');
        return;
    }
    
    if (cart.length === 0) {
        showNotification('Your cart is empty');
        return;
    }
    
    if (!userAddress) {
        showNotification('Please add your address first');
        showPopup('addAddress');
        return;
    }
    
    // Save order to Firebase
    saveOrderToFirebase();
}

// Save order to Firebase
function saveOrderToFirebase() {
    const subtotal = cart.reduce((total, item) => total + (item.price * item.quantity), 0);
    const shipping = 10;
    const tax = subtotal * 0.1;
    const total = subtotal + shipping + tax;
    
    const order = {
        userId: currentUser.uid,
        userEmail: currentUser.email,
        items: cart,
        address: userAddress,
        subtotal: subtotal,
        shipping: shipping,
        tax: tax,
        total: total,
        status: 'pending',
        createdAt: new Date().toISOString()
    };
    
    const ordersRef = database.ref('orders');
    const newOrderRef = ordersRef.push();
    
    newOrderRef.set(order)
        .then(() => {
            showNotification('Order placed successfully!');
            // Clear cart
            cart = [];
            updateCartUI();
            closePopup('cart-sidebar');
        })
        .catch((error) => {
            console.error('Error saving order:', error);
            showNotification('Error placing order. Please try again.');
        });
}

// Load user address from Firebase
function loadUserAddress(userId) {
    const addressRef = database.ref('userAddresses/' + userId);
    
    addressRef.once('value')
        .then((snapshot) => {
            const addressData = snapshot.val();
            if (addressData) {
                userAddress = addressData;
                updateAddressDisplay();
            }
        })
        .catch((error) => {
            console.error('Error loading address:', error);
        });
}

// Save user address to Firebase
function saveUserAddress(userId, addressData) {
    const addressRef = database.ref('userAddresses/' + userId);
    
    addressRef.set(addressData)
        .then(() => {
            userAddress = addressData;
            updateAddressDisplay();
            showNotification('Address saved successfully');
            closePopup('addAddress');
        })
        .catch((error) => {
            console.error('Error saving address:', error);
            showNotification('Error saving address. Please try again.');
        });
}

// Update address display
function updateAddressDisplay() {
    const addressContent = document.getElementById('addressContent');
    if (!addressContent) return;
    
    if (userAddress) {
        addressContent.innerHTML = `
            <p><strong>Name:</strong> ${userAddress.name}</p>
            <p><strong>Phone:</strong> ${userAddress.phone}</p>
            <p><strong>Address:</strong> ${userAddress.village}, ${userAddress.upazila}, ${userAddress.district}, ${userAddress.city}, ${userAddress.country}</p>
        `;
    } else {
        addressContent.innerHTML = `<p class="No-Address">No Address</p>`;
    }
}

// Update user UI based on authentication status
function updateUserUI(user) {
    const accountLink = document.getElementById('account-link');
    if (!accountLink) return;
    
    if (user) {
        accountLink.innerHTML = `
            <i class="fas fa-user"></i>
            <span>${user.email}</span>
        `;
    } else {
        accountLink.innerHTML = `
            <i class="fas fa-user"></i>
            <span>Account</span>
        `;
    }
}

// Setup event listeners
function setupEventListeners() {
    // Auth modal
    if (loginLink) {
        loginLink.addEventListener('click', function(e) {
            e.preventDefault();
            openAuthModal('login');
        });
    }
    
    if (registerLink) {
        registerLink.addEventListener('click', function(e) {
            e.preventDefault();
            openAuthModal('register');
        });
    }
    
    if (accountLink) {
        accountLink.addEventListener('click', function(e) {
            e.preventDefault();
            if (currentUser) {
                // Show user profile or logout option
                showNotification(`Logged in as ${currentUser.email}`);
            } else {
                openAuthModal('login');
            }
        });
    }
    
    // Auth form submission
    if (authForm) {
        authForm.addEventListener('submit', function(e) {
            e.preventDefault();
            handleAuthSubmit();
        });
    }
    
    // Address form submission
    const addressForm = document.getElementById('addressForm');
    if (addressForm) {
        addressForm.addEventListener('submit', function(e) {
            e.preventDefault();
            handleAddressSubmit();
        });
    }
    
    // Initialize other event listeners
    Wishlist();
    
    // Mobile menu toggle
    if (hamburger) {
        hamburger.addEventListener('click', () => {
            navMenu.classList.toggle('active');
            hamburger.classList.toggle('active');
        });
    }
    
    // Cart toggle
    if (cartToggle) {
        cartToggle.addEventListener('click', function() {
            showPopup('cart-sidebar');
        });
    }
    
    // Close cart
    if (closeCart) {
        closeCart.addEventListener('click', function() {
            closePopup('cart-sidebar');
        });
    }
}

// Handle address form submission
function handleAddressSubmit() {
    if (!currentUser) {
        showNotification('Please login first');
        showPopup('auth-modal');
        return;
    }
    
    const name = document.getElementById('name').value;
    const phone = document.getElementById('phone').value;
    const country = document.getElementById('country').value;
    const city = document.getElementById('city').value;
    const district = document.getElementById('district').value;
    const upazila = document.getElementById('upazila').value;
    const village = document.getElementById('village').value;
    
    const addressData = {
        name: name,
        phone: phone,
        country: country,
        city: city,
        district: district,
        upazila: upazila,
        village: village
    };
    
    saveUserAddress(currentUser.uid, addressData);
}

// Handle auth form submit
function handleAuthSubmit() {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const name = document.getElementById('name').value;
    
    if (authSubmit.textContent === 'Login') {
        // Login
        auth.signInWithEmailAndPassword(email, password)
            .then((userCredential) => {
                showNotification('Login successful!');
                closePopup('auth-modal');
                authForm.reset();
            })
            .catch((error) => {
                console.error('Login error:', error);
                showNotification('Login failed: ' + error.message);
            });
    } else {
        // Register
        auth.createUserWithEmailAndPassword(email, password)
            .then((userCredential) => {
                // Update user profile with name
                userCredential.user.updateProfile({
                    displayName: name
                }).then(() => {
                    showNotification('Registration successful!');
                    closePopup('auth-modal');
                    authForm.reset();
                });
            })
            .catch((error) => {
                console.error('Registration error:', error);
                showNotification('Registration failed: ' + error.message);
            });
    }
}

// Open auth modal
function openAuthModal(type) {
    if (!modalTitle || !authSubmit || !nameGroup) return;
    
    if (type === 'login') {
        modalTitle.textContent = 'Login to Your Account';
        authSubmit.textContent = 'Login';
        nameGroup.style.display = 'none';
    } else {
        modalTitle.textContent = 'Create an Account';
        authSubmit.textContent = 'Register';
        nameGroup.style.display = 'block';
    }
    
    showPopup('auth-modal');
}

// Show notification
function showNotification(message) {
    // Create notification element
    const notification = document.createElement('div');
    notification.className = 'notification';
    notification.style.cssText = `
        position: fixed;
        bottom: 20px;
        right: 20px;
        background-color: #4CAF50;
        color: white;
        padding: 15px 20px;
        border-radius: 4px;
        box-shadow: 0 4px 12px rgba(0,0,0,0.15);
        z-index: 3000;
        animation: slideIn 0.3s ease-out;
    `;
    
    notification.textContent = message;
    document.body.appendChild(notification);
    
    // Remove notification after 3 seconds
    setTimeout(() => {
        notification.style.animation = 'slideOut 0.3s ease-out forwards';
        setTimeout(() => {
            document.body.removeChild(notification);
        }, 300);
    }, 3000);
}

// Add animations
const style = document.createElement('style');
style.textContent = `
    @keyframes slideIn {
        from {
            transform: translateX(100%);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
    
    @keyframes slideOut {
        from {
            transform: translateX(0);
            opacity: 1;
        }
        to {
            transform: translateX(100%);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);


// Decrease quantity
function decreaseQuantity(productId) {
    const item = cart.find(item => item.id === productId);
    
    if (item) {
        if (item.quantity > 1) {
            item.quantity -= 1;
        } else {
            removeFromCart(productId);
            return;
        }
        
        updateCartUI();
    }
}

// Increase quantity
function increaseQuantity(productId) {
    const item = cart.find(item => item.id === productId);
    
    if (item) {
        item.quantity += 1;
        updateCartUI();
    }
}

// Remove from cart
function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    updateCartUI();
    showNotification('Item removed from cart');
}

// View product details
function ViewProdact(productId) {
    productDetails = products.find(p => p.id === productId);
    if (productDetails) {
        viewProdactDetails();
    }
}

// Show product details page
function viewProdactDetails(){
    goToPage('ProdactDetailsMainDiv');
    
    let ProdactDetailsSection = document.querySelector(".ProdactDetailsSection");
    if (!ProdactDetailsSection) return;
    
    ProdactDetailsSection.innerHTML = "";

    const ProdactDetails = document.createElement("div");
    ProdactDetails.className = 'ProdactDetails';
    ProdactDetails.innerHTML = `
    <div class="AllImg">
        <img src="${productDetails.image}" alt="${productDetails.title}">
        <div class="courseImg">
            <img src="${productDetails.image}" alt="${productDetails.title}">
            <img src="${productDetails.image}" alt="${productDetails.title}">
            <img src="${productDetails.image}" alt="${productDetails.title}">
        </div>
    </div>
    <div class="productTitel">
        <h4>${productDetails.title}</h4>
        <div class="share">
            <div>
                ${generateStars(productDetails.rating)}
            </div>
            <div>
                <i class="fa-solid fa-share-nodes"></i>
                <i class="fa-regular fa-heart"></i>
            </div>
        </div>
        <p>Brand: <a href="#">No BrandMore Computer Accessories from No Brand</a></p>
        <div class="taka">
            <h2>BT ${productDetails.price} </h2>
            <p>BT1 ${productDetails.originalPrice}</p>
            <span>-${productDetails.discount}%</span>
        </div>
        <hr>
        <div class="buyBtnColar">
            <p>Color Family <span>Black</span></p>
            <div>
                <img src="${productDetails.image}" alt="${productDetails.title}">
            </div>
            <div>
                <p>Quantity</p>
                <div><i class="fa-solid fa-minus"></i><p>1</p><i class="fa-solid fa-plus"></i></div>
            </div>
            <div>
                <button class="add-to-cart" data-id="${productDetails.id}" onclick="cartSidebarActive()">Buy Now</button>
                <button class="add-to-cart" data-id="${productDetails.id}" >Add to Cart</button>
            </div>
        </div>
    </div>
    `;
    ProdactDetailsSection.appendChild(ProdactDetails);

    const productDetails1 = document.createElement("div");
    productDetails1.className = 'productDetails';
    productDetails1.innerHTML = `
    <p>Product details of ${productDetails.title}</p>
    <div>
        <ul>
            <li>BT5.0 connection,stable signal,not occupy charging port or headphone port,convenient to use.</li>
            <li>Built-in quick reporting shortcut,report player unknown's battleground in real time.</li>
        </ul>
        <ul>
            <li>Press mouse middle wheel to control the mouse cursor,all operations in the game can be achieved. Support one-key continuous .</li>
            <li>Adopt cloud key mapping technology,default key mapping auto-match,support a variety of phone models.</li>
            <li>For senior players,you can customize keys via APP to fit your habit.</li>
        </ul>
    </div>
    <div>
        <img src="${productDetails.image}" alt="${productDetails.title}">
        <video src="https://youtu.be/AhYnDYzPUbM?si=HGjasIWMcn7ct1O-" o></video>
    </div>
    `;
    ProdactDetailsSection.appendChild(productDetails1);

    const RatingsReviews = document.createElement("div");
    RatingsReviews.className = 'RatingsReviews';
    RatingsReviews.innerHTML = `
    <p>Ratings & Reviews of ${productDetails.title}</p>
    <div class="Ratings">
        <div>
            <div>
                <h1>${productDetails.rating}</h1>
                <h3>/5</h3>
            </div>
            <div>
                ${generateStars(productDetails.rating)}
            </div>
        <p>${productDetails.reviewCount} Ratings</p>
        </div>
    </div>
    <div class="colam">
        <p>Product Reviews</p>
        <p>Sort:Relevance</p>
        <p>Filter:All star</p>
    </div>
    <div class="comment">
        <div>${generateStars(4)}</div>
        <div class="UserId">
            <i class="fa-solid fa-user"></i>
            <p>SK A.</p>
            <span>Verified Purchase</span>
        </div>
        <h4>আমি এইটা বিগত চারদিন ইউজ করছি এখনো কোন সমস্যা পাই নাই আশা করি কোন সমস্যা হবে না 🥰🥰 এটা অনেক ভালো সার্ভিস দেয় 🥰👍</h4>
        <div>
           <img src="${productDetails.image}" alt="${productDetails.title}">
           <img src="${productDetails.image}" alt="${productDetails.title}">
        </div>
        <p class="ColorFamily">Color Family: <span>Black</span></p>
        <div class="lick">
            <i class="fa-regular fa-thumbs-up"></i>
            <p>(28)</p>
        </div>
    </div>
    <div class="ViewAll"><a href="#" class="view-all">View All <i class="fas fa-chevron-right"></i></a></div>`;
    ProdactDetailsSection.appendChild(RatingsReviews);

    const recommendation = document.createElement("div");
    recommendation.className = "recommendation";
    recommendation.innerHTML = `
    <div class="section-title">
        <h2>You may also like</h2>
    </div>
    <div class="recommendationprodact" ></div>
    <div class="ViewAll">
        <a href="#" class="view-all">View All <i class="fas fa-chevron-right"></i></a>
    </div>`;
    ProdactDetailsSection.appendChild(recommendation);
    
    // Add event listeners to the new buttons
    cartButton();
    window.scrollTo(0,0);
}

// Setup address dropdowns
function setupAddressDropdowns() {
    const countrySelect = document.getElementById('country');
    const citySelect = document.getElementById('city');
    const districtSelect = document.getElementById('district');
    const upazilaSelect = document.getElementById('upazila');
    
    if (!countrySelect || !citySelect || !districtSelect || !upazilaSelect) return;
    
    // দেশ চেঞ্জ হলে সিটি লোড হবে
    countrySelect.addEventListener('change', function() {
        const country = this.value;
        citySelect.innerHTML = '<option value="">সিটি সিলেক্ট করুন</option>';
        districtSelect.innerHTML = '<option value="">আগে সিটি সিলেক্ট করুন</option>';
        upazilaSelect.innerHTML = '<option value="">আগে জেলা সিলেক্ট করুন</option>';
        
        if (country && data[country]) {
            Object.keys(data[country]).forEach(city => {
                citySelect.innerHTML += `<option value="${city}">${city}</option>`;
            });
        }
    });
    
    // সিটি চেঞ্জ হলে জেলা লোড হবে
    citySelect.addEventListener('change', function() {
        const country = countrySelect.value;
        const city = this.value;
        districtSelect.innerHTML = '<option value="">জেলা সিলেক্ট করুন</option>';
        upazilaSelect.innerHTML = '<option value="">আগে জেলা সিলেক্ট করুন</option>';
        
        if (city && data[country] && data[country][city]) {
            Object.keys(data[country][city]).forEach(district => {
                districtSelect.innerHTML += `<option value="${district}">${district}</option>`;
            });
        }
    });
    
    // জেলা চেঞ্জ হলে উপজেলা লোড হবে
    districtSelect.addEventListener('change', function() {
        const country = countrySelect.value;
        const city = citySelect.value;
        const district = this.value;
        upazilaSelect.innerHTML = '<option value="">উপজেলা সিলেক্ট করুন</option>';
        
        if (district && data[country] && data[country][city] && data[country][city][district]) {
            data[country][city][district].forEach(upazila => {
                upazilaSelect.innerHTML += `<option value="${upazila}">${upazila}</option>`;
            });
        }
    });
}

// Start slideshow
function startSlideshow() {
    if (slides.length === 0 || indicators.length === 0) return;
    
    // Auto slide
    setInterval(() => {
        showSlide(currentSlide + 1);
    }, 5000);
    
    // Indicator clicks
    indicators.forEach((indicator, index) => {
        indicator.addEventListener('click', () => {
            showSlide(index);
        });
    });
}

// Show slide
function showSlide(n) {
    slides.forEach(slide => slide.classList.remove('active'));
    indicators.forEach(indicator => indicator.classList.remove('active'));
    
    currentSlide = (n + totalSlides) % totalSlides;
    
    slides[currentSlide].classList.add('active');
    indicators[currentSlide].classList.add('active');
}

// Wishlist functionality
function Wishlist() {
    const wishlistButtons = document.querySelectorAll('.wishlist');
    
    wishlistButtons.forEach(button => {
        button.addEventListener('click', () => {
            const icon = button.querySelector('i');
            button.classList.toggle('active');
            
            if (button.classList.contains('active')) {
                icon.classList.remove('far');
                icon.classList.add('fas');
                showNotification('Added to wishlist');
            } else {
                icon.classList.remove('fas');
                icon.classList.add('far');
                showNotification('Removed from wishlist');
            }
        });
    });
}

// Cart sidebar active
function cartSidebarActive() {
    showPopup('cart-sidebar');
}

// Initialize router
function initRouter() {
    const PAGES = ['mainContainer', 'ProdactDetailsMainDiv'];
    let currentPage = null;
    
    // Show page function
    function showPage(pageId) {
        PAGES.forEach(id => {
            const el = document.getElementById(id);
            if (!el) return;
            el.style.display = 'none';
        });
        
        const target = document.getElementById(pageId);
        if (target) {
            target.style.display = 'block';
            currentPage = pageId;
        } else {
            const fallback = PAGES[0];
            document.getElementById(fallback).style.display = 'block';
            currentPage = fallback;
        }
    }
    
    // Go to page function
    window.goToPage = function(pageId) {
        if (pageId === currentPage) return;
        showPage(pageId);
        history.pushState({ type: 'page', page: pageId }, '', '#' + pageId);
    };
    
    // Show popup function
    window.showPopup = function(popupId) {
        // সব popup আগে hide করো
        document.querySelectorAll('.popup').forEach(p => p.classList.remove('active'));
        
        const popup = document.getElementById(popupId);
        if (popup) {
            popup.classList.add('active');
            history.pushState({ type: 'popup', popupId }, '', '#' + popupId);
        }
    };
    
    // Hide popup function
    window.hidePopup = function(popupId) {
        const popup = document.getElementById(popupId);
        if (popup) {
            popup.classList.remove('active');
        }
    };
    
    // Close popup function
    window.closePopup = function(popupId) {
        hidePopup(popupId);
        history.back();
    };
    
    // Handle popstate event
    function handlePopState(event) {
        if (!event.state) {
            // যদি কোনো state না থাকে → প্রথম পেজ দেখাও + সব popup বন্ধ করো
            showPage(PAGES[0]);
            document.querySelectorAll('.popup').forEach(p => p.classList.remove('active'));
            return;
        }
        
        if (event.state.type === 'page') {
            showPage(event.state.page);
            document.querySelectorAll('.popup').forEach(p => p.classList.remove('active'));
        } else if (event.state.type === 'popup') {
            document.querySelectorAll('.popup').forEach(p => p.classList.remove('active'));
            const popup = document.getElementById(event.state.popupId);
            if (popup) popup.classList.add('active');
        }
    }
    
    // Initialize the router
    let initialState = null;
    
    // যদি hash থাকে তাহলে সেটা থেকে restore করো
    if (location.hash) {
        const id = location.hash.slice(1);
        
        if (PAGES.includes(id)) {
            showPage(id);
            initialState = { type: 'page', page: id };
        } else {
            const popup = document.getElementById(id);
            if (popup && popup.classList.contains('popup')) {
                showPage(PAGES[0]);
                popup.classList.add('active');
                initialState = { type: 'popup', popupId: id };
            } else {
                showPage(PAGES[0]);
                initialState = { type: 'page', page: PAGES[0] };
            }
        }
    } else {
        showPage(PAGES[0]);
        initialState = { type: 'page', page: PAGES[0] };
    }
    
    history.replaceState(initialState, '', location.hash || '#' + PAGES[0]);
    window.addEventListener('popstate', handlePopState);
}

// Add to cart button functionality
function cartButton() {
    document.querySelectorAll('.add-to-cart').forEach(button => {
        button.addEventListener('click', function() {
            const productId = this.getAttribute('data-id');
            addToCart(productId);
        });
    });
}


// Third part - Complete functionality

// Review and comment system
function setupReviewSystem() {
    const reviewForm = document.getElementById('review-form');
    const reviewText = document.getElementById('review-text');
    const reviewRating = document.getElementById('review-rating');
    
    if (reviewForm) {
        reviewForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            if (!currentUser) {
                showNotification('Please login to submit a review');
                showPopup('auth-modal');
                return;
            }
            
            const review = {
                userId: currentUser.uid,
                userEmail: currentUser.email,
                productId: productDetails.id,
                rating: parseInt(reviewRating.value),
                comment: reviewText.value,
                createdAt: new Date().toISOString()
            };
            
            saveReview(review);
            reviewForm.reset();
        });
    }
}

// Save review to Firebase
function saveReview(review) {
    const reviewsRef = database.ref('reviews');
    const newReviewRef = reviewsRef.push();
    
    newReviewRef.set(review)
        .then(() => {
            showNotification('Review submitted successfully!');
            loadProductReviews(productDetails.id);
        })
        .catch((error) => {
            console.error('Error saving review:', error);
            showNotification('Error submitting review. Please try again.');
        });
}

// Load product reviews
function loadProductReviews(productId) {
    const reviewsRef = database.ref('reviews');
    
    reviewsRef.orderByChild('productId').equalTo(productId).once('value')
        .then((snapshot) => {
            const reviews = snapshot.val();
            displayProductReviews(reviews);
        })
        .catch((error) => {
            console.error('Error loading reviews:', error);
        });
}

// Display product reviews
function displayProductReviews(reviews) {
    const reviewsContainer = document.getElementById('reviews-container');
    if (!reviewsContainer) return;
    
    reviewsContainer.innerHTML = '';
    
    if (!reviews || Object.keys(reviews).length === 0) {
        reviewsContainer.innerHTML = '<p class="no-reviews">No reviews yet. Be the first to review!</p>';
        return;
    }
    
    Object.values(reviews).forEach(review => {
        const reviewElement = document.createElement('div');
        reviewElement.className = 'review-item';
        
        // Format date
        const reviewDate = new Date(review.createdAt).toLocaleDateString();
        
        reviewElement.innerHTML = `
            <div class="review-header">
                <div class="reviewer-info">
                    <i class="fas fa-user-circle"></i>
                    <span>${review.userEmail}</span>
                </div>
                <div class="review-rating">
                    ${generateStars(review.rating)}
                </div>
            </div>
            <div class="review-content">
                <p>${review.comment}</p>
            </div>
            <div class="review-footer">
                <span class="review-date">${reviewDate}</span>
            </div>
        `;
        
        reviewsContainer.appendChild(reviewElement);
    });
}

// Enhanced routing with back button support
function initEnhancedRouter() {
    const PAGES = ['mainContainer', 'ProdactDetailsMainDiv'];
    let currentPage = null;
    let currentPopup = null;
    
    // Show page function
    function showPage(pageId) {
        PAGES.forEach(id => {
            const el = document.getElementById(id);
            if (!el) return;
            el.style.display = 'none';
        });
        
        const target = document.getElementById(pageId);
        if (target) {
            target.style.display = 'block';
            currentPage = pageId;
        } else {
            const fallback = PAGES[0];
            document.getElementById(fallback).style.display = 'block';
            currentPage = fallback;
        }
    }
    
    // Go to page function
    window.goToPage = function(pageId) {
        if (pageId === currentPage) return;
        
        // Store previous state
        const previousState = {
            page: currentPage,
            popup: currentPopup
        };
        
        showPage(pageId);
        currentPopup = null;
        
        history.pushState({
            type: 'page',
            page: pageId,
            previous: previousState
        }, '', '#' + pageId);
    };
    
    // Show popup function
    window.showPopup = function(popupId) {
        // Hide all popups first
        document.querySelectorAll('.popup').forEach(p => {
            p.classList.remove('active');
        });
        
        const popup = document.getElementById(popupId);
        if (popup) {
            popup.classList.add('active');
            currentPopup = popupId;
            
            history.pushState({
                type: 'popup',
                popupId: popupId,
                page: currentPage
            }, '', '#' + popupId);
        }
    };
    
    // Hide popup function
    window.hidePopup = function(popupId) {
        const popup = document.getElementById(popupId);
        if (popup) {
            popup.classList.remove('active');
        }
    };
    
    // Close popup function
    window.closePopup = function(popupId) {
        hidePopup(popupId);
        
        // Go back to the previous state
        history.back();
    };
    
    // Handle popstate event (back/forward button)
    function handlePopState(event) {
        if (event.state) {
            if (event.state.type === 'page') {
                // Show the page from history
                showPage(event.state.page);
                currentPopup = null;
                
                // Hide all popups
                document.querySelectorAll('.popup').forEach(p => {
                    p.classList.remove('active');
                });
            } else if (event.state.type === 'popup') {
                // Show the page and popup from history
                if (event.state.page) {
                    showPage(event.state.page);
                }
                
                // Show the popup
                document.querySelectorAll('.popup').forEach(p => {
                    p.classList.remove('active');
                });
                
                const popup = document.getElementById(event.state.popupId);
                if (popup) {
                    popup.classList.add('active');
                    currentPopup = event.state.popupId;
                }
            }
        } else {
            // No state - show main page and hide all popups
            showPage(PAGES[0]);
            currentPopup = null;
            
            document.querySelectorAll('.popup').forEach(p => {
                p.classList.remove('active');
            });
        }
    }
    
    // Initialize the router
    let initialState = null;
    
    // Check if there's a hash in the URL
    if (location.hash) {
        const id = location.hash.slice(1);
        
        if (PAGES.includes(id)) {
            showPage(id);
            initialState = { type: 'page', page: id };
        } else {
            const popup = document.getElementById(id);
            if (popup && popup.classList.contains('popup')) {
                showPage(PAGES[0]);
                popup.classList.add('active');
                currentPopup = id;
                initialState = { type: 'popup', popupId: id, page: PAGES[0] };
            } else {
                showPage(PAGES[0]);
                initialState = { type: 'page', page: PAGES[0] };
            }
        }
    } else {
        showPage(PAGES[0]);
        initialState = { type: 'page', page: PAGES[0] };
    }
    
    history.replaceState(initialState, '', location.hash || '#' + PAGES[0]);
    window.addEventListener('popstate', handlePopState);
}

// Enhanced product details view with reviews
function enhanceProductDetailsView() {
    if (!productDetails) return;
    
    // Add reviews section to product details
    const reviewsSection = document.createElement('div');
    reviewsSection.className = 'reviews-section';
    reviewsSection.innerHTML = `
        <h3>Customer Reviews</h3>
        <div id="reviews-container" class="reviews-container">
            <p class="no-reviews">Loading reviews...</p>
        </div>
        
        <div class="add-review-section">
            <h4>Add Your Review</h4>
            <form id="review-form" class="review-form">
                <div class="form-group">
                    <label for="review-rating">Rating</label>
                    <select id="review-rating" class="form-control" required>
                        <option value="">Select Rating</option>
                        <option value="5">5 Stars</option>
                        <option value="4">4 Stars</option>
                        <option value="3">3 Stars</option>
                        <option value="2">2 Stars</option>
                        <option value="1">1 Star</option>
                    </select>
                </div>
                <div class="form-group">
                    <label for="review-text">Your Review</label>
                    <textarea id="review-text" class="form-control" rows="4" required></textarea>
                </div>
                <button type="submit" class="btn-primary">Submit Review</button>
            </form>
        </div>
    `;
    
    // Find where to insert the reviews section
    const productDetailsSection = document.querySelector('.ProdactDetailsSection');
    if (productDetailsSection) {
        // Insert before the recommendation section
        const recommendationSection = productDetailsSection.querySelector('.recommendation');
        if (recommendationSection) {
            productDetailsSection.insertBefore(reviewsSection, recommendationSection);
        } else {
            productDetailsSection.appendChild(reviewsSection);
        }
        
        // Load reviews for this product
        loadProductReviews(productDetails.id);
        
        // Setup review form
        setupReviewSystem();
    }
}

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    // Initialize enhanced router
    initEnhancedRouter();
    
    // Check authentication state
    auth.onAuthStateChanged((user) => {
        if (user) {
            currentUser = user;
            updateUserUI(user);
            loadUserAddress(user.uid);
        } else {
            currentUser = null;
            updateUserUI(null);
        }
    });
    
    // Fetch products and setup everything
    fetchProductsFromFirebase();
    setupEventListeners();
    setupAddressDropdowns();
    startSlideshow();
    
    // Override the viewProdactDetails to include reviews
    const originalViewProdactDetails = window.viewProdactDetails;
    window.viewProdactDetails = function() {
        originalViewProdactDetails();
        // Wait a bit for the DOM to be updated
        setTimeout(() => {
            enhanceProductDetailsView();
        }, 100);
    };
});

// Additional utility functions
function formatDate(dateString) {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
}

// Add CSS for reviews section
const reviewStyles = `
    .reviews-section {
        margin: 30px 0;
        padding: 20px;
        background-color: #f9f9f9;
        border-radius: 8px;
    }
    
    .reviews-container {
        margin-bottom: 30px;
    }
    
    .review-item {
        padding: 15px;
        margin-bottom: 15px;
        background-color: white;
        border-radius: 6px;
        box-shadow: 0 1px 3px rgba(0,0,0,0.1);
    }
    
    .review-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 10px;
    }
    
    .reviewer-info {
        display: flex;
        align-items: center;
    }
    
    .reviewer-info i {
        font-size: 20px;
        margin-right: 8px;
        color: #6b7280;
    }
    
    .review-content {
        margin-bottom: 10px;
    }
    
    .review-footer {
        display: flex;
        justify-content: flex-end;
    }
    
    .review-date {
        font-size: 12px;
        color: #6b7280;
    }
    
    .add-review-section {
        margin-top: 30px;
        padding: 20px;
        background-color: white;
        border-radius: 8px;
        box-shadow: 0 1px 3px rgba(0,0,0,0.1);
    }
    
    .no-reviews {
        text-align: center;
        color: #6b7280;
        font-style: italic;
    }
`;

// Add styles to the document
const styleSheet = document.createElement('style');
styleSheet.textContent = reviewStyles;
document.head.appendChild(styleSheet);

// Initialize the app when DOM is loaded
document.addEventListener('DOMContentLoaded', init);
