//
// window.onload = function() {
//
// 	var gifs = Gifffer();
//
// 	$("body").on("click", function(){
// 		gifs[0].click();
//
//
// 	});
//
//
//
// }
$(".photo").click(function () {
    $(".search").toggleClass("active")
});

$(document).ready(function(){
		  $('.gallery').slick({
			centerMode: true,
  centerPadding: '60px',
  slidesToShow: 3,
  adaptiveHeight: true,
  autoplay: true,
  autoplaySpeed: 430,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 3
      }
    },
    {
      breakpoint: 480,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 1
      }
    }
  ]
			});
		});