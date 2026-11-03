const API_KEY = '34904576-1b3b2ade155886a3ef79485ce'; 
const mainContainer = document.getElementById('mainContainer');

const translations = {
    en: {
        app_title: "Rawnaq", tab_category: "Category", tab_premium: "Premium", tab_home: "Home", tab_community: "Community", tab_desktop: "Desktop",
        go_pro: "Go Pro!", unlock: "Unlock everything.", favorites: "Favorites", about_app: "About the app", rate: "Rate the app", share: "Share with friends", use_photo: "Use your photo", new_badge: "New", settings: "Settings", display: "Display", app_lang: "App language", auto_change: "Auto Change", off: "Off", mins_15: "15 Mins", hour_1: "1 Hour", hours_24: "24 Hours", developed_by: "Developed by Mohammed Tijani", all_rights: "© 2026 All rights reserved", apply: "Apply", save: "Save", quote: "Quote", blur: "Blur", lock_screen: "Lock screen", home_screen: "Home screen", both_screens: "Home and lock screens", wallpaper_success: "Wallpaper was set successfully", loading: "Loading...", no_images: "No images found", conn_failed: "Connection failed", theme_dark: "Dark Mode", theme_light: "Light Mode", search_placeholder: "Search wallpapers...", cat_label: "Category", wall_label: "Wallpaper",
        cat_nature: "Nature", cat_abstract: "Abstract", cat_space: "Space", cat_architecture: "Architecture", cat_cars: "Cars", cat_animals: "Animals", cat_minimalist: "Minimalist", cat_neon: "Neon",
        add_fav: "Add to favourites", turn_off_snapping: "Turn off snapping", fav_added: "Added to favorites", fav_removed: "Removed from favorites", fav_empty: "No favorites yet",
        about: "About", terms_of_use: "Terms of use", privacy_policy: "Privacy policy", version: "Version",
        about_desc: "Rawnaq is your ultimate destination for high-quality, stunning wallpapers. Carefully crafted to bring beauty to your screen every single day.",
        terms_content: "Welcome to Rawnaq! By downloading and using this application, you agree to these terms and conditions. The wallpapers provided are for personal use only. The application requires an internet connection to fetch the latest high-quality images. We reserve the right to update or modify these terms at any time to enhance user experience.",
        privacy_content: "Your privacy is important to us. Rawnaq does not collect, store, or share your personal data. We only request permission to access your device's storage temporarily to save wallpapers directly to your gallery. All network requests are made securely to fetch image data. If you have any concerns regarding your privacy, please contact the developer."
    },
    ar: {
        app_title: "رونق", tab_category: "الأقسام", tab_premium: "المميزة", tab_home: "الرئيسية", tab_community: "المجتمع", tab_desktop: "سطح المكتب",
        go_pro: "النسخة الاحترافية", unlock: "افتح كل الميزات.", favorites: "المفضلة", about_app: "عن التطبيق", rate: "تقييم التطبيق", share: "شارك مع الأصدقاء", use_photo: "استخدم صورتك", new_badge: "جديد", settings: "الإعدادات", display: "العرض", app_lang: "لغة التطبيق", auto_change: "تغيير تلقائي", off: "إيقاف", mins_15: "15 دقيقة", hour_1: "ساعة واحدة", hours_24: "24 ساعة", developed_by: "تطوير Mohammed Tijani", all_rights: "© 2026 جميع الحقوق محفوظة", apply: "تعيين", save: "حفظ", quote: "اقتباس", blur: "ضباب", lock_screen: "شاشة القفل", home_screen: "الشاشة الرئيسية", both_screens: "الشاشة الرئيسية والقفل", wallpaper_success: "تم تعيين الخلفية بنجاح", loading: "جاري التحميل...", no_images: "لا توجد صور", conn_failed: "فشل الاتصال", theme_dark: "الوضع الداكن", theme_light: "الوضع الساطع", search_placeholder: "ابحث عن خلفيات...", cat_label: "قسم", wall_label: "خلفية",
        cat_nature: "الطبيعة", cat_abstract: "تجريدي", cat_space: "الفضاء", cat_architecture: "عمارة", cat_cars: "سيارات", cat_animals: "حيوانات", cat_minimalist: "بسيط", cat_neon: "نيون",
        add_fav: "إضافة للمفضلة", turn_off_snapping: "إيقاف الجذب", fav_added: "تمت الإضافة للمفضلة", fav_removed: "تمت الإزالة من المفضلة", fav_empty: "لا توجد مفضلات بعد",
        about: "حول", terms_of_use: "شروط الاستخدام", privacy_policy: "سياسة الخصوصية", version: "الإصدار",
        about_desc: "تطبيق رونق هو وجهتك الأولى للحصول على صور عالية الجودة. تم تصميمه بعناية ليضفي لمسة من الجمال على شاشتك كل يوم.",
        terms_content: "مرحباً بك في تطبيق رونق! باستخدامك لهذا التطبيق، فإنك توافق على هذه الشروط والأحكام. الخلفيات المقدمة مخصصة للاستخدام الشخصي فقط. يتطلب التطبيق اتصالاً بالإنترنت لجلب أحدث الصور عالية الجودة. نحتفظ بالحق في تحديث أو تعديل هذه الشروط في أي وقت لتحسين تجربة المستخدم.",
        privacy_content: "خصوصيتك تهمنا. لا يقوم تطبيق رونق بجمع أو تخزين أو مشاركة بياناتك الشخصية. نطلب فقط الإذن للوصول إلى مساحة تخزين جهازك مؤقتًا لحفظ الخلفيات مباشرة في معرض الصور الخاص بك. تتم جميع طلبات الشبكة بشكل آمن لجلب بيانات الصور. إذا كانت لديك أي مخاوف بشأن خصوصيتك، يرجى التواصل مع المطور."
    },
    fr: {
        app_title: "Rawnaq", tab_category: "Catégorie", tab_premium: "Premium", tab_home: "Accueil", tab_community: "Communauté", tab_desktop: "Bureau",
        go_pro: "Passez Pro!", unlock: "Tout débloquer.", favorites: "Favoris", about_app: "À propos de l'appli", rate: "Évaluer l'appli", share: "Partager", use_photo: "Utiliser votre photo", new_badge: "Nouveau", settings: "Paramètres", display: "Affichage", app_lang: "Langue", auto_change: "Changement auto", off: "Désactivé", mins_15: "15 Mins", hour_1: "1 Heure", hours_24: "24 Heures", developed_by: "Développé par Mohammed Tijani", all_rights: "© 2026 Tous droits réservés", apply: "Appliquer", save: "Enregistrer", quote: "Citation", blur: "Flou", lock_screen: "Écran de verrouillage", home_screen: "Écran d'accueil", both_screens: "Les deux écrans", wallpaper_success: "Fond d'écran défini avec succès", loading: "Chargement...", no_images: "Aucune image", conn_failed: "Échec de connexion", theme_dark: "Mode sombre", theme_light: "Mode clair", search_placeholder: "Rechercher des fonds...", cat_label: "Catégorie", wall_label: "Fond d'écran",
        cat_nature: "Nature", cat_abstract: "Abstrait", cat_space: "Espace", cat_architecture: "Architecture", cat_cars: "Voitures", cat_animals: "Animaux", cat_minimalist: "Minimaliste", cat_neon: "Néon",
        add_fav: "Ajouter aux favoris", turn_off_snapping: "Désactiver l'accrochage", fav_added: "Ajouté aux favoris", fav_removed: "Retiré des favoris", fav_empty: "Aucun favori pour le moment",
        about: "À propos", terms_of_use: "Conditions d'utilisation", privacy_policy: "Politique de confidentialité", version: "Version",
        about_desc: "Rawnaq est votre destination ultime pour des fonds d'écran de haute qualité, conçus pour apporter de la beauté à votre écran.",
        terms_content: "Bienvenue sur Rawnaq ! En utilisant cette application, vous acceptez ces conditions. Les fonds d'écran sont destinés à un usage personnel uniquement. L'application nécessite une connexion Internet.",
        privacy_content: "Votre confidentialité est importante. Rawnaq ne collecte pas vos données personnelles. Nous demandons uniquement l'accès au stockage pour enregistrer les fonds d'écran."
    }
};

