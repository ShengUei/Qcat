package idv.suw.qcat.article.controller;

import idv.suw.qcat.article.model.Article;
import idv.suw.qcat.article.model.ArticleService;
import idv.suw.qcat.member.model.Member;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpSession;
import java.sql.Timestamp;
import java.time.LocalDateTime;
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

    @GetMapping("{artId}")
    public ResponseEntity<Article> findArticleById(HttpSession session,
                                                   @PathVariable(name = "artId") Long artId) {
        Member member = (Member) session.getAttribute("member");
        if (member == null) {
            return new ResponseEntity<>(HttpStatus.FORBIDDEN);
        }
        Article article = articleService.findArticleById(artId);
        return new ResponseEntity<>(article, HttpStatus.OK);
    }

    @GetMapping
    public ResponseEntity<List<Article>> findAllArticleByMemberId(HttpSession session) {
        Member member = (Member) session.getAttribute("member");
        if (member == null) {
            return new ResponseEntity<>(HttpStatus.FORBIDDEN);
        }
//        System.out.println("LogIn getMbrId: " + member.getMbrId());
//        List<Article> articles = articleService.findAllArticleByMemberId(member.getMbrId());
        List<Article> articles = articleService.findAllArticle();
        return new ResponseEntity<>(articles, HttpStatus.OK);
    }

    @PostMapping(path = "addnewarticle")
    public ResponseEntity<String> addNewArticle (HttpSession session, @RequestBody Article article) {
        Member member = (Member) session.getAttribute("member");
//        System.out.println("getMbrId: " + member.getMbrId());
        article.setMember(member);
//        String artContent = article.getArtContent();
        article.setArtPostTime(Timestamp.valueOf(LocalDateTime.now()));
        boolean addNewArticleState = articleService.addNewArticle(article);
        if (addNewArticleState) {
            return new ResponseEntity<>(HttpStatus.OK);
        }
        return new ResponseEntity<>("文章建立失敗", HttpStatus.BAD_REQUEST);
    }
}
