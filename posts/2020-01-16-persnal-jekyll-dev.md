---
layout: post
title:  "jekyll Search with Lunr.js"
date:   2020-01-16 13:00:00 +0900
categories: [jekyll]    
tag: [search, dev]
---

* TOC
{:toc}

# Lunr.js

* 클라언트 쪽에서 모든 문자를 검색할 수 있는 엔진
* 소스는 여기 [lunr](https://github.com/olivernn/lunr.js)
* 다운로드 받아 사용할 수도 있고
* node js 로 개발 중인 사이트라면 `npm install lunr` 로 설치 가능

# 사용 프로세스

1. 검색어 입력 폼 생성
1. 입력 된 검색어 -> 결과화면으로 이동 ( GET 방식 )
1. lunr.js 를 이용한 fullsite text search


# 개발순서

## 입력 폼 생성

```html class:"lineno"
<li class="search-box">
    <input type="text" class="search-txt" id="search-box" name="query" placeholder="Type to search">
    <a class="search-btn" href="#" onclick="fn_search_txt()">
        <i class="octicon octicon-search"></i>
    </a>
</li>
```

## 검색 클릭 시 이동 처리 javascript

```javascript
<script>
    var fn_search_txt = function(){
        var searchTxt = document.getElementById("search-box").value;
        window.location = "/search.html?query=" + searchTxt;
    }
</script>
```

## 스타일 처리

* serch-box 마우스 hover 시 입력창 보일 수 있도록 처리
* placeholder 색상 변경

```css

/* custom search -box */

.search-box:hover > .search-txt{
  width: 240px;
  padding: 7px 15px;
}

.search-btn{
  float: right;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: 0.4s;
}
.search-txt{
  border:none;
  background: none;
  outline: none;
  float: left;
  color: white;
  font-size: 16px;
  transition: 0.4s;
  line-height: 40px;
  width: 0;
}
::-webkit-input-placeholder { /* Edge */
  color: #9cc58b;
}

:-ms-input-placeholder { /* Internet Explorer 10-11 */
  color:  #9cc58b;
}

::placeholder {
  color: #9cc58b;
}
/* end*/
```


## search.html 작성

* lunr.min 만 동작 함
* `\` 제거하고 적용 code 로 인식되서 넣음

```html

---
layout: default
---

<ul id="search-results"></ul>

<script>
  window.store = {
    {\% for post in site.posts \%}
      "{{ post.url | slugify }}": {
        "title": "{{ post.title | xml_escape }}",
        "author": "{{ post.author | xml_escape }}",
        "category": "{{ post.category | xml_escape }}",
        "content": {{ post.content | strip_html | strip_newlines | jsonify }},
        "url": "{{ post.url | xml_escape }}"
      }
      {\% unless forloop.last \%},{\% endunless \%}
    {\% endfor \%}
  };
</script>
<script src="/static/js/lunr.min.js"></script>
<script src="/static/js/search.js"></script>
```