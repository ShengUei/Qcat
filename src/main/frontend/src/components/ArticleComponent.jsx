import React, {Component} from 'react';
import ArticleService from "../services/ArticleService";
import moment from "moment";
import CommentService from "../services/CommentService";

class ArticleComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            article: '',
            artId: this.props.match.params.id,
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
        CommentService.writeComment(comment, artId)
            .then()
            .catch((error) => {
                if(error == 403) {
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
                        username: '',
                        errMsg: "No result"
                    })
                } else {
                    this.setState({
                        article: response.data,
                        username: response.data.member.username
                    })
                }
            }).catch((error) => {
            // console.log(error);
            this.props.history.push('/login');
        })

        CommentService.getComments(this.state.artId)
            .then((response) => {
                this.setState({
                    commentList: response.data,
                    cmtUsername: response.data.member.username
                })
            }).catch(
            this.props.history.push('/login')
        )
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
                                        <p className="card-text">{this.state.username}</p>
                                        <div dangerouslySetInnerHTML={{__html:this.state.article.artContent}}/>
                                        {/*<svg className="bd-placeholder-img card-img-top" width="100%" height="225"*/}
                                        {/*     xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Thumbnail"*/}
                                        {/*     preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title>*/}
                                        {/*    <rect width="100%" height="100%" fill="#55595c"/>*/}
                                        {/*    <text x="50%" y="50%" fill="#eceeef" dy=".3em">Thumbnail</text>*/}
                                        {/*</svg>*/}
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
                                <textarea maxLength={300} rows={3} placeholder={"請在此輸入評論"}
                                          style={{resize: 'none'}}
                                  onChange={(event) => {
                                  this.setState({comContent: event.target.value})
                              }}/>
                            </div>
                            <div className="text-center">
                                <button type="button" className="btn btn-sm btn-outline-secondary"
                                    onClick={this.writeCommentHandler}
                                >送出</button>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        );
    }
}

export default ArticleComponent;