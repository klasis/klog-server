# POST (게시글)

## POST 관리
| HTTP Method | Request Target | Description | Etc. |
| --- | --- | --- | --- |
| POST | /posts | 게시글 생성 |  |
| GET | /posts | 게시글 목록 조회 |  |
| GET | /posts/{postId} | 게시글 조회 |  |
| PUT | /posts/{postId} | 게시글 수정 |  |
| DELETE | /posts/{postId} | 게시글 삭제 |  |
<br>

## POST /posts
### HTTP Request
POST https://klog.io/api/v1/posts

### Path Parameters
| Parameter | Type | Description | Required | Etc. |
| --- | --- | --- | :---: | --- |
|  |  |  |  |  |

### Header Parameters
| Parameter | Type | Description | Required | Etc. |
| --- | --- | --- | :---: | --- |
| Authorization | string | Bearer {token} | required |  |
| Content-Type | string | application/json | required |  |
 
### Request Body
| Property | Type | Description | Required | Etc. |
| --- | --- | --- | :---: | --- |
| title | string | 제목 | required | minLength: 1<br>maxLength: 60 |
| description | string | 설명 |  | maxLength: 300 |
| body | string | 내용 | required | minLength: 1<br>maxLength: 716800 |
<br>

## GET /posts
### HTTP Request
GET https://klog.io/api/v1/posts

### Path Parameters
| Parameter | Type | Description | Required | Etc. |
| --- | --- | --- | :---: | --- |
|  |  |  |  |  |

### Header Parameters
| Parameter | Type | Description | Required | Etc. |
| --- | --- | --- | :---: | --- |
| Authorization | string | Bearer {token} | required |  |

### Query Parameters
| Parameter | Type | Description | Required | Etc. |
| --- | --- | --- | :---: | --- |
| count | integer | 목록 조회 개수 |  | default: 20<br>min: 1<br>max: 40<br>format: int32 |
<br>

## GET /posts/{postId}
### HTTP Request
GET https://klog.io/api/v1/posts/{postId}

### Path Parameters
| Parameter | Type | Description | Required | Etc. |
| --- | --- | --- | :---: | --- |
| postId | integer | 게시글 ID | required | format: int64 |

### Header Parameters
| Parameter | Type | Description | Required | Etc. |
| --- | --- | --- | :---: | --- |
| Authorization | string | Bearer {token} | required |  |
<br>

## PUT /posts/{postId}
### HTTP Request
PUT https://klog.io/api/v1/posts

### Path Parameters
| Parameter | Type | Description | Required | Etc. |
| --- | --- | --- | :---: | --- |
| postId | integer | 게시글 ID | required | format: int64 |

### Header Parameters
| Parameter | Type | Description | Required | Etc. |
| --- | --- | --- | :---: | --- |
| Authorization | string | Bearer {token} | required |  |
| Content-Type | string | application/json | required |  |

### Request Body
| Property | Type | Description | Required | Etc. |
| --- | --- | --- | :---: | --- |
| title | string | 제목 | required | minLength: 1<br>maxLength: 60 |
| description | string | 설명 |  | maxLength: 300 |
| body | string | 내용 | required | minLength: 1<br>maxLength: 716800 |
<br>

## DELETE /posts/{postId}
### HTTP Request
DELETE https://klog.io/api/v1/posts

### Path Parameters
| Parameter | Type | Description | Required | Etc. |
| --- | --- | --- | :---: | --- |
| postId | integer | 게시글 ID | required | format: int64 |

### Header Parameters
| Parameter | Type | Description | Required | Etc. |
| --- | --- | --- | :---: | --- |
| Authorization | string | Bearer {token} | required |  |