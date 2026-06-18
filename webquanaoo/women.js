// === 1. Price Slider ===
const priceRange = document.getElementById('priceRange');
const priceValue = document.getElementById('priceValue');
if (priceRange && priceValue) {
    priceRange.addEventListener('input', function () {
        priceValue.textContent = '$' + this.value;
        priceValue.style.color = '#ff2020';
        priceValue.style.fontWeight = 'bold';
    });
    priceValue.textContent = '$' + priceRange.value;
}

// === 2. Product Card Hover & Add to Cart ===
document.querySelectorAll('.product-card').forEach(function (card) {
    const btn = card.querySelector('.add-btn');
    if (btn) {
        btn.addEventListener('click', function (e) {
            e.preventDefault();
            showToast('✅ Đã thêm vào giỏ hàng!');
        });
    }
});