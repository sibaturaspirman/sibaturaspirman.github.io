'use strict';
localStorage.clear();

var gameAreaSwipe = document.querySelector('.game-area__swipe');
var gameAreaSwipeCard = document.querySelectorAll('.game-area__swipe-card');
var mitos = document.getElementById('mitos');
var fakta = document.getElementById('fakta');
var score = 0;

var gameChoice = document.querySelector('.game-choice');
var gameProgressBar = document.querySelectorAll('.game-progress__bar-block');
var gameinfo = document.getElementById('gameinfo');
var backdrop = document.getElementById('backdrop');
var modalMitos = document.getElementById('modalMitos');
var modalFakta = document.getElementById('modalFakta');
var modalMitosButton = document.querySelector('.modalMitosButton');
var modalFaktaButton = document.querySelector('.modalFaktaButton');
var modalMitosContent = document.getElementById('modalMitosContent');
var modalFaktaContent = document.getElementById('modalFaktaContent');
var modalMitosAnswer = document.getElementById('modalMitosAnswer');
var modalFaktaAnswer = document.getElementById('modalFaktaAnswer');
var gameIndex = 0;
var gameData = [
  {
    true: '',
    mitos: '',
    fakta: ''
  },
  {
    true: 'mitos',
    mitos: '<p>1 - Ayo semangat lagi dong, Bro!Senggol-senggolan di kantor emang selalu ada, tapi ujung-ujungnya mental pantang menyerah yang akan bicara.</p><p>Mantapkan Langkah lo buat terus pertahanin performa kerja. Walaupun harus lebih keras, tapi yakin deh, hasilnya gak akan bohong.</p>',
    fakta: '<p>1 - Ah masa sih? Stereotip begini perlu dipatahin supaya lo bisa mantapkan langkah. Semangat terus untuk tunjukin jati diri lo tanpa menghiraukan apa kata orang, bro.</p>'
  },
  {
    true: 'mitos',
    mitos: '<p>2 - Ayo semangat lagi dong, Bro!Senggol-senggolan di kantor emang selalu ada, tapi ujung-ujungnya mental pantang menyerah yang akan bicara.</p><p>Mantapkan Langkah lo buat terus pertahanin performa kerja. Walaupun harus lebih keras, tapi yakin deh, hasilnya gak akan bohong.</p>',
    fakta: '<p>2 - Ah masa sih? Stereotip begini perlu dipatahin supaya lo bisa mantapkan langkah. Semangat terus untuk tunjukin jati diri lo tanpa menghiraukan apa kata orang, bro.</p>'
  },
  {
    true: 'fakta',
    mitos: '<p>3 - Ayo semangat lagi dong, Bro!Senggol-senggolan di kantor emang selalu ada, tapi ujung-ujungnya mental pantang menyerah yang akan bicara.</p><p>Mantapkan Langkah lo buat terus pertahanin performa kerja. Walaupun harus lebih keras, tapi yakin deh, hasilnya gak akan bohong.</p>',
    fakta: '<p>3 - Ah masa sih? Stereotip begini perlu dipatahin supaya lo bisa mantapkan langkah. Semangat terus untuk tunjukin jati diri lo tanpa menghiraukan apa kata orang, bro.</p>'
  },
  {
    true: 'mitos',
    mitos: '<p>4 - Ayo semangat lagi dong, Bro!Senggol-senggolan di kantor emang selalu ada, tapi ujung-ujungnya mental pantang menyerah yang akan bicara.</p><p>Mantapkan Langkah lo buat terus pertahanin performa kerja. Walaupun harus lebih keras, tapi yakin deh, hasilnya gak akan bohong.</p>',
    fakta: '<p>4 - Ah masa sih? Stereotip begini perlu dipatahin supaya lo bisa mantapkan langkah. Semangat terus untuk tunjukin jati diri lo tanpa menghiraukan apa kata orang, bro.</p>'
  },
  {
    true: 'fakta',
    mitos: '<p>5 - Ayo semangat lagi dong, Bro!Senggol-senggolan di kantor emang selalu ada, tapi ujung-ujungnya mental pantang menyerah yang akan bicara.</p><p>Mantapkan Langkah lo buat terus pertahanin performa kerja. Walaupun harus lebih keras, tapi yakin deh, hasilnya gak akan bohong.</p>',
    fakta: '<p>5 - Ah masa sih? Stereotip begini perlu dipatahin supaya lo bisa mantapkan langkah. Semangat terus untuk tunjukin jati diri lo tanpa menghiraukan apa kata orang, bro.</p>'
  }
];
var paramData = [];

