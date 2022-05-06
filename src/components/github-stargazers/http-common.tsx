import axios from "axios";

const endpoint = "https://api.github.com"

export default axios.create({
  baseURL: endpoint,
  method: "GET",
  headers: {
    accept: "application/vnd.github.v3+json"
  }
});
