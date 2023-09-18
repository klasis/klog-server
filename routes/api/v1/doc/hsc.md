# HTTP Status Code

## 2XX : Success
| Status Code | Status Name | Description                          |
|:-----------:|-------------|--------------------------------------|
|     200     | OK          | 클라이언트의 요청을 서버가 정상적으로 처리함             |
|     201     | Created     | 클라이언트의 요청을 서버가 정상적으로 처리하여 새 리소스가 생성됨 |
|     202     | Accepted    | 클라이언트의 요청은 정상적이나 서버가 아직 요청을 완료하지 않음  |
|     204     | No Content  | 클라이언트의 요청은 정상적이나 콘텐츠를 제공하지 않음        |
<br>

## 4XX : Client Errors
| Status Code | Status Name        | Description                         |
|:-----------:|--------------------|-------------------------------------|
|     400     | Bad Request        | 클라이언트의 요청이 유효하지 않아 더 이상 작업을 진행하지 않음 |
|     401     | Unauthorized       | 인증되지 않은 클라이언트가 권한이 없어 작업을 진행할 수 없음  |
|     403     | Forbidden          | 인증된 클라이언트가 권한이 없어 작업을 진행할 수 없음      |
|     404     | Not Found          | 클라이언트가 요청한 자원이 존재하지 않음 |
|     405     | Method Not Allowed | 클라이언트의 요청이 허용되지 않는 메소드 |
|     409     | Conflict           | 클라이언트의 요청이 서버의 상태와 충돌이 발생함 |
|     429     | Too many Requests  | 클라이언트가 일정 시간 동안 너무 많은 요청을 보냄 |
<br>

## 5XX : Server Errors
| Status Code | Description           |
|:-----------:|-----------------------|
|     500     | Internal Server Error |
|     501     | Not Implemented       |
|     502     | Bad Gateway           |
|     503     | Service Unavailable   |
|     504     | Gateway Timeout       |
<br>

# References
https://restfulapi.net/http-status-codes/
<br>
https://sanghaklee.tistory.com/61