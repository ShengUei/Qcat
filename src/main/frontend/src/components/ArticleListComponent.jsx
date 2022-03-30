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

    componentDidMount() {
        ArticleService.getArticles()
            .then((response) => {
                // console.log(response);
                this.setState({articles: response.data})
            }).catch((error) => {
                // console.log(error)
                if(error.response.data === null) {
                    this.setState({
                        articles: [],
                        errMsg: "No result"
                    })

                }
                this.props.history.push('/login');
        })
    }

    render() {
        return (
            <div className="article-list">
                <p className="errMsg" style={{color: "red"}}>{this.state.errMsg}</p>
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