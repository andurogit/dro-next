---
layout: post
title:  "5. jekyll custom"
date:   2020-09-18 09:00:00 +0900
categories: [jekyll]    
tag: [jekyll.detail]
---

* TOC
{:toc}

# 들어가며 

jekyll 테마들이 많은데 과연 이 테마들은 어떤 장치들이 존재하고 어떤 기능을 하고 있는지 궁금해서 이것 저것 많이 알아봤습니다.
일단 jekyll 을 내 마음대로 바꾸러면 html, css, javacript 등 많은 걸 알아야 하지만 가장 핵심은 jekyll 이 사용하고 있는 template engine 인 Liquid 를 알아야 합니다.
`Link` [Liquid](https://shopify.github.io/liquid/basics/introduction/){:target="_blank"}
Liquid 문법은 링크 된 사이트에 문서를 보는게 더 좋습니다.

# 에로사항

custom 을 할려고 해도 jeykyll 에서 html 로 데이터를 넘길 때 객체명칭을 어찌 사용했는지

그 객체에 뭐가 담겨 있는지 알길이 없어 custom 에 많은 에로 사항이 있습니다.

그거 각기 플러그인에 문서를 확인하고 찾아보면서 customizing을 해야 합니다.

예를 들면 jekyll pagination 을 사용하려고 한다면

`Link` [jekyll pagination](https://jekyllrb-ko.github.io/docs/pagination/){:target="_blank"}

이 페이지를 보면 객체에 대한 설명이 있습니다.

이런 참조문서를 보고 진행 합니다.

jekyll 실행 시 --trace 명령어를 붙이면 저장 시 마다 server build 가 되고

livereload 를 이용하면 코드 수정 시 바로 화면을 확인 할 수 있습니다.