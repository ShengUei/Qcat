package idv.suw.qcat.article.controller;

import idv.suw.qcat.article.model.Article;
import idv.suw.qcat.article.model.ArticleService;
import idv.suw.qcat.member.model.Member;
import org.apache.commons.codec.binary.Base64;
import org.apache.commons.io.FileUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.util.ResourceUtils;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpSession;
import java.io.File;
import java.io.IOException;
import java.sql.Timestamp;
import java.time.Instant;
import java.time.LocalDateTime;
import java.util.List;

@RestController
@RequestMapping(path = "/api/article")
@CrossOrigin(origins = {"http://localhost:3000/"})
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

        String fileName = saveImageBase64ToLocal(article.getArtImg1());
        article.setArtImg1(fileName);

        boolean addNewArticleState = articleService.addNewArticle(article);
        if (addNewArticleState) {
            return new ResponseEntity<>(HttpStatus.OK);
        }
        return new ResponseEntity<>("文章建立失敗", HttpStatus.BAD_REQUEST);
    }

    private String saveImageBase64ToLocal(String imgBase64) {
        String[] splitByComma = imgBase64.split(",");
        String fileExtension = splitByComma[0].split("/")[1].split(";")[0];
        String fileName = String.format("%s.%s", Instant.now().toEpochMilli(), fileExtension);
        byte[] byteArray = Base64.decodeBase64(splitByComma[1]);
        try {
            String pathname = ResourceUtils.getURL("classpath:").getPath() + "static/images/" + fileName;
//            System.out.println("pathname: " + pathname);
            FileUtils.writeByteArrayToFile(new File(pathname), byteArray);
        } catch (IOException e) {
            e.printStackTrace();
        }
        return fileName;
    }

}


