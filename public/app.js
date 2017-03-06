console.log('sanity check js loading')
$(document).ready(function(){
  $('.parallax').parallax();
  $(".button-collapse").sideNav();
  $('.button-collapse').dropdown({
      inDuration: 300,
      outDuration: 225,
      constrainWidth: false,
      hover: false,
      gutter: 9,
      belowOrigin: true,
      alignment: 'left',
    }
  );
});
