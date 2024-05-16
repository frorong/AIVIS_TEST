# Aivis_Test

## Install dependencies

```
pnpm install
```

## Env

root 디렉토리에 `.env.local` 파일을 만들고 `.env.example`과 같이 작성해주세요.
`NEXT_PUBLIC_API_BASE_URL`에는 실제 url을 넣어주세요.

## Scripts

```
pnpm dev
pnpm build
```

`http://localhost:3000`

- nextjs의 rewrites를 사용하여 꼭 3000 포트가 아니어도 CORS 오류가 발생하지 않습니다.

## Libraries

```
core
- nextjs app router

api
- axios
- react-query

style
- tailwind

```

## Structure

```
- src
  - app
    - api
    - auth/login
    - project
      - [projectId]
      - create
    - queryClient
    - providers
  - assets
  - components
  - constant
  - hooks
    - api
  - libs
    - api
  - pageContainer
  - utils
  - types
- DockerFile
- .env.local
- next.config.mjs
```

## Rewrites

`3000` 포트에서 어플리케이션을 테스트하라고 말씀하셨지만, nextjs의 rewrites를 사용하여 CORS, SOP를 우회할 수 있었습니다.  
test서버를 사용하거나 포트를 여러 개 띄워두어도 nextjs의 rewrites를 사용하기 때문에 CORS가 발생하지 않아 편하게 개발할 수 있습니다.  
-> nextjs는 nodejs 기반의 서버에서 동작하기 때문에 client -> server가 아닌 server -> server로 요청이 가능합니다. 따라서 이러한 동작이 이루어집니다.

## Pagination

`searchParams`를 이용하여 pagination을 구현하였습니다. 이 경우, 페이지를 새로고침하여도 기존 상태의 리스트가 남아있기 때문에 좀 더 사용자 친화적입니다. ex) 쉽게 공유 가능.

추가로, server side fetching 이후 initial data로 클라이언트에 넘겨주는 방식으로 동작하게 설계했습니다. 이 경우 개발 시에 리소스는 더 많이 소모되지만, 데이터의 캐싱이 가능하고 데이터들이 렌더링되는 속도가 향상됩니다.  
또한 server side에서 API 요청이 이루어지기 때문에 안정성도 높아집니다. (클라이언트가 응답된 데이터에 접근 불가. 요청부 확인 불가.)

## Axios

`axiosInterceptor`를 활용하여 자칫 중복될 수도 있는 예외처리 로직을 줄였습니다. response status가 401이나 403이라면 로그인 페이지로 이동됩니다.

## Tailwind

코딩테스트 과제 특성상 스타일보다는 코드퀄리티가 우선시된다고 알고있습니다. 따라서 서버컴포넌트에서도 작동 가능하고, 빠르게 개발이 가능한 tailwind를 채택했습니다. 다만 아쉬운점은 tailwind에 대한 숙련도가 높지 않아 제가 이해하기 어려운 코드를 짜진 않았을까 걱정됩니다.

## Docker

도커파일을 생성하여 로컬에서 빌드, 실행했습니다.  
linux, node18버전을 사용했습니다.

## Pnpm

pnpm을 사용하여 개발했습니다. 빠른 속도와 적은 디스크 용량이 장점이라 생각하여 채택했습니다. 저 혼자 개발하는 것이기 때문에 yarn berry의 zero install이 전혀 와닫지 않았고, git이 무거워질까봐 걱정되어 pnpm을 채택했습니다.

## Providers

한 번에 감싸 적용할 수 있는 Providers 컴포넌트를 구성했습니다. 현재는 QueryClientProvider밖에 존재하지 않습니다. 하지만, emotion의 themeProvider나 toast를 사용하게 된다면 ToastContainer등도 적용해야하기 때문에 추후 확장성을 고려하여 Providers를 적용했습니다.

## Cookie

NextJS 특성상 서버 측에서 접근할 일이 많기 때문에 session stroage나 local stroage가 아닌 cookie에 token 정보를 저장했습니다.

---

좋은 테스트 경험할 수 있도록 해주셔서 감사합니다.

테스트 안내사항이 PC상으로도 확인할 수 있었다면 좋지 않았을까 하는 바램이 있습니다.  
(API 필드나 url 복사 등 편의)
