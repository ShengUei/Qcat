package idv.suw.qcat.article.model;

import org.springframework.beans.factory.annotation.Autowired;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
public class CustomizedArticleRepositoryImpl implements CustomizedArticleRepository<Article, String>{

    @PersistenceContext
    private EntityManager entityManager;

}
