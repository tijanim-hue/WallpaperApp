// مفتاح Pixabay الخاص بك
const API_KEY = '34904576-1b3b2ade155886a3ef79485ce'; 
const mainContainer = document.getElementById('mainContainer');

// دالة جلب الصور من Pixabay
async function fetchWallpapers(query = 'nature') {
    mainContainer.innerHTML = '<p style="text-align:center; grid-column: span 3; color: var(--text-muted); padding: 20px;">جاري تحميل الخلفيات...</p>';
    try {
        const response = await fetch(`https://pixabay.com/api/?key=${API_KEY}&q=${encodeURIComponent(query)}&image_type=photo&per_page=18`);
        const data = await response.json();
        
        if (data.hits && data.hits.length > 0) {
            displayWallpapers(data.hits);
        } else {
            mainContainer.innerHTML = '<p style="text-align:center; grid-column: span 3; color: var(--text-muted);">لا توجد صور مطابقة</p>';
        }
    } catch (error) {
        console.error('خطأ في جلب الصور:', error);
        mainContainer.innerHTML = '<p style="text-align:center; grid-column: span 3; color: #ef4444;">فشل الاتصال بالإنترنت</p>';
    }
}

// عرض الصور في شبكة التطبيق
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

// عرض الأقسام (Categories)
function displayCategories() {
    mainContainer.className = 'categories-grid';
    mainContainer.innerHTML = '';
    
    const categories = [
        { name: 'Nature', query: 'nature wallpaper', bg: 'https://images.pixabay.com/photo/2015/12/01/20/28/road-1072823_640.jpg' },
        { name: 'Abstract', query: 'abstract background', bg: 'https://images.pixabay.com/photo/2018/01/14/23/12/nature-3082832_640.jpg' },
        { name: 'Cars', query: 'sports car', bg: 'https://images.pixabay.com/photo/2016/11/29/05/45/astronomy-1867616_640.jpg' },
        { name: 'Technology', query: 'technology neon', bg: 'https://images.pixabay.com/photo/2016/04/04/14/12/monitor-1307227_640.jpg' }
    ];

    categories.forEach(cat => {
        const catCard = document.createElement('div');
        catCard.className = 'category-card';
        catCard.style.backgroundImage = `linear-gradient(to top, rgba(0,0,0,0.8), transparent), url('${cat.bg}')`;
        catCard.style.backgroundSize = 'cover';
        catCard.style.backgroundPosition = 'center';
        catCard.innerHTML = `<span>${cat.name}</span>`;
        
        catCard.onclick = () => {
            fetchWallpapers(cat.query);
            document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
            const homeTab = document.querySelector('.tab:nth-child(3)');
            if(homeTab) homeTab.classList.add('active');
        };
        mainContainer.appendChild(catCard);
    });
}

// تبديل التبويبات (Tabs)
function switchTab(tabName, element) {
    document.querySelectorAll('.tab').forEach(tab => tab.classList.remove('active'));
    element.classList.add('active');

    if (tabName === 'home') {
        fetchWallpapers('nature');
    } else if (tabName === 'categories') {
        displayCategories();
    } else if (tabName === 'premium') {
        fetchWallpapers('luxury gold dark');
    } else if (tabName === 'community') {
        fetchWallpapers('people portrait');
    } else if (tabName === 'desktop') {
        fetchWallpapers('4k resolution wallpaper');
    }
}

// القائمة الجانبية (Sidebar)
function toggleMenu() {
    document.getElementById('sidebar').classList.toggle('open');
    document.getElementById('overlay').classList.toggle('show');
}

// دوال فتح وإغلاق الإعدادات وعن التطبيق الجديدة
function openSettings() {
    toggleMenu();
    document.getElementById('settingsModal').style.display = 'flex';
}

function closeSettings() {
    document.getElementById('settingsModal').style.display = 'none';
}

function openAbout() {
    toggleMenu();
    document.getElementById('aboutModal').style.display = 'flex';
}

function closeAbout() {
    document.getElementById('aboutModal').style.display = 'none';
}

// عارض الصور (Image Viewer)
const imageViewer = document.getElementById('imageViewer');
const viewerImage = document.getElementById('viewerImage');

function openImageViewer(imgUrl) {
    viewerImage.src = imgUrl;
    imageViewer.classList.add('show');
}

function closeImageViewer() {
    imageViewer.classList.remove('show');
    imageViewer.classList.remove('fullscreen');
}

function toggleFullscreen() {
    imageViewer.classList.toggle('fullscreen');
}

// تطبيق الخلفية
function applyWallpaper() {
    alert('جاري تعيين الخلفية...');
    try {
        if (window.Wallpaper) {
            window.Wallpaper.setImage({ url: viewerImage.src }, (success) => {
                alert('تم تغيير خلفية الشاشة بنجاح!');
            }, (error) => {
                alert('فشل تعيين الخلفية: ' + error);
            });
        } else {
            alert('ميزة تغيير الخلفية تعمل بوضع التطبيق المثبت (APK).');
        }
    } catch (e) {
        alert('حدث خطأ أثناء التطبيق.');
    }
}

// التشغيل التلقائي عند فتح التطبيق
window.onload = () => {
    fetchWallpapers('nature');
};

