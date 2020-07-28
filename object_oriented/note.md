# java compile in terminal

1. without packaging
```shell
$ java <.java file_name>.java # 패키징 안되있는 기본 컴파일 방법
$ java <.class file_name>
```

2. with packaging
```shell
$ javac -d . 패키지명/*.java # 패키지 내부의 모든 클래스를 컴파일
$ java 패키지명.클래스명 # 실행
```

# C / C++ compile in git bash

1. install MinGW64
2. register system evironment variable
3. use gcc g++ in git bash!

```shell
$ gcc -o program program.c
$ g++ -o program program.cpp
```

# prototype의 이해
+ [prototype](https://medium.com/@bluesh55/javascript-prototype-%EC%9D%B4%ED%95%B4%ED%95%98%EA%B8%B0-f8e67c286b67)
