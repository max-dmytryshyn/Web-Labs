import axios from "axios";

export const getAllSawsWithFilters = async (driveType = "", materialToSaw = "", minLength = "", maxLength = "") => {
  return (
    await axios.get(
      `http://127.0.0.1:8000/saws/all/?drive_type=${driveType}&material_to_saw=${materialToSaw}&min_length=${minLength}&max_length=${maxLength}`
    )
  ).data;
};

export const getSawById = async (id) => {
  return (await axios.get(`http://127.0.0.1:8000/saws/all/${id}/`)).data;
};

export const login = async (email, password) => {
  return await axios.post(`http://127.0.0.1:8000/saws_shop_users/login/`, {
    email: email,
    password: password,
  });
};

export const createUser = async (first_name, last_name, email, password) => {
  return await axios.post(`http://127.0.0.1:8000/saws_shop_users/all/`, {
    first_name: first_name,
    last_name: last_name,
    email: email,
    password: password,
  });
};
