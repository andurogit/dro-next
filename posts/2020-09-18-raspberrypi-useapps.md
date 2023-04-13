---
layout: post
title:  "raspberryPI 사용기"
date:   2020-09-18 17:00:00 +0900
categories: raspberryPI    
tag: [raspberryPI]
---

* TOC
{:toc}

# 파일서버 samba 설치

가장 먼저 많이 사용 할 것 같은 파일서버 구성을 시도 했습니다.
ubuntu 에서 파일서버를 구성하기 위해선 
samba 라는 걸 설치해야 합니다.

> sudo apt-get install samba

유저 생성 유저 생성없이 smbpasswd -a <- samba db 비번등록 하면 오류 발생합니다.

> sudo useradd dro

> sudo smbpasswd -a dro

# 폴더 권한 설정

`/home/anduro/sambashare` 폴더라 생각하고 설정 합니다.

> mkdir /home/anduro/sambashare

> chmod 777 /home/anduro/sambashare

# samba 설정

보통 ubuntu 에서 뭔가 설치한게 있으면 설정파일은 etc 디렉토리 안에 존재 합니다.

윈도우에 system32 폴더나 syswow64 폴더 같은거라 보시면 될거 같습니다.

> cd /etc/samba 

> sudo nano smb.conf

etc/samba 폴더에 smb.conf 삼바 설정파일을 수정해야 합니다.

이 파일에는 로그파일을 어디에 남길건지 패스워드 구성은 어찌할건지 등등 많은 설정들이 존재 합니다.

일단 잘 모르니 넘어갑니다. 그냥 최하단에 설정을 해 줍니다.

```conf 
[sambashare]
commnet = Samba on ubuntu
path = /home/anduro/sambashare
read only = no
browsable = yes
```

이렇게 설정해 두면 마지막에 파일서버 접속시 네트워크 찾기에서 sambashare 로 검색이 가능해 집니다.

# 윈도우 파일 서버 기능 활성화

윈도우 탐색기에서 

F4을 누르고 `제어판\프로그램\프로그램 및 기능` 이걸 복사해서 붙여 넣으면

Windows 기능 켜기/끄기 항목에 아래와 같이 체크를 하여 설치 해 줍니다.

![](/static/img/2020-09-28-10-46-43.png)

# 추가 참조 ( window only )

이렇게 설정을 모두 마쳤는데도 네트워크 상에 보이지 않는다면 아래 설정을 추가 해 보세요

start + R -> mmc 실행

파일 > 스냅인 추가 
그룹 정책 개체 편집기 -> 추가

로컬 컴퓨터 정책 -> 관리 템플릿 -> 네트워크 -> Lanman 워크스테이션 -> 보안되지 않은 게스트 로그온 허용 -> 사용함으로

![](/static/img/2020-09-28-10-45-04.png)


