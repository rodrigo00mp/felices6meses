
$(document).ready(function() {
  // Hide the div
  $(".texto").hide();
  // Show the div after 5s
  $(".texto").delay(500).fadeIn(1000);
});

setInterval(createHeart, 100);


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
  rootMargin: "-100px 0px -150px 0px"
}

const contOptions = {
  threshold: 0,
  rootMargin: "-100px 0px -300px 0px"
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



const contadores = document.querySelector(".row-datos");

const contadorObserver = new IntersectionObserver (function(entries, contadorObserver){
  entries.forEach(entry => {
    if (!entry.isIntersecting){
      return;
    } else {
      console.log("true");
      var dias = setInterval(diasDone, 20);
      var horas = setInterval(horasDone, 20);
      var minutos = setInterval(minutosDone, 20);
      let count1 = 0;
      let count2 = 0;
      let count3 = 0;

      function diasDone(){
        count1+= 1;
        document.querySelector(".number1").innerHTML = count1.toString() + " dias";
        if(count1 == 184){
          clearInterval(dias);
        }
      }

      function horasDone(){
        count2+= 24;
        document.querySelector(".number2").innerHTML = count2.toString() + " horas";
        if(count2 == 4416){
          clearInterval(horas);
        }
      }

      function minutosDone(){
        count3+= 1440;
        document.querySelector(".number3").innerHTML = count3.toString() + " minutos";
        if(count3 == 264960){
          clearInterval(minutos);
        }
      }
      contadorObserver.unobserve(entry.target);
    }
  })
}, contOptions);

contadorObserver.observe(contadores);
