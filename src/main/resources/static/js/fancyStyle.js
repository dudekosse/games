$(document).ready(function() {
  var i = 0;
  function pulsate() {
    $(".pulsate").
      animate({opacity: 0.2}, 1000, 'linear').
      animate({opacity: 1}, 1000, 'linear', pulsate);
    i++;
  }
  pulsate();
});