// =====================================
// SLIDER HGT STORE
// =====================================

document.addEventListener("DOMContentLoaded", function () {

    const slides = document.querySelectorAll(".slide");
    const nextBtn = document.querySelector(".next");
    const prevBtn = document.querySelector(".prev");

    // nếu trang không có slider thì không chạy
    if (slides.length === 0) return;

    let index = 0;


    // =====================================
    // HIỂN THỊ SLIDE
    // =====================================

    function showSlide(i) {

        slides.forEach(function (slide) {
            slide.classList.remove("active");
        });

        slides[i].classList.add("active");

    }


    // =====================================
    // NÚT NEXT
    // =====================================

    if (nextBtn) {

        nextBtn.addEventListener("click", function () {

            index++;

            if (index >= slides.length) {
                index = 0;
            }

            showSlide(index);

        });

    }


    // =====================================
    // NÚT PREV
    // =====================================

    if (prevBtn) {

        prevBtn.addEventListener("click", function () {

            index--;

            if (index < 0) {
                index = slides.length - 1;
            }

            showSlide(index);

        });

    }


    // =====================================
    // AUTO SLIDE
    // =====================================

    setInterval(function () {

        index++;

        if (index >= slides.length) {
            index = 0;
        }

        showSlide(index);

    }, 3000);


});












// Đợi cho nội dung trang web tải xong mới chạy code
document.addEventListener("DOMContentLoaded", function () {
    const openBtn = document.getElementById('open-search');
    const searchOverlay = document.getElementById('search-overlay');
    const closeSearch = document.getElementById('close-search');

    // Kiểm tra xem các phần tử có tồn tại không trước khi gán sự kiện
    if (openBtn && searchOverlay && closeSearch) {
        // Mở thanh tìm kiếm
        openBtn.addEventListener('click', () => {
            searchOverlay.classList.add('active');
        });

        // Đóng thanh tìm kiếm bằng nút X
        closeSearch.addEventListener('click', () => {
            searchOverlay.classList.remove('active');
        });

        // Đóng nếu người dùng nhấn phím Esc
        document.addEventListener('keydown', (e) => {
            if (e.key === "Escape") {
                searchOverlay.classList.remove('active');
            }
        });
    }
});














