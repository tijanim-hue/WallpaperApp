container.className = 'categories-grid';
        container.innerHTML = `<h3 style="text-align:center; margin-top:50px; color:#a0a4b8;">قريباً...</h3>`;
    }
}

// دالة جلب وعرض الصور
async function fetchWallpapers(query) {
    container.innerHTML = `<p style="text-align:center; color:#fff; width:100%; grid-column: span 3;">جاري تحميل الصور...</p>`;
    const url = `https://pixabay.com/api/?key=${API_KEY}&q=${query}&image_type=photo&orientation=vertical&per_page=21`;
    
    try {
        const response = await fetch(url);
        const data = await response.json();
        container.innerHTML = '';
        
        if(data.hits.length === 0) {
            container.innerHTML = `<p style="text-align:center; color:#fff;">لا توجد صور</p>`;
            return;
        }

        data.hits.forEach(photo => {
            const card = document.createElement('div');
            card.className = 'wallpaper-card';
            card.onclick = () => openImageViewer(photo.largeImageURL);
            card.innerHTML = `<img src="${photo.largeImageURL}" alt="Wallpaper">`;
            container.appendChild(card);
        });
    } catch (error) {
        container.innerHTML = `<p style="text-align:center; color:red; grid-column: span 3;">حدث خطأ في الاتصال بالإنترنت</p>`;
    }
}

// دالة عرض الأقسام
function loadCategories() {
    const categoriesList = [
        { name: 'Islamic', color: 'linear-gradient(45deg, #1e3c72, #2a5298)' },
        { name: 'Nature', color: 'linear-gradient(45deg, #56ab2f, #a8e063)' },
        { name: 'Dark', color: 'linear-gradient(45deg, #000000, #434343)' },
        { name: 'Cars', color: 'linear-gradient(45deg, #ed213a, #93291e)' }
    ];

    categoriesList.forEach(cat => {
        const card = document.createElement('div');
        card.className = 'category-card';
        card.style.background = cat.color;
        card.onclick = () => {
            container.innerHTML = '';
            container.className = 'grid';
            fetchWallpapers(cat.name);
        };
        card.innerHTML = `<span style="color:#fff;">${cat.name}</span>`;
        container.appendChild(card);
    });
}

// دالة فتح عارض الصور
function openImageViewer(imageUrl) {
    currentImageUrl = imageUrl;
    viewerImage.src = imageUrl;
    
    // التأكد من أن وضع التكبير ملغى دائماً عند فتح صورة جديدة
    imageViewer.classList.remove('fullscreen');
    const fullscreenIcon = document.querySelector('#fullscreenBtn');
    fullscreenIcon.classList.replace('ph-corners-in', 'ph-corners-out');
    
    imageViewer.classList.add('show');
}

// دالة إغلاق عارض الصور
function closeImageViewer() {
    imageViewer.classList.remove('show');
    viewerImage.src = ''; 
}

// دالة التبديل لوضع ملء الشاشة (إخفاء الأزرار)
function toggleFullscreen() {
    imageViewer.classList.toggle('fullscreen');
    
    const fullscreenIcon = document.querySelector('#fullscreenBtn');
    if (imageViewer.classList.contains('fullscreen')) {
        fullscreenIcon.classList.replace('ph-corners-out', 'ph-corners-in');
    } else {
        fullscreenIcon.classList.replace('ph-corners-in', 'ph-corners-out');
    }
}

// دالة تعيين الخلفية
function applyWallpaper() {
    if (window.plugins && window.plugins.wallpaper) {
        alert("جاري تعيين الخلفية...");
    } else {
        alert("وظيفة تعيين الخلفية ستعمل بعد تحويل الكود إلى تطبيق أندرويد عبر Termux.");
    }
}

// تشغيل جلب الصور فوراً عند فتح التطبيق
fetchWallpapers('wallpaper');
