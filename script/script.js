$(document).ready(function(){
	var st = $('.rc'),
		dm = $('.dropIt'),
		CLASS_VISIBLE = 'visible';
	
	$.fx.off=1;

	st.click(function(){
		dm.toggle(CLASS_VISIBLE);
	});

	
});