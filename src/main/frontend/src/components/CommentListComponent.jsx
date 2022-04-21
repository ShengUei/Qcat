import React, {Component} from 'react';
import moment from "moment";

class CommentListComponent extends Component {
    constructor(props) {
        super(props);
        this.setState({
            commentList: []
        })
    }

    render() {
                // console.log("this.props.commentList: " + JSON.stringify(this.props.commentList))
        let body
        if (this.props.commentList !== '') {
                body = this.props.commentList.map(
                        (comment) => {
                            return (
                                <div className="row justify-content-center" style={{marginTop:20}}>
                                    <div className="col  col-11">
                                        <div className="card shadow-sm" >
                                            <div className="card-body" key={comment.cmtId}>
                                                <div className="comment">
                                                    <div className="media text-muted pt-3">
                                                        <img
                                                            data-src="holder.js/32x32?theme=thumb&amp;bg=007bff&amp;fg=007bff&amp;size=1"
                                                            alt="" className="mr-2 rounded"
                                                            src="http://localhost:8080/images/profile.png"
                                                            data-holder-rendered="true"
                                                            style={{width: 50, height: 50, borderRadius: 50}}/>
                                                        <strong className="text-gray-dark card-text" style={{marginLeft: 10}}>{comment.member.username}</strong>
                                                        <span className="text-gray-dark card-text">@{comment.member.account}</span>
                                                    </div>
                                                    <div style={{marginTop: 20, marginBottom: 10}} dangerouslySetInnerHTML={{__html:comment.cmtContent}}/>
                                                    {/*<img className="card-img-top" style={{marginTop: 10}} src={"http://localhost:8080/images/" + article.artImg1} alt={""} />*/}
                                                    <div className="d-flex justify-content-between align-items-center" >
                                                        <small className="text-muted">{moment(comment.cmtPostTime).format('MM/DD A hh:mm')}</small>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        }
                    )
        }

        return (
            <div className="commentList card" style={{marginTop: 20}}>
                {body}
            </div>
        );
    }
}

export default CommentListComponent;