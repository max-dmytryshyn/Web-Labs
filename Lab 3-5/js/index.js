import { renderSawList, countTotalLength, openModalWindow, closeModalWindow } from "./dom_utils.js";
const showAllSawsButton = document.getElementById("show_all_saws_button");
const createSawButton = document.getElementById("create_saw_button");
const createSawWindow = document.getElementById("create_saw_window");
const confirmSawCreationButton = document.getElementById("confirm_saw_creation_button");
const closeCreateSawWindowButton = document.getElementById("close_create_saw_window_button");
const searchButton = document.getElementById("search_button");
const cancelSearchButton = document.getElementById("cancel_search_button");
const searchInput = document.getElementById("search_input");
const editSawWindow = document.getElementById("edit_saw_window");
const closeEditSawWindowButton = document.getElementById("close_edit_saw_window_button");
const sortAscButton = document.getElementById("sort_asc_button");
const sortDescButton = document.getElementById("sort_desc_button");
const countButton = document.getElementById("count_button");

//Sample saws array
let saw1 = {
  id: 1,
  materialToSaw: "WOOD",
  driveType: "MECHANICAL",
  sawMaterial: { handleMaterial: "plastic", bladeMaterial: "metal" },
  user: { name: "Max", age: 18 },
  lengthInCm: 1,
};
let saw2 = {
  id: 2,
  materialToSaw: "METAL",
  driveType: "MECHANICAL",
  sawMaterial: { handleMaterial: "plastic", bladeMaterial: "metal" },
  user: { name: "Max", age: 18 },
  lengthInCm: 2,
};
let saw3 = {
  id: 3,
  materialToSaw: "WOOD",
  driveType: "MECHANICAL",
  sawMaterial: { handleMaterial: "plastic", bladeMaterial: "metal" },
  user: { name: "Max", age: 18 },
  lengthInCm: 3,
};
let saw4 = {
  id: 4,
  materialToSaw: "METAL",
  driveType: "MECHANICAL",
  sawMaterial: { handleMaterial: "plastic", bladeMaterial: "metal" },
  user: { name: "Max", age: 18 },
  lengthInCm: 14,
};

let saws = [saw1, saw2, saw3, saw4, saw1, saw2, saw3, saw4, saw1, saw1];
let currentSaws = [...saws];

window.onload = renderSawList(currentSaws);
const editButton = document.getElementsByClassName("saw-card__edit-button");

createSawButton.addEventListener("click", () => {
  openModalWindow(createSawWindow);
});

closeCreateSawWindowButton.addEventListener("click", () => {
  closeModalWindow(createSawWindow);
});

for (let button of editButton) {
  console.log(button);
  button.addEventListener("click", () => {
    openModalWindow(editSawWindow);
  });
}

closeEditSawWindowButton.addEventListener("click", () => {
  closeModalWindow(editSawWindow);
});

searchButton.addEventListener("click", () => {
  event.preventDefault();
  currentSaws = saws.filter((saw) => saw.materialToSaw.includes(searchInput.value.toUpperCase()));
  renderSawList(currentSaws);
});

cancelSearchButton.addEventListener("click", () => {
  event.preventDefault();
  currentSaws = [...saws];
  searchInput.value = "";
  renderSawList(currentSaws);
});

sortAscButton.addEventListener("click", () => {
  currentSaws = currentSaws.sort((a, b) => {
    return b.lengthInCm - a.lengthInCm;
  });
  renderSawList(currentSaws);
});

sortDescButton.addEventListener("click", () => {
  currentSaws = currentSaws.sort(function (a, b) {
    return a.lengthInCm - b.lengthInCm;
  });
  renderSawList(currentSaws);
});

countButton.addEventListener("click", () => {
  countTotalLength(currentSaws);
});
