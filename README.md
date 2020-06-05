# Movie App

React JS Fundamental Course by nomadcoders

# 설치 프로그램
* node
* npm
* npx
* git
* visual studio code
* 영화 리스트 사이트 : https://yts-proxy.now.sh/list_movies.json
# 프로젝트 시작
* npx create-react-app <project-name>

# 알게 된 것
* array.map 을 이용하여 component 호출
* jsx = html + javascript
* function component 인자 검증
    * npm i prop-types
    * 펑션.propTypes{}; 로 각 인자값 검증 처리
* Lifecycle of class Component (extends React.Component)
    * Mounting
        * constructor()
        * render()
        * componentDidMount() - 최초에 한번
    * Updating
        * render()
        * componentDidUpdate()
    * Unmounting
        * componentWillUnmount()
* axios
    * npm i axios
* state 가 필요하다면 class 아니면 function 으로 처리

# Deploy Github page
* 깃헙에 업로드를 허가해주는 모듈 설치
    * npm i gh-pages
    * package-json 라인 추가
        ```javascript
        "homepage": "https://{github username}.github.io/{github repository name}/"
        ```
    * package.json 에 predeploy, deploy 추가
        ```javascript
        "scripts": {
            "start": "react-scripts start",
            "build": "react-scripts build",
            "deploy": "gh-pages -d build",
            "predeploy": "npm run build"
        }
        ```
    * https://jaden-song.github.io/react-movie-app/

# Route
네비게이션등을 만들 수 있다.
* npm install react-router-dom
* Link 를 통한 route 호출
* HashRouter 아래의 Route 를 통해 페이지 이동
* HashRouter 는 url 에 # 이 붙어서 이동 (BrowserRouter 는 # 없음)
    * github pages 에서는 설정이 복잡하여 HashRouter 를 사용함

# 신기한 점
Router 에서 "~/:id" 로 지정하고, Link pathname 에서 `` `/movie/${id}` `` 작성 되어야 함 (Grave)

# Redux
state 를 저장하는 것, 필요하면 반영해보자
