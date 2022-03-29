import React, {Component} from 'react';
import '../signin.css';

class RegisterNewMemberComponent extends Component {

    changeUserNameHandler = (event) => {
        this.setState({userName: event.target.value});
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
                            <h1 className="h3 mb-3 fw-normal">會員註冊</h1>
                            <div className="form-floating">
                                <input type="text" className="form-control" id="floatingInput" name="userName"
                                       placeholder="使用者名稱"
                                       onChange={this.changeUserNameHandler} />
                                <label htmlFor="floatingInput">使用者名稱</label>
                            </div>
                            <div className="form-floating">
                                <input type="text" className="form-control" id="floatingInput" name="account"
                                       placeholder="帳號" required
                                       onChange={this.changeAccountHandler} />
                                <label htmlFor="floatingInput">帳號</label>
                                <div className="valid-feedback">
                                    帳號不能空白
                                </div>
                            </div>
                            <div className="form-floating">
                                <input type="password" className="form-control" id="floatingPassword" name="password"
                                       placeholder="密碼" required
                                       onChange={this.changePasswordHandler} />
                                <label htmlFor="floatingPassword">密碼</label>
                                <div className="valid-feedback">密碼不能空白</div>
                            </div>
                            <div>
                                <button className="btn btn-lg btn-primary" type="submit">註冊</button>
                                <button className="btn btn-lg btn-danger" type="reset">重填</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default RegisterNewMemberComponent;