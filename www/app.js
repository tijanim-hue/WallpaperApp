const API_KEY = '34904576-1b3b2ade155886a3ef79485ce'; 
const mainContainer = document.getElementById('mainContainer');

const translations = {
    en: {
        app_title: "MyWalls", tab_category: "Category", tab_premium: "Premium", tab_home: "Home", tab_community: "Community", tab_desktop: "Desktop",
        go_pro: "Go Pro!", unlock: "Unlock everything.", favorites: "Favorites", about_app: "About the app", rate: "Rate the app", share: "Share with friends", more_apps: "More apps", use_photo: "Use your photo", new_badge: "New", settings: "Settings", display: "Display", app_lang: "App language", auto_change: "Auto Change Wallpaper", off: "Off", mins_15: "15 Mins", mins_30: "30 Mins", hour_1: "1 Hour", hours_3: "3 Hours", hours_12: "12 Hours", hours_24: "24 Hours", developed_by: "Developed by Mahammed Tijani", all_rights: "© 2026 All rights reserved", apply: "Apply", save: "Save", quote: "Quote", widgets: "Widgets", blur: "Blur", lock_screen: "Lock screen", home_screen: "Home screen", both_screens: "Home and lock screens", wallpaper_success: "Wallpaper was set successfully", loading: "Loading...", no_images: "No images found", conn_failed: "Connection failed", theme_dark: "Dark Mode", theme_light: "Light Mode", search_placeholder: "Search wallpapers...", cat_label: "Category", wall_label: "Wallpaper",
        cat_video: "Video", cat_occasions: "Occasions", cat_horoof: "Horoof", cat_nature: "Nature", cat_sahara: "Sahara", cat_gradient: "Gradient", cat_palestine: "Palestine", cat_islamic: "Islamic",
        add_fav: "Add to favourites", turn_off_snapping: "Turn off snapping", fav_added: "Added to favorites", fav_removed: "Removed from favorites", fav_empty: "No favorites yet",
        about_title: "Welcome to MyWalls", about_desc: "MyWalls is your ultimate destination for high-quality, stunning wallpapers. Carefully crafted to bring beauty to your screen every single day.", share_text: "Check out this amazing wallpaper app I found! Get stunning 4K wallpapers every day.", auto_source: "Wallpaper Source", source_random: "Random (Home)", source_fav: "My Favorites"
    },
    ar: {
        app_title: "خلفياتي", tab_category: "الأقسام", tab_premium: "المميزة", tab_home: "الرئيسية", tab_community: "المجتمع", tab_desktop: "سطح المكتب",
        go_pro: "النسخة الاحترافية", unlock: "افتح كل الميزات.", favorites: "المفضلة", about_app: "عن التطبيق", rate: "تقييم التطبيق", share: "شارك مع الأصدقاء", more_apps: "تطبيقات أخرى", use_photo: "استخدم صورتك", new_badge: "جديد", settings: "الإعدادات", display: "العرض", app_lang: "لغة التطبيق", auto_change: "تغيير الخلفية تلقائياً", off: "إيقاف", mins_15: "15 دقيقة", mins_30: "30 دقيقة", hour_1: "ساعة واحدة", hours_3: "3 ساعات", hours_12: "12 ساعة", hours_24: "24 ساعة", developed_by: "تطوير محمد التجاني", all_rights: "© 2026 جميع الحقوق محفوظة", apply: "تعيين", save: "حفظ", quote: "اقتباس", widgets: "ودجت", blur: "ضباب", lock_screen: "شاشة القفل", home_screen: "الشاشة الرئيسية", both_screens: "الشاشة الرئيسية والقفل", wallpaper_success: "تم تعيين الخلفية بنجاح", loading: "جاري التحميل...", no_images: "لا توجد صور", conn_failed: "فشل الاتصال", theme_dark: "الوضع الداكن", theme_light: "الوضع الساطع", search_placeholder: "ابحث عن خلفيات...", cat_label: "قسم", wall_label: "خلفية",
        cat_video: "فيديو", cat_occasions: "مناسبات", cat_horoof: "حروف", cat_nature: "طبيعة", cat_sahara: "صحراء", cat_gradient: "تدرج", cat_palestine: "فلسطين", cat_islamic: "إسلامي",
        add_fav: "إضافة للمفضلة", turn_off_snapping: "إيقاف الجذب", fav_added: "تمت الإضافة للمفضلة", fav_removed: "تمت الإزالة من المفضلة", fav_empty: "لا توجد مفضلات بعد",
        about_title: "مرحباً بك في خلفياتي", about_desc: "تطبيق خلفياتي هو وجهتك الأولى للحصول على صور عالية الجودة. تم تصميمه بعناية ليضفي لمسة من الجمال على شاشتك كل يوم.", share_text: "اكتشف هذا التطبيق الرائع للخلفيات! احصل على أروع صور 4K لشاشتك يومياً.", auto_source: "مصدر الخلفيات", source_random: "عشوائي (الرئيسية)", source_fav: "مفضلاتي"
    },
    fr: {
        app_title: "MesFonds", tab_category: "Catégorie", tab_premium: "Premium", tab_home: "Accueil", tab_community: "Communauté", tab_desktop: "Bureau",
        go_pro: "Passez Pro!", unlock: "Tout débloquer.", favorites: "Favoris", about_app: "À propos", rate: "Évaluer l'appli", share: "Partager", more_apps: "Plus d'applis", use_photo: "Utiliser votre photo", new_badge: "Nouveau", settings: "Paramètres", display: "Affichage", app_lang: "Langue de l'appli", auto_change: "Changement auto", off: "Désactivé", mins_15: "15 Mins", mins_30: "30 Mins", hour_1: "1 Heure", hours_3: "3 Heures", hours_12: "12 Heures", hours_24: "24 Heures", developed_by: "Développé par Mahammed Tijani", all_rights: "© 2026 Tous droits réservés", apply: "Appliquer", save: "Enregistrer", quote: "Citation", widgets: "Widgets", blur: "Flou", lock_screen: "Écran de verrouillage", home_screen: "Écran d'accueil", both_screens: "Les deux écrans", wallpaper_success: "Fond d'écran défini avec succès", loading: "Chargement...", no_images: "Aucune image", conn_failed: "Échec de connexion", theme_dark: "Mode sombre", theme_light: "Mode clair", search_placeholder: "Rechercher des fonds...", cat_label: "Catégorie", wall_label: "Fond d'écran",
        cat_video: "Vidéo", cat_occasions: "Occasions", cat_horoof: "Lettres", cat_nature: "Nature", cat_sahara: "Sahara", cat_gradient: "Dégradé", cat_palestine: "Palestine", cat_islamic: "Islamique",
        add_fav: "Ajouter aux favoris", turn_off_snapping: "Désactiver l'accrochage", fav_added: "Ajouté aux favoris", fav_removed: "Retiré des favoris", fav_empty: "Aucun favori pour le moment",
        about_title: "Bienvenue sur MesFonds", about_desc: "Votre destination ultime pour des fonds d'écran de haute qualité. Conçu pour apporter de la beauté à votre écran chaque jour.", share_text: "Découvrez cette application géniale de fonds d'écran ! Obtenez des images 4K époustouflantes tous les jours.", auto_source: "Source des fonds", source_random: "Aléatoire (Accueil)", source_fav: "Mes Favoris"
    }
};

