import React, {Component} from 'react';
import '../signin.css';
import MemberService from "../services/MemberService";

class RegisterNewMemberComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            account: '',
            password: '',
            username: '',
            email: '',
            birthday: '',
            errMsg: ''
        };

        this.changeAccountHandler = this.changeAccountHandler.bind(this);
        this.changePasswordHandler = this.changePasswordHandler.bind(this);
        this.changeUserNameHandler = this.changeUserNameHandler.bind(this);
        this.changeEmailHandler = this.changeEmailHandler.bind(this);
        this.changeBirthdayHandler = this.changeBirthdayHandler.bind(this);
    }

    registerHandler = (event) => {
        event.preventDefault();
        let member = {
            account: this.state.account,
            password: this.state.password,
            username: this.state.username,
            email: this.state.email,
            birthday: this.state.birthday
        }

        MemberService.registerNewMember(member)
            .then((response) => {
                // console.log(response)
                this.props.history.push('/login');
            })
             .catch((error) => {
                // console.log(error.response.data)
                this.setState({
                    errMsg: error.response.data
                });
                alert(this.state.errMsg);
                document.querySelector("[name=account]").value = '';
                document.querySelector("[name=password]").value = '';
                document.querySelector("[name=username]").value = '';
                document.querySelector("[name=email]").value = '';
                document.querySelector("[name=birthday]").value = '';
            }
            );
    }

    cancelHandler = (event) => {
        event.preventDefault();
        this.setState({
            account: '',
            password:'',
            username: '',
            email: '',
            birthday: '',
            errMsg: ''
        });
    }

    changeAccountHandler = (event) => {
        this.setState({account: event.target.value});
    }

    changePasswordHandler = (event) => {
        this.setState({password: event.target.value});
    }

    changeUserNameHandler = (event) => {
        this.setState({username: event.target.value});
    }

    changeEmailHandler = (event) => {
        this.setState({email: event.target.value});
    }

    changeBirthdayHandler = (event) => {
        this.setState({birthday: event.target.value});
    }

    render() {
        return (
            <div  className="text-center">
                <div className="form-signin">
                    <div className="register-new-member">
                        <form className="needs-validation" noValidate>
                            <h1 className="h3 mb-3 fw-normal">????????????</h1>
                            {/*<p className="errMsg" style={{color: "red"}}>{this.state.errMsg}</p>*/}
                            <div className="form-floating">
                                <input type="account" className="form-control" id="floatingInput" name="account"
                                       placeholder="??????" required
                                       value={this.state.account}
                                       onChange={this.changeAccountHandler} />
                                <label htmlFor="floatingInput">??????</label>
                                <div className="valid-feedback">
                                    ??????????????????
                                </div>
                            </div>
                            <div className="form-floating">
                                <input type="password" className="form-control" id="floatingPassword" name="password"
                                       placeholder="??????" required
                                       value={this.state.password}
                                       onChange={this.changePasswordHandler} />
                                <label htmlFor="floatingPassword">??????</label>
                                <div className="valid-feedback">??????????????????</div>
                            </div>
                            <div className="form-floating">
                                <input type="text" className="form-control" id="floatingInput" name="username"
                                       placeholder="???????????????"
                                       value={this.state.username}
                                       onChange={this.changeUserNameHandler} />
                                <label htmlFor="floatingInput">???????????????</label>
                            </div>
                            <div className="form-floating">
                                <input type="email" className="form-control" id="floatingInput" name="email"
                                       placeholder="E-mail" required
                                       value={this.state.email}
                                       onChange={this.changeEmailHandler} />
                                <label htmlFor="floatingInput">E-mail</label>
                                <div className="valid-feedback">
                                    E-mail????????????
                                </div>
                            </div>
                            <div className="form-floating">
                                <input type="date" className="form-control" id="floatingInput" name="birthday"
                                       placeholder="???????????????" required
                                       value={this.state.birthday}
                                       onChange={this.changeBirthdayHandler} />
                                <label htmlFor="floatingInput">???????????????</label>
                            </div>
                            <div style={{marginTop: "20px"}}>
                                <button className="btn btn-lg btn-primary" type="submit" onClick={this.registerHandler}>??????</button>
                                <button className="btn btn-lg btn-danger" type="reset" onClick={this.cancelHandler} style={{marginLeft: "20px"}}>??????</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default RegisterNewMemberComponent;