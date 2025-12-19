/**
 * ============================================================================
 * SmartCampusMart
 * ============================================================================
 */

/* --- 0. STRICT DATA LIFECYCLE (F5 = Clear Data) --- */
if (performance.getEntriesByType("navigation")[0].type === "reload") {
    sessionStorage.clear();
    console.log("Page Reloaded: System Data Cleared (F5 detected).");
}

/* --- 1. MOCK DATA (Updated with your specified links) --- */
const MOCK_PRODUCTS = [
    { id: 101, title: "Calculus Textbook (8th Ed)", price: 250, category: "Books", condition: "like-new", seller: "Alex Chen", image: "https://m.media-amazon.com/images/I/91Fmlrum6xL._AC_UF1000,1000_QL80_.jpg", date: "2023-10-01", location: "PolyU Library" },
    { id: 102, title: "Sony Noise Cancelling Headphones", price: 1200, category: "Electronics", condition: "good", seller: "Sarah Wong", image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=500&q=80", date: "2023-10-05", location: "Student Canteen" },
    { id: 103, title: "Classic Desk Lamp", price: 80, category: "Furniture", condition: "fair", seller: "John Doe", image: "https://giftstomorrow.co.uk/wp-content/uploads/2020/06/navy-lamp-1.jpg", date: "2023-09-28", location: "Hung Hom Halls" },
    { id: 104, title: "PolyU Hoodie", price: 150, category: "Clothing", condition: "new", seller: "Mike Ross", image: "https://www.polyu.edu.hk/cpa/-/media/department/cpa/content/souvenir/apparel-and-accessories/zip-hoodie-red/polyu-logo-zip-hoodie_c6.jpg?bc=ffffff&h=1080&w=1600&rev=0eacc38946a041009594eb2edebeaa21&hash=1091B117A7E41795AD3913F3044C8F6D", date: "2023-10-10", location: "Core A" },
    { id: 105, title: "Fujifilm Instax Mini", price: 400, category: "Electronics", condition: "like-new", seller: "Emily Yu", image: "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?auto=format&fit=crop&w=500&q=80", date: "2023-10-12", location: "Block Z" },
    { id: 106, title: "Introduction to Psychology", price: 180, category: "Books", condition: "good", seller: "David Li", image: "https://m.media-amazon.com/images/I/61gaU+NXoVL._AC_UF1000,1000_QL80_.jpg", date: "2023-10-15", location: "Main Library" },
    { id: 107, title: "Dumbbells Pair (5kg)", price: 300, category: "Daily Supplies", condition: "good", seller: "Gym Bro", image: "https://www.lifespanfitness.com.au/cdn/shop/files/CSST-DBPL050-2_media-01.jpg?v=1752464372", date: "2023-10-18", location: "Shaw Sports Complex" },
    { id: 108, title: "Hydro Flask Water Bottle", price: 90, category: "Daily Supplies", condition: "fair", seller: "Alice Wu", image: "https://cdn11.bigcommerce.com/s-p4e2op94ll/images/stencil/1280x1280/products/2893/22434/w32bts504-32-oz-wide-flex-cap-moonshadow-straight__12620.1721844563.jpg?c=2?imbypass=on", date: "2023-10-20", location: "Student Halls" },
    { id: 109, title: "Logitech Gaming Mouse", price: 250, category: "Electronics", condition: "like-new", seller: "Gamer Pro", image: "https://images.unsplash.com/photo-1527814050087-3793815479db?auto=format&fit=crop&w=500&q=80", date: "2023-10-21", location: "VA Building" },
    { id: 110, title: "Yoga Mat (Non-slip)", price: 50, category: "Daily Supplies", condition: "new", seller: "Yoga Fan", image: "https://images.unsplash.com/photo-1601925260368-ae2f83cf8b7f?auto=format&fit=crop&w=500&q=80", date: "2023-10-22", location: "Communal Building" },
    { id: 111, title: "RGB Mechanical Keyboard", price: 450, category: "Electronics", condition: "good", seller: "Tech Geek", image: "https://m.media-amazon.com/images/I/71T1WQSxp9L.jpg", date: "2023-10-23", location: "Core C" },
    { id: 112, title: "Denim Jacket (Size L)", price: 200, category: "Clothing", condition: "good", seller: "Fashionista", image: "https://images.unsplash.com/photo-1576871337632-b9aef4c17ab9?auto=format&fit=crop&w=500&q=80", date: "2023-10-24", location: "MTR Exit D" },
    { id: 113, title: "Nike Running Shoes (US 9)", price: 350, category: "Clothing", condition: "fair", seller: "Runner", image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=500&q=80", date: "2023-10-25", location: "Lee Shau Kee Building" },
    { id: 114, title: "iPad Pro 11-inch", price: 3000, category: "Electronics", condition: "like-new", seller: "Study Buddy", image: "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?auto=format&fit=crop&w=500&q=80", date: "2023-10-26", location: "Library 4/F" },
    { id: 115, title: "Kanken Backpack (Classic)", price: 300, category: "Daily Supplies", condition: "good", seller: "Traveler", image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=500&q=80", date: "2023-10-27", location: "Homantin Halls" },
    { id: 116, title: "Casio Scientific Calculator", price: 120, category: "Electronics", condition: "good", seller: "Math Major", image: "https://www.rankholder.in/web/image/product.template/303/image_1024?unique=11410db", date: "2023-10-28", location: "Core P" },
    { id: 117, title: "Basketball", price: 100, category: "Daily Supplies", condition: "fair", seller: "Baller", image: "https://d1rkew59di14gm.cloudfront.net/storage/images/2024-09/videos/origin/8sloAYpmLP1RIupL13ioazqWDzW4epTxr7OATZqk.webp", date: "2023-10-29", location: "Courtyard" },
    { id: 118, title: "Acoustic Guitar", price: 800, category: "Daily Supplies", condition: "new", seller: "Musician", image: "https://images.unsplash.com/photo-1510915361894-db8b60106cb1?auto=format&fit=crop&w=500&q=80", date: "2023-10-30", location: "Li Ka Shing Tower" },
    { id: 119, title: "Desk Potted Plant", price: 40, category: "Furniture", condition: "good", seller: "Plant Mom", image: "https://images.unsplash.com/photo-1485955900006-10f4d324d411?auto=format&fit=crop&w=500&q=80", date: "2023-10-31", location: "Student Union" },
    { id: 120, title: "Coffee Mug (Ceramic)", price: 50, category: "Daily Supplies", condition: "new", seller: "Coffee Lover", image: "https://images.unsplash.com/photo-1514228742587-6b1558fcca3d?auto=format&fit=crop&w=500&q=80", date: "2023-11-01", location: "Innovation Tower" }
];

/* --- 2. UTILS --- */
const Utils = {
    showError: (input, msg) => {
        const parent = input.closest('.form-group');
        if (!parent) return;
        input.classList.add('error');
        const existing = parent.querySelector('.error-msg');
        if (existing) existing.remove();
        const error = document.createElement('small');
        error.className = 'error-msg';
        error.innerText = msg;
        parent.appendChild(error);
    },
    clearError: (input) => {
        const parent = input.closest('.form-group');
        if (!parent) return;
        input.classList.remove('error');
        const error = parent.querySelector('.error-msg');
        if (error) error.remove();
    },
    generateOrderId: () => {
        return 'SCM-' + Math.floor(100000 + Math.random() * 900000);
    },
    resetData: () => {
        if(confirm("Are you sure? This will delete all your products and orders.")) {
            sessionStorage.clear();
            alert("System reset. Reloading...");
            window.location.reload();
        }
    }
};

/* --- 3. THEME MANAGER --- */
class ThemeManager {
    constructor() {
        this.btn = document.getElementById('theme-toggle');
        this.theme = sessionStorage.getItem('scm_theme') || 'light';
        this.init();
    }
    init() {
        document.documentElement.setAttribute('data-theme', this.theme);
        this.updateIcon();
        if(this.btn) this.btn.addEventListener('click', () => this.toggle());
    }
    toggle() {
        this.theme = this.theme === 'light' ? 'dark' : 'light';
        sessionStorage.setItem('scm_theme', this.theme);
        document.documentElement.setAttribute('data-theme', this.theme);
        this.updateIcon();
    }
    updateIcon() {
        if(!this.btn) return;
        const icon = this.btn.querySelector('i');
        icon.className = this.theme === 'dark' ? 'fas fa-sun' : 'fas fa-moon';
    }
}

/* --- 4. AUTH MANAGER --- */
class AuthManager {
    constructor() {
        this.user = JSON.parse(sessionStorage.getItem('scm_user'));
        this.init();
    }
    init() {
        const loginForm = document.getElementById('login-form');
        if (loginForm) loginForm.addEventListener('submit', (e) => this.login(e));
        const regForm = document.getElementById('register-form');
        if (regForm) regForm.addEventListener('submit', (e) => this.register(e));
        const logoutBtn = document.getElementById('logout-btn');
        if(logoutBtn) logoutBtn.addEventListener('click', () => this.logout());
        const userLink = document.querySelector('.nav-icons a[href="login.html"], .nav-icons a[href="dashboard.html"]');
        if (userLink && this.user) userLink.href = 'dashboard.html';
    }
    login(e) {
        e.preventDefault();
        const id = document.getElementById('username');
        const name = document.getElementById('display-name');
        const pass = document.getElementById('password');
        let isValid = true;
        [id, name, pass].forEach(input => Utils.clearError(input));
        if (!id.value.trim()) { Utils.showError(id, "Student ID is required"); isValid = false; }
        if (!name.value.trim()) { Utils.showError(name, "Display name is required"); isValid = false; }
        if (!pass.value) { Utils.showError(pass, "Password is required"); isValid = false; }
        if (!isValid) return;
        const user = { id: id.value, name: name.value };
        sessionStorage.setItem('scm_user', JSON.stringify(user));
        window.location.href = 'dashboard.html';
    }
    register(e) {
        e.preventDefault();
        const id = document.getElementById('reg-username');
        const pass = document.getElementById('reg-password');
        const confirm = document.getElementById('reg-confirm-password');
        let isValid = true;
        [id, pass, confirm].forEach(input => Utils.clearError(input));
        if (!id.value.trim()) { Utils.showError(id, "ID required"); isValid = false; }
        const regex = /^(?=.*[A-Z])(?=.*\d).{8,}$/;
        if (!pass.value) { Utils.showError(pass, "Password is required"); isValid = false; }
        else if (!regex.test(pass.value)) { Utils.showError(pass, "Must contain 8+ chars, 1 Uppercase, 1 Number."); isValid = false; }
        if (!confirm.value) { Utils.showError(confirm, "Please confirm your password"); isValid = false; }
        else if (pass.value !== confirm.value) { Utils.showError(confirm, "Passwords do not match."); isValid = false; }
        if (!isValid) return;
        alert("Account Created! Please Login.");
        window.location.href = 'login.html';
    }
    logout() {
        sessionStorage.removeItem('scm_user');
        window.location.href = 'login.html';
    }
    checkGuard() {
        if (!this.user) window.location.href = 'login.html';
    }
}

/* --- 5. PRODUCT MANAGER --- */
class ProductManager {
    constructor() {
        const stored = JSON.parse(sessionStorage.getItem('scm_products')) || [];
        this.products = [...stored, ...MOCK_PRODUCTS];
        this.itemsPerPage = 6;
        this.currentPage = 1;
    }
    getConditionParams(rawCondition) {
        switch (rawCondition) {
            case 'new': return { text: '✨ Brand New', css: 'badge-new' };
            case 'like-new': return { text: '👍 Like New', css: 'badge-like-new' };
            case 'good': return { text: '👌 Good', css: 'badge-good' };
            case 'fair': return { text: '🤏 Fair', css: 'badge-fair' };
            default: return { text: '🤏 Fair', css: 'badge-fair' };
        }
    }
    renderFeatured() {
        const el = document.getElementById('featured-products-grid');
        if (!el) return;
        const sorted = [...this.products].sort((a,b) => new Date(b.date) - new Date(a.date));
        el.innerHTML = sorted.slice(0, 4).map(p => this.createCard(p)).join('');
    }
    initShop() {
        const params = new URLSearchParams(window.location.search);
        const urlCat = params.get('cat'); 
        const urlSearch = params.get('search');
        if (urlCat) {
            const cb = document.querySelector(`#category-filters input[value="${urlCat}"]`);
            if (cb) cb.checked = true;
        }
        const allCheckbox = document.querySelector('#category-filters input[value="all"]');
        const otherCheckboxes = document.querySelectorAll('#category-filters input:not([value="all"])');
        if(allCheckbox && otherCheckboxes.length > 0) {
            allCheckbox.addEventListener('change', () => {
                const isChecked = allCheckbox.checked;
                otherCheckboxes.forEach(cb => cb.checked = isChecked);
                this.triggerFilter();
            });
            otherCheckboxes.forEach(cb => {
                cb.addEventListener('change', () => {
                    const totalOthers = otherCheckboxes.length;
                    const checkedOthers = document.querySelectorAll('#category-filters input:not([value="all"]):checked').length;
                    if (checkedOthers === totalOthers) allCheckbox.checked = true;
                    else allCheckbox.checked = false;
                    this.triggerFilter();
                });
            });
        }
        const allInputs = document.querySelectorAll('.sidebar input, #sort-select');
        allInputs.forEach(input => {
            input.addEventListener('change', () => this.triggerFilter());
        });
        if(urlSearch) document.getElementById('global-search').value = urlSearch;
        if(otherCheckboxes.length > 0 && !urlCat) {
            const checkedOthers = document.querySelectorAll('#category-filters input:not([value="all"]):checked').length;
            if(checkedOthers === 0) {
                if(allCheckbox) allCheckbox.checked = true;
                otherCheckboxes.forEach(cb => cb.checked = true);
            }
        }
        this.filterProducts(urlSearch);
    }
    triggerFilter() {
        this.currentPage = 1;
        this.filterProducts(document.getElementById('global-search').value);
    }
    filterProducts(searchTerm) {
        const container = document.getElementById('products-container');
        if(!container) return;
        const catCbs = Array.from(document.querySelectorAll('#category-filters input:checked')).map(i => i.value);
        const condCbs = Array.from(document.querySelectorAll('.filter-group:nth-child(2) input:checked')).map(i => i.value);
        const min = parseFloat(document.getElementById('price-min')?.value) || 0;
        const max = parseFloat(document.getElementById('price-max')?.value) || 10000;
        const sort = document.getElementById('sort-select')?.value || 'newest';
        let result = this.products;
        if (catCbs.length === 0) result = [];
        else if (!catCbs.includes('all')) result = result.filter(p => catCbs.includes(p.category));
        if (condCbs.length > 0) result = result.filter(p => condCbs.includes(p.condition));
        result = result.filter(p => p.price >= min && p.price <= max);
        const finalSearch = searchTerm || document.getElementById('global-search')?.value || '';
        if (finalSearch) {
            result = result.filter(p => p.title.toLowerCase().includes(finalSearch.toLowerCase()));
        }
        if (sort === 'price-asc') result.sort((a,b) => a.price - b.price);
        else if (sort === 'price-desc') result.sort((a,b) => b.price - a.price);
        else result.sort((a,b) => new Date(b.date) - new Date(a.date));
        const totalPages = Math.ceil(result.length / this.itemsPerPage);
        const start = (this.currentPage - 1) * this.itemsPerPage;
        const paginated = result.slice(start, start + this.itemsPerPage);
        this.renderPagination(totalPages);
        document.getElementById('item-count').innerText = result.length;
        if (result.length === 0) {
            container.innerHTML = '<div class="empty-state">No products found matching criteria.</div>';
        } else {
            container.innerHTML = paginated.map(p => this.createCard(p)).join('');
        }
    }
    renderPagination(totalPages) {
        const paginationContainer = document.getElementById('pagination-container');
        if (!paginationContainer) return;
        if (totalPages <= 1) {
            paginationContainer.innerHTML = '';
            return;
        }
        let html = '';
        html += `<button class="page-btn ${this.currentPage === 1 ? 'disabled' : ''}" data-page="${this.currentPage - 1}"><i class="fas fa-chevron-left"></i></button>`;
        for (let i = 1; i <= totalPages; i++) {
            html += `<button class="page-btn ${this.currentPage === i ? 'active' : ''}" data-page="${i}">${i}</button>`;
        }
        html += `<button class="page-btn ${this.currentPage === totalPages ? 'disabled' : ''}" data-page="${this.currentPage + 1}"><i class="fas fa-chevron-right"></i></button>`;
        paginationContainer.innerHTML = html;
        paginationContainer.querySelectorAll('.page-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                if (btn.classList.contains('disabled')) return;
                const page = parseInt(btn.dataset.page);
                this.currentPage = page;
                this.filterProducts(document.getElementById('global-search').value);
                document.getElementById('products-container').scrollIntoView({behavior: 'smooth'});
            });
        });
    }
    createCard(p) {
        const badge = this.getConditionParams(p.condition);
        return `
            <div class="product-card">
                <a href="product-detail.html?id=${p.id}" class="product-img-wrapper">
                    <img src="${p.image}" loading="lazy">
                </a>
                <div class="product-details">
                    <small style="color:var(--text-muted)">${p.category}</small>
                    <a href="product-detail.html?id=${p.id}"><h3 style="font-size:1rem; margin:5px 0;">${p.title}</h3></a>
                    <div style="display:flex; justify-content:space-between; align-items:center; margin-top: auto;">
                        <span class="product-price">$${p.price}</span>
                        <span class="badge ${badge.css}">${badge.text}</span>
                    </div>
                </div>
            </div>
        `;
    }
    renderDetail() {
        const id = new URLSearchParams(window.location.search).get('id');
        const p = this.products.find(x => x.id == id);
        if(!p) return;
        const badge = this.getConditionParams(p.condition);
        document.getElementById('detail-title').innerText = p.title;
        document.getElementById('detail-price').innerText = `$${p.price}`;
        document.getElementById('detail-desc').innerText = p.description || "No description.";
        document.getElementById('detail-seller').innerText = p.seller;
        const badgeEl = document.getElementById('detail-condition');
        if(badgeEl) {
            badgeEl.className = `badge ${badge.css}`;
            badgeEl.innerText = badge.text;
        }
        document.getElementById('detail-img').src = p.image;
        document.getElementById('detail-location-text').innerText = p.location;
        document.getElementById('breadcrumb-title').innerText = p.title;
        
        // --- ADDED TO CART ANIMATION LOGIC ---
        const addBtn = document.getElementById('add-to-cart-btn');
        addBtn.onclick = () => {
            cartManager.add(p);
            
            // 1. Change to green and update text
            addBtn.classList.add('btn-added');
            const originalText = addBtn.innerHTML;
            addBtn.innerHTML = '<i class="fas fa-check"></i> Added to Cart';

            // 2. Revert back after 2 seconds
            setTimeout(() => {
                addBtn.classList.remove('btn-added');
                addBtn.innerHTML = originalText;
            }, 2000);
        };
    }
}

