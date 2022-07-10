# game-go-frontend
# 0. 개발 환경, 언어, 도구

- Vscode
- React
- TypeScript
- Prettier (자동완성)
- Npm (패키지관리)

# 1. React 코딩 컨벤션

## Variables

- file-scope 상수는 `UPPER_CASE` 로 작성합니다.
- 그외에는 모두 `camelCase`
- `Boolean` 타입의 변수는 `is`, `has`, `can`과 같은 접두사를 붙입니다.

## Event Handler

- Component Prop로 넘기는 이벤트 핸들러에는 `on` 접두사를 붙입니다.

## File Naming

- components 이름은 `PascalCase` 로 작성합니다.
- Non-components, inline스타일, 속성명은 `camelCase` 로 작성합니다.

## BUG AVOIDANCE

- `null` 또는 `undefined` 일 수 있는 값은 optional chaining 연산자 `?.`를 사용합니다.

## ARCHITECTURE & CLEAN CODE

- 유틸리티 파일을 만들어 중복된 코드를 피합니다.
- 하나의 파일에 하나의 React component만 만듭니다.
- 다른 사람의 이해를 돕기 위해 주석을 다는 것을 권장합니다.
- 불필요한 주석을 사용하지 않는다.
- API 호출이나 상태관련 로직은 분리해서 사용합니다.

## ES6

- spread 연산자를 사용합니다..
- let과 const만 사용합니다. (var 사용금지)
- 되도록 Arrow Function을 사용합니다.

## Styeld compoents

- 모든 `styled` 변수는 해당 컴포넌트 파일에 정의합니다.

# 2. 레파지토리 관리 기법

Organization에서 BackEnd 별도의 레파지토리에서 관리합니다.

### **⚙️** 브랜치 관리 전략

### **⚙️ Git-flow**

![Untitled](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/31a7203e-6bf2-4049-a700-0d2a32b32b4d/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220708%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220708T045236Z&X-Amz-Expires=86400&X-Amz-Signature=6db79eaefef1c6b16f4a9b090a6b443325fd41e9594371ae2711263d4ae1d505&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Untitled.png%22&x-id=GetObject)

**⚙️ 브랜치 구성**

Organization에서 FrontEnd 별도의 레파지토리에서 관리합니다.

### 브랜치 구성

- main : 라이브 서버에 제품으로 출시되는 브랜치
- develop : 개발을 위한 브랜치
- feature : 페이지 브랜치 (페이지의 기능별)
- hotfix : main 브랜치에서 발생한 버그를 수정하는 브랜치

- `feature` 브랜치는 하나의 기능을 개발하기 위한 브랜치입니다. 부모는 `develop`이며, 개발이 완료되면 `develop`에 merge합니다. 브랜치 이름은 보통 `feature/*`이 됩니다.
- `develop` 브랜치는 개발을 위한 브랜치입니다. 여러 `feature`들이 merge되는 장소이며, 아직 release되지 않은 기능들이 모여 있게 됩니다.
- `master` 브랜치는 실제 운영 중인 서비스의 브랜치입니다.
- `hotfix` 브랜치는 서비스에 문제가 발생했을 때 핫픽스에 해당하는 브랜치입니다. 기능 개발(`feature`) 등과 달리 빠르게 대처해야 할 필요가 있기 때문에, `master` 브랜치에 직접 merge하는 전략을 취합니다. `develop`과의 차이가 발생하기 때문에, 나중에 차이를 merge할 필요가 있습니다.


### 커밋 메시지

**⚙️ 메시지 구조**

`Type : 제목 #이슈번호`

`본문`

**⚙️ Type**

- `feat` : 새로운 기능에 대한 커밋
- `fix`	: 수정에 대한 커밋
- `bug`	: 버그에 대한 커밋
- `build` : 빌드 관련 파일 수정에 대한 커밋
- `docs` : 문서 수정에 대한 커밋
- `styled` : 코드 스타일 혹은 포맷 등에 관한 커밋
- `test` : 테스트 코드 수정에 대한 커밋


# 3. 라이브러리

- styled-components 
- react-query
- redux, react-redux
- react-router-dom
- axios

- framer-motion
- react-hook-form

# 개발기간

2022 07 06 ~ ing


