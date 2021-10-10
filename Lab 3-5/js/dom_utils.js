const sawsContainer = document.getElementById("saws_list");
const totalLengthDisplay = document.getElementById("total_length");
const editSawWindow = document.getElementById("edit_saw_window");
const editSawWindowHeaderText = document.getElementById("edit_saw_window_header_text");
const deleteSawWindow = document.getElementById("delete_saw_window");
const deleteSawWindowHeaderText = document.getElementById("delete_saw_window_header_text");

const getSawId = (id) => `saw_${id}`;
const EDIT_BUTTON_PREFIX = "edit_button_";
const DELETE_BUTTON_PREFIX = "delete_button_";

const sawTemplate = ({ id, materialToSaw, driveType, sawMaterial, user, lengthInCm }) =>
  `
  <div id="${getSawId(id)}" class="saw-card">
    <img
      src="https://www.stanleytools.com/NA/product/images/3000x3000x96/STHT20348/STHT20348_1.jpg"
      class="saw-card__image"
      width="200px"
      alt="card image"
    />
    <div class="saw-card__body">
      <h5 class="saw-card__body__title">Saw №${id}</h5>
      <p class="saw-card__body__paragraph">Material to saw: ${materialToSaw}</p>
      <p class="saw-card__body__paragraph">Drive type: ${
        driveType == "INTERNAL_COMBUSTION_ENGINE" ? "ICE" : driveType
      }</p>
      <p class="saw-card__body__paragraph">Handle material: ${sawMaterial.handleMaterial}</p>
      <p class="saw-card__body__paragraph">Blade material: ${sawMaterial.bladeMaterial}</p>
      <p class="saw-card__body__paragraph">User: ${user.name}, ${user.age} y.o.</p>
      <p class="saw-card__body__paragraph">Length: ${lengthInCm} cm</p>
    </div>
    <div class="saw-card__buttons">
      <button class="saw-card__edit-button" id="${EDIT_BUTTON_PREFIX}${getSawId(id)}">Edit</button>
      <button class="saw-card__delete-button" id="${DELETE_BUTTON_PREFIX}${getSawId(id)}">Delete</button>
    </div>
  </div>
`;

export const countTotalLength = (saws) => {
  let totalLength = 0;
  for (const saw of saws) {
    totalLength += saw.lengthInCm;
  }
  totalLengthDisplay.textContent = `${totalLength} cm`;
};

const addSawToPage = ({ id, materialToSaw, driveType, sawMaterial, user, lengthInCm }, onDeleteSaw) => {
  sawsContainer.insertAdjacentHTML(
    "afterbegin",
    sawTemplate({ id, materialToSaw, driveType, sawMaterial, user, lengthInCm })
  );

  const edit_button = document.getElementById(`${EDIT_BUTTON_PREFIX}${getSawId(id)}`);
  const delete_button = document.getElementById(`${DELETE_BUTTON_PREFIX}${getSawId(id)}`);

  edit_button.addEventListener("click", () => {
    editSawWindowHeaderText.textContent = `Edit saw №${id}`;
    openModalWindow(editSawWindow);
  });

  delete_button.addEventListener("click", () => {
    deleteSawWindowHeaderText.textContent = `Delete saw №${id}?`;
    openModalWindow(deleteSawWindow);
    onDeleteSaw(id);
  });
};

export const renderSawList = (saws, onDeleteSaw) => {
  sawsContainer.innerHTML = "";

  for (const saw of saws) {
    addSawToPage(saw, onDeleteSaw);
  }
};

export const openModalWindow = (modalWindow) => {
  modalWindow.style.display = "block";
};

export const closeModalWindow = (modalWindow) => {
  modalWindow.style.display = "none";
};
