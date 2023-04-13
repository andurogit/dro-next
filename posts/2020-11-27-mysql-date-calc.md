---
layout: post
title:  "MySQL(mariaDB) 날짜 계산"
date:   2020-11-27 17:00:00 +0900
categories: MYSQL
tag: [날짜계산, 쿼리]
---

* TOC
{:toc}

# 들어가며

그냥... 남깁니다. 기억에서 사라지기 전에...

# 쿼리

```sql
-- 현재 날짜 시분초 포함
SELECT NOW()
FROM DUAL
;

-- 현재일자
SELECT CURRENT_DATE
FROM DUAL
;

-- 현재 날짜 마지막 날
SELECT LAST_DAY(NOW())
FROM DUAL
;

-- 한달 전
-- 파라미터 : 기준날짜, 구간 
SELECT DATE_ADD(NOW(), INTERVAL -1 MONTH)
FROM DUAL
;

-- 하루 전
SELECT DATE_ADD(NOW(), INTERVAL -1 DAY)
FROM DUAL
;

-- 한시간 전
SELECT DATE_ADD(NOW(), INTERVAL -1 HOUR)
FROM DUAL
;
```

# 주의사항

1. NOW() 나 CURRENT_DATE 들은 '2020-11-27' 이렇게 날짜형식으로 대체가능
    1. SELECT LAST_DAY('2020-11-27') FROM DUAL;
1. 날짜가 아닌 데이터로 쿼리하면 리턴값은 `NULL`
    1. SELECT LAST_DAY('2020-02-30') FROM DUAL;


