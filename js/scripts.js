jQuery(document).ready(function () {
  $.backstretch("img/backgrounds/1.jpg");

  new WOW().init();

  var now = new Date();
  var countTo = 15 * 24 * 60 * 60 * 1000 + now.valueOf();
  $(".timer").countdown(countTo, function (event) {
    $(this).find(".days").text(event.offset.totalDays);
    $(this).find(".hours").text(event.offset.hours);
    $(this).find(".minutes").text(event.offset.minutes);
    $(this).find(".seconds").text(event.offset.seconds);
  });

 
  $(".success-message").hide();
  $(".error-message").hide();
});
