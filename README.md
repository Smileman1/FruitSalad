# FruitSalad
<img width="200" alt="FruitSalad_Logo" src="https://user-images.githubusercontent.com/71224672/131607029-3541c49a-1894-4840-977a-a9f6741dbba3.PNG" alt="image-20210830221721743" style="zoom:50%;">

같은 방에 입장한 사람과 1:1 화상채팅을 할 수 있는 서비스입니다.<br><br>
개인 프로젝트로 진행하였으며, 지정된 주소로 접속하면 PC, Mobile 모두 접속 가능하도록 개발하였습니다. 초기 화면에서 같은 방 번호를 입력하여 입장하면 실시간으로 영상과 메신저를 교환할 수 있습니다. 전체적으로 socket 기술을 사용하였습니다.


## 🥝 프로젝트 사용 기술
- [Node.js](https://nodejs.org/ko/)
- [socket.io](https://socket.io/)
- [pug](https://dydals5678.tistory.com/91)
- [nodemon](https://www.npmjs.com/package/nodemon)
- [webrtc](https://developer.mozilla.org/ko/docs/Web/API/WebRTC_API)
- [localtunnel](https://www.npmjs.com/package/localtunnel)
- [Express](https://expressjs.com/ko)
- [Intellij IDEA](https://www.jetbrains.com/ko-kr/idea)

## 🥝 프로젝트 포커스
- 원활한 양방향 통신이 되도록 노력하였습니다.<br>
- 서버와 클라이언트 간의 누수 없는 호출을 위해 노력하였습니다.<br>
- 다양한 브라우저에서 실행할 수 있도록 설계하였습니다.<br>
- 어떠한 기술을 사용할 때는 그 기술을 사용하는 이유를 이해하고 사용하였습니다.<br>
- 스트레스 테스트를 통해 예외 상황이 생길 경우를 대비하였습니다.<br>
- 유저들이 보낸 신호를 투명하게 표시하여 전체적인 흐름을 이해하도록 노력하였습니다.<br>
- 중간에 통신이 끊어지더라도 error 창이 뜨지 않고 계속해서 신호를 탐색하도록 설계하였습니다.<br>


## 🥝 화면 구성도

<img width="400" alt="screen" src="https://user-images.githubusercontent.com/71224672/131614182-6ae49a13-3a42-488d-823b-26059a512366.png" alt="image-20210830221721743" style="zoom:50%;">

## :earth_asia: 프로젝트 버전
- [FruitSalad v1.0.0] : 프로젝트 생성
- [FruitSalad v1.0.1] : 네트워크 연결 확인
- [FruitSalad v1.0.2] : 채팅 기능 추가
- [FruitSalad v1.0.3] : 1:1 채팅 기능 추가
- [FruitSalad v1.0.4] : 화상 채팅 기능 추가
- [FruitSalad v1.0.5] : 오디오, 비디오 비활성화 기능 추가
- [FruitSalad v1.0.6] : 테스트 및 성능 개선


## 🥝 시작하기
### Prerequisites
- npm
>```
>npm install npm@latest -g
>```

### Installation
1. Clone the repo
>```
>git clone https://github.com/Smileman1/FruitSalad.git
>```
2. Install NPM packages
>```
>npm install
>```
3. Start
>```
>npm run dev
>lt --port 3000
>```




## :phone: 연락처
Name - 김덕중<br>
email - ejrwnd1103@naver.com
