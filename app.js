function init() {
  const numberOfBoxes = 100;
  function createBox(index) {
    const box = document.createElement("div");
    box.innerText = index;
    box.id = index;
    document.querySelector(".grid").appendChild(box);
  }
  for (let i = 1; i < 101; i++) {
    createBox(i);
  }
  const position = 1;
  const ghostOne = 55;
  const ghostTwo = 56;
  const ghostThree = 65;
  const ghostFour = 66;
  document.getElementById(position).classList.add("cat");
  document.getElementById(ghostOne).classList.add("ghost");
  document.getElementById(ghostTwo).classList.add("ghost");
  document.getElementById(ghostThree).classList.add("ghost");
  document.getElementById(ghostFour).classList.add("ghost");

  document.getElementById(13).classList.add("border");
  document.getElementById(5).classList.add("border");
  document.getElementById(26).classList.add("border");
  document.getElementById(62).classList.add("border");
  document.getElementById(82).classList.add("border");
  document.getElementById(85).classList.add("border");
  document.getElementById(97).classList.add("border");
  document.getElementById(89).classList.add("border");
  document.getElementById(70).classList.add("border");
  document.getElementById(68).classList.add("border");
  document.getElementById(33).classList.add("border");
  document.getElementById(35).classList.add("border");
  document.getElementById(29).classList.add("border");
  document.getElementById(49).classList.add("border");

  document.getElementById(21).classList.add("border");
  document.getElementById(41).classList.add("border");
  document.getElementById(10).classList.add("border");
  document.getElementById(18).classList.add("border");
  document.getElementById(38).classList.add("border");
  document.getElementById(54).classList.add("border");
  document.getElementById(64).classList.add("border");
  document.getElementById(74).classList.add("border");
  document.getElementById(75).classList.add("border");
  document.getElementById(76).classList.add("border");
  document.getElementById(77).classList.add("border");
  document.getElementById(67).classList.add("border");
  document.getElementById(57).classList.add("border");

  const elements = document.querySelectorAll(".grid div");
  Array.from(elements).forEach((element) => {
    element.classList.toggle("food", !element.classList.contains("border"));
  });
}

const noRight = [
  4, 9, 12, 17, 25, 28, 32, 34, 37, 48, 53, 56, 61, 63, 66, 69, 73, 81, 84, 88,
  96,
];

const noLeft = [
  6, 14, 19, 22, 27, 30, 34, 36, 39, 42, 50, 55, 58, 63, 65, 69, 78, 83, 86, 90,
  98,
];

const noDown = [
  3, 8, 11, 16, 19, 23, 25, 28, 31, 39, 44, 45, 46, 47, 52, 58, 60, 65, 66, 72,
  79, 87, 65, 66,
];

const noUp = [
  15, 20, 23, 28, 31, 36, 39, 43, 45, 48, 51, 59, 72, 78, 80, 84, 86, 87, 92,
  95, 99,
];

let position = 1;
let score = 0;
document.addEventListener("keydown", function (e) {
  switch (e.keyCode) {
    case 39:
      let oldPosition = position;
      if (oldPosition % 10 != 0 && !noRight.includes(oldPosition)) {
        position = position + 1;
        document.getElementById(oldPosition).classList.remove("cat");
        document.getElementById(position).classList.add("cat");
        if (document.getElementById(position).classList.contains("food")) {
          document.getElementById(position).classList.remove("food");
          score += 100;
          document.querySelector(".scorecount").innerHTML = score;
        }
        document.querySelector(".cat").style.transform = "rotate(0deg)";
      }
      break;
    case 37:
      let oldSecondPosition = position;
      if (oldSecondPosition % 10 != 1 && !noLeft.includes(oldSecondPosition)) {
        position = position - 1;
        document.getElementById(oldSecondPosition).classList.remove("cat");
        document.getElementById(position).classList.add("cat");
        if (document.getElementById(position).classList.contains("food")) {
          document.getElementById(position).classList.remove("food");
          score += 100;
          document.querySelector(".scorecount").innerHTML = score;
        }
        document.querySelector(".cat").style.transform = "scaleX(-1)";
      }
      break;
    case 38:
      let oldThirdPosition = position;
      if (oldThirdPosition > 10 && !noUp.includes(oldThirdPosition)) {
        position = position - 10;
        document.getElementById(oldThirdPosition).classList.remove("cat");
        document.getElementById(position).classList.add("cat");
        if (document.getElementById(position).classList.contains("food")) {
          document.getElementById(position).classList.remove("food");
          score += 100;
          document.querySelector(".scorecount").innerHTML = score;
        }
        document.querySelector(".cat").style.transform = "rotate(270deg)";
      }
      break;
    case 40:
      let oldFourthPosition = position;
      if (oldFourthPosition < 91 && !noDown.includes(oldFourthPosition)) {
        position = position + 10;
        document.getElementById(oldFourthPosition).classList.remove("cat");
        document.getElementById(position).classList.add("cat");
        if (document.getElementById(position).classList.contains("food")) {
          document.getElementById(position).classList.remove("food");
          score += 100;
          document.querySelector(".scorecount").innerHTML = score;
        }
        document.querySelector(".cat").style.transform = "rotate(90deg)";
      }
      break;
  }
});

setInterval(() => {
  const currentGhost = document.querySelector(".ghost");
  let currentGhostId = parseInt(currentGhost.id);
  const direction = Math.floor(Math.random() * 4);
  switch (direction) {
    case 0:
      if (!noLeft.includes(currentGhostId) && currentGhostId % 10 != 1) {
        currentGhostId -= 1;
        document.getElementById(currentGhostId).classList.add("ghost");
        currentGhost.classList.remove("ghost");
        // currentGhost.id = currentGhostId;
        // coneole.log(currentGhost.id);
      } else {
        console.log("anything");
      }
      break;
    case 1:
      if (!noRight.includes(currentGhostId) && currentGhostId % 10 != 0) {
        currentGhostId += 1;
        document.getElementById(currentGhostId).classList.add("ghost");
        currentGhost.classList.remove("ghost");
        // currentGhost.id = currentGhostId;
      } else {
        console.log("anything");
      }
      break;
    case 2:
      if (!noUp.includes(currentGhostId)) {
        currentGhostId -= 10;
        document.getElementById(currentGhostId).classList.add("ghost");
        currentGhost.classList.remove("ghost");
        // currentGhost.id = currentGhostId;
      } else {
        console.log("anything");
      }
      break;
    case 3:
      if (!noDown.includes(currentGhostId)) {
        currentGhostId += 10;
        document.getElementById(currentGhostId).classList.add("ghost");
        currentGhost.classList.remove("ghost");
        // currentGhost.id = currentGhostId;
      } else {
        console.log("anything");
      }
      break;
  }
  console.log(currentGhostId);
}, 1000);

window.addEventListener("DOMContentLoaded", init);
