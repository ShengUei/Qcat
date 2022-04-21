package idv.suw.qcat.member.controller;

import idv.suw.qcat.member.model.Member;
import idv.suw.qcat.member.model.MemberService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpSession;
import java.util.Optional;

@RestController
@RequestMapping(path = "/api/member")
@CrossOrigin(origins = {"http://localhost:3000/"})
public class MemberController {

    private final MemberService memberService;

    @Autowired
    public MemberController(MemberService memberService) {
        this.memberService = memberService;
    }

    @PostMapping(path = "login")
    public ResponseEntity<String> checkIsMember(@RequestBody Member member, HttpSession session) {
        Optional<Member> memberOptional = memberService.checkIsMember(member.getAccount(), member.getPassword());
        if (memberOptional.isPresent()) {
            session.setAttribute("member", memberOptional.get());
            return new ResponseEntity<>(HttpStatus.OK);
        }
        return new ResponseEntity<>("登入失敗", HttpStatus.BAD_REQUEST);
    }

    @GetMapping(path = "signOut")
    public ResponseEntity<String> signOut(HttpSession session) {
        session.invalidate();
        return new ResponseEntity<>("登出成功", HttpStatus.OK);
    }

    @PostMapping(path = "register")
    public ResponseEntity<String> registerNewMember(@RequestBody Member member) {
        boolean registerState = memberService.registerNewMember(member);
        if (registerState) {
            return new ResponseEntity<>(HttpStatus.CREATED);
        }
        return new ResponseEntity<>("註冊失敗", HttpStatus.BAD_REQUEST);
    }

    @GetMapping(path = "getMemberProfiles")
    public ResponseEntity<Member> getMemberProfiles(HttpSession session) {
        Member member = (Member) session.getAttribute("member");
        if (member != null) {
            return new ResponseEntity<>(member, HttpStatus.OK);
        }
        return new ResponseEntity<>(HttpStatus.FORBIDDEN);
    }

}
