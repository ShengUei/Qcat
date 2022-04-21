import axios from "axios";

const MEMBER_API_BASE_URL = "http://localhost:8080/api/member/";

class MemberService {
    login(member) {
        return axios.post(MEMBER_API_BASE_URL + "login", member, {withCredentials: true});
    }

    signOut() {
        return axios.get(MEMBER_API_BASE_URL + "signOut", {withCredentials: true});
    }

    getMemberProfiles() {
        return axios.get(MEMBER_API_BASE_URL + "getMemberProfiles", {withCredentials: true});
    }

    registerNewMember(member) {
        return axios.post(MEMBER_API_BASE_URL + "register", member, {withCredentials: true});
    }
}

export default new MemberService();