import React, {Component} from 'react';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import Editor from 'ckeditor5-custom-build/build/ckeditor';
import articleService from "../services/ArticleService";

class AddNewArticleComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            content: '',
            errMsg: ''
        };
    }

    submitHandler = (event) => {
        event.preventDefault();
        // console.log("submit: " + this.state.content);
        let article = {
            artContent: this.state.content
        }
        console.log("Submit")
        articleService.addNewArticle(article)
            .then((response) => {
                // console.log(response)
                this.props.history.push('/article');
            })
            .catch((error) => {
                    // console.log(error.response.data)
                    this.setState({
                        errMsg: error.response.data
                    });
                }
            );
    }

    render() {
        return (
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col col-6">
                        <div className="card shadow-sm">
                            <div className="card-body" >
                                <div className="article" >
                                    <div className="content" >
                                        <p className="errMsg" style={{color: "red"}}>{this.state.errMsg}</p>
                                        <CKEditor
                                            editor={ Editor }
                                            onChange={ ( event, editor ) => {
                                                this.setState({
                                                    content:editor.getData()
                                                })
                                            } }
                                        />
                                    </div>
                                    <div className="d-flex justify-content-between align-items-center" style={{marginTop:20}}>
                                        <div className="btn-group">
                                            <button onClick={this.submitHandler} type="button" className="btn btn-sm btn-outline-secondary">送出</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default AddNewArticleComponent;