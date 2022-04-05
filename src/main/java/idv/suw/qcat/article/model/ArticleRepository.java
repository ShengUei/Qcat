package idv.suw.qcat.article.model;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ArticleRepository extends JpaRepository<Article, Long>, CustomizedArticleRepository<Article, String> {

    List<Article> findByOrderByArtPostTimeDesc();

}