let currentLang = localStorage.getItem('appLang') || 'en';
let isDarkMode = localStorage.getItem('isDarkMode') === 'true';
let favoritesList = JSON.parse(localStorage.getItem('myFavorites')) || [];

const categoriesData = [
    { id: 'cat_video', query: 'video background animation', bg: 'https://images.pixabay.com/photo/2020/04/24/09/24/arabic-5085994_640.jpg' },
    { id: 'cat_occasions', query: 'ramadan eid islamic', bg: 'https://images.pixabay.com/photo/2020/04/23/16/27/ramadan-5083161_640.jpg' },
    { id: 'cat_horoof', query: 'arabic calligraphy letter', bg: 'https://images.pixabay.com/photo/2021/02/10/11/49/arabic-6001859_640.jpg' },
    { id: 'cat_nature', query: 'nature mountains landscape', bg: 'https://images.pixabay.com/photo/2016/11/22/19/25/adult-1850177_640.jpg' },
    { id: 'cat_sahara', query: 'desert sand dunes', bg: 'https://images.pixabay.com/photo/2017/01/18/16/46/desert-1990342_640.jpg' },
    { id: 'cat_gradient', query: 'gradient background blur', bg: 'https://images.pixabay.com/photo/2016/12/28/08/15/texture-1935661_640.jpg' },
    { id: 'cat_palestine', query: 'palestine jerusalem dome of rock', bg: 'https://images.pixabay.com/photo/2018/01/29/21/04/dome-of-the-rock-3117367_640.jpg' },
    { id: 'cat_islamic', query: 'islamic muslim prayer', bg: 'https://images.pixabay.com/photo/2021/11/25/19/50/ramadan-6824490_640.jpg' }
];

