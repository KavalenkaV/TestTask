$(document).ready(function(){
	var st = $('.rc'),
		rb =$('.rb'),
		dm = $('.dropIt'),
		CLASS_VISIBLE = 'visible';
	
	$.fx.off=1;

	st.click(function(){
		dm.toggle(CLASS_VISIBLE);
	});

	rb.click(function () {
		var audio = new Audio(); 
  			audio.src = '../media/sounds/Button_Click.wav'; 
  			audio.autoplay = 'play';
  			audio.class='inv';
  			document.body.appendChild(audio);
	});
});