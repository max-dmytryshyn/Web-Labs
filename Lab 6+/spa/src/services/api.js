import axios from "axios";

export const getAllWithFilters = async (driveType = "", materialToSaw = "", minLength = "", maxLength = "") => {
  return (
    await axios.get(
      `http://127.0.0.1:8000/saws/all/?drive_type=${driveType}&material_to_saw=${materialToSaw}&min_length=${minLength}&max_length=${maxLength}`
    )
  ).data;
};

export const getById = async (id) => {
  return (await axios.get(`http://127.0.0.1:8000/saws/all/${id}/`)).data;
};
