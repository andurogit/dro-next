---
layout: post
title:  "Java Derby"
date:   2020-02-06 09:00:00 +0900
categories: java    
tag: [java, derby, DB]
---

* TOC
{:toc}

# 들어가며

음... 뭔가 하나 만들어 보려는데 많은 공력이 소모가 되는 걸 느낍니다.

역시 백날 문서 읽는 것 보단 한번 만들어보는게 도움이 많이 되죠.

여기서 제가 필요한 것은 뭔가 정보를 담아 줄 그릇이 필요 했습니다.

java class 내에서 정보를 넣어놓으면 배포했을 때 정보가 바뀌가 되면

class 내에 정보를 수정하여 재배포 해야되는 수고로움이 있을 거라 생각하여

application 에 파라미터로 넣기에는 많은 정보이고 그렇다고 엄청 많은 정보는 아니고

간단한 DB가 있으면 좋을거 같은데 하다가

java derby 라는 jvm에 올라가는 DB를 생각했습니다.

# 설치

일단 derby 도 데이터베이스이기 때문에 설치가 필요 합니다.

---

바쁜일도 없었던거 같은데 2월에 쓰던 끄적거림을 9월이 되서야 이어 갑니다.

2020년 초기부터 시험삼아 해본 git io 를 메모장 처럼 사용해 보자 했었는데

게을렀었나봅니다... 다 각설하고 올 초에만해도 derby 가 있는 것만 알았지 무지했었습니다.

실제 사용도 해보고 툴도 있는 걸 알았습니다.

derby 는 tomcat 처럼 local 에서 구동만 해주면 사용 가능 합니다. 

다운로드는 2020년 9월 기준 하기 링크에서 받을 수 있습니다.

`Link` [derbyDownload](http://db.apache.org/derby/derby_downloads.html){:target="_blank"}

압축을 풀면 bin 폴더가 있는데 `startNetworkServer.bat` 파일을 실행하면 데이터베이스가 구동 됩니다.

derby 는 ORM 을 이용해도 되고 sql 을 이용하여 데이터를 넣어도 되고 

일반 데이터 베이스 처럼 사용하면 됩니다. 물론 Ansi query 로 말이죠

derby를 위한 툴도 찾아보니 있었습니다. 

일반 sql tool 처럼 쿼리를 이용해 데이터를 볼 수 있고 테이블정보도 볼 수 있죠.

razorsql 이라는 툴인데 하단에 링크 달아 놓겠습니다.

`Link` [derbyViewDownload](https://razorsql.com/download_win.html){:target="_blank"}