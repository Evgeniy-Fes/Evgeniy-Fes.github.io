$(() => {
  const slickImgClass = 'slick-img'
  const slickImg = $(`.${slickImgClass}`)

  slickImg.slick({
    asNavFor: '.slick-menu',
    arrows: true,
    prevArrow: '<div class="foto-wrapper-arrow foto-wrapper-arrow__left"> &#8249; </div>',
    nextArrow: '<div class="foto-wrapper-arrow foto-wrapper-arrow__right"> &#8250; </div>',
  });

  $('.foto-wrapper-arrow__left').on("click", function () {
    slickImg.slick('slickPrev')
  })
  $('.foto-wrapper-arrow__right').on("click", function () {
    slickImg.slick('slickNext')
  })
  
  const slickMenu = $('.slick-menu')
  
  slickMenu.slick({
    asNavFor: `.${slickImgClass}`,
    dots: true,
    arrows: false,
    dotsClass: 'slick-menu-dots',
  });
})