/* --- 6. SELL MANAGER --- */
class SellManager {
    constructor() {
        this.form = document.getElementById('sell-form');
        if(this.form) {
            this.form.addEventListener('submit', (e) => this.submit(e));
            document.getElementById('title').addEventListener('input', (e) => {
                const detected = this.predictCategory(e.target.value);
                if (detected) {
                    document.getElementById('category-select').value = detected;
                }
            });
            document.getElementById('image').addEventListener('change', (e) => this.preview(e));
        }
    }
    predictCategory(title) {
        const lower = title.toLowerCase();
        if (lower.match(/book|calculus|edition|manual|textbook|guide|paperback|hardcover|psychology|economics/)) return 'Books';
        if (lower.match(/macbook|ipad|sony|phone|iphone|calculator|mouse|keyboard|laptop|camera|airpods|monitor|charger|instax/)) return 'Electronics';
        if (lower.match(/shirt|hoodie|jacket|pants|shoes|sneakers|coat|jeans|t-shirt|uniform|lab coat/)) return 'Clothing';
        if (lower.match(/chair|desk|lamp|table|sofa|bed|shelf|mirror|cushion|kettle|fridge|organizer/)) return 'Furniture';
        return null;
    }
    preview(e) {
        const file = e.target.files[0];
        if(!file) return;
        const reader = new FileReader();
        reader.onload = (ev) => {
            let container = document.getElementById('img-preview-box');
            if(!container) {
                container = document.createElement('div');
                container.id = 'img-preview-box';
                container.style.marginTop = '10px';
                this.form.querySelector('.file-upload-box').after(container);
            }
            container.innerHTML = `<img src="${ev.target.result}" style="width:100px; height:100px; object-fit:cover; border-radius:8px;">`;
        }
        reader.readAsDataURL(file);
    }
    submit(e) {
        e.preventDefault();
        const user = JSON.parse(sessionStorage.getItem('scm_user'));
        const titleInput = document.getElementById('title');
        const priceInput = document.getElementById('price');
        const categoryInput = document.getElementById('category-select');
        let isValid = true;
        [titleInput, priceInput, categoryInput].forEach(i => Utils.clearError(i));
        if (!titleInput.value.trim()) { Utils.showError(titleInput, "Title is required"); isValid = false; }
        if (!priceInput.value || priceInput.value <= 0) { Utils.showError(priceInput, "Valid price required"); isValid = false; }
        if (!categoryInput.value) { Utils.showError(categoryInput, "Category required"); isValid = false; }
        if (!isValid) return;
        let finalCategory = categoryInput.value;
        if (finalCategory === 'auto') {
            const predicted = this.predictCategory(titleInput.value);
            finalCategory = predicted || 'Daily Supplies';
        }
        let imgSrc = "https://via.placeholder.com/300";
        const preview = document.querySelector('#img-preview-box img');
        if(preview) imgSrc = preview.src;
        const prod = {
            id: Date.now(),
            title: titleInput.value,
            price: parseFloat(priceInput.value),
            category: finalCategory,
            condition: document.getElementById('condition-select').value,
            location: document.getElementById('location').value,
            description: document.getElementById('description').value,
            image: imgSrc,
            seller: user ? user.name : "Anonymous",
            sellerId: user ? user.id : null, // Store User ID for consistent linking
            date: new Date().toISOString()
        };
        const list = JSON.parse(sessionStorage.getItem('scm_products')) || [];
        list.push(prod);
        sessionStorage.setItem('scm_products', JSON.stringify(list));
        alert(`Item Listed in category: ${finalCategory}`);
        window.location.href = 'dashboard.html';
    }
}

