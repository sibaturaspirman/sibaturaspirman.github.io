var game = new Phaser.Game(540, 960, Phaser.CANVAS);
var states = {
	'Boot': EPT.Boot,
	'Preloader': EPT.Preloader,
	'Game': EPT.Game
};
for(var state in states)
	game.state.add(state, states[state]);
game.state.start('Boot');

function exitTheGame() {
	alert('EXIT');
}


//GENERAL
var backdrop = document.getElementById("backdrop");
var modal = document.getElementById("modal");
var caraNextStart = document.getElementById("caraNextStart");
var caraNextEnd = document.getElementById("caraNextEnd");

var swiper = new Swiper('#sliderHowToPlay .swiper-container', {
	pagination: {
		el: '#sliderHowToPlay .swiper-pagination',
	},
});
swiper.on('slideChange', function () {
	if(swiper.activeIndex == 2){
		caraNextEnd.classList.remove("hide");
		caraNextStart.classList.add("hide");
	}else{
		caraNextStart.classList.remove("hide");
		caraNextEnd.classList.add("hide");
	}
});

function nextSlide(){
	swiper.slideNext();
}

function howToPlay(){
  backdrop.classList.remove("backdrop--hide");
  modal.classList.remove("modal--hide");
}

function closeModal(){
  backdrop.classList.add("backdrop--hide");
  modal.classList.add("modal--hide");
}