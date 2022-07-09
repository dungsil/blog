---
tags: [쿠버네티스, 구글 클라우드]
title: "[구글 스터디 잼 2022] Kubernetes in Google Cloud 1주차 - 퀘스트 1. 쿠버네티스 엔진"
description: 2022년 구글 스터디 잼 1주차, 쿠버네티스 엔진
logo: kubernetes
color: "#326CE5"
since: "2022-07-09"
---

# {{ frontmatter.title }}
{{ frontmatter.description }}

## 시작하기 앞서
GCP에 종속된 내용은 제목 앞에 **[GCP]**를 붙여서 표기할 예정입니다.

## 용어
<dl>
    <dt>클러스터</dt>
</dl>

## 1. [GCP] 리전 설정
쿠버네티스가 클러스터 및 리소스를 생성할 데이터센터 리전 위치를 지정한다.
해당 부분은 클라우드 벤더 별로 설정 방법을 확인할 것

```bash
$ gcloud config set compute/zone [리전 명]
```

## 2. [GCP] 클러스터 생성
클라우드 서비스에서 제공하는 쿠버네티스 서비스를 이용하여 클러스터를 생성한다.

```bash
$ gcloud container clusters create [CLUSTER-NAME]
```
 * 클러스터 명은 문자로 시작하고 영숫자로 끝나야하며 40글자를 초과하면 안된다.

## 3. [GCP] 클러스터 인증
GKE 인증 정보를 입력한다.

```bash
$ gcloud container clusters get-credentials [CLUSTER-NAME]
```

## 4. 쿠버네티스 배포
### 신규 배포 객체
`kubectl create` 명령어를 사용한다.
```bash
$ kubectl create deployment [container name] --image=[container image]
```

### 신규 서비스 객체
`kubectl expose` 명령어를 사용한다. 아래의 명령어는 `container name` 컨테이너를 사용자가 8080 포트를 통해 접근할 수 있도록 허용하며 로드밸런싱한다.
```bash
$ kubectl expose deployment [container name] --type=LoadBalancer --port 8080
```

## 5. 서비스 검사
```
$ kubectl get service

NAME              TYPE              CLUSTER-IP        EXTERNAL-IP      PORT(S)           AGE
hello-server      loadBalancer      10.39.244.36      35.202.234.26    8080:31991/TCP    65s
kubernetes        ClusterIP         10.39.240.1       <none>           433/TCP           5m13s
```

## 6. 클러스터 제거
```
$ gcloud container clusters delete [CLUSTER-NAME]
```

## 참고자료
 - "Kubernetes Engines: Qwik Start", Google Cloud Skills Boost, 2022년 7월 9일 확인, https://www.cloudskillsboost.google/focuses/878