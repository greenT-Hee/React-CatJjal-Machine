# React Cat-jjal Machine

<img src = "https://user-images.githubusercontent.com/101693495/182856369-9f4c08da-1533-46d6-a899-220d7ea3e258.png" width="340px">

<br>

## 프로젝트 소개

React를 babel 트랜스컴파일러를 사용한 후, Node 환경에 컴포넌트화를 해보는 프로젝트입니다.
(gh-page에는 노드 환경 코드가 있습니다.)

<br>

## 기술 스택

| React | JavaScript | Node | HTML | CSS |
| :---: | :--------: | :--: | :--: | :-: |

<br>

## 구현 기능

- input창에 텍스트를 쓰고 입력하면 고양이 사진을 open API를 비동기로 fetch합니다.
(https://github.com/public-apis/public-apis)
- 좋아요 버튼을 누르면 해당 사진이 추가됩니다.
- localStorage에 좋아요한 사진 url과 count 숫자를 담아 데이터를 유지합니다.
- useState hook을 사용하여 상태 관리를 하고 있습니다.

<br>

## 배운점

- useState를 사용하면서, 초기값을 함수로 넣어 사용하여 최적화하는 법 습득
- 바닐라자바스크립트로만 async/await를 사용했는데, 리액트로도 비동기 함수를 실행하는 방법을 습득