function changeLanguage(lang) {
    currentLang = lang;
    localStorage.setItem('appLang', lang);
    document.documentElement.dir = (lang === 'ar') ? 'rtl' : 'ltr';
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (translations[lang][key]) el.innerText = translations[lang][key];
    });
    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
        const key = el.getAttribute('data-i18n-placeholder');
        if (translations[lang][key]) el.setAttribute('placeholder', translations[lang][key]);
    });
}

function toggleTheme() { isDarkMode = !isDarkMode; localStorage.setItem('isDarkMode', isDarkMode); applyTheme(); }

function applyTheme() {
    const themeIcon = document.getElementById('themeIcon');
    const themeText = document.getElementById('themeText');
    if (isDarkMode) {
        document.body.classList.add('dark-theme');
        themeIcon.className = 'ph ph-sun'; themeText.setAttribute('data-i18n', 'theme_light');
    } else {
        document.body.classList.remove('dark-theme');
        themeIcon.className = 'ph ph-moon'; themeText.setAttribute('data-i18n', 'theme_dark');
    }
    if (translations[currentLang][themeText.getAttribute('data-i18n')]) {
        themeText.innerText = translations[currentLang][themeText.getAttribute('data-i18n')];
    }
}

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
            const res = await fetch(`https://pixabay.com/api/?key=${API_KEY}&q=${encodeURIComponent(query)}${langParam}&image_type=photo&orientation=vertical&per_page=10`);
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

// ---------------- معالجة الميزات الجديدة ---------------- //

// استخدام صورتك
function handlePhotoUpload(event) {
    const file = event.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function(e) { openImageViewer(e.target.result); }
        reader.readAsDataURL(file);
    }
}

// نظام المفضلة
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

// مشاركة التطبيق بأسلوب احترافي
async function shareApp() {
    toggleMenu();
    if (navigator.share) {
        try {
            await navigator.share({
                title: translations[currentLang].app_title,
                text: translations[currentLang].share_text,
                url: 'https://mahammedtijani.com' 
            });
        } catch (err) {}
    } else {
        showToast('conn_failed');
    }
}

// نوافذ (عن التطبيق / الإعدادات)
function openAbout() { toggleMenu(); document.getElementById('aboutModal').classList.add('show'); }
function closeAbout() { document.getElementById('aboutModal').classList.remove('show'); }

function toggleMenu() { document.getElementById('sidebar').classList.toggle('open'); document.getElementById('overlay').classList.toggle('show'); }
function openSettings() { toggleMenu(); document.getElementById('settingsModal').classList.add('show'); }
function closeSettings() { document.getElementById('settingsModal').classList.remove('show'); }

// نظام التغيير التلقائي الذكي
let autoChangeInterval = null;
function setAutoWallpaper(minutes) {
    localStorage.setItem('autoWallpaper', minutes);
    const sourceContainer = document.getElementById('autoSourceContainer');
    
    if (minutes !== 'off') {
        sourceContainer.style.display = 'flex';
        const ms = parseInt(minutes) * 60 * 1000;
        if (autoChangeInterval) clearInterval(autoChangeInterval);
        autoChangeInterval = setInterval(changeWallpaperAuto, ms);
    } else {
        sourceContainer.style.display = 'none';
        if (autoChangeInterval) clearInterval(autoChangeInterval);
    }
}

function setAutoSource(val) { localStorage.setItem('autoSource', val); }

