/*Making the logo to blink*/
function pulse() {
  $(".branding")
    .fadeIn(300)
    .fadeOut(500);
}
setInterval(pulse, 200);

/*The scrolling (button)*/

jQuery(document).ready(function() {
  var btn = $("#button");

  $(window).scroll(function() {
    if ($(window).scrollTop() > 300) {
      btn.addClass("show");
    } else {
      btn.removeClass("show");
    }
  });

  btn.on("click", function(e) {
    e.preventDefault();
    $("html, body").animate({ scrollTop: 0 }, "300");
  });
});

/*API call to weather (button)*/
$.ajax(
  "//api.openweathermap.org/data/2.5/weather?q=helsinki&APIKEY=5e67106f67465b64ab7162abab8bbd26"
).done(function(resp) {
  console.log(resp);
});
