// === 1. Blog Scroll Reveal ===
const blogPosts = document.querySelectorAll('.blog-post');
if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });
    blogPosts.forEach(function (post) { observer.observe(post); });
} else {
    blogPosts.forEach(function (post) { post.classList.add('visible'); });
}

// === 2. Sidebar Search ===
const searchBtn = document.getElementById('searchBtn');
const searchInput = document.getElementById('searchInput');
if (searchBtn && searchInput) {
    searchBtn.addEventListener('click', function () {
        const q = searchInput.value.trim();
        if (q) {
            showToast('🔍 Đang tìm kiếm: "' + q + '"');
        } else {
            showToast('⚠️ Vui lòng nhập từ khóa!');
        }
    });
    searchInput.addEventListener('keypress', function (e) {
        if (e.key === 'Enter') searchBtn.click();
    });
}