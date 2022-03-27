package idv.suw.qcat.member.model;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.Instant;
import java.util.Optional;

@Service
public class MemberService {

    private final MemberRepository memberRepository;

    @Autowired
    public MemberService(MemberRepository memberDAO) {
        this.memberRepository = memberDAO;
    }

    public boolean checkIsMember(String account, String password) {
        Optional<Member> member = memberRepository.findByAccount(account);
        if (member.isPresent()) {
            long inputPwd = password.hashCode() + member.get().getSalt();
            if (inputPwd == member.get().getEncrPwd()){
                return true;
            }
        }
        return false;
    }

    public boolean registerNewMember(Member member, String password) {
        if (!memberRepository.existsByAccount(member.getAccount())) {
            long salt = Instant.now().toEpochMilli();
            long encrPwd = password.hashCode() + salt;
            member.setEncrPwd(encrPwd);
            memberRepository.save(member);
            return true;
        }
        return false;
    }

}
