package idv.suw.qcat.member.controller;

import idv.suw.qcat.member.model.Member;
import idv.suw.qcat.member.model.MemberService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping(path = "member")
public class MemberController {

    private final MemberService memberService;

    @Autowired
    public MemberController(MemberService memberService) {
        this.memberService = memberService;
    }

    @PostMapping(path = "logIn")
    public boolean checkIsMember(@RequestParam String account, @RequestParam String password) {
        return memberService.checkIsMember(account, password);
    }

    @PostMapping(path = "register")
    public boolean registerNewMember(@RequestBody Member member, @RequestParam String password) {
        return memberService.registerNewMember(member, password);
    }

}
