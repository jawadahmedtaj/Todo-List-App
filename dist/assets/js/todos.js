// Check off specific todos by clicking

var startAngle = 0;
var rotAngle = 180;

$("ul").on("click", "#check", function (e) {
  $(this)
    .parent()
    .toggleClass("completed");
  // https://stackoverflow.com/questions/306583/how-to-get-the-children-of-the-this-selector
  $("i", this).toggleClass("fa-check fa-check-double");

  //   $(this).toggleClass("completed");
});

//Click on X to delete Todo

$("ul").on("click", "#trash", function (e) {
  $(this)
    .parent()
    .fadeOut(500, function () {
      $(this).remove();
    });
  e.stopPropagation();
});

$("input[type='text']").keypress(function (e) {
  if (e.which === 13) {
    var todoText = $(this).val();
    if (!(todoText.length > 35))
      if (todoText.length > 0) {
        $(this).css("border", "3px solid rgba(0, 0, 0, 0)");
        $("ul").append(
          "<li><span id='check'> <i class='fas fa-check'></i></span>" +
          todoText +
          "<span id='trash'><i class='fas fa-trash-alt'></i></span></li>"
        );
        $(this).val("");
      } else $(this).css("border", "3px solid red");
    else $(this).css("border", "3px solid red");
  }
});

$("#icon").on("click", function () {
  $("input[type='text']").slideToggle(200, function () {
    console.log($("#icon").css("transform"));
    AnimateRotate();
    // $("#icon").toggleClass("fa-arrow-down fa-arrow-up");
  });
  $("li").slideToggle();
});

// https://stackoverflow.com/questions/15191058/css-rotation-cross-browser-with-jquery-animate

function AnimateRotate() {
  // caching the object for performance reasons
  var $elem = $('#icon');

  // we use a pseudo object for the animation
  // (starts from `0` to `angle`), you can name it as you want
  $({
    deg: startAngle
  }).animate({
    deg: rotAngle + startAngle
  }, {
    duration: 400,
    step: function (now) {
      // in the step-callback (that is fired each step of the animation),
      // you can use the `now` paramter which contains the current
      // animation-position (`0` up to `angle`)
      $elem.css({
        transform: 'rotate(' + now + 'deg)'
      });
      startAngle = now;
    }
  });
}