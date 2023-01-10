$(() => {
  const slick = $('.slick-carousel').slick({
    arrows: true,
    dots: true,
  });

  $('.foto-wrapper-arrow__left').click(function () {
    $('.slick-carousel').slick('slickPrev')
  })
  $('.foto-wrapper-arrow__right').click(function () {
    $('.slick-carousel').slick('slickNext')
  })

  const slideCount = $('.slick-carousel').slick('getSlick').slideCount
  
  for(let i = 0; i < slideCount; i++){
    const template = `<div class="slider-decription__dot ${i === 0 ? 'active' : ''}"></div>`;
    $('.slider-decription__dots').append(template)
  }

  $('.slider-decription__dot').click(function() {
    const idx = $(this).index()
    $('.slick-carousel').slick('slickGoTo', idx)

    $('.slider-decription__dot.active').removeClass('active')

    $(`.slider-decription__dot:nth-child(${idx+1})`).addClass('active')
  })
})
