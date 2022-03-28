package idv.suw.qcat.member.controller;

import idv.suw.qcat.member.model.Member;
import idv.suw.qcat.member.model.MemberService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpSession;
import java.util.Optional;

@RestController
@RequestMapping(path = "member")
public class MemberController {

    private final MemberService memberService;

    @Autowired
    public MemberController(MemberService memberService) {
        this.memberService = memberService;
    }

    @PostMapping(path = "login")
    public void checkIsMember(@RequestParam String account, @RequestParam String password, HttpSession session) {
        Optional<Member> memberOptional = memberService.checkIsMember(account, password);
        if (memberOptional.isPresent()) {
            session.setAttribute("member", memberOptional.get());
        }
    }

    @PostMapping(path = "register")
    public boolean registerNewMember(@RequestBody Member member) {
        return memberService.registerNewMember(member);
    }

}
