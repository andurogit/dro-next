---
layout: post
title:  "Javascript Hoisting"
date:   2020-01-30 09:00:00 +0900
categories: javascript    
tag: [ES6]
---

* TOC
{:toc}

# 들어가며

* javascript 를 알아가다 보면 항상 나오는 단어가 있습니다.
* 사전적인 의미를 찾아 보면 `감아 올리다` 라는 뜻이 있습니다.
* 이런 사전적인 의미를 javascript 와 무슨 연관이 있는지 알아 봅시다.
* Hoisting 하나만 파악 하려고 해도 이해하고 넘어가야 하는 부분이 너무나 많습니다.
    * 예를 들어 var, let, const, use strict 등 과 같은 키워드 들입니다.
    * {각 키워드 링크필요}

# 요점

* Javascript 에서 Hoisting 이란 변수 선언 시 암묵적으로 선언 된 변수를 맨 위로 끌어올리는 것을 말합니다.
    * 이런 컴파일 프로세스는 예제를 통해 확인 해 보면 더 명확하게 설명 되리라 생각 합니다.

## 가장 간단한 예시

* 아래 코드는 동일하게 동작 합니다.
* 1번 코드도 컴파일 하게 되면 암묵적으로 2번코드와 같이 변동되어 동작 합니다.

```javascript
// 1번
number1 = 12;
var number1;
console.log(number1);
//결과 값 : 12

// 2번
var number1;
number1 = 12;
console.log(number1);
//결과 값 : 12
```
