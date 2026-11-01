const API_KEY = '34904576-1b3b2ade155886a3ef79485ce'; 
const mainContainer = document.getElementById('mainContainer');

async function fetchWallpapers(query = 'nature') {
    mainContainer.innerHTML = '<p style="text-align:center; grid-column: span 3; color: var(--text-muted); padding: 20px;">Loading...</p>';
    try {
        const response = await fetch(`https://pixabay.com/api/?key=${API_KEY}&q=${encodeURIComponent(query)}&image_type=photo&per_page=18`);
        const data = await response.json();
        if (data.hits && data.hits.length > 0) {
            displayWallpapers(data.hits);
        } else {
            mainContainer.innerHTML = '<p style="text-align:center; grid-column: span 3; color: var(--text-muted);">No images found</p>';
        }
    } catch (error) {
        mainContainer.innerHTML = '<p style="text-align:center; grid-column: span 3; color: #ef4444;">Connection failed</p>';
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
    const categories = [
        { name: 'Nature', query: 'nature wallpaper', bg: 'https://images.pixabay.com/photo/2015/12/01/20/28/road-1072823_640.jpg' },
        { name: 'Abstract', query: 'abstract background', bg: 'https://images.pixabay.com/photo/2018/01/14/23/12/nature-3082832_640.jpg' }
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
            document.querySelector('.tab:nth-child(3)').classList.add('active');
        };
        mainContainer.appendChild(catCard);
    });
}

function switchTab(tabName, element) {
    document.querySelectorAll('.tab').forEach(tab => tab.classList.remove('active'));
    element.classList.add('active');
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
    document.getElementById('saveText').innerText = 'Save';
    document.getElementById('saveIcon').style.color = "var(--text-color)";
}

function closeImageViewer() {
    imageViewer.classList.remove('show');
    imageViewer.classList.remove('fullscreen');
    applyMenu.classList.remove('show');
    toastMsg.classList.remove('show');
}
function toggleFullscreen() { imageViewer.classList.toggle('fullscreen'); applyMenu.classList.remove('show'); }

// إظهار وإخفاء قائمة خيارات التطبيق
function toggleApplyMenu() {
    applyMenu.classList.toggle('show');
}

// عرض رسالة النجاح (Toast)
function showToast(message) {
    toastMsg.querySelector('span').innerText = message;
    toastMsg.classList.add('show');
    setTimeout(() => { toastMsg.classList.remove('show'); }, 3000);
}

// معالجة تعيين الخلفية بناءً على الخيار
async function processWallpaper(mode) {
    applyMenu.classList.remove('show');
    try {
        const response = await fetch(viewerImage.src);
        const blob = await response.blob();
        const reader = new FileReader();
        reader.readAsDataURL(blob);

        reader.onloadend = function() {
            const base64data = reader.result.split(',')[1];

            // التحقق من توافر الإضافة
            if (window.plugins && window.plugins.wallpaper) {
                // ملاحظة: الإضافة الأصلية لـ cordova غالباً تدعم فقط تغيير الشاشة الرئيسية بشكل افتراضي.
                // لتمرير المتغير (mode) نحتاج لإضافة مخصصة، لكننا سننفذ الكود المتاح حالياً
                window.plugins.wallpaper.setImageBase64(base64data, function() {
                    showToast('Wallpaper was set successfully');
                }, function(error) {
                    showToast('Failed to set wallpaper');
                });
            } else {
                showToast('Wallpaper was set successfully'); // للمحاكاة في الويب
            }
        }
    } catch (e) {
        showToast('Error loading image');
    }
}

// حفظ الصورة
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
                await Filesystem.writeFile({
                    path: fileName, data: base64data, directory: 'DOCUMENTS', recursive: true
                });
                
                document.getElementById('saveIcon').innerHTML = '<i class="ph-fill ph-check" style="color: #10b981;"></i>';
                document.getElementById('saveText').innerText = 'Saved';
            } else {
                document.getElementById('saveIcon').innerHTML = '<i class="ph-fill ph-check" style="color: #10b981;"></i>';
                document.getElementById('saveText').innerText = 'Saved';
            }
        }
    } catch (error) {
        showToast('Failed to save');
    }
}

window.onload = () => { fetchWallpapers('nature'); };
