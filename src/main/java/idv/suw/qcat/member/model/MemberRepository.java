package idv.suw.qcat.member.model;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface MemberRepository extends JpaRepository<Member, Long>, CustomizedMemberRepository<Member, String> {
}
