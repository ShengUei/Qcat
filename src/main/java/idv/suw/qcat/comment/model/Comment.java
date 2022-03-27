package idv.suw.qcat.comment.model;

import java.sql.Timestamp;

public class Comment {
    private Long cmtId;
    private Long artId;
    private Long mbrId;
    private String cmtContent;
    private Timestamp cmtPostTime;
    private String cmtImg;

}
