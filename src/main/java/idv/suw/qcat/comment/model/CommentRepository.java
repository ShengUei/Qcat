package idv.suw.qcat.comment.model;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface CommentRepository extends JpaRepository<Comment, Long> {

    @Query(value = "from Comment where article.artId = :artId")
    List<Comment> findAllByArticleId(Long artId);

}
