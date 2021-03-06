const BASE_URL = "http://127.0.0.1:8080";
const RESOURCE_URL = `${BASE_URL}/saws`;

const baseRequest = async ({ urlPath = "", method = "GET", body = null }) => {
  try {
    const reqParams = {
      method,
      headers: {
        "Content-Type": "application/json",
      },
    };

    if (body) {
      reqParams.body = JSON.stringify(body);
    }
    return await fetch(`${RESOURCE_URL}${urlPath}`, reqParams);
  } catch (error) {
    console.error("HTTP ERROR: ", error);
  }
};

export const getAllSaws = async () => {
  const rawRes = await baseRequest({ method: "GET" });

  return rawRes.json();
};

export const postSaw = (body) => baseRequest({ method: "POST", body: body });

export const updateSaw = (id, body) => baseRequest({ urlPath: `/${id}`, method: "PUT", body: body });

export const deleteSaw = (id) => baseRequest({ urlPath: `/${id}`, method: "DELETE" });
