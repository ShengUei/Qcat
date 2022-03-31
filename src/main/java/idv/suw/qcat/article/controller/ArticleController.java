package idv.suw.qcat.article.controller;

import idv.suw.qcat.article.model.Article;
import idv.suw.qcat.article.model.ArticleService;
import idv.suw.qcat.member.model.Member;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpSession;
import java.util.List;

@RestController
@RequestMapping(path = "/api/article")
@CrossOrigin(origins = "http://localhost:3000/")
public class ArticleController {

    private final ArticleService articleService;

    @Autowired
    public ArticleController(ArticleService articleService) {
        this.articleService = articleService;
    }

//    @GetMapping
//    public List<Article> findAllArticle() {
//        return articleService.findAllArticle();
//    }

    @GetMapping
    public ResponseEntity<List<Article>> findAllArticleByMemberId(HttpSession session) {
        Member member = (Member) session.getAttribute("member");
        if (member == null) {
            return new ResponseEntity<>(HttpStatus.FORBIDDEN);
        }
        List<Article> articles = articleService.findAllArticleByMemberId(member.getMbrId());
        return new ResponseEntity<>(articles, HttpStatus.OK);
    }

    @PostMapping
    public void addNewArticle (@RequestBody Article article, HttpSession session) {
        Member member = (Member) session.getAttribute("member");
        article.setMember(member);
        articleService.addNewArticle(article);
    }
}
