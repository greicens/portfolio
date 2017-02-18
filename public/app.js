console.log('sanity check js loading')
$(document).ready(function(){
  $('.parallax').parallax();
  $('.carousel').carousel();
  $('.carousel-slider').carousel({fullWidth: false});
  $(".button-collapse").sideNav();
  $('.slider').slider();
  $('.button-collapse').dropdown({
      inDuration: 300,
      outDuration: 225,
      constrainWidth: false, // Does not change width of dropdown to that of the activator
      hover: false, // Activate on hover
      gutter: 9, // Spacing from edge
      belowOrigin: true, // Displays dropdown below the button
      alignment: 'left', // Displays dropdown with edge aligned to the left of button
    }
  );

});
