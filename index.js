
$(document).ready(function() {
  // Hide the div
  $(".texto").hide();
  // Show the div after 5s
  $(".texto").delay(500).fadeIn(1000);
});

setInterval(createHeart, 50);


function createHeart(){
  const heart = document.createElement('i');
  heart.classList.add('fas');
  heart.classList.add('fa-heart');
  heart.style.left = Math.random() * window.innerWidth + "px";
  heart.style.animationDuration = Math.random() * 5 + 2 + "s";
  heart.style.opacity = Math.random();
  heart.style.fontSize = Math.random() * 30 + 10 + 'px';

  document.body.appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, 7000)
}

const appearOptions = {
  threshold: 0,
  rootMargin: "0px 0px 0px 0px"
}

const appearOnScroll = new IntersectionObserver( function(entries, appearOnScroll){
  entries.forEach(entry => {
    if(!entry.isIntersecting){
      return;
    } else {
      entry.target.classList.add("appear");
      appearOnScroll.unobserve(entry.target);
    }
  })
}, appearOptions);

const sliders = document.querySelectorAll(".slide-in");

sliders.forEach( slider => {
  appearOnScroll.observe(slider);
});
