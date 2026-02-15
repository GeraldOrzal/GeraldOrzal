let flipPic = [];

function flip(el) {
  let flip = null;
  el.classList.add("anim");

  if (!flipPic.includes(el)) {
    flipPic.push(el);
  }
  if (el.classList.contains("already")) {
    clearTimeout(flip);
    flip = setTimeout(() => {
      el.children[0].style.display = "block";
      el.children[1].style.display = "none";
      el.classList.remove("anim");
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
      el.classList.remove("anim");
    }, 1500);
  }

  if (flipPic.length == 4) {
    document.getElementById("blocker").style.display = "block";
    document.getElementById("blocker").style.zIndex = "1000";
    setTimeout(() => {
      triggerDisappear();
    }, 5000);
  }
}

function triggerDisappear() {
  console.log("DISAPPEAR");
  let flip = null;
  clearTimeout(flip);

  for (let index = 0; index < flipPic.length; index++) {
    if (flipPic[index].classList.contains("already")) {
      flipPic[index].classList.add("anim");
      flip = setTimeout(() => {
        flipPic[index].children[0].style.display = "block";
        flipPic[index].children[1].style.display = "none";
        flipPic[index].classList.remove("anim");
        flipPic[index].classList.add("disappearAnim");
        flipPic[index].classList.remove("already");
        flipPic[index].style.zIndex = "5";
      }, 1500);
    }
  }

  setTimeout(() => {
    document.querySelectorAll(".photo").forEach((el) => {
      el.style.display = "none";
    });
    let ele = document.getElementById("typewriter-heading");
    ele.style.display = "block";
    typeWriter(ele, 80);
  }, 2500);
}

function handleSubmit() {
  const input = document.getElementById("password-input");
  if (input.value.trim() === "💓") {
    document.querySelector(".mainBody").style.display = "block";
    document.querySelector(".intro").style.display = "none";
  }
}
