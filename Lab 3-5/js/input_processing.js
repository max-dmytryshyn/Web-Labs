const createMaterialToSawInput = document.getElementById("create_material_to_saw_input");
const createDriveInput = document.getElementById("create_drive_input");
const createHandleMaterialInput = document.getElementById("create_handle_material_input");
const createHandleMaterialInputErrorField = document.getElementById("create_handle_material_input_error");
const createBladeMaterialInput = document.getElementById("create_blade_material_input");
const createBladeMaterialInputErrorField = document.getElementById("create_blade_material_input_error");
const createUserNameInput = document.getElementById("create_user_name_input");
const createUserNameInputErrorField = document.getElementById("create_user_name_input_error");
const createUserAgeInput = document.getElementById("create_user_age_input");
const createUserAgeInputErrorField = document.getElementById("create_user_age_input_error");
const createLengthInput = document.getElementById("create_length_input");
const createLengthInputErrorField = document.getElementById("create_length_input_error");

const editMaterialToSawInput = document.getElementById("edit_material_to_saw_input");
const editDriveInput = document.getElementById("edit_drive_input");
const editHandleMaterialInput = document.getElementById("edit_handle_material_input");
const editHandleMaterialInputErrorField = document.getElementById("edit_handle_material_input_error");
const editBladeMaterialInput = document.getElementById("edit_blade_material_input");
const editBladeMaterialInputErrorField = document.getElementById("edit_blade_material_input_error");
const editUserNameInput = document.getElementById("edit_user_name_input");
const editUserNameInputErrorField = document.getElementById("edit_user_name_input_error");
const editUserAgeInput = document.getElementById("edit_user_age_input");
const editUserAgeInputErrorField = document.getElementById("edit_user_age_input_error");
const editLengthInput = document.getElementById("edit_length_input");
const editLengthInputErrorField = document.getElementById("edit_length_input_error");

// prettier-ignore
const invaidSymbols = ["№", "<", ">", "/", "|", "\\", "#", "!", "~", "&",
                       "$", "@", ";", ".", "?", "%", "*", "₴", "`"];

const validateTextInput = (text) => {
  return !invaidSymbols.some((symbol) => text.includes(symbol));
};

const validateNumberInput = (text) => {
  let point_char_counter = 0;
  for (var i = 0; i < text.length; i++) {
    if (text.charAt(i) < "0" || text.charAt(i) > "9") {
      if (text.charAt(i) == "." && point_char_counter == 0 && i != text.length - 1 && i != 0) {
        point_char_counter++;
      } else {
        return false;
      }
    }
  }
  return true;
};

const trimTextField = (TextField) => {
  TextField.value = String(TextField.value).trim();
};

const trimCreateSawForm = () => {
  trimTextField(createHandleMaterialInput);
  trimTextField(createHandleMaterialInputErrorField);
  trimTextField(createBladeMaterialInput);
  trimTextField(createBladeMaterialInputErrorField);
  trimTextField(createUserNameInput);
  trimTextField(createUserNameInputErrorField);
  trimTextField(createUserAgeInput);
  trimTextField(createUserAgeInputErrorField);
  trimTextField(createLengthInput);
  trimTextField(createLengthInputErrorField);
};

const trimEditSawForm = () => {
  trimTextField(editHandleMaterialInput);
  trimTextField(editHandleMaterialInputErrorField);
  trimTextField(editBladeMaterialInput);
  trimTextField(editBladeMaterialInputErrorField);
  trimTextField(editUserNameInput);
  trimTextField(editUserNameInputErrorField);
  trimTextField(editUserAgeInput);
  trimTextField(editUserAgeInputErrorField);
  trimTextField(editLengthInput);
  trimTextField(editLengthInputErrorField);
};

export const validateCreateSawForm = () => {
  let validated = true;
  trimCreateSawForm();
  if (createHandleMaterialInput.value === "") {
    createHandleMaterialInputErrorField.textContent = "This field is required";
    createHandleMaterialInputErrorField.style.display = "block";
    validated = false;
  } else if (!validateTextInput(createHandleMaterialInput.value)) {
    createHandleMaterialInputErrorField.textContent = "Wrong symbols";
    createHandleMaterialInputErrorField.style.display = "block";
    validated = false;
  } else {
    createHandleMaterialInputErrorField.style.display = "none";
  }

  if (createBladeMaterialInput.value === "") {
    createBladeMaterialInputErrorField.textContent = "This field is required";
    createBladeMaterialInputErrorField.style.display = "block";
    validated = false;
  } else if (!validateTextInput(createBladeMaterialInput.value)) {
    createBladeMaterialInputErrorField.textContent = "Wrong symbols";
    createBladeMaterialInputErrorField.style.display = "block";
    validated = false;
  } else {
    createBladeMaterialInputErrorField.style.display = "none";
  }

  if (createUserNameInput.value === "") {
    createUserNameInputErrorField.textContent = "This field is required";
    createUserNameInputErrorField.style.display = "block";
    validated = false;
  } else if (!validateTextInput(createUserNameInput.value)) {
    createUserNameInputErrorField.textContent = "Wrong symbols";
    createUserNameInputErrorField.style.display = "block";
    validated = false;
  } else {
    createUserNameInputErrorField.style.display = "none";
  }

  if (createUserAgeInput.value === "") {
    createUserAgeInputErrorField.textContent = "This field is required";
    createUserAgeInputErrorField.style.display = "block";
    validated = false;
  } else if (!validateNumberInput(createUserAgeInput.value)) {
    createUserAgeInputErrorField.textContent = "Please enter a valid number";
    createUserAgeInputErrorField.style.display = "block";
    validated = false;
  } else {
    createUserAgeInputErrorField.style.display = "none";
  }

  if (createLengthInput.value === "") {
    createLengthInputErrorField.textContent = "This field is required";
    createLengthInputErrorField.style.display = "block";
    validated = false;
  } else if (!validateNumberInput(createLengthInput.value)) {
    createLengthInputErrorField.textContent = "Please enter a valid number";
    createLengthInputErrorField.style.display = "block";
    validated = false;
  } else {
    createLengthInputErrorField.style.display = "none";
  }

  return validated;
};

