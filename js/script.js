$(document).ready(function() {
var imgList = [{
			"Screen": 'Wall',
			"Image": 'image-01.svg'
		},
		{
			"Screen": 'Profile view 1',
			"Image": 'image-02.svg'
		},
		{
			"Screen": 'Profile view 2',
			"Image": 'image-03.svg'
		}];


		for (var images = 0; images < imgList.length; images++) {
			 $('<li><svg x="0px" y="0px" width="1080px" height="1920px" viewBox="0 0 1080 1920" style="enable-background:new 0 0 1080 1920;" xml:space="preserve"><use xlink:href="'+imgList[images].Image+'#Layer_1"></use></svg></li>').appendTo('.bxslider');
		}

		for (var thumbnail = 0; thumbnail < imgList.length; thumbnail++) {
			 $('<a data-slide-index='+thumbnail+'><img src='+ imgList[thumbnail].Image +' /></a>').appendTo('.bx-pager');
		}

		for (var pages = 0; pages < imgList.length; pages++) {
			 $('<option value='+pages+'>'+imgList[pages].Screen+'</option>').appendTo('.screens');
   	}

		var slider = $('.bxslider').bxSlider({
			nextSelector: '.next',
			prevSelector: '.prev',
			nextText: '<img src="images/right-arrow.png" height="50" width="50"/>',
			prevText: '<img src="images/left-arrow.png" height="50" width="50"/>',
			mode: 'fade',
			auto: false,
			autoControls: false,
			touchEnabled: false,
			pagerCustom: '.bx-pager'
		});

		$('.model').change(function(){
			var model = $(this).val();
			$('.mobile-overlay').children('img').attr('src', 'images/' + model + '.png');
		});

		$('.muv-button-1').click(function() {
			var slide = $('.goto').val();
			slider.goToSlide(slide);
		});

		$('.screens').change(function() {
			var screen = $(this).val();
			slider.goToSlide(screen);
		});

		$('.btn-toggle').click(function(){
			$('.bx-pager').slideToggle();
		});

		var sHeight = $(window).height();
		$('.muv-left, .muv-right').css({'height' : sHeight, 'overflow' : 'auto'});
});

function onSvgClick(event) {
		var code = $(event).attr('style');
		if(code !== undefined) {
			var result = code.replace(/\;/g,';<br/>');
			$('.code').remove();
			$('<code class="code">'+result+'</code>').appendTo('.mb-properties');
		}
}
