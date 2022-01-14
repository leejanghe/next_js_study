# next.js 

## 설치

리엑트 설치랑 비슷합니다 최근 버전을 설치 하고 싶으면 @latest를 작성합니다.

```
npx create-next-app@latest
```

추가적으로 타입스크립트 기반으로 진행하려면 -typescript 를 붙이면 된다.

<br />

## 라이브러리 vs 프레임워크

라이브러리는 갖다쓰는 것, 프레임워크는 정해진 틀 안에서 커스터마이징

<br />

## Next.js 장점

- Next.js를 사용하는 주된 이유는 SSR을 구현하기 위함이다.
- 초기에 SSR로 렌더링항 HTML을 보내기에 SEO에 유리해지고, 페이지를 변경할 때마다 CSR방식으로 처리하기 때문에 SPA장점도 유지할 수 있다.
- 코드 분할을 통해 초기 구동 속도를 빠르게 할 수 있다.
- Webpack 기반 환경을 통해 HMR을 적용하여 실시간 reload를 적용하는 등, 작업 환경을 커스터마이징하여 개발할 수 있다.

<br />

## pages

pages폴더는 컴포넌트 조각이며 폴더안에 있는 파일명에 따라 route가 결정된다. 예외적으로 index.js의 경우에는 앱이 시작하는 파일이라고 보면 된다. 그리고 일반 리엑트 처럼 위에 `import react from "react"`를 쓸 필요가 없다 다만 useState, useEffect, lifecycle method를 사용할 경우에는 꼭 Import를 해야 한다.

<br />