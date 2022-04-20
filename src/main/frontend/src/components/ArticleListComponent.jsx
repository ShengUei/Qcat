import React, {Component} from 'react';
import ArticleService from "../services/ArticleService";
import AddNewArticleComponent from "./AddNewArticleComponent";
import moment from "moment";

class ArticleListComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            articles: [],
            errMsg: ''
        };

        this.articleDetailHandler = this.articleDetailHandler.bind(this);
    }

    articleDetailHandler(id) {
        this.props.history.push(`/article/${id}`);
    }

    componentDidMount() {
        ArticleService.getArticles()
            .then((response) => {
                // console.log(response);
                if(response.data === '') {
                    this.setState({
                        articles: [],
                        errMsg: "No result"
                    })
                } else {
                    this.setState({articles: response.data})
                }
            }).catch((error) => {
            // console.log(error)
            this.props.history.push('/login');
        })
    }

    render() {
        return (
            <div>
                <AddNewArticleComponent/>
                <div className="article-list container">
                    <p className="errMsg" style={{color: "red"}}>{this.state.errMsg}</p>
                    {
                        this.state.articles.map(
                            (article) => {
                                return (
                                    <div className="row justify-content-center" style={{marginTop:20}}>
                                        <div className="col col-6">
                                            <div className="card shadow-sm" >
                                                <div className="card-body" key={article.artId}>
                                                    <div className="article" onClick={() => this.articleDetailHandler(article.artId)}>
                                                        <div className="media text-muted pt-3">
                                                            <img
                                                                data-src="holder.js/32x32?theme=thumb&amp;bg=007bff&amp;fg=007bff&amp;size=1"
                                                                alt="" className="mr-2 rounded"
                                                                src="http://localhost:8080/images/profile.png"
                                                                data-holder-rendered="true"
                                                                style={{width: 50, height: 50, borderRadius: 50}}/>
                                                            <strong className="text-gray-dark card-text" style={{marginLeft: 10}}>{article.member.username}</strong>
                                                            <span className="text-gray-dark card-text">@{article.member.account}</span>
                                                                {/*<div className="media-body pb-3 mb-0 small lh-125 border-bottom border-gray">*/}
                                                                {/*    <div className="d-flex justify-content-between align-items-center w-100">*/}
                                                                {/*    </div>*/}
                                                                {/*    /!*<span className="d-block">@username</span>*!/*/}
                                                                {/*</div>*/}
                                                        </div>
                                                        {/*<p className="card-text">{article.member.username}</p>*/}
                                                        <div style={{marginTop: 20, marginBottom: 10}} dangerouslySetInnerHTML={{__html:article.artContent}}/>
                                                        {/*<svg className="bd-placeholder-img card-img-top" width="100%" height="225"*/}
                                                        {/*     xmlns={"http://localhost:8080/images/" + article.artImg1} role="img" aria-label="Placeholder: Thumbnail"*/}
                                                        {/*     preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title>*/}
                                                        {/*    <rect width="100%" height="100%" fill="#55595c"/>*/}

                                                        {/*    /!*<text x="50%" y="50%" fill="#eceeef" dy=".3em">Thumbnail</text>*!/*/}
                                                        {/*</svg>*/}
                                                        <img className="card-img-top" style={{marginTop: 10}} src={"http://localhost:8080/images/" + article.artImg1} alt={""} />
                                                        <div className="d-flex justify-content-between align-items-center" >
                                                            <div className="btn-group">
                                                                {/*<button type="button" className="btn btn-sm btn-outline-secondary">Reply</button>*/}
                                                                {/*<button type="button" className="btn btn-sm btn-outline-secondary">Retweet</button>*/}
                                                                {/*<button type="button" className="btn btn-sm btn-outline-secondary">Like</button>*/}
                                                            </div>
                                                            <small className="text-muted">{moment(article.artPostTime).format('MM/DD A hh:mm')}</small>
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

                </div>

            </div>
        );
    }
}

export default ArticleListComponent;