---
layout: post
title:  "2. jekyll 구동"
date:   2020-09-17 13:00:00 +0900
categories: [jekyll]    
tag: [git.io.start]
---

* TOC
{:toc}

# 기본 구성

jekyll ( gem ) 은 명령어로 기본적인 형태에 페이지를 만들 수 있습니다.

git io 에 push 되는 파일은 단 3개면 됩니다.

1. index.html
1. _config.yml
1. _posts\*.md

md (markdown) 파일은 포스팅 파일을 의미 합니다.

사이트 생성 명령어를 실행하면
하위 폴더에 사이트가 생성 됩니다.
> jekyll new my-site

# 테마 구성

하기 사이트는 기본 사이트가 아닌 화려하게 혹은 보기 좋게 꾸며 놓은 사이트를 다운로드 받아서 사용할 수 있습니다.
`Link` [jekyllThemes]](http://jekyllthemes.org/){:target="_blank"}

원하는 사이트를 다운로드 받으면 거의 기본 구조에 꾸미기를 위한 폴더 및 파일들이 존재합니다.

윈도우의 바탕화면 테마 같은 거라고 보시면 이해가 빠를거 같습니다.

테마를 사용하는 방법은 여러가지가 있는데 간략하게 설명하자면 아래와 같습니다.

1. 테마를 통쨰로 받아와서 사용하는 방법
    1. jekyll에 구조 및 문법을 파악하고 있다면 받아 온 테마를 손수 커스터마이징 할 수 있습니다.
1. 간단한 설정 파일 수정으로 사용하는 방법
    1. 기본 테마로 구성한 사이트에는 _config.yml 이라는 파일이 존재합니다.
    1. 해당 파일에 remote_theme 라는 속성을 원하는 테마로 변경하면 테마가 적용 됩니다.
    1. 기본 구성에 원격으로 테마에 대한 정보나 설정을 가져다가 쓴다고 보시면 됩니다.

테마를 사용하는 것은 _config.yml 파일을 수정하는 것 만으로 구성하는 방법이 있긴하지만

이 방법은 github io 에 사이트를 올려 놓은 상태에서만 가능 하고

local 에서는 remote_theme를 설정한다고 해서 구동되지는 않습니다.

즉 github io 와 local 에서 구동이 다르다는 겁니다. 

그래서 테마사용은 번거롭고 어렵더라도 local에 가져와서 테스트를 거친 후에 git 으로 올려 사용하는 것이

개인적으로는 더 좋은 방법이라고 생각 합니다. 

# 실습

실제로 기본 구성을 만들어보고 페이지가 정말 불러와 지는지 확인 해 봅시다.

Cmd 창 혹은 리눅스 console 에서

> jekyll new my-site

![](/static/img/2020-09-17-13-51-39.png)

생성 후 파일 구조를 보면 아래와 같습니다.

```folder
|   .gitignore
|   404.html
|   about.markdown
|   Gemfile
|   Gemfile.lock
|   index.markdown
|   _config.yml
|
\---_posts
        2020-09-17-welcome-to-jekyll.markdown
```

server 구동 명령어를 수행하면 바로 사이트가 발동 됩니다
여기서 구동되는건 자신에 PC 안에서 수행이 되는 겁니다.

> jekyll serve
```cmd
Configuration file: C:/EXEC/workspace_ruby/my-site/_config.yml
            Source: C:/EXEC/workspace_ruby/my-site
       Destination: C:/EXEC/workspace_ruby/my-site/_site
 Incremental build: disabled. Enable with --incremental
      Generating...
       Jekyll Feed: Generating feed for posts
                    done in 0.718 seconds.
 Auto-regeneration: enabled for 'C:/EXEC/workspace_ruby/my-site'
    Server address: http://127.0.0.1:4000/
  Server running... press ctrl-c to stop.
```

웹브라우져 ( 크롬, IE, 사파리, 파이어폭스 등등 ) 를 사용하여 이 주소로 접속하면
http://127.0.0.1:4000 사이트가 구동 된 걸 볼 수 있습니다.

_posts 폴더에 생성 된 템플릿 md 파일형식으로 파일을 생성하고 포스트를 작성하면 게시글이 추가 됩니다.

![](/static/img/2020-09-17-14-10-00.png)