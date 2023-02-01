$(document).ready(function() {
   $('.question__title').click(function(event){
      $(this).toggleClass('.active').next().slideToggle(300);
   });
});