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


function initStickyHeader() {
    const headerWrapper = document.getElementById('headerWrapper');
    if (!headerWrapper) return;
    window.addEventListener('scroll', function () {
        headerWrapper.classList.toggle('scrolled', window.scrollY > 10);
    });
}


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


const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;


document.addEventListener('DOMContentLoaded', function () {
    initStickyHeader();
    initScrollTop();
});