async function changeWallpaperAuto() {
    if (window.plugins && window.plugins.wallpaper) {
        const source = localStorage.getItem('autoSource') || 'random';
        let imgUrl = '';
        
        if (source === 'favorites' && favoritesList.length > 0) {
            imgUrl = favoritesList[Math.floor(Math.random() * favoritesList.length)];
        } else {
            try {
                const res = await fetch(`https://pixabay.com/api/?key=${API_KEY}&q=nature&image_type=photo&orientation=vertical`);
                const data = await res.json();
                if(data.hits && data.hits.length > 0) {
                    imgUrl = data.hits[Math.floor(Math.random() * data.hits.length)].largeImageURL;
                }
            } catch(e) {}
        }

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

// ---------------- الجلب والعرض ---------------- //
async function fetchWallpapers(query = 'nature') {
    const loadingText = translations[currentLang].loading;
    mainContainer.innerHTML = `<p style="text-align:center; grid-column: span 3; color: var(--text-muted); padding: 20px;">${loadingText}</p>`;
    try {
        const langParam = (currentLang === 'en' || currentLang === 'fr') ? `&lang=${currentLang}` : '';
        const response = await fetch(`https://pixabay.com/api/?key=${API_KEY}&q=${encodeURIComponent(query)}${langParam}&image_type=photo&orientation=vertical&min_width=1080&min_height=1920&per_page=18`);
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
    mainContainer.className = 'categories-grid'; mainContainer.innerHTML = '';
    categoriesData.forEach(cat => {
        const catCard = document.createElement('div'); catCard.className = 'category-card';
        catCard.style.backgroundImage = `linear-gradient(to top, rgba(0,0,0,0.8), transparent), url('${cat.bg}')`;
        catCard.style.backgroundSize = 'cover'; catCard.style.backgroundPosition = 'center';
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
    applyMenu.classList.remove('show'); document.getElementById('optionsMenu').classList.remove('show'); toastMsg.classList.remove('show');
}
function toggleFullscreen() { imageViewer.classList.toggle('fullscreen'); applyMenu.classList.remove('show'); document.getElementById('optionsMenu').classList.remove('show'); }
function toggleApplyMenu() { applyMenu.classList.toggle('show'); document.getElementById('optionsMenu').classList.remove('show'); }

function showToast(messageKey) {
    const text = document.getElementById('toastText');
    text.innerText = translations[currentLang][messageKey] || messageKey;
    toastMsg.classList.add('show'); setTimeout(() => { toastMsg.classList.remove('show'); }, 3000);
}

// التعيين الدقيق للشاشات عبر استخدام Flags أندرويد الصريحة (1, 2, 0)
async function processWallpaper(mode) {
    applyMenu.classList.remove('show');
    showToast('wallpaper_success'); 
    try {
        const response = await fetch(viewerImage.src);
        const blob = await response.blob();
        const reader = new FileReader();
        reader.readAsDataURL(blob);

        reader.onloadend = function() {
            const base64data = reader.result.split(',')[1];
            if (window.plugins && window.plugins.wallpaper) {
                const wp = window.plugins.wallpaper;
                
                // هذه الأوامر ترسل القيم (1 الرئيسية، 2 القفل، 0 كلاهما) للإضافة
                // إذا لم تستجب الشاشة للقفل فهذا قيد من الإضافة الأصلية، وتحتاج نسخة متقدمة لاحقاً
                if (mode === 2) { 
                    if(wp.setLockScreenBase64) wp.setLockScreenBase64(base64data, ()=>{}, ()=>{});
                    else if(wp.setImageBase64) wp.setImageBase64(base64data, 2, ()=>{}, ()=>{}); 
                } else if (mode === 1) { 
                    if(wp.setImageBase64) wp.setImageBase64(base64data, 1, ()=>{}, ()=>{});
                } else { 
                    if(wp.setBothScreensBase64) wp.setBothScreensBase64(base64data, ()=>{}, ()=>{});
                    else if(wp.setImageBase64) wp.setImageBase64(base64data, 0, ()=>{}, ()=>{});
                }
            }
        }
    } catch (e) { showToast('conn_failed'); }
}

async function saveWallpaper() {
    try {
        const response = await fetch(viewerImage.src);
        const blob = await response.blob();
        const reader = new FileReader();
        reader.readAsDataURL(blob);
        
        reader.onloadend = async function() {
            const base64data = reader.result;
            if (window.Capacitor && window.Capacitor.Plugins.Filesystem) {
                const { Filesystem } = window.Capacitor.Plugins;
                const fileName = 'MyWalls_' + new Date().getTime() + '.jpg';
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

window.onload = () => { 
    changeLanguage(currentLang);
    applyTheme(); 
    document.getElementById('langSelect').value = currentLang;
    fetchWallpapers('nature'); 
    
    const savedAuto = localStorage.getItem('autoWallpaper') || 'off';
    document.getElementById('autoWallpaper').value = savedAuto;
    const savedSource = localStorage.getItem('autoSource') || 'random';
    document.getElementById('autoSource').value = savedSource;
    setAutoWallpaper(savedAuto);
};
