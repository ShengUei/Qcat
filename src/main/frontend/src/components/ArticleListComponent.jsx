import React, {Component} from 'react';
import ArticleService from "../services/ArticleService";

class ArticleListComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            articles: [],
            errMsg: ''
        };
    }

    // componentDidMount() {
    //     ArticleService.getArticles()
    //         .then((response) => {
    //             // console.log(response);
    //             if(response.data == '') {
    //                 this.setState({
    //                     articles: [],
    //                     errMsg: "No result"
    //                 })
    //             } else {
    //                 this.setState({articles: response.data})
    //             }
    //         }).catch((error) => {
    //             // console.log(error)
    //             this.props.history.push('/login');
    //     })
    // }

    render() {
        return (
            <div className="article-list container">
                <p className="errMsg" style={{color: "red"}}>{this.state.errMsg}</p>
                <div className="row justify-content-center">
                    <div className="col col-6">
                        <div className="card shadow-sm">
                            <svg className="bd-placeholder-img card-img-top" width="100%" height="225"
                                 xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Thumbnail"
                                 preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title>
                                <rect width="100%" height="100%" fill="#55595c"/>
                                <text x="50%" y="50%" fill="#eceeef" dy=".3em">Thumbnail</text>
                            </svg>

                            <div className="card-body">
                                <p className="card-text">This is a wider card with supporting text below as a natural
                                    lead-in to additional content. This content is a little bit longer.</p>
                                <div className="d-flex justify-content-between align-items-center">
                                    <div className="btn-group">
                                        <button type="button" className="btn btn-sm btn-outline-secondary">View</button>
                                        <button type="button" className="btn btn-sm btn-outline-secondary">Edit</button>
                                    </div>
                                    <small className="text-muted">9 mins</small>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {
                    this.state.articles.map(
                        (article, index) => {
                            return (
                                <div className="article" key={index}>
                                    <p>{article.member.username}</p>
                                    <p>{article.artPostTime}</p>
                                    <p>{article.artContent}</p>
                                </div>
                            )
                        }
                    )
                }
            </div>
        );
    }
}

export default ArticleListComponent;