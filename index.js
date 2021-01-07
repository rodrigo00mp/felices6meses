$(document).ready(function() {
  // Hide the div
  $(".texto").hide();
  // Show the div after 5s
  $(".texto").delay(1000).fadeIn(2000);
});

setInterval(createHeart, 50);


function createHeart(){
  const heart = document.createElement('i');
  heart.classList.add('fas');
  heart.classList.add('fa-heart');
  heart.style.left = Math.random() * window.innerWidth + "px";
  heart.style.animationDuration = Math.random() * 2 + 2 + "s";
  heart.style.opacity = Math.random();
  heart.style.fontSize = Math.random() * 10 + 10 + 'px';

  document.body.appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, 3000)
}
