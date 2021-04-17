( function($) {
  $(document).ready(function() {
    $('#toggle').click(function() {
      $(this).toggleClass('active');
      $('#overlay').toggleClass('open');
     });
   
   
     var typed = new Typed('.type',{
      strings: [
          'recovery',
          'spirituality',
          'inclusion',
          'dignity',
          'race',
          'access',
          'youth',
          'soul',
          'connection',
          'community',
      ],
      showCursor: false,
       backDelay: 1200,
       fadeOut: true,
       typeSpeed: 120,
       fadeOutClass: 'typed-fade-out',
      fadeOutDelay:2000,
      loop: true,
      loopCount: Infinity,
  });
   
    AOS.init();       

       
    
    var s           = $('.slider'),
        sWrapper    = s.find('.slider-wrapper'),
        sItem       = s.find('.slide'),
        btn         = s.find('.slider-link'),
        sWidth      = sItem.width(),
        sCount      = sItem.length,
        slide_date  = s.find('.slide-date'),
        slide_title = s.find('.slide-title'),
        slide_text  = s.find('.slide-text'),
        slide_more  = s.find('.slide-more'),
        slide_image = s.find('.slide-image img'),
        sTotalWidth = sCount * sWidth;
    
    sWrapper.css('width', sTotalWidth);
    sWrapper.css('width', sTotalWidth);
    
    var clickCount  = 0;
    
    btn.on('click', function(e) {
      e.preventDefault();

      if( $(this).hasClass('next') ) {
        
        ( clickCount < ( sCount - 1 ) ) ? clickCount++ : clickCount = 0;
      } else if ( $(this).hasClass('prev') ) {
        
        ( clickCount > 0 ) ? clickCount-- : ( clickCount = sCount - 1 );
      }
      TweenMax.to(sWrapper, 0.4, {x: '-' + ( sWidth * clickCount ) })


      //CONTENT ANIMATIONS

      var fromProperties = {autoAlpha:0, x:'-50', y:'-10'};
      var toProperties = {autoAlpha:0.8, x:'0', y:'0'};

      gsap.from(".navigation-container", {duration:2, y:-50, opacity: 0});
      gsap.from(".anim1", {duration:2, y:30, opacity:0});
      gsap.from(".image", {duration:2, x:100, opacity:0});

      TweenLite.fromTo(slide_image, 1, {autoAlpha:0, y:'40'}, {autoAlpha:1, y:'0'});
      TweenLite.fromTo(slide_date, 0.4, fromProperties, toProperties);
      TweenLite.fromTo(slide_title, 0.6, fromProperties, toProperties);
      TweenLite.fromTo(slide_text, 0.8, fromProperties, toProperties);
      TweenLite.fromTo(slide_more, 1, fromProperties, toProperties);

    });  
    
    $('.slide-nav').on('click', function(e) {
e.preventDefault();
// get current slide
var current = $('.flex--active').data('slide'),
  // get button data-slide
  next = $(this).data('slide');

$('.slide-nav').removeClass('active');
$(this).addClass('active');

if (current === next) {
  return false;
} else {
  $('.slider__warpper').find('.flex__container[data-slide=' + next + ']').addClass('flex--preStart');
  $('.flex--active').addClass('animate--end');
  setTimeout(function() {
    $('.flex--preStart').removeClass('animate--start flex--preStart').addClass('flex--active');
    $('.animate--end').addClass('animate--start').removeClass('animate--end flex--active');
  }, 800);
}
});

  });
})(jQuery);