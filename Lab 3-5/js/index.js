import { renderSawList, countTotalLength, openModalWindow, closeModalWindow, renderButtons } from "./dom_utils.js";
import { validateCreateSawForm, validateEditSawForm } from "./input_validation.js";

const showAllSawsButton = document.getElementById("show_all_saws_button");

const createSawButton = document.getElementById("create_saw_button");
const createSawWindow = document.getElementById("create_saw_window");
const createSawForm = document.getElementById("create_saw_form");
const confirmSawCreationButton = document.getElementById("confirm_saw_creation_button");
const closeCreateSawWindowButton = document.getElementById("close_create_saw_window_button");

const searchButton = document.getElementById("search_button");
const cancelSearchButton = document.getElementById("cancel_search_button");
const searchInput = document.getElementById("search_input");

const sortAscButton = document.getElementById("sort_asc_button");
const sortDescButton = document.getElementById("sort_desc_button");
const countButton = document.getElementById("count_button");

const editSawWindow = document.getElementById("edit_saw_window");
const editSawForm = document.getElementById("edit_saw_form");
const confirmSawEditingButton = document.getElementById("confirm_saw_editing_button");
const closeEditSawWindowButton = document.getElementById("close_edit_saw_window_button");

const deleteSawWindow = document.getElementById("delete_saw_window");
const confirmSawDeletionButton = document.getElementById("confirm_saw_deletion_button");
const cancelSawDeletionButton = document.getElementById("cancel_saw_deletion_button");
const closeDeleteSawWindowButton = document.getElementById("close_delete_saw_window_button");

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
renderButtons();

showAllSawsButton.addEventListener("click", () => {
  currentSaws = [...saws];
  renderSawList(currentSaws);
  renderButtons();
});

createSawButton.addEventListener("click", () => {
  openModalWindow(createSawWindow);
});

confirmSawCreationButton.addEventListener("click", (event) => {
  event.preventDefault();
  if (validateCreateSawForm()) {
    closeModalWindow(createSawWindow);
    createSawForm.reset();
  }
});

closeCreateSawWindowButton.addEventListener("click", () => {
  closeModalWindow(createSawWindow);
});

confirmSawEditingButton.addEventListener("click", (event) => {
  event.preventDefault();
  if (validateEditSawForm()) {
    closeModalWindow(editSawWindow);
    editSawForm.reset();
  }
});

closeEditSawWindowButton.addEventListener("click", () => {
  closeModalWindow(editSawWindow);
});

cancelSawDeletionButton.addEventListener("click", () => {
  closeModalWindow(deleteSawWindow);
});

confirmSawDeletionButton.addEventListener("click", () => {
  closeModalWindow(deleteSawWindow);
});

closeDeleteSawWindowButton.addEventListener("click", () => {
  closeModalWindow(deleteSawWindow);
});

searchButton.addEventListener("click", (event) => {
  event.preventDefault();
  currentSaws = saws.filter((saw) => saw.materialToSaw.includes(searchInput.value.toUpperCase()));
  renderSawList(currentSaws);
  renderButtons();
});

cancelSearchButton.addEventListener("click", (event) => {
  event.preventDefault();
  currentSaws = [...saws];
  searchInput.value = "";
  renderSawList(currentSaws);
  renderButtons();
});

sortAscButton.addEventListener("click", () => {
  currentSaws = currentSaws.sort((a, b) => {
    return b.lengthInCm - a.lengthInCm;
  });
  renderSawList(currentSaws);
  renderButtons();
});

sortDescButton.addEventListener("click", () => {
  currentSaws = currentSaws.sort(function (a, b) {
    return a.lengthInCm - b.lengthInCm;
  });
  renderSawList(currentSaws);
  renderButtons();
});

countButton.addEventListener("click", () => {
  countTotalLength(currentSaws);
});
