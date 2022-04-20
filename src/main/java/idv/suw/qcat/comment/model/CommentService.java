package idv.suw.qcat.comment.model;

import idv.suw.qcat.article.model.ArticleRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.ArrayList;
import java.util.List;

@Service
@Transactional
public class CommentService {

    private final ArticleRepository articleRepository;
    private final CommentRepository commentRepository;
    private List<Long> idList;

    @Autowired
    public CommentService(ArticleRepository articleRepository, CommentRepository commentRepository) {
        this.articleRepository = articleRepository;
        this.commentRepository = commentRepository;
    }

    public List<Comment> findAllCommentByArticleId(Long artId) {
        if(articleRepository.existsById(artId)) {
            return commentRepository.findAllByArticleId(artId);
        }
        return null;
    }

    public boolean addNewComment(Comment comment) {
        try {
            commentRepository.save(comment);
            return true;
        } catch (Exception e) {
            e.printStackTrace();
            return false;
        }
    }


}