// --- قائمة الحكم العربية الأنيقة والمشهورة ---
const predefinedQuotes = [
    "أَلَا بِذِكْرِ اللَّهِ تَطْمَئِنُّ الْقُلُوبُ",
    "وَمَا تَوْفِيقِي إِلَّا بِاللَّهِ",
    "إِنَّ مَعَ الْعُسْرِ يُسْرًا",
    "فَاصْبِرْ صَبْرًا جَمِيلًا",
    "وَخُلِقَ الْإِنسَانُ ضَعِيفًا",
    "وَأَن لَّيْسَ لِلْإِنسَانِ إِلَّا مَا سَعَى",
    "وَمَنْ يَتَوَكَّلْ عَلَى اللَّهِ فَهُوَ حَسْبُهُ",
    "الْحَمْدُ لِلَّهِ رَبِّ الْعَالَمِينَ",
    "مَنْ جَدَّ وَجَدَ، وَمَنْ زَرَعَ حَصَدَ",
    "كُنْ مَعَ اللَّهِ يَكُنْ مَعَكَ",
    "تفائل بما تهوى يكن",
    "يُدَبِّرُ الْأَمْرَ مِنَ السَّمَاءِ إِلَى الْأَرْضِ"
];

let currentLang = localStorage.getItem('appLang') || 'en';
let isDarkMode = localStorage.getItem('isDarkMode') === 'true';
let isGlassTheme = localStorage.getItem('isGlassTheme') === 'true'; 
let favoritesList = JSON.parse(localStorage.getItem('myFavorites')) || [];

