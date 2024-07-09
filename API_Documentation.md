# API ドキュメント

# ChartController API ドキュメント

## ChartControllerの各エンドポイントの詳細

## 全ユーザーのチャート取得

### GET /api/chart/all

- **Description**: 全ユーザーのチャートを取得します。
- **Request Parameters**:
  - `per_page` (query parameter, optional): 1ページあたりのアイテム数 (デフォルト: 20)
  - `page` (query parameter, optional): 現在のページ (デフォルト: 1)
- **Response**:
  ```json
  {
    "data": [
      {
        "id": 1,
        "userName": "John Doe",
        "userImage": "http://example.com/john.jpg",
        "userEmail": "john@example.com",
        "reachName": "New Skill",
        "skills": {
          "Skill 1": {
            "id": 1,
            "actions": [
              {
                "id": 1,
                "name": "Action 1",
                "is_completed": 1
              }
            ]
          }
        },
        "actionCount": 1,
        "executedActionCount": 1,
        "days": 10,
        "createdAt": "2024-07-09T12:34:56Z",
        "updatedAt": "2024-07-09T12:34:56Z"
      }
    ],
    "current_page": 1,
    "last_page": 5,
    "per_page": 20,
    "total": 100
  }
  ```
- **HTTP Status Codes:**
	-	200 OK: 成功
	-	400 Bad Request: リクエストが不正
	-	500 Internal Server Error: サーバーエラー

## MyChartControllerの各エンドポイントの詳細

## ユーザーのチャート一覧取得
### GET /api/my-charts

- **Description**: 指定したユーザーのチャート一覧を取得します。
- **Request Parameters**:
  - `authEmail` (query parameter): ユーザーのメールアドレス
- **Response**:
  ```json
  [
    {
      "id": 1,
      "userName": "John Doe",
      "userImage": "http://example.com/john.jpg",
      "userEmail": "john@example.com",
      "reachName": "New Skill",
      "skills": {
        "Skill 1": {
          "id": 1,
          "actions": [
            {
              "id": 1,
              "name": "Action 1",
              "is_completed": 1
            }
          ]
        }
      },
      "actionCount": 1,
      "executedActionCount": 1,
      "days": 10,
      "createdAt": "2024-07-09T12:34:56Z",
      "updatedAt": "2024-07-09T12:34:56Z"
    }
  ]
  ```
- **HTTP Status Codes:**
  - 200 OK: 成功

## チャートの作成
### POST /api/my-charts

- **Description:** 新しいチャートを作成します。
- **Request Body:**
  ```json
  {
  "reachName": "New Skill",
  "userEmail": "john@example.com",
  "userName": "John Doe",
  "userImage": "http://example.com/john.jpg",
  "skills": [
    {
      "id": null,
      "actions": [
        {
          "name": "Action 1",
          "id": null
        }
      ]
    }
  ]
  }
  ```
- **Response:**
  ```json
  {
  "id": 1,
  "userName": "John Doe",
  "userImage": "http://example.com/john.jpg",
  "userEmail": "john@example.com",
  "reachName": "New Skill",
  "skills": [
    {
      "id": 1,
      "actions": [
        {
          "id": 1,
          "name": "Action 1",
          "is_completed": 0
        }
      ]
    }
  ],
  "createdAt": "2024-07-09T12:34:56Z",
  "updatedAt": "2024-07-09T12:34:56Z"
  }
  ```
-	**HTTP Status Codes:**
  - 201 Created: 成功
  - 422 Unprocessable Entity: バリデーションエラー

## チャートの名前更新
### PATCH /api/my-charts/reach

- **Description:** 指定したチャートの名前を更新します。
-	**Request Body:**
```json
{
  "id": 1,
  "editReachName": "Updated Skill",
  "userEmail": "john@example.com"
}
```
- **Response:**
  ```json
  {
  "message": "Reach name updated successfully",
  "reach": {
    "id": 1,
    "name": "Updated Skill"
  }
  }
  ```
- **HTTP Status Codes:**
	-	200 OK: 成功
	-	422 Unprocessable Entity: バリデーションエラー
  - 500 Internal Server Error: サーバーエラー

## チャートの削除
### DELETE /api/my-charts/reach

-	**Description**: 指定したチャートを削除します。
- **Request Body:**
  ```json
  {
  "id": 1,
  "userEmail": "john@example.com"
  }
  ```
- **Response:**
  ```json
  {
  "message": "Reach deleted successfully."
  }
  ```
- **HTTP Status Codes:**
	-	200 OK: 成功
	-	422 Unprocessable Entity: バリデーションエラー
	-	500 Internal Server Error: サーバーエラー

## スキルの編集
### PATCH /api/my-charts/skill
-	**Description:** 指定したスキルの名前を更新します。
-	**Request Body:**
  ```json
  {
    "id": 1,
    "userEmail": "john@example.com",
    "reachName": "Skill",
    "editSkillName": "Updated Skill",
    "currentSkillName": "Current Skill"
  }
  ```
-	**Response:**
  ```json
  {
  "id": 1,
  "name": "Updated Skill"
  }
  ```
