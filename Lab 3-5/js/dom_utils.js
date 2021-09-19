const sawsContainer = document.getElementById("saws_list");

const getSawId = (id) => `saw-${id}`;

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
      <p class="saw-card__body__paragraph">Saw handle material: ${sawMaterial.handleMaterial}</p>
      <p class="saw-card__body__paragraph">Saw blade material: ${sawMaterial.bladeMaterial}</p>
      <p class="saw-card__body__paragraph">User: ${user.name}, ${user.age} y.o.</p>
      <p class="saw-card__body__paragraph">Length: ${lengthInCm} cm</p>
    </div>
  </div>
`;

export const addSawToPage = ({ id, materialToSaw, driveType, sawMaterial, user, lengthInCm }) => {
  sawsContainer.insertAdjacentHTML(
    "afterbegin",
    sawTemplate({ id, materialToSaw, driveType, sawMaterial, user, lengthInCm })
  );
};

export const renderSawList = (items) => {
  sawsContainer.innerHTML = "";

  for (const item of items) {
    addSawToPage(item);
  }
};
