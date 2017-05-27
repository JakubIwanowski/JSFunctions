$(document).ready(function() {

$('.start').on('click', function(event) {
 event.preventDefault();
 var divNumber = $('.iterationNumber').val();
 $('.iterationNumber').val('');
for (var i = 1; i <= divNumber ; i++) {

   var newDiv = $('<div class = "circle"><span>' + [i] + '</span></div>');
   $('body').append(newDiv);


}
   $('.circle').each(function (index, element){
   var colorR = Math.floor(Math.random() * 250);
   var colorG = Math.floor(Math.random() * 250);
   var colorB = Math.floor(Math.random() * 250);
 $(this).css('background-color', 'rgb(' + colorR + ',' + colorG + ',' + colorB + ')');

   var xWindow = $(window).width();
   var yWindow = $(window).height();
   var xPosition = Math.floor(Math.random() * (xWindow - 100));
   var yPosition = Math.floor(Math.random() * (yWindow - 100));
$(this).offset({top: yPosition, left: xPosition});
$(this).fadeOut(1).delay(index * 500).fadeIn(5000).fadeOut(3000);

setTimeout(function(){
  $(element).remove();
},8000 + (index * 800));

});



});

});
