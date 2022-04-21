import React, {Component} from 'react';
import MemberService from "../services/MemberService";

class UserComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            member: ''
        };

        this.SignOutHandler = this.SignOutHandler.bind(this);
    }

    componentDidMount() {
        MemberService.getMemberProfiles()
            .then((response) => {
                this.setState({
                    member: response.data
                })
            })
            .catch((error) => {
                alert(error.response.data)
            })
    }

    SignOutHandler() {
        MemberService.signOut()
            .then((response) => {
                alert(response.data);
                window.location.href = '/login';
            })
    }

    render() {
        return (
                <div className="dropdown" style={{position: "fixed", bottom: 30, marginLeft: 50}}>
                    <button className="btn btn-light dropdown-toggle" type="button" id="dropdownMenuButton1"
                            data-bs-toggle="dropdown" aria-expanded="false">
                        <img src="http://localhost:8080/images/profile.png" alt={""} style={{width: 50, marginRight: 10}}/>
                        {this.state.member.username}
                    </button>
                    <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                        <li className={"dropdown-item"} onClick={this.SignOutHandler}>Sign Out</li>
                    </ul>
                </div>
        );
    }
}

export default UserComponent;