/* --- 7. CART MANAGER --- */
class CartManager {
    constructor() {
        this.cart = JSON.parse(sessionStorage.getItem('scm_cart')) || [];
        this.updateBadge();
    }
    add(p) {
        if(this.cart.find(i => i.id === p.id)) return;
        this.cart.push(p);
        this.save();
        this.updateBadge();
    }
    remove(id) {
        this.cart = this.cart.filter(i => i.id !== id);
        this.save();
        this.updateBadge();
        if(document.getElementById('cart-items-wrapper')) this.renderCart();
    }
    save() {
        sessionStorage.setItem('scm_cart', JSON.stringify(this.cart));
    }
    updateBadge() {
        document.querySelectorAll('.badge-count').forEach(b => b.innerText = this.cart.length);
    }
    renderCart() {
        const wrapper = document.getElementById('cart-items-wrapper');
        const totalEl = document.getElementById('cart-total');
        const subEl = document.getElementById('cart-subtotal');
        const btn = document.querySelector('.cart-summary-card button');
        if(this.cart.length === 0) {
            wrapper.innerHTML = '<div class="empty-state" style="padding:20px;text-align:center;">Cart is empty.</div>';
            if(totalEl) totalEl.innerText = "$0.00";
            if(subEl) subEl.innerText = "$0.00";
            if(btn) { 
                btn.disabled = true; 
                btn.style.opacity = 0.5; 
                btn.innerText = "Cart Empty"; 
                btn.onclick = null;
            }
            return;
        }
        let total = 0;
        wrapper.innerHTML = this.cart.map(i => {
            total += i.price;
            return `
                <div class="cart-item">
                    <img src="${i.image}">
                    <div style="flex:1"><h4>${i.title}</h4><p>$${i.price}</p></div>
                    <button class="icon-btn" onclick="cartManager.remove(${i.id})"><i class="fas fa-trash text-danger"></i></button>
                </div>
            `;
        }).join('');
        if(totalEl) totalEl.innerText = `$${total}`;
        if(subEl) subEl.innerText = `$${total}`;
        if(btn) { 
            btn.disabled = false; 
            btn.style.opacity = 1; 
            btn.innerText = "Proceed to Checkout"; 
            btn.onclick = () => window.location.href = 'checkout.html';
        }
    }
    clear() {
        this.cart = [];
        this.save();
        this.updateBadge();
    }
}

