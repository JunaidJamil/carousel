
  var trandingSlider = new Swiper('.tranding-slider', {
    // Swiper configuration options
    effect: 'coverflow',
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: 'auto',
    coverflowEffect: {
      rotate: 0,
      stretch: 0,
      depth: 100,
      modifier: 2.5,
    },
    pagination: {},
    navigation: {},
    on: {
      slideChangeTransitionEnd: function () {
        var activeSlideIndex = this.realIndex; // Get the index of the active slide
        var slideContent = document.querySelectorAll('.bubble'); // Select the bubble elements within tranding-slide
        slideContent.forEach(function (slide, index) {
          if (index === activeSlideIndex) {
            slide.style.display = 'block';
            slide.classList.add("mystyle");
             // Show content of active slide
          } else {
            slide.style.display = 'none'; // Hide content of inactive slides
          }
        });
      },
    },
  });

  $('.bubble').on('click touchstart', function(e) {
    e.preventDefault();
   });

   