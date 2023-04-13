---
layout: post
title:  "raspberryPI 설치기"
date:   2020-09-18 13:00:00 +0900
categories: raspberryPI    
tag: [raspberryPI]
---

* TOC
{:toc}

# 들어가며

업무를 하다보면 파일서버라 던지 
테스트를 해야 한다 던지 
학습을 해야 한다 던지
이런 필요성들이 종종 필요 합니다.
저를 예로 들자면 매번 윈도우 OS 만 사용하다보니
리눅스에 대해 무지한 상태였습니다.
운영환경이 리눅스라면 더 난감해 졌었죠.
명령어하나 던질 때마다 살떨리는 경험을 하게 됩니다.
그런 스트레스를 해결하고자 선택한 것이 바로 `raspberryPI` 입니다.
일종에 miniPC라고 보시면 됩니다. 
손바닥 만한 작은녀석이죠.
가격도 raspberryPI 3 기준 3~4만원 정도이고 starter KIT 이라고해서 
처음시작자를 위해 패키지로도 판매하고 있을 겁니다.
raspberryPI 를 구동하기 위해선 필수로 필요한 구성품들이 있습니다.
1. 본체
1. 전원을 연결해줄 5핀 충전기 ( 배터리로도 됩니다 )
1. 데이터 와 OS 설치를 위한 SD카드 ( 휴대폰에 들어가는 그 카드 맞습니다. )
포트 구성은 USB 포트 4개, HDMI, 랜포트, 그리고 추가 센서들을 연결할 수 있는 기판이 있습니다.
심지어 블루투스도 됩니다.
초기 세팅을 위해 USB 마우스와 키보드가 있으면 좋겠네요.
여하튼 준비물 준비를 모두 마치면 이제 OS를 설치 해야 합니다.

# OS 설치

라즈베리파이 전용 OS인 rasbian 이라는 리눅스 계열 OS가 있긴하지만 
이 OS는 학습용으로 많이 쓰이고 제가 사용하려는 프로그램들에 인스톨 제한이 있어서
UBUNTU를 설치 했습니다.
UBUNTU 이미지를 다운로드 받고 Balena Etcher 를 이용해 SD카드에 OS를 심었습니다.
이렇게 OS가 담긴 SD 카드를 삽입하면 별도에 설치 없이 바로 기동이 됩니다.
rasbian 은 기본적으로 GUI ( graphic user interface ) 가 존재하지만
기본 설치된 UBUNTU 에는 GUI를 지원하지 않습니다. 
어차피 리눅스는 CLI ( command line interface ) 를 더 많이 사용하기 때문에 별로 신경 쓰이지 않습니다.
설치 후 외부 접속을 위해 SSH 포트만 열어 주면 이제 raspberryPI 에 직접 키보드 마우스를 연결하여 사용 할 일이 없어집니다.
물론 IP는 미리 체크해 놔야 겠지요.
<br/>
rasbian 에서는 
> sudo rasp-config 
명령어로 GUI 에서 SSh를 설정할 수 있지만
<br/>
ubuntu는 다릅니다.
> sudo apt-get install ssh
또는
> sudo apt-get install open-ssh

설치 후에 putty 같은 프로그램으로 접속하면 접속이 가능해 집니다.
따로 설정이 없이도 접속이 되지만 추가 설정을 하기 위해선
> sudo nano /etc/ssh/sshd_config
설정 코드 들이 보입니다.

여기 까지 기본 OS 설치와 ssh 설정 이였습니다.

