$(document).ready(function(){
   $('.slider').slick({
      dots:true,
      arrows:true,
      slidesToShow:3,
      speed: 1500,
      infinit: true,
      autoplay: true,
      pauseOnFocus:true,
      pauseOnhover:true,
      pauseOnDotsHover:true,
      draggable:true,
      slwipe: true,
      touchTreshold:5,
      touchMove:true,
      waitForAnimate:true,
      centerMode:true
   });

});