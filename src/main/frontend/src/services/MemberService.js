import axios from "axios";

const MEMBER_API_BASE_URL = "http://localhost:8080/api/member/";

class MemberService {
    login(member) {
        return axios.post(MEMBER_API_BASE_URL + "login", member, {withCredentials: true});
        // return axios.post(MEMBER_API_BASE_URL + "login", member);
    }

    registerNewMember(member) {
        return axios.post(MEMBER_API_BASE_URL + "register", member);
    }
}

export default new MemberService();