/* --- 8. DASHBOARD MANAGER --- */
class DashboardManager {
    constructor() {
        this.currentUser = JSON.parse(sessionStorage.getItem('scm_user'));
    }
    render() {
        if (this.currentUser) {
            document.querySelector('.user-profile-summary h3').innerText = this.currentUser.name;
            document.querySelector('.user-profile-summary p').innerText = `ID: ${this.currentUser.id}`;
            document.querySelector('.avatar-circle').innerText = this.currentUser.name.substring(0,2).toUpperCase();
        }
        const params = new URLSearchParams(window.location.search);
        if (params.get('tab') === 'orders') this.switchTab('orders');
        else if (params.get('tab') === 'settings') this.switchTab('settings');
        else this.switchTab('listings');
    }
    switchTab(tabName) {
        const contentArea = document.getElementById('dashboard-view-area');
        const title = document.getElementById('dash-title');
        const postBtn = document.getElementById('post-new-btn');
        document.querySelectorAll('.dash-nav a').forEach(a => a.classList.remove('active'));
        const activeTab = document.getElementById(`tab-${tabName}`);
        if(activeTab) activeTab.classList.add('active');
        if (postBtn) postBtn.style.display = (tabName === 'listings') ? 'inline-block' : 'none';
        if (tabName === 'listings') {
            title.innerText = "My Active Listings";
            this.renderListings(contentArea);
        } else if (tabName === 'orders') {
            title.innerText = "My Purchase History";
            this.renderOrders(contentArea);
        } else if (tabName === 'settings') {
            title.innerText = "Account Settings";
            this.renderSettings(contentArea);
        }
    }
    renderListings(container) {
        const allItems = [...JSON.parse(sessionStorage.getItem('scm_products') || '[]'), ...MOCK_PRODUCTS];
        
        // --- FIX: Filter by Seller ID (if exists) OR Seller Name (for mock data) ---
        const myItems = allItems.filter(item => {
            // Priority: Match by Student ID (sellerId)
            if (item.sellerId) {
                return item.sellerId === this.currentUser.id;
            }
            // Fallback: Match by Display Name (for mock data compatibility)
            return item.seller === this.currentUser.name;
        });

        if (myItems.length === 0) {
            container.innerHTML = '<p style="padding:20px;">You haven\'t listed anything yet.</p>';
            return;
        }
        let html = `<table class="dash-table"><thead><tr><th>Item</th><th>Price</th><th>Action</th></tr></thead><tbody>`;
        html += myItems.map(item => `
            <tr>
                <td><img src="${item.image}" style="width:40px;height:40px;display:inline;vertical-align:middle;margin-right:10px;"> ${item.title}</td>
                <td>$${item.price}</td>
                <td><button onclick="dashboardManager.delete(${item.id})" class="icon-btn text-danger"><i class="fas fa-trash"></i></button></td>
            </tr>
        `).join('');
        html += `</tbody></table>`;
        container.innerHTML = html;
    }
    renderOrders(container) {
        const allOrders = JSON.parse(sessionStorage.getItem('scm_orders')) || [];
        const myOrders = allOrders.filter(order => order.userId === this.currentUser.id);
        if (myOrders.length === 0) {
            container.innerHTML = '<p style="padding:20px;">No orders found.</p>';
            return;
        }
        let html = `<div style="display:flex; flex-direction:column; gap:15px;">`;
        html += myOrders.map(order => `
            <div style="background:var(--bg-card); padding:20px; border:1px solid var(--border-color); border-radius:8px;">
                <div style="display:flex; justify-content:space-between; margin-bottom:10px; border-bottom:1px solid #eee; padding-bottom:10px;">
                    <strong>${order.id}</strong>
                    <span style="color:var(--text-muted)">${new Date(order.date).toLocaleDateString()}</span>
                </div>
                <div style="margin-bottom:10px;">${order.items.map(i => i.title).join(', ')}</div>
                <div style="display:flex; justify-content:space-between; font-weight:bold;">
                    <span>Shipping: ${order.shipping > 0 ? '$'+order.shipping : 'Free'}</span>
                    <span style="color:var(--primary-color);">Total: $${order.total.toFixed(2)}</span>
                </div>
            </div>
        `).join('');
        html += `</div>`;
        container.innerHTML = html;
    }
    renderSettings(container) {
        container.innerHTML = `
            <div style="padding: 40px; text-align: center; background: var(--bg-card); border-radius: 8px; border: 1px solid var(--border-color);">
                <i class="fas fa-user-shield" style="font-size: 3rem; color: var(--text-muted); margin-bottom: 20px;"></i>
                <p class="mb-4">Manage your account session.</p>
                <button onclick="authManager.logout()" class="btn btn-outline text-danger" style="border-color: var(--danger-color); padding: 10px 30px;">
                    <i class="fas fa-sign-out-alt"></i> Logout
                </button>
            </div>
        `;
    }
    delete(id) {
        if (!confirm("Are you sure you want to delete this listing?")) return;
        let list = JSON.parse(sessionStorage.getItem('scm_products')) || [];
        list = list.filter(i => i.id !== id);
        sessionStorage.setItem('scm_products', JSON.stringify(list));
        this.switchTab('listings'); 
    }
}

