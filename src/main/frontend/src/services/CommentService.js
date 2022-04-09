import axios from "axios";

const COMMENT_API_BASE_URL = "http://localhost:8080/api/comment/";

class CommentService {
    getComments(artId) {
        return axios.get(COMMENT_API_BASE_URL + artId, {withCredentials: true});
    }

    writeComment(comment, artId) {
        return axios.post(COMMENT_API_BASE_URL + "writeComment" + "/" + artId, comment, {withCredentials: true});
    }

}

export default new CommentService();