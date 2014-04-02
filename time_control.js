$(document).ready(function(){


// - The "PWR" button should simulate the device powering off and on.
	$('.power').on('click', function(){
		$('.clock_on').toggle();
		$('.clock').toggle();
		$('.power_light').toggleClass('glow');
		$('.ui-widget-header').toggleClass('slider_on');

	});


// - The display will show the selected duration.
// - The Slider will set the value of the duration 
// and affect the displayed duration.
	var time = parseInt($('.on_time').text(), 10);
	
	$( ".bar" ).slider({ 
        value: time,
        range: "min",
        min: 0,
        max: 600,
        animate: true,
        orientation: "horizontal",
        slide: function (event, ui) {
            $('.on_time').text(ui.value);
        }
	 });

// - The Up/Down arrows will increase and decrease the 
// duration and change the position of the slider as well.

	$('.up').on('click', function(){
		var time = parseInt($('.on_time').text(), 10);
		if(time < 600){
			time += 1
			$('.on_time').text(time);
			$('.bar').slider('value', time );
		}
	});

	$('.down').on('click', function(){
		var time = parseInt($('.on_time').text(), 10);
		if(time > 0){
			time -= 1
			$('.on_time').text(time);
			$('.bar').slider('value', time );
		}
	});

// - The Min/Hrs switch will toggle the displayed 
// value between minutes and hours.

$('.gear').on('click', function(){
	$('.hours').toggleClass('hidden');
	$('.minutes').toggleClass('hidden');
	if($('.minutes').hasClass('hidden')){
		var time = parseInt($('.on_time').text(), 10);
		$('.unit').text('HRS');
		$('.on_time').text(parseInt(time/60));
	}
	else{
		var time = parseInt($('.on_time').text(), 10);
		$('.unit').text('MIN')
		$('.on_time').text(time*60);
	}
});










});