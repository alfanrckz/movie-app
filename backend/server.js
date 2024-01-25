const express = require("express");
const axios = require("axios");

const app = express();
const port = 5000;

const apiKey = "4019ec549fe1c69f8adfaf718e190f71";
const baseURL = "https://api.themoviedb.org/3";

app.use(express.json());

//movies popular
app.get("/api/movies/popular", async (req, res) => {
  try {
    const response = await axios.get(`${baseURL}/movie/popular`, {
      params: {
        api_key: apiKey,
      },
    });
    if (response.data && response.data.results) {
      res.json(response.data.results);
    } else {
      throw new Error("No results found");
    }
  } catch (error) {
    console.error("Error Fetching movies", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

//movies details
app.get("api/movies/:id", async (req, res) => {
  const { id } = req.params;

  try {
    const response = await axios.get(`${baseURL}/movie/${id}`, {
      params: {
        api_key: apiKey,
      },
    });
    if (response.data) {
      res.json(response.data);
    } else {
      throw new Error("No movie details found");
    }
  } catch (error) {
    console.error(`Error fetching movie details for ID ${id}`, error.message);
    res
      .status(500)
      .json({ error: "Internal Server Error", message: error.message });
  }
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
