package idv.suw.qcat.article.model;

import idv.suw.qcat.member.model.Member;

import javax.persistence.*;
import java.sql.Timestamp;

@Entity
@Table(name = "article")
public class Article {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "artid")
    private Long artId;

    @Transient
    private Long mbrId;

    @Column(name = "artposttime")
    private Timestamp artPostTime;

    @Column(name = "artupdatetime")
    private Timestamp artUpdateTime;

    @Column(name = "artcontent")
    private String artContent;

    @Column(name = "artimg1")
    private String artImg1;

    @Column(name = "artimg2")
    private String artImg2;

    @Column(name = "artimg3")
    private String artImg3;

    @Column(name = "artimg4")
    private String artImg4;

//    @ManyToOne(fetch = FetchType.LAZY)
    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "mbrid", referencedColumnName = "mbrid")
    private Member member;

    public Article() {
    }

    public Timestamp getArtPostTime() {
        return artPostTime;
    }

    public void setArtPostTime(Timestamp artPostTime) {
        this.artPostTime = artPostTime;
    }

    public Timestamp getArtUpdateTime() {
        return artUpdateTime;
    }

    public void setArtUpdateTime(Timestamp artUpdateTime) {
        this.artUpdateTime = artUpdateTime;
    }

    public String getArtContent() {
        return artContent;
    }

    public void setArtContent(String artContent) {
        this.artContent = artContent;
    }

    public String getArtImg1() {
        return artImg1;
    }

    public void setArtImg1(String artImg1) {
        this.artImg1 = artImg1;
    }

    public String getArtImg2() {
        return artImg2;
    }

    public void setArtImg2(String artImg2) {
        this.artImg2 = artImg2;
    }

    public String getArtImg3() {
        return artImg3;
    }

    public void setArtImg3(String artImg3) {
        this.artImg3 = artImg3;
    }

    public String getArtImg4() {
        return artImg4;
    }

    public void setArtImg4(String artImg4) {
        this.artImg4 = artImg4;
    }

    public Member getMember() {
        return member;
    }

    public void setMember(Member member) {
        this.member = member;
    }
}
