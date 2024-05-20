# Reine アプリケーション設定

## theme
【必要なスキルを明確化し、具体的なスキル習得に向けた行動を起こし目標達成】したい
【新たな挑戦をする人】向けの
【Reine】というプロダクトは
【チャレンジャーズコミュニティアプリ】です。br
これは
【目標達成に必要な行動が不明確な人でも、大谷翔平が利用していたマンダラチャートを作成】することができます。
【身近に目標像がいない人でも、類似した目標をもったマンダラチャートを参考にすることができる】
そのため
【まったくの未経験の分野でも情報を精査することができ、マンダラチャートの作成の精度向上し、目標達成をサポートします】

## 業務フロー
file:///Users/yosuke/Desktop/Reine/documents/design/SYSTEM.drawio.png

## ワイヤーフレーム兼デザインカンプ
https://www.figma.com/design/AHCdCF0YWXl5T9UwiBvCHX/Reina?node-id=0-1&t=hQmLoyp1Czv6he4l-0

## テーブル定義書
goal
| PK  | COLUMN          | TYPE            | NULL | DEFAULT | FK  | UNIQUE | AUTO | COMMENT         |
| --- | --------------- | --------------- | ---- | ------- | --- | ------ | ---- | --------------- |
| ◯   | id              | unsignedInteger |      |         |     |        | ◯    |                 |
|     | name            | string(254)     |      |         |     | ◯      |      | reach title     |
|     | user_name       | string(254)     |      |         |     |        |      |                 |
|     | user_email      | string(254)     |      |         |     |        |      |                 |
|     | user_image      | text            |      |         |     |        |      |                 |
|     | total_views     | unsignedInteger |      | 0       |     |        |      | view count      |
|     | total_citations | unsignedInteger |      | 0       |     |        |      | citations count |

skills
| PK  | COLUMN  | TYPE            | NULL | DEFAULT | FK  | UNIQUE | AUTO | COMMENT     |
| --- | ------- | --------------- | ---- | ------- | --- | ------ | ---- | ----------- |
| ◯   | id      | unsignedInteger |      |         |     |        | ◯    |             |
|     | name    | string(50)      |      |         |     |        |      | skill name  |
|     | goal_id | unsignedInteger |      |         | ◯   |        |      | goals table |

actions
| PK  | COLUMN       | TYPE            | NULL | DEFAULT | FK  | UNIQUE | AUTO | COMMENT     |
| --- | ------------ | --------------- | ---- | ------- | --- | ------ | ---- | ----------- |
| ◯   | id           | unsignedInteger |      |         |     |        | ◯    |             |
|     | name         | string(50)      |      |         |     |        |      | action name |
|     | skill_id     | unsignedInteger |      |         | ◯   |        |      | skill table |
|     | reach_id     | unsignedInteger |      |         | ◯   |        |      | reach table |
|     | is_completed | boolean         |      | 0       |     |        |      |             |

comments
| PK  | COLUMN  | TYPE            | NULL | DEFAULT | FK  | UNIQUE | AUTO | COMMENT     |
| --- | ------- | --------------- | ---- | ------- | --- | ------ | ---- | ----------- |
| ◯   | id      | unsignedInteger |      |         |     |        | ◯    |             |
|     | user_id | unsignedInteger |      |         | ◯   |        |      | users table |
|     | goal_id | unsignedInteger |      |         | ◯   |        |      | goals table |
|     | comment | text            |      |         |     |        |      | comment     |

favorite_goals
| PK  | COLUMN  | TYPE            | NULL | DEFAULT | FK  | UNIQUE | AUTO | COMMENT     |
| --- | ------- | --------------- | ---- | ------- | --- | ------ | ---- | ----------- |
| ◯   | id      | unsignedInteger |      |         |     |        | ◯    |             |
|     | user_id | unsignedInteger |      |         | ◯   |        |      | users name  |
|     | goal_id | unsignedInteger |      |         | ◯   |        |      | goals table |

favorite_users
| PK  | COLUMN           | TYPE            | NULL | DEFAULT | FK  | UNIQUE | AUTO | COMMENT     |
| --- | ---------------- | --------------- | ---- | ------- | --- | ------ | ---- | ----------- |
| ◯   | id               | unsignedInteger |      |         |     |        | ◯    |             |
|     | user_id          | unsignedInteger |      |         | ◯   |        |      | users table |
|     | favorite_user_id | unsignedInteger |      |         | ◯   |        |      | users table |

references
| PK  | COLUMN    | TYPE            | NULL | DEFAULT  | FK  | UNIQUE | AUTO | COMMENT        |
| --- | --------- | --------------- | ---- | -------- | --- | ------ | ---- | -------------- |
| ◯   | id        | unsignedInteger |      |          |     |        | ◯    |                |
|     | user_id   | unsignedInteger |      |          | ◯   |        |      | users table    |
|     | date      | date            |      |          |     |        |      |                |
|     | exec_time | time            | ◯    | 00:00:00 |     |        |      |                |
|     | memo      | text            |      |          |     |        |      | furikaeri memo |

action_references
| PK  | COLUMN       | TYPE            | NULL | DEFAULT | FK  | UNIQUE | AUTO | COMMENT          |
| --- | ------------ | --------------- | ---- | ------- | --- | ------ | ---- | ---------------- |
| ◯   | id           | unsignedInteger |      |         |     |        | ◯    |                  |
|     | action_id    | unsignedInteger |      |         | ◯   |        |      | actions table    |
|     | reference_id | unsignedInteger |      |         | ◯   |        |      | references table |
|     |              |                 |      |         |     |        |      |                  |

## システム構成図
file:///Users/yosuke/Desktop/Reine/documents/design/SYSTEM.drawio.png

