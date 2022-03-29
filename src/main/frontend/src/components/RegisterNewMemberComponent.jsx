import React, {Component} from 'react';
import '../signin.css';
import MemberService from "../services/MemberService";

class RegisterNewMemberComponent extends Component {

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
                console.log(response)
                // this.props.history.push('/article');
            })
            .catch((error) => {
                console.log(error)
                // this.props.history.push('/member/register');
            }
            );
    }

    cancelHandler = (event) => {
        // event.preventDefault();
        this.setState({
            account: '',
            password:'',
            username: '',
            email: '',
            birthday: ''
        });
    }

    changeUserNameHandler = (event) => {
        this.setState({username: event.target.value});
    }

    changeAccountHandler = (event) => {
        this.setState({account: event.target.value});
    }

    changeEmailHandler = (event) => {
        this.setState({email: event.target.value});
    }

    changePasswordHandler = (event) => {
        this.setState({password: event.target.value});
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
                            <h1 className="h3 mb-3 fw-normal">會員註冊</h1>
                            <div className="form-floating">
                                <input type="account" className="form-control" id="floatingInput" name="account"
                                       placeholder="帳號" required
                                       // value={this.state.account}
                                       onChange={this.changeAccountHandler} />
                                <label htmlFor="floatingInput">帳號</label>
                                <div className="valid-feedback">
                                    帳號不能空白
                                </div>
                            </div>
                            <div className="form-floating">
                                <input type="password" className="form-control" id="floatingPassword" name="password"
                                       placeholder="密碼" required
                                       // value={this.state.password}
                                       onChange={this.changePasswordHandler} />
                                <label htmlFor="floatingPassword">密碼</label>
                                <div className="valid-feedback">密碼不能空白</div>
                            </div>
                            <div className="form-floating">
                                <input type="text" className="form-control" id="floatingInput" name="username"
                                       placeholder="使用者名稱"
                                       // value={this.state.username}
                                       onChange={this.changeUserNameHandler} />
                                <label htmlFor="floatingInput">使用者名稱</label>
                            </div>
                            <div className="form-floating">
                                <input type="email" className="form-control" id="floatingInput" name="email"
                                       placeholder="E-mail" required
                                       // value={this.state.email}
                                       onChange={this.changeEmailHandler} />
                                <label htmlFor="floatingInput">E-mail</label>
                                <div className="valid-feedback">
                                    E-mail不能空白
                                </div>
                            </div>
                            <div className="form-floating">
                                <input type="date" className="form-control" id="floatingInput" name="birthday"
                                       placeholder="出生年月日" required
                                       // value={this.state.birthday}
                                       onChange={this.changeBirthdayHandler} />
                                <label htmlFor="floatingInput">出生年月日</label>
                            </div>
                            <div style={{marginTop: "20px"}}>
                                <button className="btn btn-lg btn-primary" type="submit" onClick={this.registerHandler}>註冊</button>
                                <button className="btn btn-lg btn-danger" type="reset" onClick={this.cancelHandler} style={{marginLeft: "20px"}}>重填</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default RegisterNewMemberComponent;