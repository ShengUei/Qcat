package idv.suw.qcat.article.model;

import idv.suw.qcat.member.model.Member;
import idv.suw.qcat.member.model.MemberRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;
import java.util.Optional;

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
        List<Article> articleList = articleRepository.findAllById(Collections.singleton(mbrid));
        if (articleList.isEmpty()) {
            throw new IllegalStateException("No result");
        }
        return articleList;
    }

    public void addNewArticle(Article article) {
        if (!memberRepository.existsById(article.getMember().getMbrId())) {
            throw new IllegalStateException("This member isn't exists");
        }
        articleRepository.save(article);
    }
}
