import React, {Component} from 'react';
import MemberService from "../services/MemberService";

class LogInComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            account: '',
            password: '',
            errMsg: ''
        };

        this.changeAccountHandler = this.changeAccountHandler.bind(this);
        this.changePasswordHandler = this.changePasswordHandler.bind(this);
    }

    loginHandler = (event) => {
        event.preventDefault();
        let member = {
            account: this.state.account,
            password: this.state.password,
        }

        MemberService.login(member)
            .then((response) => {
                console.log(response)
                // this.props.history.push('/article');
            })
            .catch((error) => {
                    // console.log(error.response.data)
                    this.setState({
                        errMsg: error.response.data
                    });
                }
            );
    }

    registerHandler = (event) => {
        event.preventDefault();
        this.props.history.push('/register');
    }

    changeAccountHandler = (event) => {
        this.setState({account: event.target.value});
    }

    changePasswordHandler = (event) => {
        this.setState({password: event.target.value});
    }

    render() {
        return (
            <div  className="text-center">
                <div className="form-signin">
                    <div className="register-new-member">
                        <form className="needs-validation" noValidate>
                            <h1 className="h3 mb-3 fw-normal">會員登入</h1>
                            <p className="errMsg" style={{color: "red"}}>{this.state.errMsg}</p>
                            <div className="form-floating">
                                <input type="account" className="form-control" id="floatingInput" name="account"
                                       placeholder="帳號" required
                                       value={this.state.account}
                                       onChange={this.changeAccountHandler} />
                                <label htmlFor="floatingInput">帳號</label>
                                <div className="valid-feedback">
                                    帳號不能空白
                                </div>
                            </div>
                            <div className="form-floating">
                                <input type="password" className="form-control" id="floatingPassword" name="password"
                                       placeholder="密碼" required
                                       value={this.state.password}
                                       onChange={this.changePasswordHandler} />
                                <label htmlFor="floatingPassword">密碼</label>
                                <div className="valid-feedback">密碼不能空白</div>
                            </div>
                            <div style={{marginTop: "20px"}}>
                                <button className="btn btn-lg btn-primary" type="submit" onClick={this.loginHandler}>登入</button>
                                <button className="btn btn-lg btn-success" type="button" onClick={this.registerHandler} style={{marginLeft: "20px"}}>註冊</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default LogInComponent;