$(() => {
  const slickImgClass = 'slick-img'
  const slickImg = $(`.${slickImgClass}`)

  slickImg.slick({
    asNavFor: '.slick-menu',
    arrows: true,
    prevArrow: '<div class="foto-wrapper-arrow foto-wrapper-arrow__left"> &#8249; </div>',
    nextArrow: '<div class="foto-wrapper-arrow foto-wrapper-arrow__right"> &#8250; </div>',
  });

  $('.foto-wrapper-arrow__left').click(function () {
    slickImg.slick('slickPrev')
  })
  $('.foto-wrapper-arrow__right').click(function () {
    slickImg.slick('slickNext')
  })
  
  const slickMenu = $('.slick-menu')
  
  slickMenu.slick({
    asNavFor: `.${slickImgClass}`,
    dots: true,
    arrows: false,
    dotsClass: 'slick-menu-dots',
  });

//   const slideCount = slickMenu.slick('getSlick').slideCount
  
//   for(let i = 0; i < slideCount; i++){
//     const template = `<div class="slider-decription__dot ${i === 0 ? 'active' : ''}"></div>`;
//     $('.slider-decription__dots').append(template)
//   }

//   $('.slider-decription__dot').click(function() {
//     const idx = $(this).index()
//     slickMenu.slick('slickGoTo', idx)

//     $('.slider-decription__dot.active').removeClass('active')

//     $(`.slider-decription__dot:nth-child(${idx+1})`).addClass('active')
//   })
})
