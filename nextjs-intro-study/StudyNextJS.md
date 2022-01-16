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

<br />

## CSS Modules

css를 사용할 때 클래스 이름을 고유한 값으로 자동으로 만들어서 컴포넌트 스타일 클래스 이름이 중첩되는 현상을 방지해 주는 기술을 css module이라고 한다. 고로 클래스명이 충돌하는 단점을 극복 할 수 있고 컴포넌트 단위로 스타일을 적용 할 때 유용하다. 

<br />

### 사용법

파일명은 보통 파일명.module.css 라고 사용하며 적용법은 아래와 같다.

<br />

```js
import styles from "./NavBar.module.css"

function CssModule() {
    return (
        
            <nav className={styles.nav}>
                <h1>css 모듈</h1>
            </nav>
        
    )
}

export default CssModule
```

만약 여려개의 클래스를 적용 할 때는 빽틱을 사용하면 된다.

```js
<Link href="/">
    <a className={`${styles.link} ${router.pathname === '/'? styles.active:""}`}>Home</a>
</Link>
```

<br />

## Style JSX

기존 리액트 어플리케이션은 크게 두 가지 방법으로 스타일을 꾸밀 수 있었습니다. 하나는 CSS나 SASS 등 별도의 스타일 파일을 생성해 관리하는 방식이고, 다른 하나는 컴포넌트 안에서 스타일을 작성하는 CSS-in-Js 라는 방식입니다. 이중 넥스트(Next.js)에서는 CSS-in-js 방식을 권장하며, styled-component와 유사한 styled-jsx 라는 도구를 활용합니다.

<br />

### styled-jsx 란 ?

styled-jsx는 넥스트 프로젝트에 기본적으로 포함되어 있습니다. 이를 활용하기 위해서는 jsx 라는 값을 속성으로 갖는 style 태그를 컴포넌트 본문에 위치시킨 후, 적용할 CSS 스타일을 *문자열로 작성하면 됩니다.

```js
<>
  <div className="msg">Hello, JoyCoding!</div>
  // `(템플릿 문자열)으로 감싸진다! style 컴포넌트와 매우 유사
  <style jsx>`
    .msg {
      font-size: 20px;
      color : red;
    }
  `</style>
</>
```

<br />

### global 속성 사용하기

스타일 태그에 global 속성을 추가하면 다른 컴포넌트의 클래스네임이 .msg 요소에도 스타일을 입힐 수 있습니다.

```js
<div>
  <div className="msg">Hello, JoyCoding!</div>
  <style jsx global>`
    .msg {
      font-size: 20px;
      color : red;
    }
  `</style>
</div>
```

<br />

## Custom App

nextJS 어플리케이션의 시작페이지를 커스텀화 할 수 있습니다. _app 과 _document으로 공통적으로 적용될 내용을 작성합니다. 그중에서 _app은 서버로 요청이 들어왔을 때 가장 먼저 실행되는 컴포넌트로, 페이지에 적용할 공통 레이아웃의 역할을 합니다.

```js
//기본 탬플릿
//공통으로 사용하는 navbar나 css 등 적용 가능
function App({Component, pageProps}) {
    return (
        <div>
            <Component {...pageProps} />
        </div>
    )
}

export default App
```

주목적은 모든 컴포넌트에 공통으로 적용할 속성 관리를 합니다. 여기서 Component 속성값은 서버에 요청한 페이지가 됩니다. pageProps는 getInitialProps, getStaticProps, getServerSideProps 중 하나를 통해 페칭한 초기 속성값이 됩니다. 

<br />

## public 활용

public폴더에 이미지를 꺼내 올때 `/이미지파일이름` 경로를 작성하면 쉽게 이미지를 불러올수 있습니다.

<br />

## api key 숨기기

next.config.js를 활용해서 api key를 숨길수 있습니다. 

<br />

### env 파일 만들기

우선 env파일을 만들어서 숨기고 싶은 api 키를 작성합니다. 

```js
API_KEY=실제api키작성
```

<br />

### gitignore 숨기기

깃이그노어 파일에 가서 `/env` 명시합니다. 그러면 깃 푸쉬할 때도 api key를 숨길수 있습니다. 주의 할점은 env파일과 gitignore파일이 동일 선상에 있어야 합니다.

<br />

### next.config.js 활용

config.js에서 rewrites라는 기능이 있습니다. 사용법은 아래와 같습니다. source는 유저가 이동하는 경로라고 생각하면 되고 destination은 source코드를 destination으로 다시 읽는 다라고 생각하면 좋습니다. (rewrites)

```js
const API_KEY = process.env.API_KEY;

module.exports = {
  reactStrictMode: true,
  async rewrites() {
    return [
      {
        source: '/api/movies',
        destination: `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`,
      },
    ];
  }
}
```

고로 아래 예시 처럼 `/api/movies` 를 fetch했을때 위에 rewrites메서드를 통해 destination에 있는 주소로 읽게 됩니다. 또 한 브라우저 상에서도 본인의 api key를 숨길 수 있어 보안상에서도 좋습니다.

```js
  const [movieList, setMovieList] = useState([]);
    useEffect(()=>{
        (async ()=>{
            const {results} = await(
                await fetch(`/api/movies`)
            ).json();
            console.log(results)
            setMovieList(results);
        })();
    },[])
```