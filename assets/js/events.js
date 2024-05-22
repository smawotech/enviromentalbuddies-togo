// Count-down timer
var countDownDate = new Date("Mar 5, 2021 11:59:59").getTime();

var x = setInterval(function() {

  var now = new Date().getTime();
  var distance = countDownDate - now;

  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementById("count-down").innerHTML = `<span class="big">${days}<span class="small">D</span></span>
  <span class="big">${hours}<span class="small">H</span></span>
  <span class="big">${minutes}<span class="small">M</span></span>
  <span class="big">${seconds}<span class="small">S</span></span>`;

  if (distance < 0) {
    clearInterval(x);
    document.getElementById("count-down").innerHTML = "EXPIRED";
  }
}, 1000);
document.addEventListener('DOMContentLoaded', function () {
  const galleryItems = document.querySelectorAll('.gallery-item');
  const fullscreen = document.querySelector('.fullscreen');
  const fullscreenImg = document.querySelector('.fullscreen img');
  const closeBtn = document.querySelector('.close-btn');

  galleryItems.forEach(item => {
      item.addEventListener('click', () => {
          fullscreenImg.src = item.querySelector('img').src;
          fullscreen.style.display = 'flex';
      });
  });

  closeBtn.addEventListener('click', () => {
      fullscreen.style.display = 'none';
  });
});

