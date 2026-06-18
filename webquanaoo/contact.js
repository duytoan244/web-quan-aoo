// === 1. Info Card Reveal ===
const infoCards = document.querySelectorAll('.info-card');
if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.15 });
    infoCards.forEach(function (card) { observer.observe(card); });
}

// === 2. Contact Form Validation ===
const sendBtn = document.getElementById('sendBtn');
if (sendBtn) {
    const nameInput = document.getElementById('nameInput');
    const emailInput = document.getElementById('emailInput');
    const subjectInput = document.getElementById('subjectInput');
    const msgInput = document.getElementById('msgInput');

    function markError(el) {
        el.style.borderColor = '#ff2020';
        el.style.background = '#fff5f5';
    }
    function markOk(el) {
        el.style.borderColor = '#22c55e';
        el.style.background = '#fff';
    }
    function clearMark(el) {
        el.style.borderColor = '';
        el.style.background = '';
    }

    sendBtn.addEventListener('click', function (e) {
        e.preventDefault();
        let valid = true;
        [nameInput, emailInput, subjectInput, msgInput].forEach(clearMark);

        if (!msgInput.value.trim()) { markError(msgInput);
            showToast('⚠️ Vui lòng nhập nội dung!');
            valid = false; }
        if (!nameInput.value.trim()) { markError(nameInput); if (valid) showToast('⚠️ Vui lòng nhập tên!');
            valid = false; }
        if (!emailInput.value.trim() || !emailRegex.test(emailInput.value.trim())) { markError(emailInput); if (valid) showToast('❌ Email không hợp lệ!');
            valid = false; }
        if (!subjectInput.value.trim()) { markError(subjectInput); if (valid) showToast('⚠️ Vui lòng nhập tiêu đề!');
            valid = false; }

        if (!valid) return;
        [nameInput, emailInput, subjectInput, msgInput].forEach(markOk);
        showToast('✅ Tin nhắn đã gửi! Chúng tôi sẽ phản hồi sớm.');
        sendBtn.disabled = true;
        sendBtn.innerHTML = '<span>Sending…</span> <i class="fa fa-spinner fa-spin" style="margin-left:8px;"></i>';
        setTimeout(function () {
            sendBtn.disabled = false;
            sendBtn.innerHTML = '<span>Send Message</span> <i class="fa fa-paper-plane" style="margin-left:8px;"></i>';
            [nameInput, emailInput, subjectInput, msgInput].forEach(el => { el.value = '';
                clearMark(el); });
        }, 2000);
    });
}