package idv.suw.qcat.member.model;

import org.springframework.beans.factory.annotation.Value;

import javax.persistence.*;
import java.sql.Date;

@Entity
@Table(name = "member")
public class Member {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "mbrid")
    private Long mbrId;

    @Column(name = "account")
    private String account;

    @Transient
    private String password;

    @Column(name = "encrpwd")
    private Long encrPwd;

    @Column(name = "salt")
    private Long salt;

    @Column(name = "email")
    private String email;

    @Column(name = "username")
    private String username;

    @Column(name = "birthday")
    private Date birthday;

    @Column(name = "mbrimg")
    private String mbrImg;

    public Member() {
    }

    public Long getMbrId() {
        return mbrId;
    }

    public void setMbrId(Long mbrId) {
        this.mbrId = mbrId;
    }

    public String getAccount() {
        return account;
    }

    public void setAccount(String account) {
        this.account = account;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public Long getEncrPwd() {
        return encrPwd;
    }

    public void setEncrPwd(Long encrPwd) {
        this.encrPwd = encrPwd;
    }

    public Long getSalt() {
        return salt;
    }

    public void setSalt(Long salt) {
        this.salt = salt;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public Date getBirthday() {
        return birthday;
    }

    public void setBirthday(Date birthday) {
        this.birthday = birthday;
    }

    public String getMbrImg() {
        return mbrImg;
    }

    public void setMbrImg(String mbrImg) {
        this.mbrImg = mbrImg;
    }
}