export const validateEditSawForm = () => {
  trimEditSawForm();
  let validated = true;
  if (editHandleMaterialInput.value === "") {
    editHandleMaterialInputErrorField.textContent = "This field is required";
    editHandleMaterialInputErrorField.style.display = "block";
    validated = false;
  } else if (!validateTextInput(editHandleMaterialInput.value)) {
    editHandleMaterialInputErrorField.textContent = "Wrong symbols";
    editHandleMaterialInputErrorField.style.display = "block";
    validated = false;
  } else {
    editHandleMaterialInputErrorField.style.display = "none";
  }

  if (editBladeMaterialInput.value === "") {
    editBladeMaterialInputErrorField.textContent = "This field is required";
    editBladeMaterialInputErrorField.style.display = "block";
    validated = false;
  } else if (!validateTextInput(editBladeMaterialInput.value)) {
    editBladeMaterialInputErrorField.textContent = "Wrong symbols";
    editBladeMaterialInputErrorField.style.display = "block";
    validated = false;
  } else {
    editBladeMaterialInputErrorField.style.display = "none";
  }

  if (editUserNameInput.value === "") {
    editUserNameInputErrorField.textContent = "This field is required";
    editUserNameInputErrorField.style.display = "block";
    validated = false;
  } else if (!validateTextInput(editUserNameInput.value)) {
    editUserNameInputErrorField.textContent = "Wrong symbols";
    editUserNameInputErrorField.style.display = "block";
    validated = false;
  } else {
    editUserNameInputErrorField.style.display = "none";
  }

  if (editUserAgeInput.value === "") {
    editUserAgeInputErrorField.textContent = "This field is required";
    editUserAgeInputErrorField.style.display = "block";
    validated = false;
  } else if (!validateNumberInput(editUserAgeInput.value)) {
    editUserAgeInputErrorField.textContent = "Please enter a valid number";
    editUserAgeInputErrorField.style.display = "block";
    validated = false;
  } else {
    editUserAgeInputErrorField.style.display = "none";
  }

  if (editLengthInput.value === "") {
    editLengthInputErrorField.textContent = "This field is required";
    editLengthInputErrorField.style.display = "block";
    validated = false;
  } else if (!validateNumberInput(editLengthInput.value)) {
    editLengthInputErrorField.textContent = "Please enter a valid number";
    editLengthInputErrorField.style.display = "block";
    validated = false;
  } else {
    editLengthInputErrorField.style.display = "none";
  }

  return validated;
};

export const getCreateInputValues = () => {
  return {
    materialToSaw: createMaterialToSawInput.value,
    driveType: createDriveInput.value,
    sawMaterial: {
      handleMaterial: createHandleMaterialInput.value,
      bladeMaterial: createBladeMaterialInput.value,
    },
    user: { name: createUserNameInput.value, age: parseFloat(createUserAgeInput.value) },
    lengthInCm: parseFloat(createLengthInput.value),
  };
};

export const getEditInputValues = () => {
  return {
    materialToSaw: editMaterialToSawInput.value,
    driveType: editDriveInput.value,
    sawMaterial: {
      handleMaterial: editHandleMaterialInput.value,
      bladeMaterial: editBladeMaterialInput.value,
    },
    user: { name: editUserNameInput.value, age: parseFloat(editUserAgeInput.value) },
    lengthInCm: parseFloat(editLengthInput.value),
  };
};

export const setEditInputValues = ({ materialToSaw, driveType, sawMaterial, user, lengthInCm }) => {
  editMaterialToSawInput.value = materialToSaw;
  editDriveInput.value = driveType;
  editHandleMaterialInput.value = sawMaterial.handleMaterial;
  editBladeMaterialInput.value = sawMaterial.bladeMaterial;
  editUserNameInput.value = user.name;
  editUserAgeInput.value = user.age;
  editLengthInput.value = lengthInCm;
};
