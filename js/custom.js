(function ($) {

    "use strict";

    // PRELOADER
    $(window).on('load', function () {
        $('.preloader').fadeOut(1000);
    });

    // SMOOTH SCROLL
    $('.custom-link').on('click', function () {

        let el = $(this).attr('href');
        let elWrapped = $(el);
        let headerHeight = $('.navbar').height() + 10;

        $('html, body').animate({
            scrollTop: elWrapped.offset().top - headerHeight
        }, 300);

        return false;
    });

})(window.jQuery);


// SEARCH FUNCTION
function searchImages() {

    let input = document
        .getElementById("searchInput")
        .value
        .toLowerCase()
        .trim();

    let cards = document.querySelectorAll(".card");

    cards.forEach(card => {

        let titleElement = card.querySelector("h3");

        if (!titleElement) return;

        let title = titleElement.textContent.toLowerCase();

        card.style.display =
            title.includes(input) ? "" : "none";
    });
}


// STICKY NAVBAR
window.addEventListener("scroll", () => {

    const navbar = document.querySelector(".navbar");

    if (!navbar) return;

    navbar.classList.toggle(
        "sticky",
        window.scrollY > 100
    );
});


// VIDEO HOVER + MOBILE TOUCH PLAY
document.addEventListener("DOMContentLoaded", () => {

    const videos = document.querySelectorAll(".portfolio-video");

    videos.forEach(video => {

        const card = video.closest(".video-card");

        if (!card) return;

        // Desktop Hover
        card.addEventListener("mouseenter", () => {
            video.play();
        });

        card.addEventListener("mouseleave", () => {
            video.pause();
            video.currentTime = 0;
        });

        // Mobile Touch
        card.addEventListener("touchstart", () => {

            videos.forEach(v => {

                if (v !== video) {
                    v.pause();
                    v.currentTime = 0;
                }

            });

            video.play();

        }, { passive: true });

    });

});