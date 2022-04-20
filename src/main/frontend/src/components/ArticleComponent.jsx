import React, {Component} from 'react';
import ArticleService from "../services/ArticleService";
import moment from "moment";
import CommentService from "../services/CommentService";
import CommentListComponent from "./CommentListComponent";

class ArticleComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            article: '',
            artId: this.props.match.params.id,
            member: '',
            comContent: '',
            commentList: '',
            errMsg: ''
        };
    }

    writeCommentHandler() {
        let comment = {
            artId: this.state.artId,
            cmtContent: this.state.comContent
        }
        CommentService.writeComment(comment, this.state.artId)
            .then()
            .catch((error) => {
                if(error === 403) {
                    this.props.history.push('/login');
                }else {
                    alert("評論撰寫失敗");
                }
            })
    }

    componentDidMount() {
        ArticleService.getArticle(this.state.artId)
            .then((response) => {
                // console.log(response);
                if(response.data === '') {
                    this.setState({
                        article: '',
                        member:'',
                        errMsg: "No result"
                    })
                } else {
                    this.setState({
                        article: response.data,
                        member: response.data.member
                    })
                }
            }).catch((error) => {
            // console.log(error);
            this.props.history.push('/login');
        });

        // CommentService.getComments(this.state.artId)
        //     .then((response) => {
        //         // console.log("comment: " + response);
        //         if(response.data === '') {
        //             this.setState({
        //                 commentList: []
        //             })
        //         } else {
        //             this.setState({commentList: response.data})
        //         }
        //         // console.log("commentList: " + JSON.stringify(this.state.commentList))
        //     })
        // //     .catch(
        // //     this.props.history.push('/login')
        // // )
    }

    render() {
        return (
            <div>
                <div className="article container">
                    <p className="errMsg" style={{color: "red"}}>{this.state.errMsg}</p>
                    <div className="row justify-content-center" style={{marginTop:20}}>
                        <div className="col col-6">
                            <div className="card shadow-sm" >
                                <div className="card-body">
                                    <div className="article" >
                                        <div className="media text-muted pt-3">
                                            <img
                                                data-src="holder.js/32x32?theme=thumb&amp;bg=007bff&amp;fg=007bff&amp;size=1"
                                                alt="" className="mr-2 rounded"
                                                src="http://localhost:8080/images/profile.png"
                                                data-holder-rendered="true"
                                                style={{width: 50, height: 50, borderRadius: 50}}/>
                                            <strong className="text-gray-dark card-text" style={{marginLeft: 10}}>{this.state.member.username}</strong>
                                            <span className="text-gray-dark card-text">@{this.state.member.account}</span>
                                        </div>
                                        <div style={{marginTop: 20, marginBottom: 10}} dangerouslySetInnerHTML={{__html:this.state.article.artContent}}/>
                                        <img className="card-img-top" style={{marginTop: 10}} src={"http://localhost:8080/images/" + this.state.article.artImg1} alt={""} />
                                        <div className="d-flex justify-content-between align-items-center" >
                                            <div className="btn-group">
                                                {/*<button type="button" className="btn btn-sm btn-outline-secondary">Reply</button>*/}
                                                {/*<button type="button" className="btn btn-sm btn-outline-secondary">Retweet</button>*/}
                                                {/*<button type="button" className="btn btn-sm btn-outline-secondary">Like</button>*/}
                                            </div>
                                            <small className="text-muted">{moment(this.state.article.artPostTime).format('MM/DD A hh:mm')}</small>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="comment-input card"  >
                                <textarea maxLength={300} rows={3} placeholder={"請在此撰寫評論"}
                                          style={{resize: 'none'}}
                                  onChange={(event) => {
                                  this.setState({comContent: event.target.value})
                              }}/>
                            </div>
                            <div className="text-center">
                                <button type="button" className="btn btn-sm btn-outline-secondary"
                                    onClick={this.writeCommentHandler}>送出</button>
                            </div>
                            {/*<CommentListComponent artId={this.state.artId}/>*/}
                            <CommentListComponent commentList={this.state.commentList}/>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default ArticleComponent;