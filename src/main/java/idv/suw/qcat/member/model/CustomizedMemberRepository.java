package idv.suw.qcat.member.model;

import java.util.Optional;

public interface CustomizedMemberRepository<T, String> {

    Optional<T> findByAccount(String account);

    boolean existsByAccount(String account);

}
