package idv.suw.qcat.comment.model;

import idv.suw.qcat.article.model.Article;
import idv.suw.qcat.member.model.Member;

import javax.persistence.*;
import java.sql.Timestamp;

@Entity
@Table(name = "comment")
public class Comment {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "cmtid")
    private Long cmtId;

    @Transient
    private Long artId;

    @Transient
    private Long mbrId;

    @Column(name = "cmtcontent")
    private String cmtContent;

    @Column(name = "cmtposttime")
    private Timestamp cmtPostTime;

    @Column(name = "cmtimg")
    private String cmtImg;

    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "mbrid", referencedColumnName = "mbrid")
    private Member member;

    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "artid", referencedColumnName = "artid")
    private Article article;

    public Comment() {
    }

    public Comment(String cmtContent, Timestamp cmtPostTime, String cmtImg) {
        this.cmtContent = cmtContent;
        this.cmtPostTime = cmtPostTime;
        this.cmtImg = cmtImg;
    }

    public Long getCmtId() {
        return cmtId;
    }

    public void setCmtId(Long cmtId) {
        this.cmtId = cmtId;
    }

    public Long getArtId() {
        return artId;
    }

    public void setArtId(Long artId) {
        this.artId = artId;
    }

    public Long getMbrId() {
        return mbrId;
    }

    public void setMbrId(Long mbrId) {
        this.mbrId = mbrId;
    }

    public String getCmtContent() {
        return cmtContent;
    }

    public void setCmtContent(String cmtContent) {
        this.cmtContent = cmtContent;
    }

    public Timestamp getCmtPostTime() {
        return cmtPostTime;
    }

    public void setCmtPostTime(Timestamp cmtPostTime) {
        this.cmtPostTime = cmtPostTime;
    }

    public String getCmtImg() {
        return cmtImg;
    }

    public void setCmtImg(String cmtImg) {
        this.cmtImg = cmtImg;
    }

    public Member getMember() {
        return member;
    }

    public void setMember(Member member) {
        this.member = member;
    }

    public Article getArticle() {
        return article;
    }

    public void setArticle(Article article) {
        this.article = article;
    }
}
