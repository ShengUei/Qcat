package idv.suw.qcat.article.model;

import java.util.List;

public interface CustomizedArticleRepository<T, String> {

    List<T> findAllArticleByMemberId(Long mbrid);

}
