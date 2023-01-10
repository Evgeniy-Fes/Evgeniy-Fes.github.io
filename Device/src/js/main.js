
$(function(){
  $('.delivery-nav').click(function(e){
    e.preventDefault();

    $('.delivery-right__tab-content.active').removeClass('active');
    $('.delivery-nav.active').removeClass('active');
    
    $(this).addClass('active');

    const id = $(this).attr('href')

    $(id).addClass('active');
  })

  $('.login').click(function(event){
    console.log(event)

    const header = $('.header');
    header.animate({
        opacity: '0.25',
      }, 
      1000,
      function () {
        header.animate({
          opacity: '1',
        })
      }
    )
  })
})