- **HTTP Status Codes:**
	-	200 OK: 成功
	-	422 Unprocessable Entity: バリデーションエラー
	-	500 Internal Server Error: サーバーエラー

## スキルの追加
### POST /api/my-charts/skill
- **Description:** 新しいスキルを追加します。
- **Request Body:**
  ```json
  {
  "id": 1,
  "userEmail": "john@example.com",
  "inputSkillName": "New Skill"
  }
  ```
- **Response:**
  ```json
  {
  "id": 1,
  "name": "New Skill"
  }
  ```
- **HTTP Status Codes:**
	-	201 Created: 成功
	-	422 Unprocessable Entity: バリデーションエラー
	-	500 Internal Server Error: サーバーエラー

## スキルの削除
### DELETE /api/my-charts/skill
- **Description:** 指定したスキルを削除します。
- **Request Body:**
  ```json
  {
  "id": 1,
  "userEmail": "john@example.com",
  "reachName": "Skill",
  "skillName": "Current Skill"
  }
  ```
- **Response:**
  ```json
  {
  "message": "Skill deleted successfully"
  }
  ```
-	**HTTP Status Codes:**
	-	200 OK: 成功
	-	422 Unprocessable Entity: バリデーションエラー
	-	500 Internal Server Error: サーバーエラー

## 行動の追加
### POST /api/my-charts/action

- **Description:** 新しい行動を追加します。
- **Request Body:**
  ```json
  {
  "reachName": "Skill",
  "skillName": "Current Skill",
  "actionId": 1,
  "actionName": "New Action",
  "editActionName": "Updated Action"
  }
  ```
- **Response:**
  ```json
  {
  "id": 1,
  "name": "Updated Action",
  "is_completed": 0
  }
  ```
- **HTTP Status Codes:**
	-	201 Created: 成功
	-	422 Unprocessable Entity: バリデーションエラー
	-	500 Internal Server Error: サーバーエラー

## 行動の更新
### PUT /api/my-charts/action
- **Description:** 指定した行動を更新します。
- **Request Body:**
  ```json
  {
  "reachName": "Skill",
  "userEmail": "john@example.com",
  "skillName": "Current Skill",
  "modalActions": [
    {
      "id": 1,
      "name": "Updated Action"
    }
  ]
  }
  ```
- **Response**
  ```json
  [
  {
    "id": 1,
    "name": "Updated Action",
    "is_completed": 0
  }
  ]
  ```
- **HTTP Status Codes:**
	-	200 OK: 成功
	-	422 Unprocessable Entity: バリデーションエラー
	-	500 Internal Server Error: サーバーエラー

## 行動のステータス更新
### PATCH /api/my-charts/action-status
-	**Description:** 指定した行動のステータスを更新します。
- **Request Body:**
  ```json
  {
  "actionId": 1,
  "is_completed": 1
  }
  ```
- **Response:**
  ```json
  {
  "id": 1,
  "name": "Action",
  "is_completed": 1
  }
  ```
- **HTTP Status Codes:**
	-	200 OK: 成功
	-	422 Unprocessable Entity: バリデーションエラー
	-	500 Internal Server Error: サーバーエラー

## 行動の削除
### DELETE /api/my-charts/action

- **Description:** 指定した行動を削除します。
- **Request Body:**
  ```json
  {
  "actionId": 1
  }
  ```
- **Response:**
  ```json
  {
  "message": "Action deleted successfully"
  }
  ```

## JournalControllerの各エンドポイントの詳細

## ユーザーのジャーナル一覧取得

### POST /api/journal

- **Description**: 指定したユーザーのジャーナル一覧を取得します。
- **Request Body**:
  ```json
  {
    "user_email": "john@example.com"
  }
  ```
- **Response:**
  ```json
  [
  {
    "journal_id": 1,
    "reach_id": 1,
    "reachName": "New Skill",
    "skill_id": 1,
    "skillName": "Skill 1",
    "actions": [
      {
        "id": 1,
        "name": "Action 1"
      }
    ],
    "description": "This is a journal entry.",
    "date": "2024-07-09T12:34:56Z"
  }
  ]
  ```
- **HTTP Status Codes:**
	-	200 OK: 成功
	-	400 Bad Request: リクエストが不正
	-	500 Internal Server Error: サーバーエラー

## ジャーナルの作成
### POST /api/journal/store

- **Description:** 新しいジャーナルを作成します。
- **Request Body:**
  ```json
  {
  "user_email": "john@example.com",
  "reach_id": 1,
  "skill_id": 1,
  "data": {
    "description": "This is a new journal entry.",
    "actionNames": [
      { "select": "Action 1" }
    ]
  }
  }
  ```
- **Response:**
  ```json
  {
  "journal_id": 1,
  "reach_id": 1,
  "reachName": "New Skill",
  "skill_id": 1,
  "skillName": "Skill 1",
  "actions": [
    {
      "id": 1,
      "name": "Action 1"
    }
  ],
  "description": "This is a new journal entry.",
  "date": "2024-07-09T12:34:56Z"
  }
  ```

- **HTTP Status Codes:**
	-	201 Created: 成功
	-	400 Bad Request: リクエストが不正
	-	500 Internal Server Error: サーバーエラー