document.getElementById('gamearea').addEventListener("click", function(){
  gameinfo.classList.add("hide");
});

function initBar(gameIndex, index){
  gameProgressBar.forEach(function (el, index) {
    if(gameIndex == index){
      el.classList.add("current");
    }
    if(gameIndex > index){
      el.classList.add("gone");
    }
  });
}

function initModal(gameIndex){
  if(gameIndex == 5){
    modalFaktaButton.innerHTML = "Selesai";
    modalMitosButton.innerHTML = "Selesai";
  }
  gameData.forEach(function (el, index){
    if(gameIndex == index){
      if(el.true == 'fakta'){
        modalFaktaAnswer.innerHTML = '<img src="assets/images/popup-true.png">';
        modalMitosAnswer.innerHTML = '<img src="assets/images/popup-false.png">';
      }else{
        modalFaktaAnswer.innerHTML = '<img src="assets/images/popup-false.png">';
        modalMitosAnswer.innerHTML = '<img src="assets/images/popup-true.png">';
      }

      modalFaktaContent.innerHTML = el.fakta;
      modalMitosContent.innerHTML = el.mitos;
    }
  });
}
function showModal(item){
  backdrop.classList.remove("hide");
  if(item == 'fakta'){
    modalFakta.classList.remove("hide");
  }else{
    modalMitos.classList.remove("hide");
  }
}
function closeModal(gameIndex){
  if(gameIndex == 5){

    // SENT DATA RESULT AJAX
    location.href = 'statement.html'
    // var apiurl = "https://magnum.antigravity.dev";
    // paramData.push({"PersonId": "4234534", "Result": score});
    // $.ajax({
    //   url: apiurl+"/api/result/game",
    //   data: paramData,// Add as Data the Previously create formData
    //   type:"POST",
    //   contentType:false,
    //   processData:false,
    //   cache:false,
    //   dataType:"json",
    //   error:function(err, data){
    //       console.error(err);
    //       console.log('failed push, try again')
    //   },
    //   success:function(data){
    //       // console.log(data);
    //       location.href = 'statement.html'

    //   },
    //   complete:function(){
    //       console.log("Request finished.");
    //   }
    // });

  }else{
    backdrop.classList.add("hide");
    modalMitos.classList.add("hide");
    modalFakta.classList.add("hide");
  }
}

function checkAnswer(swipeDirection, gameIndex){
  console.log(swipeDirection);

  gameData.forEach(function (el, index){
    if(gameIndex == index){

      if(swipeDirection > 0 && el.true == 'fakta'){
        score += 1;
        // console.log(true);
      }else if(swipeDirection < 0 && el.true == 'mitos'){
        score += 1;
        // console.log(true);
      }else{
        // console.log(false)
      }

      // console.log(score);
      localStorage.setItem("result", score);
    }
  });
}

function initCards(card, index) {
  var newCards = document.querySelectorAll('.game-area__swipe-card:not(.removed)');
  var rotate = 0;

  newCards.forEach(function (card, index) {

    if(index == 1){
      rotate = 5;
    }else if(index == 2){
      rotate = 10;
    }else if(index == 3){
      rotate = -5;
    }else if(index == 4){
      rotate = -10;
    }

    card.style.zIndex = gameAreaSwipeCard.length - index;
    // card.style.transform = 'scale(' + (20 - index) / 20 + ') translateY(-' + 30 * index + 'px)';
    card.style.transform = 'rotate(' + rotate + 'deg)';

    if(index != 0){
      card.style.opacity = (10 - index) / 30;
      card.style.border = "2px solid transparent";
    }else{
      card.style.opacity = 1;
      card.style.border = "2px solid #fff";
    }
  });
  
  gameAreaSwipe.classList.add('loaded');
}

