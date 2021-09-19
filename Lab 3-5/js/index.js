import { renderSawList } from "./dom_utils.js";
//Searching elements
const searchButton = document.getElementById("search_button");
const searchInput = document.getElementById("search_input");
//Sorting elements
const sortAscButton = document.getElementById("sort_asc_button");
const sortDescButton = document.getElementById("sort_desc_button");
//Counting elements
const countButton = document.getElementById("count_button");
const totalLengthDisplay = document.getElementById("total_length");
//Sample saws array
let saw1 = {
  id: 1,
  materialToSaw: "WOOD",
  driveType: "MECHANICAL",
  sawMaterial: { handleMaterial: "plastic", bladeMaterial: "metal" },
  user: { name: "Max", age: 18 },
  lengthInCm: 16.5,
};
let saw2 = {
  id: 2,
  materialToSaw: "WOOD",
  driveType: "MECHANICAL",
  sawMaterial: { handleMaterial: "plastic", bladeMaterial: "metal" },
  user: { name: "Max", age: 18 },
  lengthInCm: 16.5,
};
let saw3 = {
  id: 3,
  materialToSaw: "WOOD",
  driveType: "MECHANICAL",
  sawMaterial: { handleMaterial: "plastic", bladeMaterial: "metal" },
  user: { name: "Max", age: 18 },
  lengthInCm: 16.5,
};
let saw4 = {
  id: 4,
  materialToSaw: "WOOD",
  driveType: "MECHANICAL",
  sawMaterial: { handleMaterial: "plastic", bladeMaterial: "metal" },
  user: { name: "Max", age: 18 },
  lengthInCm: 16.5,
};
let saws = [saw1, saw2, saw3, saw4, saw1, saw1, saw1, saw1, saw1, saw1];

window.onload = renderSawList(saws);

function test() {
  console.log("OK");
}

searchButton.addEventListener("click", () => {
  test();
});

sortAscButton.addEventListener("click", () => {
  test();
});

sortDescButton.addEventListener("click", () => {
  test();
});

countButton.addEventListener("click", () => {
  test();
});
