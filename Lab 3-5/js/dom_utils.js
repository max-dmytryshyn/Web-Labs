const sawsContainer = document.getElementById("saws_list");
const totalLengthDisplay = document.getElementById("total_length");

const getSawId = (id) => `saw_${id}`;

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
      <p class="saw-card__body__paragraph">Drive type: ${driveType}</p>
      <p class="saw-card__body__paragraph">Handle material: ${sawMaterial.handleMaterial}</p>
      <p class="saw-card__body__paragraph">Blade material: ${sawMaterial.bladeMaterial}</p>
      <p class="saw-card__body__paragraph">User: ${user.name}, ${user.age} y.o.</p>
      <p class="saw-card__body__paragraph">Length: ${lengthInCm} cm</p>
    </div>
    <div class="saw-card__buttons">
      <button class="saw-card__edit-button" id="edit_button_${getSawId(id)}">Edit</button>
      <button class="saw-card__delete-button" id="delete_button_${getSawId(id)}">Delete</button>
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

export const addSawToPage = ({ id, materialToSaw, driveType, sawMaterial, user, lengthInCm }) => {
  sawsContainer.insertAdjacentHTML(
    "afterbegin",
    sawTemplate({ id, materialToSaw, driveType, sawMaterial, user, lengthInCm })
  );
};

export const renderSawList = (saws) => {
  sawsContainer.innerHTML = "";

  for (const saw of saws) {
    addSawToPage(saw);
  }
};

export const openModalWindow = (modalWindow) => {
  modalWindow.style.display = "block";
};

export const closeModalWindow = (modalWindow) => {
  modalWindow.style.display = "none";
};
