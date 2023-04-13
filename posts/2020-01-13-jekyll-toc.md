---
layout: post
title:  "Jekyll TOC"
date:   2020-01-09 11:00:00 +0900
categories: [jekyll]
tag: [TOC]
---

* TOC
{:toc}

# Jekyll toc 에 대해서

* TOC ( table of contents ) 
* 마크다운으로 글 작성 시 `#` `##` 과 같이 제목을 붙이는데 이런 제목들을 table 형식으로 표기해 주는 기능

# element

* Jekyll 에서 markdown 형식에 문서를 작성 할 때 아래와 같이 입력하면 페이지 로딩 시 추가로 element 가 생성 

```sql
-- toc 생성
* TOC
{:toc}
```

* 해당 엘리먼트는 ul tag , li tag 로 이루어 졌으며 그 기준은 해당 페이지에 제목 데이터
* post 데이터 페이지 로딩 시 `cotent` 객체로 생성되기 때문에 표시를 해두면 요소검사를 통해 확인
* `content` 객체는 *<article>* 이라는 태그 안에 생성 되며 
    * 그 엘리먼트는 ul 태그에 *markdown-toc* 이라는 아이디로 생성 
    * 포스트 최상단에 보여 짐
* 현재 해당 블로그는 자동 생성 되는 TOC 를 `display: none' 처리
* jquery를 이용하여 우측 창에 clone -> copy 처리

```jquery
    var $mt = $('.toc');
    var toc = $(".post ul#markdown-toc").clone().get(0);
    $mt.each(function(i,o){
        $(o).html(toc);
    });
```