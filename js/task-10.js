const inputAmount = document.querySelector("input");
const createBtn = document.querySelector("[data-create]");
const destroyBtn = document.querySelector("[data-destroy]");
const outputBoxes = document.querySelector("#boxes");

let lastSize = 30;

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

function generateBox(size) {
  const box = document.createElement("div");
  box.style.width = `${size}px`;
  box.style.height = `${size}px`;
  box.style.borderRadius = "4px";
  box.style.backgroundColor = getRandomHexColor(); // #FFFFFF

  return box;
}

function createBoxes(amount) {
  const boxList = [];
  for (let n = 0; n < amount; n++) {
    const box = generateBox(lastSize);
    lastSize += 10;
    boxList.push(box);
  }

  outputBoxes.append(...boxList);
}

createBtn.addEventListener("click", () => {
  const amount = inputAmount.value;
  if (amount !== "") {
    createBoxes(Number(amount));
  } else {
    alert("Введіть кількість елементів");
  }
});

destroyBtn.addEventListener("click", () => {
  outputBoxes.innerHTML = "";
  inputAmount.value = "";
  lastSize = 30;
});
