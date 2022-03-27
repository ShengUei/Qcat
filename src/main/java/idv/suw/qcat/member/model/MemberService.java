package idv.suw.qcat.member.model;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.Instant;
import java.util.Optional;

@Service
public class MemberService {

    private final MemberRepository memberRepository;

    @Autowired
    public MemberService(MemberRepository memberRepository) {
        this.memberRepository = memberRepository;
    }

    public Optional<Member> checkIsMember(String account, String password) {
        Optional<Member> memberOptional = memberRepository.findByAccount(account);
        if (memberOptional.isPresent()
                && (password.hashCode() + memberOptional.get().getSalt()) == memberOptional.get().getEncrPwd()) {
            return memberOptional;
        }
        return Optional.empty();
    }

    public boolean registerNewMember(Member member) {
        System.out.println(member.getAccount() + ", " + member.getEmail() + ", " + member.getPassword());
        if (!memberRepository.existsByAccount(member.getAccount())) {
            long salt = Instant.now().toEpochMilli();
            long encrPwd = member.getPassword().hashCode() + salt;
            member.setEncrPwd(encrPwd);
            member.setSalt(salt);
            memberRepository.save(member);
            return true;
        }
        return false;
    }

}
