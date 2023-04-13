---
layout: post
title:  "Javascript Variable"
date:   2020-01-30 09:00:00 +0900
categories: javascript    
tag: [변수, var, let, const]
---

* TOC
{:toc}

# 들어가며

* javascript 에 변수 선언 방법을 알아 봅시다.

# var [keyword]

* `var` 라는 키워드는 변수를 선언할 때 사용 합니다.
* 변수는 값을 담는 그릇 입니다.
* 컴퓨터 관점에서 보면 메모리에 값을 할당 한다 라고 합니다.
    * 메모리 도시에 ADD001 이라는 주소가 있고 그 곳을 별칭 (alias) var01 이라 지정하고 초기값을 1 이라 지정한다고 했을 때
    * var var01 = 1; 이라고 표한 할 수 있겠습니다.
    * var var01 = 1, var02 = 2; 이와 같이 여러 변수를 한 번에 선언 할 수도 있습니다.
* 변수는 전역변수와 지역변수로 나눌 수 있습니다. 
    * 아래 코드에서 function 안에 `var z` 는 지역 변수 입니다.
    * function 안에 `y` 는 전역변수 입니다.
    * `z`는 function 안에서만 사용 가능 합니다.
    * `y`는 function 바깥에서도 사용 가능 합니다.
* 아래와 같은 코드는 전역변수 와 지역변수에 개념을 이해 했다면 결과 값을 예측 할 수 있습니다.
* 허나 아래 코드는 현 es6 문법 상 좋지 않은 코드이며 use strick 을 사용하게 되면 y 변수 역시 지역 변수로 인식 됩니다.

```javascript
function x() {
  y = 1;     // 일반 javascript 에서는 전역 변수로 인식 됩니다. 단 use strict 모드에서는 오류로 인식 됩니다.
  var z = 2;
  console.log(z); // 2
}

x();

console.log(y); // 1
console.log(z); // Throws a ReferenceError: z is not defined outside x.
// z 변수가 not defined 인 이유는 var z = 2; 는 function 안쪽에서만 사용 되는 지역변수이기 때문 입니다.
```

# hoisting

 * var 라는 변수는 hoisting 과 밀접한 연관이 되어 있습니다. 
 * 간단한 예시로 들었던 코드로 설명을 하자면 `암묵적`으로 2번 코드로 수행이 된다 입니다.

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
# variable scope 

변수에 적용 범위를 확인 해 보자면 아래 소스를 보면 이해가 빠를 겁니다. <br/>
var 라는 keyword가 존재 해서 지역, 전역 구분이 애매한 부분이 있습니다. <br/>
아래 코드 중 typeof는 링크를 따라가 보시면 설명이 있습니다. Link [typeof]({%post_url 2020-01-30-js-typeof-keyword%}){:target="_blank"}

```javascript
var x = 0; // x 라는 변수를 선언하고 초기값 0 를 부여 합니다.

console.log(typeof z); // z 변수는 선언되지 않았기 때문에 "undefined"

function a() {
  var y = 2; // y 변수 선언 a 라는 function 안에서 만 사용가능 한 지역 변수 초기값 2 부여

  console.log(x, y); // 0(전역변수 이지만 해당 페이지에서만 사용 가능) 2(지역변수)

  function b() {
    x = 3; // 해당 페이지에서만 사용 가능 한 전역 변수 0 -> 3 으로 대체 
    y = 4; // a function 안에서 사용 가능한 y 변수 2 -> 4로 대체 
    z = 5; // 새로운 z 라는 전역 변수 사용 역시 페이지에서만 사용 가능한 변수 초기값 5
  }

  b(); // b라는 function을 불러와 x y 값은 대체 되고 z 라는 변수가 생성 됨 
  console.log(x, y, z); // 3(전역) 4(a 함수내 지역) 5(전역)
}

a(); // a function 호출 시 b function 도 호출 됨.
console.log(x, z);     // 3(var 가 있지만 페이지 단위로 보았을 때 전역) 5(전역)
console.log(typeof y); // a function 안에서만 사용가능하기 때문에 "undefined"

```

# let [keyword]

* let 은 block scope 변수를 선언 할 때 사용 합니다.
* 여기서 block 이란 대게 `{}` 안쪽을 의미 합니다.
* page 또한 block 이라 합니다.

