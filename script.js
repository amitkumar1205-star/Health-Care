document.addEventListener('DOMContentLoaded', () => {
    const barsContainer = document.querySelector('.bars');
    const show = document.querySelector('.mobile_menu');

    barsContainer.addEventListener('click', (event) => {
        const bar = event.target;
        if (bar !== barsContainer) {
            barsContainer.classList.toggle('animate');
            show.classList.toggle('show')
        }
    });
});

$(document).ready(function(){
  $('.slick_slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    // centerMode:true,
    dots: true,
    infinite: true,
    autoplaySpeed: 2000,
    autoplay: true,
    responsive: [
  {
    breakpoint: 991,
    settings: {
      slidesToShow: 1,
    }
  },
  {
    breakpoint: 767,
    settings: {
      slidesToShow: 1,
    }
  }
]
  });
});