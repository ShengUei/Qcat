package idv.suw.qcat.article.model;

import idv.suw.qcat.member.model.Member;
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
    public List<Article> findAllArticleByMemberId(Long mbrid) {
        try {
            return entityManager.createQuery("SELECT a FROM Article a WHERE a.member.mbrId = :mbrid", Article.class)
                            .setParameter("mbrid", mbrid)
                            .getResultList();
        } catch (NoResultException e) {
            return null;
        }
    }

}
