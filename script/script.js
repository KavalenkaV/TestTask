$(document).ready(function(){
	$('form').on('submit', function (e) { e.preventDefault() });
	var st = $('.rc'),
		rb =$('.rb'),
		dm = $('.dropIt'),
		Button_Click = 'click',
		CLASS_VISIBLE = 'visible',
		plus = $('.pl'),
		minus = $('.mi'),
		counterDisplay = $('.cash'),
		currentCount = counterDisplay.text(),
		counterNum = +currentCount.replace(/\D+/g,"")
		;
			
	$.fx.off=1;

	st.click(function(){
			dm.toggle(CLASS_VISIBLE);
		});

	loadSound();

	function loadSound(){
	createjs.Sound.registerSound('../media/sounds/Button_Click1.mp3', Button_Click); 	
	};

	function playSound(){
		createjs.Sound.play(Button_Click);
	}

	rb.click(function(){
		playSound(Button_Click);
	})

	function increase() {

		return function(){            
				counterNum++;
				showCounter(counterNum);
				return counterNum;    
			}
		}

	function decrease() {

		return function(){            
				counterNum--;
				showCounter(counterNum);
				return counterNum;    
			}
		}

	function showCounter(){
			counterDisplay.text('$' + ' ' + counterNum);
		}

	plus.click(increase());
	minus.click(decrease());

});