const categoriesData = [
    { id: 'cat_nature', query: 'nature landscape beautiful', bg: 'img/nature.jpg' },
    { id: 'cat_abstract', query: 'abstract background texture', bg: 'img/abstract.jpg' },
    { id: 'cat_space', query: 'space galaxy stars', bg: 'img/space.jpg' },
    { id: 'cat_architecture', query: 'architecture city building', bg: 'img/architecture.jpg' },
    { id: 'cat_cars', query: 'cars sports car automotive', bg: 'img/cars.jpg' },
    { id: 'cat_animals', query: 'wildlife animals cute', bg: 'img/animals.jpg' },
    { id: 'cat_minimalist', query: 'minimalist minimal clean', bg: 'img/minimalist.jpg' },
    { id: 'cat_neon', query: 'neon cyberpunk lights', bg: 'img/neon.jpg' }
];

function changeLanguage(lang) {
    currentLang = lang;
    localStorage.setItem('appLang', lang);
    document.documentElement.dir = (lang === 'ar') ? 'rtl' : 'ltr';
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (translations[lang] && translations[lang][key]) el.innerText = translations[lang][key];
    });
    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
        const key = el.getAttribute('data-i18n-placeholder');
        if (translations[lang] && translations[lang][key]) el.setAttribute('placeholder', translations[lang][key]);
    });
}
changeLanguage(currentLang);

function toggleTheme() { isDarkMode = !isDarkMode; localStorage.setItem('isDarkMode', isDarkMode); applyTheme(); }
function applyTheme() {
    const themeIcon = document.getElementById('themeIcon');
    const themeText = document.getElementById('themeText');
    if (isDarkMode) {
        document.body.classList.add('dark-theme');
        if(themeIcon) themeIcon.className = 'ph ph-sun'; 
        if(themeText) themeText.setAttribute('data-i18n', 'theme_light');
    } else {
        document.body.classList.remove('dark-theme');
        if(themeIcon) themeIcon.className = 'ph ph-moon'; 
        if(themeText) themeText.setAttribute('data-i18n', 'theme_dark');
    }
    if (themeText && translations[currentLang][themeText.getAttribute('data-i18n')]) {
        themeText.innerText = translations[currentLang][themeText.getAttribute('data-i18n')];
    }
}

function toggleGlassTheme() {
    isGlassTheme = !isGlassTheme;
    localStorage.setItem('isGlassTheme', isGlassTheme);
    applyGlassTheme();
}
function applyGlassTheme() {
    if (isGlassTheme) document.body.classList.add('glass-theme');
    else document.body.classList.remove('glass-theme');
}

applyTheme();
applyGlassTheme();

function toggleSearch() {
    const searchOverlay = document.getElementById('searchOverlay');
    const searchInput = document.getElementById('searchInput');
    searchOverlay.classList.toggle('show');
    if(searchOverlay.classList.contains('show')) searchInput.focus();
    else { searchInput.value = ''; document.getElementById('searchResults').innerHTML = ''; }
}

