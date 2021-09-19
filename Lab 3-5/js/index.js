import { renderSawList, countTotalLength } from "./dom_utils.js";
const searchButton = document.getElementById("search_button");
const searchInput = document.getElementById("search_input");
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
let current_saws = [...saws];

window.onload = renderSawList(current_saws);

function test() {
  console.log("OK");
}

searchButton.addEventListener("click", () => {});

sortAscButton.addEventListener("click", () => {
  current_saws = current_saws.sort(function (a, b) {
    return b.lengthInCm - a.lengthInCm;
  });
  renderSawList(current_saws);
});

sortDescButton.addEventListener("click", () => {
  current_saws = current_saws.sort(function (a, b) {
    return a.lengthInCm - b.lengthInCm;
  });
  renderSawList(current_saws);
});

countButton.addEventListener("click", () => {
  countTotalLength(current_saws);
});
