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