---
layout: post
title:  "4. jekyll 테마구동 오류체크"
date:   2020-09-17 15:00:00 +0900
categories: [jekyll]    
tag: [git.io.start]
---

* TOC
{:toc}

# 들어가며

테마를 로컬에서 구성해 놓고 커스터마이징 후 git 에 올리게 되면 

.gitignore 에 설정 된 git commit 금지 항목들이 git 에 올라가지 않기 때문에

새로운 환경에서 github io 에 commit 된 정보를 clone 하여 사용하게 되면 

많은 오류들을 접하게 될 겁니다. PC를 초기화 했다 던가 다른 PC 에서 구성을해야 한다면 말이죠.

저같은 경우는 새로운 PC를 사용하게 되면서 장시간 사용하지 않던 git io 를 사용해 보려고

다시 구성하는 과정에서 많은 오류들을 보았습니다.

# 재구성 

* 환경 재구성을 순서대로 나열하는 형식으로 설명 메모를 해 놓아보려 합니다.
* ruby 를 설치 합니다.
* gem 을 이용해 jekyll 과 bundler 를 설치 합니다.
> gem install jekyll bunbler
* 일단 코드를 가져와야 하니 저의 github 에서 io 사이트 코드를 clone 해 옵니다.
* 구동을 해봅니다.
> jekyll serve --trace

```text
The minima theme could not be found
```
* 테마를 찾을 수 없다는 군요
* bundle 을 이용하여 필요한 걸 설치해 보려 합니다.
> bundle install

```text
Could not locate Gemfile
```
* Gemfile 이 없답니다.
  * .gitignore 에서 필터링 되어 누락 된 gemfile 
  * local 백업 파일 중에서 찾았습니다.
  * READ_ME 에 일단 코드를 백업해 두고 
  * root folder 에 Gemfile 을 생성하여 코드를 옮겨 줍니다.
> bundle install
* 뭔가 많은걸 설치합니다.
> jekyll serve --trace

```sql
You have already activated mercenary 0.4.0, but your Gemfile requires mercenary 0.3.6. Prepending `bundle exec` to your command may solve this
```

* 뭔가 버전이 맞지 않으니 bundle exec 를 이용해서 실행하라는 이야기 같습니다.
> bundle exec jekyll serve --trace

* 구동에 성공했습니다.

![](/static/img/2020-09-17-15-21-27.png)