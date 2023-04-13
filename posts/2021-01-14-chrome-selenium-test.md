---
layout: post
title:  "Chrome devTools 에서 xpath 테스트"
date:   2020-11-27 17:00:00 +0900
categories: python
tag: [chrome, selenium, debug, python]
---

* TOC
{:toc}

# 들어가며

크롤링 라이브러리인 selenium 을 사용하다보면

selector 를 xpath 기준으로 가져와야 할 경우가 있습니다.

```python
driver.find_element_by_xpath("//img[@src='http://img.echosting.cafe24.com/design/skin/default/member/btn_login.gif']")
```

이런 식으로 말입니다.

근데 이 selector 를 디버깅 모드에서 실제 동작하는지 확인 할 수도 있지만 

항상 프로그램을 실행하고 seletor 코드까지 도달을 해야 테스트가 가능 하는 점에서 매우 비효율적이라고 볼 수 있습니다.

그래서 좀 간편하게 확인 할 수 없을까 하는 귀차니즘이 발동하였고

여러가지 방법 중에 크롬 devtools 를 이용하는 방법을 설명 하고자 합니다.

~ firebox 에 firepath 라는 것도 있는거 같은데 이건 지원이 중단 되었는지 설치방법을 이해를 못하는건지 시도하다가 그만 두었습니다. ~

# 사용방법

1. 크롤링 할 페이지에 접속
1. 가져와야할 데이터의 element 를 우클릭 -> 요소 검사 클릭 또는 F12 단축키 이용
1. 해당 엘리먼트를 지정할 seletor 테스트

* 3번 사항이 가장 중요합니다.

* 보통은 seletor 를 지정할 때 element 에 id 나 class 들로 찾는데 예를 들면 아래와 같습니다. 

```javascript
document.getElementById("idName")

document.querySeletor("#idName")
```

* id -> # , class -> . 으로 규정되어 있죠

## chrome devtools 콘솔 사용법 

devtools 에는 여러가지 탭들이 존재하는데 console 탭에서 해당 엘리먼트를 찾을 수 있습니다.

![](/static/img/2021-01-14-10-31-44.png)

이런식으로 일치하는 selector 가 존재하면 엘리먼트에 정보를 볼 수 있고

없으면 undefined 또는 null 표기 됩니다.

![](/static/img/2021-01-14-10-32-29.png)

## xpath 형태 

* xpath 형태로 element 를 선택 할 때는 조금 다른 형태로 지정을 해야 합니다.

```debug
$x(".//div[@class='cd-timeline-block']")
```

![](/static/img/2021-01-14-10-32-08.png)

* 이런 식으로 사용 해야 하고 $x(". 이후에 코드들은 실제로 selenium 을 이용하여 xpath 를 사용할 때 기술해야하는 코드와 일치 합니다.

* 이렇게 devtools 에서 미리 선택자를 사용하여 실제로 엘리먼트가 선택 되는지 확인 후에 코딩을 하면 매번 실행 시 마다 확인해야 하는 번거로움을 피할 수 있겠습니다.

* 주의점 이라고 말할 수 있는 걸로는 위에 캡쳐 처럼 element 가 다수 일 경우와 1개일 경우는 각기 다른 함수를 사용 해야 합니다. 다수 일 경우는 반복문을 사용해서 각 엘리먼트를 컨트롤 해야 겠습니다.

* 예)
1개 일 경우 :  find_element_by_xpath
다수 일 경우 : find_elements_by_xpath

## ps. 

요즘 selenium 을 살펴보면서 알게 된 건데 이런 웹 컨트롤이 가능한 라이브러리로 타임세일이나 핫딜 같은 쇼핑에 이용하시는 분들이 있다고 들었습니다. 대단한 분들 입니다. 저도 그 경지까지 갈 수 있도록 노력해야 겠습니다.