initCards();
initBar(gameIndex);

gameAreaSwipeCard.forEach(function (el) {
  var hammertime = new Hammer(el);

  hammertime.on('pan', function (event) {
    el.classList.add('moving');
  });

  hammertime.on('pan', function (event) {
    if (event.deltaX === 0) return;
    if (event.center.x === 0 && event.center.y === 0) return;

    gameChoice.classList.toggle('game-choice--fakta', event.deltaX > 0);
    gameChoice.classList.toggle('game-choice--mitos', event.deltaX < 0);

    var xMulti = event.deltaX * 0.03;
    var yMulti = event.deltaY / 80;
    var rotate = xMulti * yMulti;

    event.target.style.transform = 'translate(' + event.deltaX + 'px, ' + event.deltaY + 'px) rotate(' + rotate + 'deg)';
  });

  hammertime.on('panend', function (event) {
    el.classList.remove('moving');

    var moveOutWidth = document.body.clientWidth;
    var keep = Math.abs(event.deltaX) < 80 || Math.abs(event.velocityX) < 0.5;

    event.target.classList.toggle('removed', !keep);

    gameChoice.classList.remove('game-choice--fakta', event.deltaX > 0);
    gameChoice.classList.remove('game-choice--mitos', event.deltaX < 0);

    if (keep) {
      event.target.style.transform = '';
    } else {
      var endX = Math.max(Math.abs(event.velocityX) * moveOutWidth, moveOutWidth);
      var toX = event.deltaX > 0 ? endX : -endX;
      var endY = Math.abs(event.velocityY) * moveOutWidth;
      var toY = event.deltaY > 0 ? endY : -endY;
      var xMulti = event.deltaX * 0.03;
      var yMulti = event.deltaY / 80;
      var rotate = xMulti * yMulti;

      event.target.style.transform = 'translate(' + toX + 'px, ' + (toY + event.deltaY) + 'px) rotate(' + rotate + 'deg)';

      gameIndex += 1;

      checkAnswer(event.deltaX, gameIndex);
      if(event.deltaX > 0){
        setTimeout(function(){
          showModal('fakta');
        }, 350);
      }else{
        setTimeout(function(){
          showModal('mitos');
        }, 350);
      }

      initCards();
      initBar(gameIndex);
      initModal(gameIndex);
    }
  });
});

function createButtonListener(fakta) {
  return function (event) {
    var cards = document.querySelectorAll('.game-area__swipe-card:not(.removed)');
    var moveOutWidth = document.body.clientWidth * 1.5;
    var moveDelta = 0;

    if (!cards.length) return false;

    var card = cards[0];

    card.classList.add('removed');

    if (fakta) {
      card.style.transform = 'translate(' + moveOutWidth + 'px, -100px) rotate(-30deg)';
      moveDelta = moveOutWidth;
      setTimeout(function(){
        showModal('fakta')
      }, 350);
    } else {
      card.style.transform = 'translate(-' + moveOutWidth + 'px, -100px) rotate(30deg)';
      moveDelta = -moveOutWidth;
      setTimeout(function(){
        showModal('mitos')
      }, 350);
    }

    gameIndex += 1;
    checkAnswer(moveDelta, gameIndex);
    initCards();
    initBar(gameIndex);
    initModal(gameIndex);

    event.preventDefault();
  };
}

var mitosListener = createButtonListener(false);
var faktaListener = createButtonListener(true);

mitos.addEventListener('click', mitosListener);
fakta.addEventListener('click', faktaListener);