import axios from "axios";

const ARTICLELIST_API_URL = "http://localhost:8080/article";

class ArticleListService {
    getArticleList() {
        return axios.get(ARTICLELIST_API_URL)
    }
}

export default new ArticleListService();