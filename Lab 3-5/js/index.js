import { renderSawList, countTotalLength, openModalWindow, closeModalWindow, renderButtons } from "./dom_utils.js";
import { validateCreateSawForm, validateEditSawForm } from "./input_validation.js";
import { getAllSaws } from "./api.js";

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

let saws = [];

const refetchAllSaws = async () => {
  saws = await getAllSaws();
  renderSawList(saws);
};

window.onload = refetchAllSaws();
renderButtons();

showAllSawsButton.addEventListener("click", () => {
  refetchAllSaws();
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

searchButton.addEventListener("click", async (event) => {
  event.preventDefault();
  saws = await getAllSaws();
  saws = saws.filter((saw) => saw.materialToSaw.includes(searchInput.value.toUpperCase()));
  renderSawList(saws);
  renderButtons();
});

cancelSearchButton.addEventListener("click", (event) => {
  event.preventDefault();
  searchInput.value = "";
  refetchAllSaws();
  renderButtons();
});

sortAscButton.addEventListener("click", () => {
  saws = saws.sort((a, b) => {
    return b.lengthInCm - a.lengthInCm;
  });
  renderSawList(saws);
  renderButtons();
});

sortDescButton.addEventListener("click", () => {
  saws = saws.sort(function (a, b) {
    return a.lengthInCm - b.lengthInCm;
  });
  renderSawList(saws);
  renderButtons();
});

countButton.addEventListener("click", () => {
  countTotalLength(saws);
});
