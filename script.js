jQuery(document).ready(function() {
  var btn = $("#button");

  function pulse() {
    $(".branding")
      .fadeIn(300)
      .fadeOut(500);
  }
  setInterval(pulse, 200);

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
