// ============================================================
// 1. PRICE RANGE SLIDER - Cập nhật giá trị realtime
// ============================================================
const priceRange = document.getElementById('priceRange');
const priceValue = document.getElementById('priceValue');

if (priceRange && priceValue) {
    priceRange.addEventListener('input', function () {
        priceValue.textContent = '$' + this.value;
        priceValue.style.color = '#ff3366';
        priceValue.style.fontWeight = 'bold';
    });
    priceValue.textContent = '$' + priceRange.value;
}


// ============================================================
// 2. STICKY NAVBAR - Header dính trên cùng khi scroll xuống
// ============================================================
const headerTable = document.querySelector('table.centered-table');

window.addEventListener('scroll', function () {
    if (window.scrollY > 80) {
        headerTable.style.position = 'sticky';
        headerTable.style.top = '0';
        headerTable.style.zIndex = '1000';
        headerTable.style.background = '#fff';
        headerTable.style.boxShadow = '0 2px 20px rgba(0,0,0,0.12)';
        headerTable.style.transition = 'box-shadow 0.3s';
    } else {
        headerTable.style.boxShadow = 'none';
        headerTable.style.background = 'transparent';
    }
});


// ============================================================
// 3. PRODUCT CARD HOVER - Hiệu ứng zoom + nút "Add to Cart"
// ============================================================
const productLinks = document.querySelectorAll('td[align="center"] > div > a');

productLinks.forEach(function (card) {
    const img = card.querySelector('img');

    // Bọc ảnh trong wrapper để overflow:hidden hoạt động
    const wrapper = document.createElement('div');
    wrapper.style.cssText = 'position:relative; overflow:hidden; display:inline-block; width:70%;';
    img.style.width = '100%';
    img.style.height = '400px';
    img.style.objectFit = 'cover';
    img.style.transition = 'transform 0.4s ease';
    img.parentNode.insertBefore(wrapper, img);
    wrapper.appendChild(img);

    // Nút Add to Cart overlay
    const btn = document.createElement('div');
    btn.textContent = '🛒 Add to Cart';
    btn.style.cssText = `
        position: absolute;
        bottom: -50px;
        left: 0; right: 0;
        background: rgba(0,0,0,0.75);
        color: #fff;
        text-align: center;
        padding: 12px;
        font-size: 14px;
        font-weight: bold;
        letter-spacing: 1px;
        transition: bottom 0.35s ease;
        cursor: pointer;
    `;
    wrapper.appendChild(btn);

    card.addEventListener('mouseenter', function () {
        img.style.transform = 'scale(1.07)';
        btn.style.bottom = '0';
    });
    card.addEventListener('mouseleave', function () {
        img.style.transform = 'scale(1)';
        btn.style.bottom = '-50px';
    });

    btn.addEventListener('click', function (e) {
        e.preventDefault();
        showToast('✅ Đã thêm vào giỏ hàng!');
    });
});


// ============================================================
// 4. ANNOUNCEMENT BAR - Chữ xoay vòng tự động
// ============================================================
const announcementTd = document.querySelector('table[bgcolor="black"] td');
if (announcementTd) {
    const messages = [
        '🔥 Sale Up To 50% Biggest Discounts. Hurry! Limited Period Offer',
        '🚚 Free Shipping on Orders Over $100',
        '🎁 New Arrivals Every Week — Check Women Collection Now',
        '💳 Buy 2 Get 1 Free on Selected Items'
    ];
    let index = 0;

    function rotateMessage() {
        announcementTd.style.opacity = '0';
        announcementTd.style.transition = 'opacity 0.5s';
        setTimeout(function () {
            index = (index + 1) % messages.length;
            const fontNode = announcementTd.querySelector('font');
            if (fontNode) fontNode.textContent = messages[index];
            announcementTd.style.opacity = '1';
        }, 500);
    }
    setInterval(rotateMessage, 3500);
}


// ============================================================
// 5. SUBSCRIBE FORM - Validation + Toast thông báo
// ============================================================
const subscribeForm = document.querySelector('.subscribe-form');
if (subscribeForm) {
    const emailInput = subscribeForm.querySelector('input[type="email"]');
    const submitBtn  = subscribeForm.querySelector('button');

    submitBtn.addEventListener('click', function (e) {
        e.preventDefault();
        const val = emailInput.value.trim();
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!val) {
            showToast('⚠️ Vui lòng nhập email của bạn!');
            emailInput.style.border = '2px solid #ff2020';
            return;
        }
        if (!emailRegex.test(val)) {
            showToast('❌ Email không hợp lệ, kiểm tra lại nhé!');
            emailInput.style.border = '2px solid #ff2020';
            return;
        }
        emailInput.style.border = '2px solid #22c55e';
        showToast('🎉 Đăng ký thành công! Cảm ơn bạn.');
        emailInput.value = '';
        setTimeout(() => emailInput.style.border = 'none', 2000);
    });
}


// ============================================================
// 6. SCROLL TO TOP BUTTON
// ============================================================
const scrollBtn = document.getElementById('scrollTopBtn');

window.addEventListener('scroll', function () {
    if (window.scrollY > 400) {
        scrollBtn.style.display = 'block';
    } else {
        scrollBtn.style.display = 'none';
    }
});

scrollBtn.addEventListener('click', function () {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});


// ============================================================
// HELPER: Hiển thị Toast notification
// ============================================================
function showToast(message) {
    const toast = document.getElementById('toast');
    toast.textContent = message;
    toast.style.display = 'block';
    toast.style.opacity = '1';
    setTimeout(function () {
        toast.style.opacity = '0';
        setTimeout(function () { toast.style.display = 'none'; }, 400);
    }, 3000);
}