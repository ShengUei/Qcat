package idv.suw.qcat.member.model;

import java.util.Optional;

public interface CustomizedMemberRepository<T, String> {

    public Optional<T> findByAccount(String account);

    public boolean existsByAccount(String account);

}
