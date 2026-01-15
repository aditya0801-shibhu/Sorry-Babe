const text = "I Know I Made A Mistake And I Hurt You... I Am Sorry For The Mistake I Had Made 🥺❤️";
let index = 0;

function openLetter() {
  document.querySelector(".envelope").classList.add("open");
  document.getElementById("bgMusic").play();
  typeWriter();
  createHearts();
}

function typeWriter() {
  if (index < text.length) {
    document.getElementById("typeText").innerHTML += text.charAt(index);
    index++;
    setTimeout(typeWriter, 40);
  }
}

function forgiveYes(e) {
  e.stopPropagation();
  document.getElementById("popup").innerText =
    "Thank You My Love 🥹💖 I Promise That I Will Never Repeat This Type Of Mistake ❤️";
}

function forgiveNo(e) {
  e.stopPropagation();
  document.getElementById("popup").innerText =
    "Please Say Yes Baby I Love You 🥺💔";
}

/* Falling hearts */
function createHearts() {
  setInterval(() => {
    const heart = document.createElement("span");
    heart.innerText = "💗";
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.animationDuration = 3 + Math.random() * 3 + "s";
    document.querySelector(".hearts").appendChild(heart);
    setTimeout(() => heart.remove(), 6000);
  }, 300);
}
