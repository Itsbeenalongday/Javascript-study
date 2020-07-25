# Javascript-study

## vainilla javascript

+ introduce
  - JavaScript는 웹페이지를 동적으로, 프로그래밍적으로 제어하기 위해서 고안된 언어다. 그렇기 때문에 오늘날 가장 중요한 플랫폼이라고 할 수 있는 웹브라우저에서 유일하게 사용할 수 있는 프로그래밍 언어이다. 최근에는 HTML5의 적용이 가속화되면서 지금까지 모바일 환경에서 네이티브 앱(안드로이드, IOS)으로 구현해왔던 기능이 웹에서도 대부분 구현할 수 있게 되고 있다. 웹이 크로스플랫폼이라는 점, 검색 가능하다는 점, 네이티브 디바이스를 제어할 수 있는 하드브리드 시스템(phonegap 등)이 존재한다는 점에서 웹의 중요함은 더욱 확대될 전망이다. 자연스럽게 웹에서 구동되는 유일한 언어인 JavaScript의 중요함도 점점 커질 것으로 예상된다.

  - 자바스크립트로 할 수 있는 일을 참고하면 알 수 있지만, 최근에는 자바스크립트가 웹을 벗어나서 광범위하게 사용되고 있다. 그 효용이 다각적이면서도 배우기 쉬운 점 때문에 자바스크립트는 중급 개발자나 프로그래밍 입문자 모두가 도전해볼만한 언어다.

+ 역사
  - HTML이 한번 화면에 출력된 후에는 그 형태나 동작방법을 바꿀 수 없는 문제를 해결하기 위해서 네스케이프에서 만들어졌다. 이후에 이 언어는 마이크로소프트의 인터넷 익스플로러에 jscript라는 이름으로 탑재된다. 후에 ECMA라는 표준화 기구로 이 언어의 관리 주체가 옮겨졌다.

+ ECMAScript
  - ECMAScript는 표준화 기구인 Ecma International에 의해서 관리되는 자바스크립트 표준안이다. 현재의 자바스크립트는 ECMAScript 3 기반으로 만들어졌고, 현재 시점(2013년)에서는 ECMAScript 5가 표준으로 정의 되었고 이 버전의 자바스크립트를 브라우저 벤더들이 자신들의 브라우저에 구현하는 작업이 한창이다. 곧 ECMAScript 5의 새로운 기능들을 웹에서도 문제 없이 사용할 수 있게 될 것이다. ECMAScript 4는 기존의 자바스크립트와 너무 큰 차이점 때문에 표준으로 채택되지 못했다.

+ JavaScript 학습에 요구되는 선행학습
  - 웹페이지를 동적으로 제어하기 위한 목적으로 자바스크립트를 학습한다면 아래 내용은 반드시 선행해야한다. 아래 내용을 학습 한 후에 본 수업을 공부하고 DOM을 학습하면 웹페이지를 프로그래밍적으로 제어 할 수 있다. 최근에는 DOM을 직접 제어하는 것 보다는 jQuery와 같은 라이브러리를 사용하는 것이 일반적이다. DOM에 대한 내용은 DOM 수업을 참고하고 jQuery에 대한 내용은 jQuery 수업을 참고한다.

    + HTML
      - 웹페이지를 만드는 언어로 자바스크립트가 제어하는 직접적인 대상이다.
      - 생활코딩 HTML 수업과 HTML 사전을 참고한다.
    + CSS
      - 웹페이지를 꾸며주는 언어로 자바스크립트와 함께 사용되어 HTML을 보다 사용자 친화적인 문서, 응용프로그램으로 만들어준다.
      - 생활코딩 CSS 수업, CSS 사전을 참고한다.

+ JavaScript로 할 수 있는 일들
  - 웹페이지 스크립팅 - DOM
  - 서버 측 스크립팅 - node.js
  -  브라우저 확장기능
  -  Google Chrome extensions
  -  Opera extensions
  -  Apple Safari 5 extensions
  -  Apple Dashboard Widgets
  -  Microsoft Gadgets
  -  Yahoo! Widgets
  -  Google Desktop Gadgets
  -  Serence Klipfolio
  -  Adobe PDF
  -  Tools in the Adobe Creative Suite,
  -  Photoshop
  -  Illustrator
  -  Dreamweaver
  -  InDesign
  -  OpenOffice.org
  -  Unity 게임 엔진
  -  Google Apps Script
  -  Google Spreadsheets
  -  Google Sites
  -  채팅 시스템
  -  ChatZilla
  -  XChat

+ JavaScript에 영향을 준 언어
  - Java : 기본적인 문법
  - Scheme : 1급함수(first-class function) 함수의 인자와 반환값으로 함수를 사용
  - Self : prototype 기반의 상속 개념

## Reference and API Documents
+ javascript API Docs
  - [jQuery를 만든 John Resig의 JavaScript 고급 강의](http://ejohn.org/apps/learn/) 
  - [Firefox의 모질라 재단에서 운영중인 자바스크립트 튜토리얼](https://developer.mozilla.org/ko/docs/JavaScript/Guide)
  - [생활코딩 JavaScript 사전](http://opentutorials.org/course/50)
  - [Microsoft javascript API Docs](https://docs.microsoft.com/ko-kr/previous-versions/visualstudio/visual-studio-2010/z688wt03(v=vs.100)?redirectedfrom=MSDN)
  - [HTML5 Rocks](http://www.html5rocks.com/ko/)
+ 호스트 환경의 API Docs
  - [browser API](https://developer.mozilla.org/en-US/docs/Web/API)
  - [Node js API](https://nodejs.org/api/)
  - [Google Apps Script API](https://developers.google.com/apps-script/)