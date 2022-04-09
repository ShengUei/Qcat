package idv.suw.qcat.article.model;

import idv.suw.qcat.member.model.Member;
import idv.suw.qcat.member.model.MemberRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.ArrayList;
import java.util.List;

@Service
@Transactional
public class ArticleService {

    private final ArticleRepository articleRepository;
    private final MemberRepository memberRepository;

    @Autowired
    public ArticleService(ArticleRepository articleRepository, MemberRepository memberRepository) {
        this.articleRepository = articleRepository;
        this.memberRepository = memberRepository;
    }

    public Article findArticleById(Long id) {
        return articleRepository.findById(id).get();
    }

    public  List<Article> findAllArticle() {
//        return articleRepository.findAll();
        return articleRepository.findByOrderByArtPostTimeDesc();
    }

    public  List<Article> findAllArticleByMemberId(Long mbrid) {
        if (!memberRepository.existsById(mbrid)) {
            return new ArrayList<>();
        }
        List<Article> articleList = articleRepository.findAllArticleByMemberId(mbrid);
        return articleList;
    }

    public boolean addNewArticle(Article article) {
//        if (!memberRepository.existsById(article.getMember().getMbrId())) {
//            throw new IllegalStateException("This member isn't exists");
//        }
        try {
            articleRepository.save(article);
            return true;
        } catch (Exception e) {
            e.printStackTrace();
            return false;
        }
    }
}
