# 환경변수 설정

## Production 환경변수 설정하기

```shell
yarn config:set
```

- 프로젝트 루트에 있는 `.env.prod`의 내용을 읽어서 `firebase functions:config:set` 해줌
- 이렇게하면 `firebase.config().app_key`와 같이 코드상에서 읽을 수 있음.

## Local 환경변수

- 프로젝트 루트에 있는 `.env.dev` 파일을 읽어서 `process.env`에 설정함

## 환경변수 읽는 파일

- `constants > getEnvironment.ts`에서 환경에 따라 어떤 환경변수 읽을지 판단하는 로직이 있음.
