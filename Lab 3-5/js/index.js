import { renderSawList, countTotalLength, openModalWindow, closeModalWindow } from "./dom_utils.js";
import {
  validateCreateSawForm,
  validateEditSawForm,
  getCreateInputValues,
  getEditInputValues,
  setEditInputValues,
} from "./input_processing.js";
import { getAllSaws, postSaw, updateSaw, deleteSaw } from "./api.js";

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
const editSawWindowHeaderText = document.getElementById("edit_saw_window_header_text");
const editSawForm = document.getElementById("edit_saw_form");
const confirmSawEditingButton = document.getElementById("confirm_saw_editing_button");
const closeEditSawWindowButton = document.getElementById("close_edit_saw_window_button");

const deleteSawWindow = document.getElementById("delete_saw_window");
const deleteSawWindowHeaderText = document.getElementById("delete_saw_window_header_text");
const confirmSawDeletionButton = document.getElementById("confirm_saw_deletion_button");
const cancelSawDeletionButton = document.getElementById("cancel_saw_deletion_button");
const closeDeleteSawWindowButton = document.getElementById("close_delete_saw_window_button");

let saws = [];

const refetchAllSaws = async () => {
  saws = await getAllSaws();
  renderSawList(saws, prepareDeleteSawWindow, prepareUpdateSawWindow);
};

const prepareDeleteSawWindow = async (id) => {
  deleteSawWindowHeaderText.textContent = `Delete saw №${id}?`;
  openModalWindow(deleteSawWindow);

  confirmSawDeletionButton.addEventListener(
    "click",
    async () => {
      await deleteSaw(id);
      closeModalWindow(deleteSawWindow);
      refetchAllSaws();
    },
    { once: true }
  );
};

const prepareUpdateSawWindow = (id) => {
  editSawWindowHeaderText.textContent = `Edit saw №${id}`;
  openModalWindow(editSawWindow);
  setEditInputValues(saws.find((saw) => saw.id == id));

  confirmSawEditingButton.addEventListener(
    "click",
    async (event) => {
      event.preventDefault();
      if (validateEditSawForm()) {
        await updateSaw(id, getEditInputValues());
        closeModalWindow(editSawWindow);
        editSawForm.reset();
        refetchAllSaws();
      }
    },
    { once: true }
  );
};

createSawButton.addEventListener("click", () => {
  openModalWindow(createSawWindow);
});

confirmSawCreationButton.addEventListener("click", async (event) => {
  event.preventDefault();
  if (validateCreateSawForm()) {
    await postSaw(getCreateInputValues());
    closeModalWindow(createSawWindow);
    createSawForm.reset();
    refetchAllSaws();
  }
});

closeCreateSawWindowButton.addEventListener("click", () => {
  closeModalWindow(createSawWindow);
});

closeEditSawWindowButton.addEventListener("click", () => {
  closeModalWindow(editSawWindow);
});

cancelSawDeletionButton.addEventListener("click", () => {
  closeModalWindow(deleteSawWindow);
});

closeDeleteSawWindowButton.addEventListener("click", () => {
  closeModalWindow(deleteSawWindow);
});

showAllSawsButton.addEventListener("click", () => {
  refetchAllSaws();
});

searchButton.addEventListener("click", async (event) => {
  event.preventDefault();
  saws = await getAllSaws();
  saws = saws.filter((saw) => saw.materialToSaw.includes(searchInput.value.toUpperCase()));
  renderSawList(saws, prepareDeleteSawWindow, prepareUpdateSawWindow);
});

cancelSearchButton.addEventListener("click", (event) => {
  event.preventDefault();
  searchInput.value = "";
  refetchAllSaws();
});

sortAscButton.addEventListener("click", () => {
  saws = saws.sort((a, b) => {
    return b.lengthInCm - a.lengthInCm;
  });
  renderSawList(saws, prepareDeleteSawWindow, prepareUpdateSawWindow);
});

sortDescButton.addEventListener("click", () => {
  saws = saws.sort(function (a, b) {
    return a.lengthInCm - b.lengthInCm;
  });
  renderSawList(saws, prepareDeleteSawWindow, prepareUpdateSawWindow);
});

countButton.addEventListener("click", () => {
  countTotalLength(saws);
});

refetchAllSaws();
