package idv.suw.qcat.article.model;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class ArticleService {

    private final ArticleRepository articleRepository;

    @Autowired
    public ArticleService(ArticleRepository articleRepository) {
        this.articleRepository = articleRepository;
    }

    public List<Article> findAllArticleByAccount(String account) {
        if (articleRepository.findAllArticleByAccount(account).isPresent()) {
            return articleRepository.findAllArticleByAccount(account).get();
        }
        return new ArrayList<>();
    }
}
