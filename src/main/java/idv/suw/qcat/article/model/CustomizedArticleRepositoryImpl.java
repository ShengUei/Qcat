package idv.suw.qcat.article.model;

import org.springframework.beans.factory.annotation.Autowired;

import javax.persistence.EntityManager;
import javax.persistence.NoResultException;
import javax.persistence.PersistenceContext;
import java.util.List;
import java.util.Optional;

public class CustomizedArticleRepositoryImpl implements CustomizedArticleRepository<Article, String>{

    @PersistenceContext
    private EntityManager entityManager;

    @Override
    public Optional<List<Article>> findAllArticleByAccount(String account) {
        try {
            return Optional.ofNullable(
                    entityManager.createQuery("SELECT a FROM Article a INNER JOIN Member m WHERE m.account = :account", Article.class)
                            .setParameter("account", account)
                            .getResultList());

        } catch (NoResultException e) {
            return Optional.empty();
        }
    }
}
