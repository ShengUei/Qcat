package idv.suw.qcat.article.model;

import java.util.List;
import java.util.Optional;

public interface CustomizedArticleRepository<T, String> {

    Optional<List<T>> findAllArticleByAccount(String account);
}