/* --- 9. CHECKOUT LOGIC --- */
class CheckoutPage {
    constructor() {
        this.cart = JSON.parse(sessionStorage.getItem('scm_cart')) || [];
        this.shipping = 0; 
        this.init();
    }
    init() {
        const list = document.getElementById('checkout-items-list');
        if(list) list.innerHTML = this.cart.map(i => `<div class="summary-row" style="display:flex;justify-content:space-between;margin-bottom:5px;"><span>${i.title}</span><span>$${i.price}</span></div>`).join('');
        const radios = document.querySelectorAll('input[name="delivery"]');
        radios.forEach(r => r.addEventListener('change', (e) => {
            this.shipping = parseInt(e.target.value);
            this.updateTotal();
        }));
        this.updateTotal();
        document.getElementById('payment-form').addEventListener('submit', (e) => {
            e.preventDefault();
            this.placeOrder();
        });
    }
    updateTotal() {
        const subtotal = this.cart.reduce((sum, i) => sum + i.price, 0);
        const total = subtotal + this.shipping;
        document.getElementById('btn-total').innerText = total.toFixed(2);
        document.getElementById('final-total').innerText = '$' + total.toFixed(2);
        let shipLine = document.getElementById('ship-fee-line');
        if(!shipLine) {
            shipLine = document.createElement('div');
            shipLine.id = 'ship-fee-line';
            shipLine.style.display = 'flex'; 
            shipLine.style.justifyContent='space-between'; 
            shipLine.style.marginBottom='15px';
            shipLine.style.color='var(--primary-color)';
            const totalLine = document.querySelector('.summary-row.total');
            totalLine.parentNode.insertBefore(shipLine, totalLine);
        }
        shipLine.innerHTML = `<span>Shipping</span><span>${this.shipping > 0 ? '+$'+this.shipping : 'Free'}</span>`;
    }
    placeOrder() {
        const orderId = Utils.generateOrderId();
        const total = parseFloat(document.getElementById('btn-total').innerText);
        const user = JSON.parse(sessionStorage.getItem('scm_user'));
        const newOrder = {
            id: orderId,
            userId: user.id,
            date: new Date().toISOString(),
            items: this.cart,
            shipping: this.shipping,
            total: total
        };
        const orders = JSON.parse(sessionStorage.getItem('scm_orders')) || [];
        orders.unshift(newOrder); 
        sessionStorage.setItem('scm_orders', JSON.stringify(orders));
        sessionStorage.setItem('scm_last_order', orderId);
        cartManager.clear();
        window.location.href = 'success.html';
    }
}

