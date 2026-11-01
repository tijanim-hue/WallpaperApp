// المفتاح الخاص بك
const API_KEY = '34904576-1b3b2ade155886a3ef79485ce'; 
const mainContainer = document.getElementById('mainContainer');

const translations = {
    en: {
        app_title: "MyWalls", tab_category: "Category", tab_premium: "Premium", tab_home: "Home", tab_community: "Community", tab_desktop: "Desktop",
        go_pro: "Go Pro!", unlock: "Unlock everything.", favorites: "Favorites", about_app: "About the app", rate: "Rate the app", share: "Share with friends", more_apps: "More apps", use_photo: "Use your photo", new_badge: "New", settings: "Settings", display: "Display", app_lang: "App language", auto_change: "Auto Change Wallpaper", off: "Off", mins_30: "30 Mins", hour_1: "1 Hour", hours_3: "3 Hours", hours_24: "24 Hours", developed_by: "Developed by Mahammed Tijani", all_rights: "© 2026 All rights reserved", apply: "Apply", save: "Save", quote: "Quote", widgets: "Widgets", blur: "Blur", lock_screen: "Lock screen", home_screen: "Home screen", both_screens: "Home and lock screens", wallpaper_success: "Wallpaper was set successfully", loading: "Loading...", no_images: "No images found", conn_failed: "Connection failed", theme_dark: "Dark Mode", theme_light: "Light Mode", search_placeholder: "Search wallpapers...", cat_label: "Category", wall_label: "Wallpaper",
        cat_video: "Video", cat_occasions: "Occasions", cat_horoof: "Horoof", cat_nature: "Nature", cat_sahara: "Sahara", cat_gradient: "Gradient", cat_palestine: "Palestine", cat_islamic: "Islamic"
    },
    ar: {
        app_title: "خلفياتي", tab_category: "الأقسام", tab_premium: "المميزة", tab_home: "الرئيسية", tab_community: "المجتمع", tab_desktop: "سطح المكتب",
        go_pro: "النسخة الاحترافية", unlock: "افتح كل الميزات.", favorites: "المفضلة", about_app: "عن التطبيق", rate: "تقييم التطبيق", share: "شارك مع الأصدقاء", more_apps: "تطبيقات أخرى", use_photo: "استخدم صورتك", new_badge: "جديد", settings: "الإعدادات", display: "العرض", app_lang: "لغة التطبيق", auto_change: "تغيير الخلفية تلقائياً", off: "إيقاف", mins_30: "30 دقيقة", hour_1: "ساعة واحدة", hours_3: "3 ساعات", hours_24: "24 ساعة", developed_by: "تطوير محمد التجاني", all_rights: "© 2026 جميع الحقوق محفوظة", apply: "تعيين", save: "حفظ", quote: "اقتباس", widgets: "ودجت", blur: "ضباب", lock_screen: "شاشة القفل", home_screen: "الشاشة الرئيسية", both_screens: "الشاشة الرئيسية والقفل", wallpaper_success: "تم تعيين الخلفية بنجاح", loading: "جاري التحميل...", no_images: "لا توجد صور", conn_failed: "فشل الاتصال", theme_dark: "الوضع الداكن", theme_light: "الوضع الساطع", search_placeholder: "ابحث عن خلفيات...", cat_label: "قسم", wall_label: "خلفية",
        cat_video: "فيديو", cat_occasions: "مناسبات", cat_horoof: "حروف", cat_nature: "طبيعة", cat_sahara: "صحراء", cat_gradient: "تدرج", cat_palestine: "فلسطين", cat_islamic: "إسلامي"
    },
    fr: {
        app_title: "MesFonds", tab_category: "Catégorie", tab_premium: "Premium", tab_home: "Accueil", tab_community: "Communauté", tab_desktop: "Bureau",
        go_pro: "Passez Pro!", unlock: "Tout débloquer.", favorites: "Favoris", about_app: "À propos", rate: "Évaluer l'appli", share: "Partager", more_apps: "Plus d'applis", use_photo: "Utiliser votre photo", new_badge: "Nouveau", settings: "Paramètres", display: "Affichage", app_lang: "Langue de l'appli", auto_change: "Changement auto", off: "Désactivé", mins_30: "30 Mins", hour_1: "1 Heure", hours_3: "3 Heures", hours_24: "24 Heures", developed_by: "Développé par Mahammed Tijani", all_rights: "© 2026 Tous droits réservés", apply: "Appliquer", save: "Enregistrer", quote: "Citation", widgets: "Widgets", blur: "Flou", lock_screen: "Écran de verrouillage", home_screen: "Écran d'accueil", both_screens: "Les deux écrans", wallpaper_success: "Fond d'écran défini avec succès", loading: "Chargement...", no_images: "Aucune image", conn_failed: "Échec de connexion", theme_dark: "Mode sombre", theme_light: "Mode clair", search_placeholder: "Rechercher des fonds...", cat_label: "Catégorie", wall_label: "Fond d'écran",
        cat_video: "Vidéo", cat_occasions: "Occasions", cat_horoof: "Lettres", cat_nature: "Nature", cat_sahara: "Sahara", cat_gradient: "Dégradé", cat_palestine: "Palestine", cat_islamic: "Islamique"
    }
};

