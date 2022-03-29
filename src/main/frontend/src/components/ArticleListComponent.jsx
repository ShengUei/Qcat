import React, {Component} from 'react';
import ArticleService from "../services/ArticleService";

class ArticleListComponent extends Component {

    componentDidMount() {
        ArticleService.getArticleList()
            .then((response) => {
                this.setState({articles: response.data})
            })
    }

    render() {
        return (
            <div className="article-list">
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