/* --- 10. INITIALIZATION --- */
let themeManager, authManager, productManager, sellManager, cartManager, dashboardManager, checkoutPage;
document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('form').forEach(f => f.noValidate = true);
    themeManager = new ThemeManager();
    authManager = new AuthManager();
    cartManager = new CartManager();
    productManager = new ProductManager();
    sellManager = new SellManager();
    dashboardManager = new DashboardManager();
    const mbBtn = document.querySelector('.mobile-toggle');
    if(mbBtn) mbBtn.onclick = () => document.querySelector('.nav-links').classList.toggle('active');
    const searchBtn = document.querySelector('.search-bar button');
    const searchInput = document.getElementById('global-search');
    const handleSearch = () => {
        const val = searchInput.value;
        if (window.location.pathname.includes('products.html')) productManager.filterProducts(val);
        else if (val.trim()) window.location.href = `products.html?search=${encodeURIComponent(val)}`;
    };
    if(searchBtn) searchBtn.addEventListener('click', handleSearch);
    if(searchInput) {
        searchInput.addEventListener('keypress', (e) => { if (e.key === 'Enter') handleSearch(); });
        searchInput.addEventListener('input', (e) => { if (window.location.pathname.includes('products.html')) productManager.filterProducts(e.target.value); });
    }
    const path = window.location.pathname;
    if(path.includes('index.html') || path.endsWith('/')) productManager.renderFeatured();
    if(path.includes('products.html')) productManager.initShop();
    if(path.includes('product-detail.html')) productManager.renderDetail();
    if(path.includes('sell.html')) authManager.checkGuard();
    if(path.includes('cart.html')) cartManager.renderCart();
    if(path.includes('checkout.html')) { authManager.checkGuard(); checkoutPage = new CheckoutPage(); }
    if(path.includes('dashboard.html')) { authManager.checkGuard(); dashboardManager.render(); }
    if(path.includes('success.html')) {
        const oid = sessionStorage.getItem('scm_last_order') || '----';
        document.getElementById('order-id').innerText = oid;
    }
});