let searchTimeout;
async function handleSearch(query) {
    const resultsContainer = document.getElementById('searchResults');
    if (query.trim().length < 2) { resultsContainer.innerHTML = ''; return; }
    
    clearTimeout(searchTimeout);
    searchTimeout = setTimeout(async () => {
        resultsContainer.innerHTML = `<div style="text-align:center; color:var(--text-muted); padding:20px;">${translations[currentLang].loading}</div>`;
        let html = '';
        const searchLower = query.toLowerCase();

        const matchedCats = categoriesData.filter(c => {
            const catNameEn = c.id.replace('cat_', '');
            const catNameLocal = translations[currentLang][c.id].toLowerCase();
            return catNameEn.includes(searchLower) || catNameLocal.includes(searchLower);
        });

        matchedCats.forEach(cat => {
            const catName = translations[currentLang][cat.id];
            html += `<div class="search-item" onclick="executeSearch('${cat.query}')"><img src="${cat.bg}" alt="${catName}"><div class="search-item-info"><span class="search-item-title">${catName}</span><span class="search-item-type">${translations[currentLang].cat_label}</span></div></div>`;
        });

        try {
            const langParam = (currentLang === 'en' || currentLang === 'fr') ? `&lang=${currentLang}` : '';
            const res = await fetch(`https://pixabay.com/api/?key=${API_KEY}&q=${encodeURIComponent(query)}${langParam}&image_type=photo&orientation=vertical&per_page=50`);
            const data = await res.json();
            if (data.hits && data.hits.length > 0) {
                data.hits.forEach(hit => {
                    const title = hit.tags.split(',')[0].trim();
                    html += `<div class="search-item" onclick="openImageViewer('${hit.largeImageURL}'); toggleSearch();"><img src="${hit.previewURL}" alt="${title}"><div class="search-item-info"><span class="search-item-title">${title}</span><span class="search-item-type">${translations[currentLang].wall_label}</span></div></div>`;
                });
            }
            if (!html) html = `<div style="text-align:center; color:var(--text-muted); padding:20px;">${translations[currentLang].no_images}</div>`;
            resultsContainer.innerHTML = html;
        } catch (e) { resultsContainer.innerHTML = `<div style="text-align:center; color:#ef4444; padding:20px;">${translations[currentLang].conn_failed}</div>`; }
    }, 500);
}

function executeSearch(query) {
    toggleSearch(); fetchWallpapers(query); 
    document.querySelectorAll('.nav-item, .nav-item-center').forEach(t => t.classList.remove('active'));
    const homeTab = document.querySelector('.nav-item-center');
    if(homeTab) homeTab.classList.add('active'); 
}

function handlePhotoUpload(event) {
    const file = event.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function(e) { openImageViewer(e.target.result); }
        reader.readAsDataURL(file);
    }
}

function toggleOptionsMenu() { document.getElementById('optionsMenu').classList.toggle('show'); }

function toggleFavorite() {
    const url = viewerImage.src;
    const index = favoritesList.indexOf(url);
    const heartIcon = document.getElementById('favHeartIcon');
    
    if (index > -1) {
        favoritesList.splice(index, 1);
        showToast('fav_removed');
        heartIcon.className = 'ph ph-heart'; heartIcon.style.color = 'var(--text-color)';
    } else {
        favoritesList.push(url);
        showToast('fav_added');
        heartIcon.className = 'ph-fill ph-heart'; heartIcon.style.color = '#ef4444';
    }
    localStorage.setItem('myFavorites', JSON.stringify(favoritesList));
    toggleOptionsMenu();
}

function displayFavorites() {
    toggleMenu();
    document.querySelectorAll('.nav-item, .nav-item-center').forEach(t => t.classList.remove('active'));
    mainContainer.className = 'grid'; mainContainer.innerHTML = '';
    
    if (favoritesList.length === 0) {
        mainContainer.innerHTML = `<p style="text-align:center; grid-column: span 3; color: var(--text-muted); padding: 40px;">${translations[currentLang].fav_empty}</p>`;
        return;
    }
    favoritesList.forEach(url => {
        const card = document.createElement('div'); card.className = 'wallpaper-card';
        card.innerHTML = `<img src="${url}" alt="Favorite" loading="lazy">`;
        card.onclick = () => openImageViewer(url);
        mainContainer.appendChild(card);
    });
}

async function shareApp() {
    toggleMenu();
    try {
        const shareData = {
            title: translations[currentLang].app_title,
            text: "اكتشف أفضل تطبيق للخلفيات العربية الأصيلة!",
            url: 'https://play.google.com/store/apps/details?id=com.tijanim.arabicwalls'
        };

        if (window.Capacitor && window.Capacitor.Plugins.Share) {
            await window.Capacitor.Plugins.Share.share(shareData);
        } else if (navigator.share) {
            await navigator.share(shareData);
        } else {
            showToast('conn_failed');
        }
    } catch (err) { console.log('Share canceled', err); }
}

function toggleMenu() { document.getElementById('sidebar').classList.toggle('open'); document.getElementById('overlay').classList.toggle('show'); }
function openSettings() { toggleMenu(); document.getElementById('settingsModal').classList.add('show'); }
function closeSettings() { document.getElementById('settingsModal').classList.remove('show'); }
function openModal(modalId) { document.getElementById(modalId).classList.add('show'); }
function closeModal(modalId) { document.getElementById(modalId).classList.remove('show'); }

