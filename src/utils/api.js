import { BaseUrl } from "./constants";

export const checkServerResponse = (res) => {
  return res.ok ? res.json() : Promise.reject(`Error: ${res.status}`);
};

export function search(query) {
  const searchUrl = `${BaseUrl}&q=${encodeURIComponent(query)}`;
  return fetch(searchUrl, {
    method: "GET",
    headers: {
      "Content-type": "application/json",
    },
  }).then((res) => {
    return checkServerResponse(res);
  });
}
