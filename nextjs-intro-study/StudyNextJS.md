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

## Routing

next.js에서의 라우터 사용법은 리엑트와 매우 흡사합니다. 하지만 라우터는 next.js에서 이미 제공하기 때문에 따로 설치 할 필요가 없습니다.또 링크 컴포넌트는 브라우저의 History API를 지원하여 뒤로가기를 하더라도 이전에 렌더링한 페이지를 불러옵니다. 따라서 새 페이지를 불러오기 위한 요청을 하지 않아도 되며, 이전 페이지를 다시 컴파일할 필요가 없다는 장점이 있습니다. 

```js
// 라우터 사용시 Link를 꼭 사용해야 합니다.
// 그리고 링크태그 안에 a태그를 감싸서 작성해야 바람직 합니다.
import Link from 'next/link'
function NavBar() {
    return (
        
            <nav>
                <Link href="/"><a>Home</a></Link>
                <Link href="/about"><a>about</a></Link>
            </nav>
        
    )
}
export default NavBar
```

또 다른 방법으로는 라우터 객체가 있습니다.

```js
import { useRouter } from "next/router";

export default function App() {
  const router = useRouter();
  return (
    <div>
      <h2>Link to 'joycoding' Page</h2>
      <button onClick={() => router.push("/joycoding")}>joycoding</button>
    </div>
  );
}
```

이벤트 핸들러를 통해 라우팅을 수행하는 위의 예시처럼 함수 내에서 라우팅을 수행하기 위해서는 라우터 객체를 활용할 수 있습니다. 주로 사용되는 함수는 back / push / replace 로 각 함수의 설명은 다음과 같습니다.

- router.back() : 직전 페이지로 돌아갑니다.
- router.push("url") : 지정한 경로로 이동하며 히스토리 스택에 URL를 추가합니다.
- router.replace("url") : 지정한 경로로 이동하나 히스토리 스택에 URL를 추가하지 않습니다.