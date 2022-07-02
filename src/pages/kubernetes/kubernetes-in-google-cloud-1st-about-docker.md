---
tags: [쿠버네티스, 구글 클라우드]
title: "[구글 스터디 잼 2022] Kubernetes in Google Cloud 1주차 - 퀘스트 1. 도커 소개"
description: 2022년 구글 스터디 잼 1주차, Docker의 기본 사용법
logo: kubernetes
color: "#326CE5"
since: "2022-06-27"
---

# {{ frontmatter.title }}
{{ frontmatter.description }}

## 용어
<dl>
    <dt id="컨테이너">컨테이너</dt>
    <dd>
        애플리케이션을 실행하기 위해서 필요한 요소(OS, 라이브러리, 애플리케이션, 설정파일 등)를 감싸서 어떤 환경에서든 쉽게 실행할 수 있게 해주는 기술로  VM(가상 머신)보다 작은 용량과 메모리를 사용한다.
    </dd>
    <dt id="이미지">이미지</dt>
    <dd>
        애플리케이션에 필요한 요소를 감싼 내용물
    </dd>   
    <dt id="오케스트레이션">오케스트레이션</dt>
    <dd>여러 서버에 존재하는 컨테이너 및 설정을 관리하기 위한 도구</dd>
</dl>

도커는 애플리케이션 개발,출시,실행을 위해 사용되는 오픈소스 [컨테이너](#컨테이너) 도구로
어플리케이션과 인프라를 분리하고 인프라를 관리형 애플리케이션처럼 처리할 수 있음

## 도커 [컨테이너](#컨테이너) 기본 사용법
도커에서 이미지를 다운받고, 컨테이너를 실행하는 등 기본적인 사용법에 대하여

### [컨테이너](#컨테이너) 실행
```bash
$ docker run hello-world

Hello from docker!
```
`hello-world`가 실행되는 도커 [이미지](#이미지)로 해당 부분을 필요에 따라 맞는 [이미지](#이미지)를 입력하면 된다.

`docker run` 명령어를 실행하면
1. 로컬에 설치된 도커 [이미지](#이미지)가 있는지 확인
2. 없으면, 레지스트리(도커 [이미지](#이미지)가 저장되어 있는 저장소)에서 해당 [이미지](#이미지)를 다운로드 한다.
    * 일반적으로 Docker Hub (`hub.docker.com`)에서 [이미지](#이미지)를 찾으며 앞에 레지스트리 URL을 붙여 레지스트리를 지정해줄 수 있다. (Ex. `gcr.io/hello-run`)
3. 로컬에 다운받은 [이미지](#이미지) 혹은 새로 가져온 [이미지](#이미지)로 [컨테이너](#컨테이너)를 생성한다.
4. 생성한 [컨테이너](#컨테이너)를 실행한다.

### [컨테이너](#컨테이너) 확인
```bash
$ docker ps

CONTAINER ID        IMAGE               COMMAND             CREATED             STATUS              PORTS               NAMES
```
`docker run hello-world`는 이미 실행이 완료되었기 때문에 표시되지 않는다. 실행 완료된 [컨테이너](#컨테이너)를 표시하기 하기 위해서는 `-a` 옵션을 추가
```bash
$ docker ps -a

CONTAINER ID      IMAGE           COMMAND      ...     NAMES
6027ecba1c39      hello-world     "/hello"     ...     elated_knuth
358d709b8341      hello-world     "/hello"     ...     epic_lewin
```

### [컨테이너](#컨테이너) 중지
```bash
$ docker stop container-id
```

모든 [컨테이너](#컨테이너)를 중지하려면
```
$ docker stop $(docker ps -q)
```

### [컨테이너](#컨테이너) 제거
```bash
$ docker rm container-id
```

모든 [컨테이너](#컨테이너)를 제거하려면
```
$ docker rm $(docker ps -q)
```

### 설치된 [이미지](#이미지) 목록
```bash
$ docker images

REPOSITORY     TAG      IMAGE ID       CREATED       SIZE
hello-world    latest   1815c82652c0   6 days ago    1.84 kB
```
도커 레지스트리에서 다운로드한 [이미지](#이미지)나 내가 빌드된 [이미지](#이미지) 목록이 표시된다.

### [이미지](#이미지) 삭제
```bash
$ docker rmi image:tag
```

모든 [이미지](#이미지)를 제거할 때는
```bash
$ docker rmi $(docker images -aq)
```

## 도커 [컨테이너](#컨테이너) 빌드, 디버그 및 배포

### 빌드

#### Dockerfile
도커 데몬에 [이미지](#이미지)를 빌드하기 위한 방법을 정의하기 위해서 `Dockerfile`을 사용한다.

```Dockerfile
# 이미지가 사용할 상위 이미지
# 일반적으로 OS나 실행환경이 설치된 이미지를 사용한다.
# 이 파일은 Alpine Linux에 deno v1.23.2를 설치한 이미지다.
FROM denoland/deno:alpine-1.23.2

# 컨테이너의 작업 디렉토리를 지정한다.
WORKDIR /app

# 현재 디렉토리의 내용을 작업 디렉토리에 복사한다.
ADD . /app

# 컨테이너 포트 80, 443을 외부에 공개한다.
EXPOSE 80

# 컨테이너가 실행될 때 사용할 명령어
# 이 파일에서는 index.ts 파일을 deno로 실행한다.
CMD ["deno", "index.ts"]
```
 * `Dockerfile`에 대한 자세한 내용: https://docs.docker.com/engine/reference/builder

#### 빌드
```bash
$ docker build -t app-name:version .
```
현재 위치(`.`)에 있는 `Dockerfile`을 참고하여 `app-name`이란 이름의 [이미지](#이미지)를 `version`버전으로 생성하는 명령어

도커의 [이미지](#이미지)는 레이어로 이루워져있으며 다른 [이미지](#이미지)와 공통으로 사용되는 레이어는 다시 빌드하거나 다운로드 하지 않고 재사용된다.

### 디버깅

#### 로깅
```bash
$ docker logs -f container-id
```

#### [컨테이너](#컨테이너) 접근
```bash
$ docker exec -it container-id bash
```
`-it` 옵션은 stdin을 열린 상태로 유지하여 [컨테이너](#컨테이너)와 상호작용할 수 있게 한다.

### 배포

#### 태깅
기본적으로 빌드 시에도 태그를 할 수 있지만, 실수 등으로 하지 못한 경우에나 여러개의 태그를 사용하는 경우 아래의 명령어로 태그를 추가할 수 있다.
```bash
$ docker tag name:tag new-name:new-tag
```

#### 푸쉬
다운로드 시와 동일하게 기본적으로 `hub.docker.com`에 푸쉬되며 앞에 호스트를 붙여 다른 레지스트리에 푸쉬할 수 있다.
```bash
$ docker push name:tag # or gcr.io/project-id/name:tag
```

##### gcr.io에서 푸쉬 확인하기.
Google Cloud콘솔에서 **도구 > Container Registry**로 이동해서 확인할 수 있다.

## 참고 자료
 - "쿠버네티스 알아보기 1편 : 쿠버네티스와 [컨테이너](#컨테이너), 도커에 대한 기본 개념", Samsung SDS, 2022년 2월 22일 작성, 2022년 7월 2일 확인, https://samsungsds.com/kr/story/220222_kubernetes1.html
 - "Docker 소개", Google Cloud Skills Boost, 2022년 7월 2일 확인, https://www.cloudskillsboost.google/focuses/1029