let autoChangeInterval = null;
function setAutoWallpaper(minutes) {
    localStorage.setItem('autoWallpaper', minutes);
    if (minutes !== 'off') {
        const ms = parseInt(minutes) * 60 * 1000;
        if (autoChangeInterval) clearInterval(autoChangeInterval);
        autoChangeInterval = setInterval(changeWallpaperAuto, ms);
    } else {
        if (autoChangeInterval) clearInterval(autoChangeInterval);
    }
}

async function changeWallpaperAuto() {
    if (window.plugins && window.plugins.wallpaper) {
        let imgUrl = '';
        try {
            const res = await fetch(`https://pixabay.com/api/?key=${API_KEY}&q=nature&image_type=photo&orientation=vertical`);
            const data = await res.json();
            if(data.hits && data.hits.length > 0) {
                imgUrl = data.hits[Math.floor(Math.random() * data.hits.length)].largeImageURL;
            }
        } catch(e) {}

        if(imgUrl) {
            try {
                const response = await fetch(imgUrl);
                const blob = await response.blob();
                const reader = new FileReader();
                reader.readAsDataURL(blob);
                reader.onloadend = function() {
                    const base64data = reader.result.split(',')[1];
                    window.plugins.wallpaper.setImageBase64(base64data, ()=>{}, ()=>{});
                }
            } catch (e) {}
        }
    }
}

function checkAutoWallpaperOnLoad() {
    const minutes = localStorage.getItem('autoWallpaper');
    if (!minutes || minutes === 'off') return;
    
    const lastChange = localStorage.getItem('lastAutoWallpaperTime');
    const now = Date.now();
    const ms = parseInt(minutes) * 60 * 1000;
    
    if (!lastChange || now - parseInt(lastChange) > ms) {
        changeWallpaperAuto();
        localStorage.setItem('lastAutoWallpaperTime', now.toString());
    }
    setAutoWallpaper(minutes); 
}

async function fetchWallpapers(query = 'nature') {
    const loadingText = translations[currentLang].loading;
    mainContainer.innerHTML = `<p style="text-align:center; grid-column: span 3; color: var(--text-muted); padding: 20px;">${loadingText}</p>`;
    try {
        const langParam = (currentLang === 'en' || currentLang === 'fr') ? `&lang=${currentLang}` : '';
        const response = await fetch(`https://pixabay.com/api/?key=${API_KEY}&q=${encodeURIComponent(query)}${langParam}&image_type=photo&orientation=vertical&min_width=1080&min_height=1920&per_page=100`);
        const data = await response.json();
        if (data.hits && data.hits.length > 0) displayWallpapers(data.hits);
        else mainContainer.innerHTML = `<p style="text-align:center; grid-column: span 3; color: var(--text-muted);">${translations[currentLang].no_images}</p>`;
    } catch (error) { mainContainer.innerHTML = `<p style="text-align:center; grid-column: span 3; color: #ef4444;">${translations[currentLang].conn_failed}</p>`; }
}

function displayWallpapers(images) {
    mainContainer.className = 'grid'; mainContainer.innerHTML = '';
    images.forEach(image => {
        const card = document.createElement('div'); card.className = 'wallpaper-card';
        card.innerHTML = `<img src="${image.webformatURL}" alt="Wallpaper" loading="lazy">`;
        card.onclick = () => openImageViewer(image.largeImageURL);
        mainContainer.appendChild(card);
    });
}

function displayCategories() {
    mainContainer.className = 'categories-grid';
    mainContainer.innerHTML = '';
    categoriesData.forEach(cat => {
        const catCard = document.createElement('div');
        catCard.className = 'category-card';
        catCard.style.backgroundImage = `linear-gradient(to top, rgba(0,0,0,0.8), transparent), url("${cat.bg}")`;
        catCard.style.backgroundSize = 'cover';
        catCard.style.backgroundPosition = 'center';
        catCard.innerHTML = `<span>${translations[currentLang][cat.id]}</span>`;
        catCard.onclick = () => {
            fetchWallpapers(cat.query);
            document.querySelectorAll('.nav-item, .nav-item-center').forEach(t => t.classList.remove('active'));
            const homeTab = document.querySelector('.nav-item-center');
            if(homeTab) homeTab.classList.add('active');
        };
        mainContainer.appendChild(catCard);
    });
}

function switchTab(tabName, element) {
    document.querySelectorAll('.nav-item, .nav-item-center').forEach(tab => tab.classList.remove('active'));
    if(element) element.classList.add('active');
    
    if (tabName === 'home') fetchWallpapers('nature');
    else if (tabName === 'categories') displayCategories();
    else if (tabName === 'premium') fetchWallpapers('luxury');
    else if (tabName === 'community') fetchWallpapers('people');
    else if (tabName === 'desktop') fetchWallpapers('4k');
}

