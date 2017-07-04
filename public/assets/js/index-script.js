$(function($) {

	"use strict";

	//Main Slider
	if($('#main-slider').length){

		jQuery('.tp-banner').show().revolution({
		  delay:7000,
		  startwidth:1170,
		  startheight:650,
		  hideThumbs:1400,

		  thumbWidth:80,
		  thumbHeight:50,
		  thumbAmount:5,

		  navigationType:"bullet",
		  navigationArrows:"0",
		  navigationStyle:"preview4",

		  touchenabled:"on",
		  onHoverStop:"off",

		  swipe_velocity: 0.7,
		  swipe_min_touches: 1,
		  swipe_max_touches: 1,
		  drag_block_vertical: false,

		  parallax:"mouse",
		  parallaxBgFreeze:"on",
		  parallaxLevels:[7,4,3,2,5,4,3,2,1,0],

		  keyboardNavigation:"off",

		  navigationHAlign:"center",
		  navigationVAlign:"bottom",
		  navigationHOffset:0,
		  navigationVOffset:20,

		  soloArrowLeftHalign:"left",
		  soloArrowLeftValign:"center",
		  soloArrowLeftHOffset:20,
		  soloArrowLeftVOffset:0,

		  soloArrowRightHalign:"right",
		  soloArrowRightValign:"center",
		  soloArrowRightHOffset:20,
		  soloArrowRightVOffset:0,

		  shadow:0,
		  fullWidth:"on",
		  fullScreen:"off",

		  spinner:"spinner4",

		  stopLoop:"off",
		  stopAfterLoops:-1,
		  stopAtSlide:-1,

		  shuffle:"off",

		  autoHeight:"off",
		  forceFullWidth:"on",

		  hideThumbsOnMobile:"off",
		  hideNavDelayOnMobile:1500,
		  hideBulletsOnMobile:"on",
		  hideArrowsOnMobile:"off",
		  hideThumbsUnderResolution:0,

		  hideSliderAtLimit:0,
		  hideCaptionAtLimit:0,
		  hideAllCaptionAtLilmit:0,
		  startWithSlide:0,
		  videoJsPath:"../video/",
		  fullScreenOffsetContainer: "#main-slider"
	  });


	}

	//Curved Carousel Slider
	if($('.curved-carousel .slider').length){
		$('.curved-carousel .slider').bxSlider({
			adaptiveHeight: true,
			auto:true,
			controls: false,
			mode:'fade',
			pause: 7000,
			speed: 1000,
			pager:true
		});

	}

	//Tweets Slider
	if($('.tweets-slider').length){
		$('.tweets-slider').bxSlider({
			adaptiveHeight: true,
			auto:true,
			controls: false,
			mode:'fade',
			pause: 5000,
			speed: 1000,
			pager:false
		});
	}

	//Image Scroller
	if($(".image-scroller").length){

		$('.image-scroller').bxSlider({
		  minSlides: 1,
		  maxSlides: 1,
		  slideWidth: 600,
		  slideMargin: 0,
		  useCSS: false,
		  ticker: true,
		  autoHover:true,
		  tickerHover:true,
		  speed: 30000,
		  infiniteLoop: true
		});
	}

	//Jquery Knob animation -- Fact Counter
	if($('.dial').length){
		$('.dial').appear(function(){
          var elm = $(this);
          var color = elm.attr("data-fgColor");
          var perc = elm.attr("value");

          elm.knob({
               'value':0,
                'min':0,
                'max':100,
                "skin":"tron",
                "readOnly":true,
                "thickness":.15,
				'dynamicDraw': true,
				"displayInput":false
          });

          $({value: 0}).animate({ value: perc }, {
			  duration: 1000,
              easing: 'swing',
              progress: function () {
				  elm.val(Math.ceil(this.value)).trigger('change')
              }
          });

          //circular progress bar color
          $(this).append(function() {
              elm.parent().parent().find('.circular-bar-content').css('color',color);
              elm.parent().parent().find('.circular-bar-content label').text(perc+'%');
          });

          },{accY: 10});
    }
});