```javascript

let fruit0 = 'anyting';

function foo(){
    if(true){
        var fruit1 = 'apple';        //exist in function scope
        const fruit2 = 'banana';     //exist in block scope
        let fruit3 = 'strawberry';   //exist in block scope

    }
    console.log(fruit1);
    console.log(fruit2);
    console.log(fruit3);
}

foo();
console.log(fruit0);
//result:
//apple
//error: fruit2 is not defined
//error: fruit3 is not defined
//anyting

```

```javascript
function varTest() {
  var x = 1;
  if (true) {
    var x = 2;  // 상위 블록과 같은 변수!
    console.log(x);  // 2
  }
  console.log(x);  // 2
}

function letTest() {
  let x = 1;
  if (true) {
    let x = 2;  // 상위 블록과 다른 변수
    console.log(x);  // 2
  }
  console.log(x);  // 1
}
```

let 은 전역객체 생성하지 않음

```javascript
var x = 'global';
let y = 'global';
console.log(this.x); // "global" 전역 객체의 속성 x를 생성
console.log(this.y); // undefined 전역 객체의 속성 y를 생성하지 않음
```

생성자를 이용한 변수 접근

```javascript
var Thing;

{
  let privateScope = new WeakMap();
  let counter = 0;

  Thing = function() {
    this.someProperty = 'foo';
    
    privateScope.set(this, {
      hidden: ++counter,
    });
  };

  Thing.prototype.showPublic = function() {
    return this.someProperty;
  };

  Thing.prototype.showPrivate = function() {
    return privateScope.get(this).hidden;
  };
}

console.log(typeof privateScope);
// "undefined"

var thing = new Thing();

console.log(thing);
// Thing {someProperty: "foo"}

thing.showPublic();
// "foo"

thing.showPrivate();
// 1
```
블록내에 재선언 시 SyntaxError 

```javascript
if (x) {
  let foo;
  let foo; // SyntaxError thrown.
}
```

# const [keyword]

* 상수값 지정을 위한 변수 이며
* 지정 된 값은 일정 패턴이 아닌 이상 변경 이 불가 합니다.
* Link [mozilla-const](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Statements/const){:target="_blank"}

```javascript
// 주의: 상수 선언에는 대소문자 모두 사용할 수 있지만,
// 일반적인 관습은 모두 대문자를 사용하는 것입니다.

// MY_FAV를 상수로 정의하고 그 값을 7로 함
const MY_FAV = 7;

// 에러가 발생함
MY_FAV = 20;

// 7 출력
console.log("my favorite number is: " + MY_FAV);

// 상수를 재선언하려는 시도는 오류 발생 - Uncaught SyntaxError: Identifier 'MY_FAV' has already been declared
const MY_FAV = 20;

// MY_FAV라는 이름은 위에서 상수로 예약되어 있어서 역시 실패함.
var MY_FAV = 20;

// 역시 오류가 발생함
let MY_FAV = 20;

// 블록 범위의 특성을 아는게 중요
if (MY_FAV === 7) { 
    // 블록 범위로 지정된 MY_FAV 라는 변수를 만드므로 괜찮습니다
    // (let으로 const 변수가 아닌 블록 범위를 선언하는 것과 똑같이 동작합니다)
    let MY_FAV = 20;

    // MY_FAV는 이제 20입니다
    console.log('my favorite number is ' + MY_FAV);

    // 이 선언은 전역으로 호이스트되고 에러가 발생합니다.
    var MY_FAV = 20;
}

// MY_FAV는 여전히 7
console.log('my favorite number is ' + MY_FAV);

// const 선언시에 초기값을 생략해서 오류 발생
const FOO; 

// const는 오브젝트에도 잘 동작합니다
const MY_OBJECT = {'key': 'value'};

// 오브젝트를 덮어쓰면 오류가 발생합니다
MY_OBJECT = {'OTHER_KEY': 'value'};

// 하지만 오브젝트의 키는 보호되지 않습니다.
// 그러므로 아래 문장은 문제없이 실행됩니다
MY_OBJECT.key = 'otherValue'; // 오브젝트를 변경할 수 없게 하려면 Object.freeze() 를 사용해야 합니다

// 배열에도 똑같이 적용됩니다
const MY_ARRAY = [];
// 배열에 아이템을 삽입하는 건 가능합니다
MY_ARRAY.push('A'); // ["A"]
// 하지만 변수에 새로운 배열을 배정하면 에러가 발생합니다
MY_ARRAY = ['B']
```