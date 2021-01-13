import axios from "axios";
import store from "../state/store/store";

const API_URL = "https://newsroom-api.herokuapp.com/api";
const Articles = {
  async index() {
    let response = await axios.get(API_URL + "/articles");
    store.dispatch({ type: "UPDATE_ARTICLE_INDEX", payload: response.data });
  },
};

export default Articles;
