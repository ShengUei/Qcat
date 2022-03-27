package idv.suw.qcat.article.controller;

import idv.suw.qcat.article.model.Article;
import idv.suw.qcat.article.model.ArticleService;
import idv.suw.qcat.member.model.Member;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.servlet.http.HttpSession;
import java.util.List;

@RestController
@RequestMapping(path = "article")
public class ArticleController {

    private final ArticleService articleService;

    @Autowired
    public ArticleController(ArticleService articleService) {
        this.articleService = articleService;
    }

    @GetMapping
    public List<Article> findAllArticleByAccount(HttpSession session) {
        Member member = (Member) session.getAttribute("member");
        return articleService.findAllArticleByAccount(member.getAccount());
    }
}
