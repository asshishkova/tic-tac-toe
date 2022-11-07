const field = document.getElementById("field");
const playAgain = document.getElementById("play-again");

const FIELD_SIZE = 3;
const X_MOVE = "x-move";
const O_MOVE = "o-move";
const CELL = "cell";
const SELECTED = "selected";

let currentMove;

const createField = (fieldSize) => {
  field.innerHTML = "";
  currentMove = X_MOVE;
  for (let i = 0; i < fieldSize; i++) {
    const row = document.createElement("tr");
    for (let i = 0; i < fieldSize; i++) {
      const cell = document.createElement("td");
      cell.className = CELL;
      cell.innerHTML = `<div class=${X_MOVE}>X</div>
                        <div class=${O_MOVE}>O</div>`;
      cell.addEventListener("click", ({ target }) => {
        onCellClicked(target);
      });
      cell.addEventListener("mouseenter", ({ target }) => {
        onCellHovered(target);
      });
      cell.addEventListener("mouseleave", ({ target }) => {
        onCellUnhovered(target);
      });
      row.appendChild(cell);
    }
    field.appendChild(row)
  }
}

const onCellClicked = (target) => {
  if (!target.classList.contains(SELECTED)) {
    target.style.display = "block";
    target.className = `${currentMove} ${SELECTED}`;
    target.parentNode.className = `${CELL} ${SELECTED}`;
    currentMove = (currentMove === X_MOVE) ? O_MOVE : X_MOVE;
  }
}

const onCellHovered = (target) => {
  if (!target.classList.contains(SELECTED)) {
    target.getElementsByClassName(currentMove)[0].style.display = "block";
  }
}

const onCellUnhovered = (target) => {
  if (!target.classList.contains(SELECTED)) {
    target.getElementsByClassName(currentMove)[0].style.display = "none";
  }
}

createField(FIELD_SIZE);

playAgain.addEventListener('click', () => createField(FIELD_SIZE));
