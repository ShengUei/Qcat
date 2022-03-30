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
        throw new IllegalStateException("This account or password is wrong");
    }

    public boolean registerNewMember(Member member) {
        if (member.getAccount().length() > 0 && member.getAccount() != null
            && member.getPassword().length() > 0 && member.getPassword() != null
            && member.getEmail().length() > 0 && member.getEmail() != null
            && member.getBirthday() != null
            && !memberRepository.existsByAccount(member.getAccount())) {
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
