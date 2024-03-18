import axios from "axios";

const BASE_URL = "https://api.themoviedb.org/3";

const TMDB_TOKEN =
  "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjMjFlZDdiYTk4OGIxYTU1YTY2NGI5OWQ5NWNhY2M3NyIsInN1YiI6IjY1ZWQzYzNlMWFjMjkyMDE4NjY5ZWUxMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.LFHW80VdFTZ3clNnZC7dLU5R3S-hKK6EhKKyBsXt7Po";

const headers = {
  Authorization: "bearer " + TMDB_TOKEN,
};

export const fetchDataFromApi = async (url, params) => {
  try {
    const { data } = await axios.get(BASE_URL + url, { headers, params });
    return data;
  } catch (err) {
    console.log(err);
    return err;
  }
};
