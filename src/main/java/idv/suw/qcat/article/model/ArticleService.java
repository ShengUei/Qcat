package idv.suw.qcat.article.model;

import idv.suw.qcat.member.model.Member;
import idv.suw.qcat.member.model.MemberRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class ArticleService {

    private final ArticleRepository articleRepository;
    private final MemberRepository memberRepository;

    @Autowired
    public ArticleService(ArticleRepository articleRepository, MemberRepository memberRepository) {
        this.articleRepository = articleRepository;
        this.memberRepository = memberRepository;
    }

    public  List<Article> findAllArticle() {
        return articleRepository.findAll();
    }

    public  List<Article> findAllArticleByMemberId(Long mbrid) {
        if (!memberRepository.existsById(mbrid)) {
            return new ArrayList<>();
        }
        List<Article> articleList = articleRepository.findAllArticleByMemberId(mbrid);
        return articleList;
    }

    public void addNewArticle(Article article) {
        if (!memberRepository.existsById(article.getMember().getMbrId())) {
//            throw new IllegalStateException("This member isn't exists");
        }
        articleRepository.save(article);
    }
}