const imageViewer = document.getElementById('imageViewer');
const viewerImage = document.getElementById('viewerImage');
const applyMenu = document.getElementById('applyMenu');
const toastMsg = document.getElementById('toastMsg');

function openImageViewer(imgUrl) {
    viewerImage.src = imgUrl; imageViewer.classList.add('show');
    viewerImage.style.filter = 'none'; document.getElementById('blurSlider').value = 0;
    
    const heartIcon = document.getElementById('favHeartIcon');
    if (favoritesList.indexOf(imgUrl) > -1) {
        heartIcon.className = 'ph-fill ph-heart'; heartIcon.style.color = '#ef4444';
    } else {
        heartIcon.className = 'ph ph-heart'; heartIcon.style.color = 'var(--text-color)';
    }
    document.getElementById('saveIcon').innerHTML = '<i class="ph ph-download-simple"></i>';
    document.getElementById('saveText').innerText = translations[currentLang].save;
    document.getElementById('saveIcon').style.color = "var(--text-color)";
}

function closeImageViewer() {
    imageViewer.classList.remove('show'); imageViewer.classList.remove('fullscreen');
    document.getElementById('optionsMenu').classList.remove('show');
    toastMsg.classList.remove('show');
    toggleViewerMenu(''); 
    document.getElementById('quoteOverlay').style.display = 'none';
}

function toggleFullscreen() { 
    imageViewer.classList.toggle('fullscreen'); 
    toggleViewerMenu('');
}

function toggleViewerMenu(menuId) {
    ['applyMenu', 'quoteMenu', 'blurMenu', 'optionsMenu'].forEach(id => {
        if (id === menuId) document.getElementById(id).classList.toggle('show');
        else document.getElementById(id).classList.remove('show');
    });
}

function showToast(messageKey) {
    const text = document.getElementById('toastText');
    const icon = document.getElementById('toastIcon');
    icon.className = 'ph-bold ph-image'; icon.style.animation = 'none';
    text.innerText = translations[currentLang][messageKey] || messageKey;
    toastMsg.classList.add('show'); setTimeout(() => { toastMsg.classList.remove('show'); }, 3000);
}

// --- نظام دمج النصوص (اقتباسات/حكم) باللمس والتكبير والتصغير (Pinch-to-zoom) ---
const quoteOverlay = document.getElementById('quoteOverlay');
let isDraggingQuote = false;
let currentScale = 1;
let initialPinchDistance = null;
let initialScale = 1;

function renderQuotesList() {
    const list = document.getElementById('quotesList');
    if(!list) return;
    list.innerHTML = '';
    predefinedQuotes.forEach(q => {
        const btn = document.createElement('button');
        btn.className = 'quote-btn';
        btn.innerText = q;
        btn.onclick = () => addQuote(q);
        list.appendChild(btn);
    });
}

function addQuote(text) {
    quoteOverlay.innerText = text;
    quoteOverlay.style.display = 'block';
    quoteOverlay.style.top = '50%';
    quoteOverlay.style.left = '50%';
    currentScale = 1;
    quoteOverlay.style.transform = `translate(-50%, -50%) scale(${currentScale})`;
    toggleViewerMenu('');
}

quoteOverlay.addEventListener('touchstart', (e) => {
    if (e.touches.length === 1) {
        isDraggingQuote = true;
    } else if (e.touches.length === 2) {
        isDraggingQuote = false;
        initialPinchDistance = Math.hypot(
            e.touches[0].clientX - e.touches[1].clientX,
            e.touches[0].clientY - e.touches[1].clientY
        );
        initialScale = currentScale;
    }
});

document.addEventListener('touchend', () => {
    isDraggingQuote = false;
    initialPinchDistance = null;
});

document.addEventListener('touchmove', (e) => {
    if (quoteOverlay.style.display === 'none') return;
    if (isDraggingQuote && e.touches.length === 1) {
        const touch = e.touches[0];
        quoteOverlay.style.left = touch.clientX + 'px';
        quoteOverlay.style.top = touch.clientY + 'px';
    } else if (e.touches.length === 2 && initialPinchDistance) {
        const currentDistance = Math.hypot(
            e.touches[0].clientX - e.touches[1].clientX,
            e.touches[0].clientY - e.touches[1].clientY
        );
        currentScale = initialScale * (currentDistance / initialPinchDistance);
        currentScale = Math.max(0.4, Math.min(currentScale, 3.5)); // حدود التكبير والتصغير
        quoteOverlay.style.transform = `translate(-50%, -50%) scale(${currentScale})`;
    }
});

