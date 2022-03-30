import axios from "axios";

const ARTICLE_API_BASE_URL = "http://localhost:8080/api/article";

class ArticleService {
    getArticles() {
        return axios.get(ARTICLE_API_BASE_URL, {withCredentials: true});
    }
}

export default new ArticleService();