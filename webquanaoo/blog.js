// ============================================================
// 1. STICKY NAVBAR – bám sát women.js
// ============================================================
const headerWrapper = document.getElementById('headerWrapper');

window.addEventListener('scroll', function () {
    if (window.scrollY > 10) {
        headerWrapper.classList.add('scrolled');
    } else {
        headerWrapper.classList.remove('scrolled');
    }
});


// ============================================================
// 2. ANNOUNCEMENT BAR – chữ xoay vòng (bám sát women.js)
// ============================================================
const announcementTd = document.getElementById('announcementTd');

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
// 3. SCROLL REVEAL – bài viết fade + slide khi cuộn tới
// ============================================================
const blogPosts = document.querySelectorAll('.blog-post');

if ('IntersectionObserver' in window) {
    const revealObserver = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                revealObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });

    blogPosts.forEach(function (post) {
        revealObserver.observe(post);
    });
} else {
    // Fallback cho trình duyệt cũ
    blogPosts.forEach(function (post) {
        post.classList.add('visible');
    });
}


// ============================================================
// 4. SUBSCRIBE FORM – Footer (bám sát women.js)
// ============================================================
const footerSubBtn = document.getElementById('footerSubBtn');

if (footerSubBtn) {
    const footerEmail = document.getElementById('footerEmail');
    const emailRegex  = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    footerSubBtn.addEventListener('click', function (e) {
        e.preventDefault();
        const val = footerEmail.value.trim();

        if (!val) {
            showToast('⚠️ Vui lòng nhập email của bạn!');
            footerEmail.style.border = '2px solid #ff2020';
            return;
        }
        if (!emailRegex.test(val)) {
            showToast('❌ Email không hợp lệ, kiểm tra lại nhé!');
            footerEmail.style.border = '2px solid #ff2020';
            return;
        }
        footerEmail.style.border = '2px solid #22c55e';
        showToast('🎉 Đăng ký thành công! Cảm ơn bạn.');
        footerEmail.value = '';
        setTimeout(function () { footerEmail.style.border = 'none'; }, 2000);
    });
}


// ============================================================
// 5. SUBSCRIBE FORM – Sidebar
// ============================================================
const sidebarSubBtn = document.getElementById('sidebarSubBtn');

if (sidebarSubBtn) {
    const sidebarEmail = document.getElementById('sidebarEmail');
    const emailRegex   = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    sidebarSubBtn.addEventListener('click', function (e) {
        e.preventDefault();
        const val = sidebarEmail.value.trim();

        if (!val) {
            showToast('⚠️ Vui lòng nhập email của bạn!');
            sidebarEmail.style.border = '2px solid #ff2020';
            return;
        }
        if (!emailRegex.test(val)) {
            showToast('❌ Email không hợp lệ, kiểm tra lại nhé!');
            sidebarEmail.style.border = '2px solid #ff2020';
            return;
        }
        sidebarEmail.style.border = '2px solid #22c55e';
        showToast('🎉 Đăng ký thành công! Cảm ơn bạn.');
        sidebarEmail.value = '';
        setTimeout(function () { sidebarEmail.style.border = 'none'; }, 2000);
    });
}


// ============================================================
// 6. SIDEBAR SEARCH
// ============================================================
const searchBtn   = document.getElementById('searchBtn');
const searchInput = document.getElementById('searchInput');

if (searchBtn) {
    searchBtn.addEventListener('click', function () {
        const q = searchInput.value.trim();
        if (q) {
            showToast('🔍 Đang tìm kiếm: "' + q + '"');
        } else {
            showToast('⚠️ Vui lòng nhập từ khóa tìm kiếm!');
        }
    });

    searchInput.addEventListener('keypress', function (e) {
        if (e.key === 'Enter') searchBtn.click();
    });
}


// ============================================================
// 7. SCROLL TO TOP BUTTON (bám sát women.js)
// ============================================================
const scrollBtn = document.getElementById('scrollTopBtn');

window.addEventListener('scroll', function () {
    if (window.scrollY > 400) {
        scrollBtn.style.display = 'block';
    } else {
        scrollBtn.style.display = 'none';
    }
});

if (scrollBtn) {
    scrollBtn.addEventListener('click', function () {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
}


// ============================================================
// HELPER: Hiển thị Toast notification (bám sát women.js)
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
