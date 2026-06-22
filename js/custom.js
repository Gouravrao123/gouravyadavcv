
  (function ($) {
  
  "use strict";

    // PRE LOADER
    $(window).load(function(){
      $('.preloader').fadeOut(1000); // set duration in brackets    
    });

    // CUSTOM LINK
    $('.custom-link').click(function(){
    var el = $(this).attr('href');
    var elWrapped = $(el);
    var header_height = $('.navbar').height() + 10;

    scrollToDiv(elWrapped,header_height);
    return false;

    function scrollToDiv(element,navheight){
      var offset = element.offset();
      var offsetTop = offset.top;
      var totalScroll = offsetTop-navheight;

      $('body,html').animate({
      scrollTop: totalScroll
      }, 300);
  }
});
    
  })(window.jQuery);

  function searchImages(){

    let input = document.getElementById("searchInput").value;

    if(input.trim() === ""){
        alert("Please enter something!");
    }else{
        alert("Searching for: " + input);
    }
}

// Hover Play Videos

const videos = document.querySelectorAll(".hover-video");

videos.forEach(video => {

    video.addEventListener("mouseenter", () => {
        video.play();
    });

    video.addEventListener("mouseleave", () => {
        video.pause();
        video.currentTime = 0;
    });

});

function searchImages() {

    let input = document.getElementById("searchInput").value.toLowerCase();

    let cards = document.querySelectorAll(".card");

    cards.forEach(function(card) {

        let titleElement = card.querySelector("h3");

        if (!titleElement) return;

        let title = titleElement.textContent.toLowerCase();

        if (title.includes(input)) {
            card.style.display = "";
        } else {
            card.style.display = "none";
        }

    });
}
window.addEventListener("scroll", function(){

    let navbar = document.querySelector(".navbar");

    if(window.scrollY > 100){
        navbar.classList.add("sticky");
    }
    else{
        navbar.classList.remove("sticky");
    }

});
/* Auto Play on Hover */

document.querySelectorAll('.portfolio-video').forEach(video => {

    video.addEventListener('mouseenter', () => {
        video.play();
    });

    video.addEventListener('mouseleave', () => {
        video.pause();
        video.currentTime = 0;
    });

});


