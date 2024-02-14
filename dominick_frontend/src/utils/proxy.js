const express = require("express");
const fetch = require("node-fetch");
const app = express();
const PORT = 3001;

app.get("/search", async (req, res) => {
  try {
    const { q } = req.query;
    const baseUrl =
      "https://newsapi.org/v2/everything?" +
      "sortBy=popularity&" +
      "apiKey=919fb8f18ecc48a6b3d75e8d44206b90";

    const searchUrl = `${baseUrl}&q=${encodeURIComponent(q)}`;
    const response = await fetch(searchUrl);
    const data = await response.json();
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
});

app.listen(PORT, () => {
  console.log(`Proxy server is running on port ${PORT}`);
});
