export const baseUrl =
  "https://newsapi.org/v2/everything?" +
  "sortBy=popularity&" +
  "apiKey=919fb8f18ecc48a6b3d75e8d44206b90";

const corsProxyUrl = "https://cors-anywhere.herokuapp.com/";

export const checkServerResponse = (res) => {
  return res.ok ? res.json() : Promise.reject(`Error: ${res.status}`);
};

export function search(query) {
  const searchUrl = `${corsProxyUrl}${baseUrl}&q=${encodeURIComponent(query)}`;
  return fetch(searchUrl, {
    method: "GET",
    headers: {
      "Content-type": "application/json",
    },
  }).then((res) => {
    return checkServerResponse(res);
  });
}
