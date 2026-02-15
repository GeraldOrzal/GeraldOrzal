let flipPic = [];

let disappear = null;
let audio = new Audio("./assets/music.mp3");

const heading = document.getElementById("typewriter-heading");

window.onload = function () {
  if (Date.now() > new Date("2026-02-17 08:00:00 PM").getTime()) {
    document.querySelector(".intro").style.display = "flex";
  }
};

function typeWriter(element, speed = 50) {
  const text = element.textContent;
  element.textContent = "";
  let i = 0;

  function type() {
    if (i < text.length) {
      element.textContent += text.charAt(i);
      i++;
      setTimeout(type, speed);
    } else {
      document.getElementById("typewriter-heading").style.display = "none";

      document.getElementById("mes").style.display = "block";
      audio.pause();
      audio.currentTime = 0;
    }
  }
  console.log("Starting typewriter effect...");
  type();
}

function flip(el) {
  let flip = null;

  document.getElementById("blocker").style.display = "block";
  if (el.classList.contains("photo1")) {
    el.classList.remove("anim1");
    el.classList.add("anim1");
  }
  if (el.classList.contains("photo2")) {
    el.classList.remove("anim2");
    el.classList.add("anim2");
  }
  if (el.classList.contains("photo3")) {
    el.classList.remove("anim3");
    el.classList.add("anim3");
  }
  if (el.classList.contains("photo4")) {
    el.classList.remove("anim4");
    el.classList.add("anim4");
  }

  if (!flipPic.includes(el)) {
    flipPic.push(el);
  }
  if (el.classList.contains("already")) {
    clearTimeout(flip);
    flip = setTimeout(() => {
      document.getElementById("blocker").style.display = "none";
      el.children[0].style.display = "block";
      el.children[1].style.display = "none";
      if (el.classList.contains("photo1")) {
        el.classList.remove("anim1");
      }
      if (el.classList.contains("photo2")) {
        el.classList.remove("anim2");
      }
      if (el.classList.contains("photo3")) {
        el.classList.remove("anim3");
      }
      if (el.classList.contains("photo4")) {
        el.classList.remove("anim4");
      }
      el.classList.remove("already");
      el.style.zIndex = "5";
    }, 1500);
  } else {
    clearTimeout(flip);
    el.style.zIndex = "500";
    flip = setTimeout(() => {
      el.children[0].style.display = "none";
      el.children[1].style.display = "block";
      el.classList.add("already");

      document.getElementById("blocker").style.display = "none";
      //el.classList.remove("anim");
      console.log("blocker");
    }, 5000);
  }

  if (flipPic.length == 4) {
    document.getElementById("blocker").style.display = "block";
    document.getElementById("blocker").style.zIndex = "1000";
    if (disappear == null) {
      disappear = setTimeout(() => {
        triggerDisappear();
      }, 10000);
    }
  }
}

function triggerDisappear() {
  console.log("DISAPPEAR");
  let flip = null;
  clearTimeout(flip);

  for (let index = 0; index < flipPic.length; index++) {
    if (flipPic[index].classList.contains("photo1")) {
      flipPic[index].classList.remove("anim1");
    }
    if (flipPic[index].classList.contains("photo2")) {
      flipPic[index].classList.remove("anim2");
    }
    if (flipPic[index].classList.contains("photo3")) {
      flipPic[index].classList.remove("anim3");
    }
    if (flipPic[index].classList.contains("photo4")) {
      flipPic[index].classList.remove("anim4");
    }
    flip = setTimeout(() => {
      flipPic[index].children[0].style.display = "block";
      flipPic[index].children[1].style.display = "none";

      flipPic[index].classList.add("disappearAnim");
      flipPic[index].classList.remove("already");
      flipPic[index].style.zIndex = "5";
    }, 1500);
  }

  setTimeout(() => {
    document.querySelectorAll(".photo").forEach((el) => {
      el.style.display = "none";
    });
    let ele = document.getElementById("typewriter-heading");
    ele.style.display = "block";
    typeWriter(ele, 80);
  }, 3000);
}

function handleSubmit() {
  const input = document.getElementById("password-input");
  if (input.value.trim() === "💓") {
    document.querySelector(".mainBody").style.display = "block";
    document.querySelector(".intro").style.display = "none";

    audio.play();
  }
}
