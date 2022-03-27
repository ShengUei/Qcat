Create DataBase Qcat;

Use Qcat;

Create Table member(
	mbrId BigInt Not Null Identity(1,1),
	account Varchar(100) Not Null,
	encrPwd BigInt Not Null,
	salt BigInt Not Null,
	email Varchar(100) Not Null,
	username Varchar(100),
	birthday DateTime2(0),
	mbrImg Varchar(Max),

	Constraint mbr_mbrId_PK Primary key (mbrId),
	Constraint mbr_account_UK Unique (account),
    Constraint mbr_email_UK Unique (email)
);

Create Table article(
	artId BigInt Not Null Identity(1,1),
	mbrId BigInt Not Null,
	artPostTime DateTime2(0),
	artUpdateTime DateTime2(0),
	artContent Nvarchar(300),
	artImg1 Varchar(Max),
	artImg2 Varchar(Max),
	artImg3 Varchar(Max),
	artImg4 Varchar(Max),

	Constraint art_artId_PK Primary key (artId),
	Constraint art_mbrId_FK Foreign Key (mbrId) references member(mbrId)
);

Create Table comment(
	cmtId  BigInt Not Null Identity(1,1),
	artId BigInt Not Null,
	mbrId BigInt Not Null,
	cmtContent Nvarchar(100),
	cmtPostTime DateTime2(0),
	cmtImg Varchar(Max),

	Constraint cmt_cmtId_PK Primary key (cmtId),
	Constraint cmt_artId_FK Foreign Key (artId) references article(artId),
	Constraint cmt_mbrId_FK Foreign Key (mbrId) references member(mbrId)
);

