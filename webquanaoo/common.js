/* ============================================================
   common.js – Các hàm dùng chung cho toàn bộ trang web
   ============================================================ */

// 1. Hiển thị Toast notification
function showToast(message) {
    const toast = document.getElementById('toast');
    if (!toast) return;
    toast.textContent = message;
    toast.style.display = 'block';
    toast.style.opacity = '1';
    setTimeout(function () {
        toast.style.opacity = '0';
        setTimeout(function () {
            toast.style.display = 'none';
        }, 400);
    }, 3000);
}

// 2. Khởi tạo Sticky Header
function initStickyHeader() {
    const headerWrapper = document.getElementById('headerWrapper');
    if (!headerWrapper) return;
    window.addEventListener('scroll', function () {
        headerWrapper.classList.toggle('scrolled', window.scrollY > 10);
    });
}

// 3. Khởi tạo Announcement Bar (xoay vòng thông báo)
function initAnnouncement(containerId, messages) {
    const container = document.getElementById(containerId);
    if (!container) return;
    const fontNode = container.querySelector('font');
    if (!fontNode) return;
    let index = 0;
    setInterval(function () {
        container.style.opacity = '0';
        setTimeout(function () {
            index = (index + 1) % messages.length;
            fontNode.textContent = messages[index];
            container.style.opacity = '1';
        }, 500);
    }, 3500);
}

// 4. Khởi tạo nút Scroll To Top
function initScrollTop() {
    const btn = document.getElementById('scrollTopBtn');
    if (!btn) return;
    window.addEventListener('scroll', function () {
        btn.style.display = window.scrollY > 400 ? 'block' : 'none';
    });
    btn.addEventListener('click', function () {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
}

// 5. Hàm tiện ích cho validation email
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// 6. Khởi tạo chung khi DOM đã sẵn sàng
document.addEventListener('DOMContentLoaded', function () {
    initStickyHeader();
    initScrollTop();
});