let currentLang = localStorage.getItem('appLang') || 'en';
let isDarkMode = localStorage.getItem('isDarkMode') === 'true';

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

function toggleTheme() {
    isDarkMode = !isDarkMode;
    localStorage.setItem('isDarkMode', isDarkMode);
    applyTheme();
}

function applyTheme() {
    const themeIcon = document.getElementById('themeIcon');
    const themeText = document.getElementById('themeText');
    if (isDarkMode) {
        document.body.classList.add('dark-theme');
        themeIcon.className = 'ph ph-sun';
        themeText.setAttribute('data-i18n', 'theme_light');
    } else {
        document.body.classList.remove('dark-theme');
        themeIcon.className = 'ph ph-moon';
        themeText.setAttribute('data-i18n', 'theme_dark');
    }
    if (translations[currentLang][themeText.getAttribute('data-i18n')]) {
        themeText.innerText = translations[currentLang][themeText.getAttribute('data-i18n')];
    }
}

function toggleSearch() {
    const searchOverlay = document.getElementById('searchOverlay');
    const searchInput = document.getElementById('searchInput');
    searchOverlay.classList.toggle('show');
    if(searchOverlay.classList.contains('show')) {
        searchInput.focus();
    } else {
        searchInput.value = '';
        document.getElementById('searchResults').innerHTML = '';
    }
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
            html += `
                <div class="search-item" onclick="executeSearch('${cat.query}')">
                    <img src="${cat.bg}" alt="${catName}">
                    <div class="search-item-info">
                        <span class="search-item-title">${catName}</span>
                        <span class="search-item-type">${translations[currentLang].cat_label}</span>
                    </div>
                </div>
            `;
        });

        try {
            const langParam = (currentLang === 'en' || currentLang === 'fr') ? `&lang=${currentLang}` : '';
            const res = await fetch(`https://pixabay.com/api/?key=${API_KEY}&q=${encodeURIComponent(query)}${langParam}&image_type=photo&orientation=vertical&per_page=10`);
            const data = await res.json();
            
            if (data.hits && data.hits.length > 0) {
                data.hits.forEach(hit => {
                    const title = hit.tags.split(',')[0].trim();
                    html += `
                        <div class="search-item" onclick="openImageViewer('${hit.largeImageURL}'); toggleSearch();">
                            <img src="${hit.previewURL}" alt="${title}">
                            <div class="search-item-info">
                                <span class="search-item-title">${title}</span>
                                <span class="search-item-type">${translations[currentLang].wall_label}</span>
                            </div>
                        </div>
                    `;
                });
            }
            
            if (!html) html = `<div style="text-align:center; color:var(--text-muted); padding:20px;">${translations[currentLang].no_images}</div>`;
            resultsContainer.innerHTML = html;
            
        } catch (e) {
            resultsContainer.innerHTML = `<div style="text-align:center; color:#ef4444; padding:20px;">${translations[currentLang].conn_failed}</div>`;
        }
    }, 500);
}

function executeSearch(query) {
    toggleSearch(); 
    fetchWallpapers(query); 
    // تحويل الأكتيف إلى الزر المركزي
    document.querySelectorAll('.nav-item, .nav-item-center').forEach(t => t.classList.remove('active'));
    const homeTab = document.querySelector('.nav-item-center');
    if(homeTab) homeTab.classList.add('active'); 
}

