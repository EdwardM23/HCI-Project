const n_slider = 4;
var width = 625;
const slider_width = width * n_slider;
const animation_speed = 300;

// $(".slider").css({
//   width: width + "px",
//   height: height + "px",
//   overflow: "hidden",
// });

// $(".images").css({
//   width: slider_width + "px",
//   height: height + "px",
//   position: "relative",
//   //   display: "flex",
// });

// $(".slider-image").css({
//   width: width + "px",
//   height: height + "px",
// });

let index = 0;
let slide = function (change) {
  index += change;

  if (index < 0) index = n_slider - 1;
  else if (index > n_slider - 1) index = 0;

  var device_width = screen.width;

  if (device_width > 1000) {
    width = 625;
  } else if (device_width > 670 && device_width <= 1000) {
    width = 500;
  } else if (device_width <= 670) {
    width = 300;
  }

  $(".images").animate(
    {
      // left: -width * ,
      marginLeft: -width * index,
    },
    animation_speed
  );
};

$("#btnSliderLeft").click(function () {
  // console.log("left");
  slide(-1);
});

$("#btnSliderRight").click(function () {
  // console.log("right");
  slide(1);
});