async function getFinalImageData() {
    if (quoteOverlay.style.display === 'none') return viewerImage.src; 
    
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    
    const img = new Image();
    img.crossOrigin = "Anonymous";
    img.src = viewerImage.src;
    await new Promise(r => img.onload = r);
    
    canvas.width = img.width;
    canvas.height = img.height;
    ctx.drawImage(img, 0, 0);
    
    const rect = viewerImage.getBoundingClientRect();
    const imageRatio = img.width / img.height;
    const containerRatio = rect.width / rect.height;
    
    let renderedWidth = rect.width, renderedHeight = rect.height;
    let offsetX = 0, offsetY = 0;

    if (imageRatio > containerRatio) {
        renderedHeight = rect.width / imageRatio;
        offsetY = (rect.height - renderedHeight) / 2;
    } else {
        renderedWidth = rect.height * imageRatio;
        offsetX = (rect.width - renderedWidth) / 2;
    }

    const scaleX = img.width / renderedWidth;
    const scaleY = img.height / renderedHeight;
    
    const qRect = quoteOverlay.getBoundingClientRect();
    
    // رسم النص على الكانفاس بنفس أبعاد الصورة الأصلية
    const centerX = (qRect.left + qRect.width/2 - rect.left - offsetX) * scaleX;
    const centerY = (qRect.top + qRect.height/2 - rect.top - offsetY) * scaleY;
    
    ctx.font = `bold ${28 * currentScale * scaleY}px 'Tajawal', sans-serif`;
    ctx.fillStyle = "white";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.shadowColor = "rgba(0,0,0,0.9)";
    ctx.shadowBlur = 12 * scaleY;
    
    ctx.fillText(quoteOverlay.innerText, centerX, centerY);
    return canvas.toDataURL('image/jpeg', 0.95);
}

async function burnTextQuote() {
    if (quoteOverlay.style.display === 'none') return;
    toggleViewerMenu('');
    
    const finalImgUrl = await getFinalImageData();
    viewerImage.src = finalImgUrl;
    quoteOverlay.style.display = 'none';
    
    document.getElementById('toastIcon').className = 'ph-bold ph-check';
    document.getElementById('toastText').innerText = currentLang === 'ar' ? 'تم تطبيق الاقتباس بنجاح' : 'Quote applied successfully';
    const toastMsg = document.getElementById('toastMsg');
    toastMsg.classList.add('show'); setTimeout(() => { toastMsg.classList.remove('show'); }, 3000);
}

// --- نظام الضباب Blur ---
function previewBlur() {
    const val = document.getElementById('blurSlider').value;
    viewerImage.style.filter = `blur(${val / 10}px)`;
}

async function applyBlur() {
    const blurVal = document.getElementById('blurSlider').value;
    if(blurVal == 0) { toggleViewerMenu(''); return; }
    
    toggleViewerMenu('');
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    const img = new Image();
    img.crossOrigin = "Anonymous";
    img.src = viewerImage.src;
    await new Promise(r => img.onload = r);
    
    canvas.width = img.width;
    canvas.height = img.height;
    const blurRadius = (blurVal / 100) * (img.width / 20);
    ctx.filter = `blur(${blurRadius}px)`;
    ctx.drawImage(img, 0, 0);
    
    viewerImage.src = canvas.toDataURL('image/jpeg', 0.95);
    viewerImage.style.filter = 'none';
    document.getElementById('blurSlider').value = 0;

    document.getElementById('toastIcon').className = 'ph-bold ph-check';
    document.getElementById('toastText').innerText = currentLang === 'ar' ? 'تم تطبيق التأثير بنجاح' : 'Blur applied successfully';
    toastMsg.classList.add('show'); setTimeout(() => { toastMsg.classList.remove('show'); }, 3000);
}

