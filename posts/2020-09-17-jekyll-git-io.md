---
layout: post
title:  "3. jekyll github io 사용"
date:   2020-09-17 14:00:00 +0900
categories: [jekyll]    
tag: [git.io.start]
---

* TOC
{:toc}

# 들어가며

기본적으로 github io 를 사용하여 블로그를 구성은 id 당 하나에 구성만 가능한 것으로 알고 있습니다.

단 andurogit.github.io/폴더명1 , andurogit.github.io/폴더명2 이런식으로 구성하여 

서로다른 사이트로 만드는 건 가능한 것으로 알고 있습니다.

# git repository 생성

* github 아이디가 없다면 가입을 하고 로그인을 후 repository 를 생성 합니다.
  
* 로그인 후 우측 상단을 보면 repository로 이동할 수 있는 메뉴가 보입니다.

![](/static/img/2020-09-17-14-33-29.png)

* New 버튼을 이용하여 생성해 봅니다.

![](/static/img/2020-09-17-14-33-56.png)

* Repository 명은 sitename.github.io 이렇게 github.io 로 끝나도록 구성 하고 public 으로 생성 합니다.

![](/static/img/2020-09-17-14-35-02.png)

# 기본 구성

* 비어 있는 레파지토리에 
> jekyll new my-site 
로 생성 된 파일들을 commit 하면 sitename.github.io 에서 사이트를 볼 수 있습니다.

* 반드시 commit 되어야 할 파일은 _posts/*.md , _config.yml, index.* 구성입니다.

# Remote 테마 구성

* 비어 있는 레파지토리에
_config.yml 구성과 index.* 파일을 복사하여 가져온 후 config.ymml 에 remote_theme : "remote-theme-name"

구성을 하면 바로 테마를 이용할 수 있습니다.

* 예시로 구성을 해보자면 ...

테마사이트에서 맘에 드는 테마를 고른 후

`Link` [jekyllThemes]](http://jekyllthemes.org/){:target="_blank"}

저는 jackman 이라는 테마를 거의 모든 걸 제거하고 사용하고 있습니다.

이렇게 원하는 테마를 골랐으면 homepage 링크로 이동합니다.

github 로 이동 될 겁니다.

![](/static/img/2020-09-17-14-50-51.png)

go file 메뉴로 _config.yml 파일을 찾아 줍니다.
![](/static/img/2020-09-17-14-52-24.png)
![](/static/img/2020-09-17-14-52-48.png)

Raw 버튼을 이용하여 코드를 복사 합니다.

![](/static/img/2020-09-17-14-53-15.png)

나의 github로 이동하여서 생성 된 레파지토리에 _config.yml 파일을 생성 해 줍니다.

![](/static/img/2020-09-17-14-54-15.png)

아까 복사해 둔 _config.yml 파일 코드를 넣고 

remote_theme : "Simpleyyt/jekyll-jacman"

를 설정해 줍니다.

![](2/static/img/020-09-17-14-56-39.png)

index.html 혹은 index.md 파일도 같은 형식으로 복사 해 줍니다.

이 Remote 테마 구성은 되는 테마가 있고 안되는 테마가 있습니다.

제가 사용한 이 테마는 구성이 안되는 테마 인 듯 합니다.

테마에 무엇이 구동되는지는 알아야 하니 꼭 local에서 확인 후에 

remote를 사용하든 custom 해서 사용하든 선택하는걸 추천드립니다.