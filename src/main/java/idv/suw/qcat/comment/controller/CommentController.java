package idv.suw.qcat.comment.controller;

import idv.suw.qcat.article.model.Article;
import idv.suw.qcat.article.model.ArticleService;
import idv.suw.qcat.comment.model.Comment;
import idv.suw.qcat.comment.model.CommentService;
import idv.suw.qcat.member.model.Member;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpSession;
import java.util.List;

@Controller
@RequestMapping(path = "/api/comment/")
@CrossOrigin(origins = "http://localhost:3000/")
public class CommentController {

    private final ArticleService articleService;
    private final CommentService commentService;

    @Autowired
    public CommentController(ArticleService articleService, CommentService commentService) {
        this.articleService = articleService;
        this.commentService = commentService;
    }

    @GetMapping("{artid}")
    public ResponseEntity<List<Comment>> findAllComment(
            HttpSession session,
            @PathVariable(name = "artid") Long artId) {

        Member member = (Member) session.getAttribute("member");
        if (member == null) {
            return new ResponseEntity<>(HttpStatus.FORBIDDEN);
        }

        List<Comment> commentList = commentService.findAllCommentByArticleId(artId);
        return new ResponseEntity<>(commentList,HttpStatus.OK);
    }

    @PostMapping("writeComment/{artid}")
    public ResponseEntity<String> writeComment(HttpSession session,
                                               @RequestBody Comment comment,
                                               @PathVariable(name = "artid") Long artId
                                               ) {
        Member member = (Member) session.getAttribute("member");
        if (member == null) {
            return new ResponseEntity<>(HttpStatus.FORBIDDEN);
        }
        Article article = articleService.findArticleById(artId);
        if (article == null) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
        comment.setMember(member);
        comment.setArticle(article);
        if(commentService.addNewComment(comment)) {
            return new ResponseEntity<>(HttpStatus.OK);
        }
        return new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }

}