async function fetchWallpapers(query = 'nature') {
    const loadingText = translations[currentLang].loading;
    mainContainer.innerHTML = `<p style="text-align:center; grid-column: span 3; color: var(--text-muted); padding: 20px;">${loadingText}</p>`;
    try {
        const langParam = (currentLang === 'en' || currentLang === 'fr') ? `&lang=${currentLang}` : '';
        const response = await fetch(`https://pixabay.com/api/?key=${API_KEY}&q=${encodeURIComponent(query)}${langParam}&image_type=photo&orientation=vertical&min_width=1080&min_height=1920&per_page=18`);
        const data = await response.json();
        if (data.hits && data.hits.length > 0) {
            displayWallpapers(data.hits);
        } else {
            mainContainer.innerHTML = `<p style="text-align:center; grid-column: span 3; color: var(--text-muted);">${translations[currentLang].no_images}</p>`;
        }
    } catch (error) {
        mainContainer.innerHTML = `<p style="text-align:center; grid-column: span 3; color: #ef4444;">${translations[currentLang].conn_failed}</p>`;
    }
}

function displayWallpapers(images) {
    mainContainer.className = 'grid';
    mainContainer.innerHTML = '';
    images.forEach(image => {
        const card = document.createElement('div');
        card.className = 'wallpaper-card';
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
        catCard.style.backgroundImage = `linear-gradient(to top, rgba(0,0,0,0.8), transparent), url('${cat.bg}')`;
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
    // إزالة التحديد عن كل الأزرار في البار السفلي
    document.querySelectorAll('.nav-item, .nav-item-center').forEach(tab => tab.classList.remove('active'));
    if(element) element.classList.add('active');
    
    if (tabName === 'home') fetchWallpapers('nature');
    else if (tabName === 'categories') displayCategories();
    else if (tabName === 'premium') fetchWallpapers('luxury');
    else if (tabName === 'community') fetchWallpapers('people');
    else if (tabName === 'desktop') fetchWallpapers('4k');
}

function toggleMenu() {
    document.getElementById('sidebar').classList.toggle('open');
    document.getElementById('overlay').classList.toggle('show');
}
function openSettings() {
    toggleMenu();
    document.getElementById('settingsModal').style.display = 'flex';
}
function closeSettings() { document.getElementById('settingsModal').style.display = 'none'; }

const imageViewer = document.getElementById('imageViewer');
const viewerImage = document.getElementById('viewerImage');
const applyMenu = document.getElementById('applyMenu');
const toastMsg = document.getElementById('toastMsg');

function openImageViewer(imgUrl) {
    viewerImage.src = imgUrl;
    imageViewer.classList.add('show');
    document.getElementById('saveIcon').innerHTML = '<i class="ph ph-download-simple"></i>';
    document.getElementById('saveText').innerText = translations[currentLang].save;
    document.getElementById('saveIcon').style.color = "var(--text-color)";
}

function closeImageViewer() {
    imageViewer.classList.remove('show');
    imageViewer.classList.remove('fullscreen');
    applyMenu.classList.remove('show');
    toastMsg.classList.remove('show');
}
function toggleFullscreen() { imageViewer.classList.toggle('fullscreen'); applyMenu.classList.remove('show'); }

function toggleApplyMenu() { applyMenu.classList.toggle('show'); }

function showToast(messageKey) {
    const text = document.getElementById('toastText');
    text.innerText = translations[currentLang][messageKey] || messageKey;
    toastMsg.classList.add('show');
    setTimeout(() => { toastMsg.classList.remove('show'); }, 3000);
}

// معالجة تعيين الخلفية بدقة (قفل أو رئيسية أو كلاهما)
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
                
                // تمرير المعاملات لنظام الأندرويد بناءً على اختيار المستخدم
                if (mode === 1) { 
                    // الشاشة الرئيسية
                    if(wp.setImageBase64) wp.setImageBase64(base64data, ()=>{}, ()=>{});
                } else if (mode === 2) { 
                    // شاشة القفل (باستخدام دوال الإضافات الشائعة)
                    if(wp.setLockScreenBase64) wp.setLockScreenBase64(base64data, ()=>{}, ()=>{});
                    else if(wp.setImageBase64) wp.setImageBase64(base64data, 2, ()=>{}, ()=>{});
                } else if (mode === 0) { 
                    // كلتا الشاشتين
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
};
