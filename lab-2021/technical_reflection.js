$(document).ready(function(){

	let winWidth = $(window).width();//width of the window's layout viewport
	let winHeight = $(window).height();//height of the window's layout viewport
	let slide = 0;//Declares 'slide' within file scope, then assigns it a value of 0. This allows ul class slides to reveal whenever user click
	let colours = [];//Declares a 'coulur' then creates an empty array. This let header to reappear after click
	let colourIndex = 0;//Declares 'colourIndex' within file scope, then assigns it a value of 0

	if(winWidth = 200){
		let size = winHeight < winWidth ? winWidth : winHeight;
		$('.flash').css({ //it sets more style properties for the 'flash'
			width:size*2,
			height:size*2,
			marginTop:-size,
			marginLeft:-size
		}); //size of the flash+placement 
	}

	$(document).mousemove(function(e){ 
		$('.flash').css({
			top:e.pageY - $(document).scrollTop(),
			left:e.pageX
		});
	});//this function allows flash to follow the mousemove

	$(document).mousedown(function(e){
		if(!$(e.target).hasClass('title')){
			$('.flash').addClass('flashing black');
			$('header').hide();//First page (white background w/ black flash) hide
			$('.info').show();//Second page (black background w/ white flash) show
			slide = slide >= $('.slides li').length - 1 ? slide = 0 : slide + 1;
			$('.slides li').eq(slide).addClass('visible');
			e.preventDefault();
		}
	});//controls visible and invisible slides

	$(document).mouseup(function(e){
		$('.slides li').removeClass('visible');
		colourIndex = colourIndex === 5 ? colourIndex = 0 : colourIndex + 1;
		$('.flash').addClass(colours[colourIndex]).removeClass('flashing black');
		$('.info').hide();
		$('header').show();
		e.preventDefault();
	});//This allows the header to reappear when user release click


});

