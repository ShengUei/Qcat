package idv.suw.qcat.member.model;

import javax.persistence.EntityManager;
import javax.persistence.NoResultException;
import javax.persistence.PersistenceContext;
import java.util.Optional;

public class CustomizedMemberRepositoryImpl implements CustomizedMemberRepository<Member, String> {

    @PersistenceContext
    private EntityManager entityManager;

    @Override
    public Optional<Member> findByAccount(String account) {
        try {
            return Optional.ofNullable(
                    entityManager.createQuery("SELECT m FROM Member m WHERE m.account = :account", Member.class)
                            .setParameter("account", account)
                            .getSingleResult());
        } catch (NoResultException e) {

            return Optional.empty();
        }
    }

    @Override
    public boolean existsByAccount(String account) {
        try {
            return Optional.ofNullable(
                    entityManager.createQuery("SELECT m FROM Member m WHERE m.account = :account", Member.class)
                            .setParameter("account", account)
                            .getSingleResult()).isPresent();
        } catch (NoResultException e) {
            return false;
        }

    }
}
