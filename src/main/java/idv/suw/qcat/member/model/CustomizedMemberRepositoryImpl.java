package idv.suw.qcat.member.model;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.Query;
import java.util.Optional;

public class CustomizedMemberRepositoryImpl implements CustomizedMemberRepository<Member, String> {

    @PersistenceContext
    private EntityManager entityManager;

    @Override
    public Optional<Member> findByAccount(String account) {
        Optional<Member> result = Optional.ofNullable(
                entityManager.createQuery("SELECT m FROM Member m WHERE m.account = :account", Member.class)
                        .setParameter("account", account)
                        .getSingleResult());

        return result;
    }

    @Override
    public boolean existsByAccount(String account) {
        Optional<Member> result = Optional.ofNullable(
                entityManager.createQuery("SELECT m FROM Member m WHERE m.account = :account", Member.class)
                .setParameter("account", account)
                .getSingleResult());

        if (result.isPresent()) {
            return true;
        }
        return false;
    }
}
