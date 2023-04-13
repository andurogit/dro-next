---
layout: post
title:  "Javascript Wrapping Function"
date:   2020-02-06 09:00:00 +0900
categories: javascript    
tag: [javascript, function]
---

* TOC
{:toc}

# Wrapping function 

* javascript 소스를 살피다 보면 function 으로 감싼 코드들이 다수 보입니다.
* 왜 이런 방식으로 코딩을 하는지 궁금해서 찾아 보았습니다.

## 예시 

```sql

(function() {

    // source

})();

```

# 이유

* 출처 `Link` [tutorialpoint](https://www.tutorialspoint.com/Why-are-parenthesis-used-to-wrap-a-JavaScript-function-call){:target="_blank"}
* JavaScript에서 괄호로 묶인 함수를 "즉시 호출 된 함수 표현식"또는 "자체 실행 함수"라고합니다.
* 줄 바꿈의 목적은 네임 스페이스와 멤버 함수의 가시성을 제어하는 ​​것입니다. 
* 함수 범위 내에서 코드를 래핑하고 다른 라이브러리와의 충돌을 줄입니다. 
* 이를 우리는 IIFE (Inmediately Invoked Function Expression) 또는 자체 실행 익명 함수라고합니다.