// --- التعيين النهائي للخلفية ---
async function processWallpaper(mode) {
    toggleViewerMenu('');
    
    const toast = document.getElementById('toastMsg');
    const toastText = document.getElementById('toastText');
    const toastIcon = document.getElementById('toastIcon');
    
    toastIcon.className = 'ph-bold ph-spinner'; 
    toastIcon.style.animation = 'spin 1s linear infinite';
    toastText.innerText = translations[currentLang].loading;
    toast.classList.add('show');
    
    try {
        const finalImageSrc = await getFinalImageData(); // استخدام الصورة بعد الدمج
        const response = await fetch(finalImageSrc);
        const blob = await response.blob();
        const reader = new FileReader();
        reader.readAsDataURL(blob);

        reader.onloadend = async function() {
            const base64data = reader.result.split(',')[1];
            
            let success = () => {
                toastIcon.className = 'ph-bold ph-check'; toastIcon.style.animation = 'none';
                toastText.innerText = translations[currentLang].wallpaper_success;
                setTimeout(() => toast.classList.remove('show'), 3000);
            };
            let error = (err) => {
                toastIcon.className = 'ph-bold ph-warning'; toastIcon.style.animation = 'none';
                toastText.innerText = translations[currentLang].conn_failed;
                setTimeout(() => toast.classList.remove('show'), 3000);
            };

            if (window.Capacitor && window.Capacitor.Plugins.Wallpaper) {
                try {
                    const loc = mode === 2 ? 'LOCKSCREEN' : (mode === 1 ? 'HOME' : 'BOTH');
                    await window.Capacitor.Plugins.Wallpaper.setImage({ data: base64data, location: loc });
                    success();
                } catch(e) { error(); }
                return;
            }

            if (window.plugins && window.plugins.wallpaper) {
                const wp = window.plugins.wallpaper;
                if (mode === 2) { 
                    if(wp.setLockScreenBase64) wp.setLockScreenBase64(base64data, success, error);
                    else if(wp.setImageBase64) wp.setImageBase64(base64data, 2, success, error);
                    else wp.setImage(base64data, success, error);
                } else if (mode === 1) { 
                    if(wp.setImageBase64) wp.setImageBase64(base64data, 1, success, error);
                    else wp.setImage(base64data, success, error);
                } else { 
                    if(wp.setBothScreensBase64) wp.setBothScreensBase64(base64data, success, error);
                    else if(wp.setImageBase64) wp.setImageBase64(base64data, 0, success, error);
                    else wp.setImage(base64data, success, error);
                }
            } else { error(); }
        }
    } catch (e) { 
        toastIcon.className = 'ph-bold ph-warning'; toastIcon.style.animation = 'none';
        toastText.innerText = translations[currentLang].conn_failed;
        setTimeout(() => toast.classList.remove('show'), 3000);
    }
}

async function saveWallpaper() {
    try {
        const finalImageSrc = await getFinalImageData();
        const response = await fetch(finalImageSrc);
        const blob = await response.blob();
        const reader = new FileReader();
        reader.readAsDataURL(blob);
        
        reader.onloadend = async function() {
            const base64data = reader.result;
            if (window.Capacitor && window.Capacitor.Plugins.Filesystem) {
                const { Filesystem } = window.Capacitor.Plugins;
                const fileName = 'Rawnaq_' + new Date().getTime() + '.jpg';
                await Filesystem.writeFile({ path: fileName, data: base64data, directory: 'DOCUMENTS', recursive: true });
                document.getElementById('saveIcon').innerHTML = '<i class="ph-fill ph-check" style="color: #10b981;"></i>';
                showToast(currentLang === 'ar' ? 'تم حفظ الصورة بنجاح' : (currentLang === 'fr' ? 'Image enregistrée avec succès' : 'Image saved successfully'));
            } else {
                document.getElementById('saveIcon').innerHTML = '<i class="ph-fill ph-check" style="color: #10b981;"></i>';
                showToast(currentLang === 'ar' ? 'تم حفظ الصورة' : 'Saved');
            }
        }
    } catch (error) { showToast('conn_failed'); }
}

document.addEventListener('DOMContentLoaded', () => {
    renderQuotesList(); // إنشاء أزرار الحكم تلقائياً
    
    const langSelect = document.getElementById('langSelect');
    if(langSelect) langSelect.value = currentLang;

    const savedAutoWallpaper = localStorage.getItem('autoWallpaper');
    const autoWallpaperSelect = document.getElementById('autoWallpaper');
    if(savedAutoWallpaper && autoWallpaperSelect) autoWallpaperSelect.value = savedAutoWallpaper;

    const loadingBar = document.getElementById('loading-bar');
    const splash = document.getElementById('splash-screen');
    
    if(loadingBar) {
        setTimeout(() => { loadingBar.style.width = '100%'; }, 100);
    }
    
    setTimeout(() => {
        if(splash) {
            splash.style.opacity = '0';
            setTimeout(() => {
                splash.remove();
                const homeTab = document.querySelector('.nav-item-center');
                switchTab('home', homeTab);
            }, 500);
        }
    }, 2500);
    
    checkAutoWallpaperOnLoad();
});
