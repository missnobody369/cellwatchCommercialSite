$(document).ready(function() {
    
    
//    STICKY NAVIGATION
    $('.js--section-services').waypoint(function(direction) {
        if (direction == "down") {
            $('nav').addClass('sticky');
        } else {
            $('nav').removeClass('sticky');
        }
    }, {
      offset: '60px;'
    });
    
//    SCROLL BUTTONS CLICK
    
    $('.js--scroll-services').click(function(){
       $('html, body').animate({scrollTop: $('.js--section-services').offset().top}, 1000); 
    });
    
    $('.js--scroll-basic-works').click(function(){
       $('html, body').animate({scrollTop: $('.js--section-basic').offset().top}, 1000); 
    });
    
//    NAVIGATION SCROLL JQUERY
   $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') 
        || location.hostname == this.hostname) {

        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
           if (target.length) {
             $('html,body').animate({
                 scrollTop: target.offset().top
            }, 1000);
            return false;
        }
    }
});
    
//    ANIMATIONS
    $('.js--wp-01').waypoint(function(direction){
        $('.js--wp-01').addClass('animated fadeIn');
    }, {
        offset: '50%'
    });
    
    $('.js--wp-02').waypoint(function(direction){
        $('.js--wp-02').addClass('animated fadeInLeft');
    }, {
        offset: '50%'
    });
    
    $('.js--wp-03').waypoint(function(direction){
        $('.js--wp-03').addClass('animated fadeIn');
    }, {
        offset: '50%'
    });
    
    $('.js--wp-04').waypoint(function(direction){
        $('.js--wp-04').addClass('animated pulse');
    }, {
        offset: '50%'
    });
    
    
});
    