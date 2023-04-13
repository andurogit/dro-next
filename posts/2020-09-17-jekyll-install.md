---
layout: post
title:  "1. jekyll install"
date:   2020-09-17 10:00:00 +0900
categories: [jekyll]    
tag: [git.io.start]
---

* TOC
{:toc}

# 들어가며

시험 삼아 git io 를 구동해 보고 오랜 기간이 지난 후에야 글을 또 써봅니다.

이 사이트 목적 자체가 지식창고? 테스트? 메모장? 이런 용도라 글에 두서도 없고

보러 오는 사람도 없겠지만 그저 끄적거리는 글이라도 누군가는 도움이 될 수도 있겠다 싶어서

꾸준히 해보려고 합니다. 주저리 주저리 말이 많습니다. 

github io 를 사용하여 블로그 형태에 사이트를 공짜로?! 만들려면 `jekyll` 이라는 걸 조금 알아야 합니다.

# jekyll

jeykyll 은 ruby 라는 언어로 만들어져 있고 

gem 이라는 ruby 라이브러리 관리 툴을 이용해서 설치합니다.

일단 ruby를 설치 합니다.

`Link` [rubyDownload](https://www.ruby-lang.org/ko/downloads/){:target="_blank"}

버전을 확인 했을 때 버전이 나오면 정상 설치 된 겁니다.
> ruby -v

jekyll 과 bundler 를 gem 을 이용하여 설치 합니다.
> gem install jekyll bundler

version 확인

```text
> ruby -v
> gem -v
> jekyll -v

> ![](/static/img/2020-09-17-11-21-18.png)
```

여기까지가 jekyll 구동에 필요한 설치입니다.

