$(window).on('load', function(){
	var st = $('.rc'),
		rb =$('.rb'),
		dm = $('.dropIt'),
		CLASS_VISIBLE = 'visible';
	
	$.fx.off=1;

	st.click(function(){
			dm.toggle(CLASS_VISIBLE);
		});

	loadSound();

	var Button_Click = 'click';

	function loadSound(){
	createjs.Sound.registerSound('../media/sounds/Button_Click%20%28online-audio-converter.com%29.mp3', Button_Click); 	
	};

	function playSound(Button_Click){
		createjs.Sound.play(Button_Click);
	}

	rb.click(function(){
		playSound(Button_Click);
	})
});