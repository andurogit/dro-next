---
layout: post
title:  "Java eclipse gradle"
date:   2020-02-13 09:00:00 +0900
categories: java    
tag: [java, eclipse, gradle]
---

* TOC
{:toc}

# 들어가며

매우 간단한 모니터링을 할 수 있는 걸 만들고 싶었습니다.

아이피와 포트를 가지고 요청을 보냈을 때 요청이 오는지 체크를 하는 겁니다.

매번 혼자 이것 저것 해 왔기 때문에 java Library 들을 

폴더구조로 eclipse 에 등록 해 놓고 사용해 왔는데

이렇게 사용하면 팀 단위 개발이 진행 되었을 때 저와 같은 구조로

정리 된 항목이 없으면 Lirary 를 일일히 공유 해야 된다는 사실이 매우 귀찮음으로 다가왔습니다.

그래서 maven 이나 gradle을 도입 해 보자 라는 결론에 다다랐고 시도 해 보았습니다.

# 프로젝트 생성 및 gradle 전환

프로젝트 생성 할 때 gradle project로 생성했다면 그대로 사용하면 되지만 

일반 java project 로 생성하여 작업하고 있었다면 프로젝트를 변환? 시켜줘야 합니다.

프로젝트를 우클릭하면 context menu 가 나오는데 그 곳에 add gradle 이라는 선택 항목이 있습니다.

이 항목을 누르게 되면 아무일도 일어나지 않습니다. 그냥 프로젝트 아이콘에 공룡한마리가 생겨납니다.

![](/static/img/2020-02-13-10-39-36.png)

gradle 프로젝트로 진행을 하려면 몇 가지 진행 해 줘야 할 사항이 있습니다.

먼저 gradle task 라는 패널을 꺼냅니다.

이클립스 상단 메뉴 중 window > show view > other... 선택

gradle task 이라 검색하면 나올 겁니다. 이게 안나오면 gradle plug-in 이 없는 겁니다.

![](/static/img/2020-02-13-10-43-30.png)

gradle task 에서 

build setup > init > Run Gradle Tasks 를 실행 하여 초기 설정 모드로 들어갑니다.

![](/static/img/2020-02-13-10-52-08.png)

그러면 콘솔 창에 아래와 같이 출력 됩니다.

특별난게 없다면 다 default 로 설정하시면 됩니다.

![](/static/img/2020-02-13-10-50-47.png)

프로젝트 우클릭하여 gradle 을 refresh 해주면

![](/static/img/2020-02-13-10-51-11.png)

짜잔! 초기설정 파일들이 생성 되었습니다.

![](/static/img/2020-02-13-10-55-40.png)