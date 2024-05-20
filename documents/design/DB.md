# テーブル定義書
<!-- users
| PK  | COLUMN | TYPE            | NULL | DEFAULT | FK  | UNIQUE | AUTO | COMMENT          |
| --- | ------ | --------------- | ---- | ------- | --- | ------ | ---- | ---------------- |
| ◯   | id     | unsignedInteger |      |         |     |        | ◯    |                  |
|     | name   | string(20)      | ◯    |         |     |        |      | null=google-name |
|     | email  | string(100)     |      |         |     |        |      | google email     |
|     | image  | string(255)     | ◯    |         |     |        |      |                  | --> |


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


<!-- ## エンティティ -->
<!-- 1. user
- id(auto_increment)
- name
- email
- image(url) googleからそのまま流用しよう
- created_at
- updated_at

1. goal
- id(auto_increment)
- name
- user_id (1対多)
- total_views
- total_citations
- created_at
- updated_at -->

<!--
1. comment
- id
- goal_id
- user_id
- comment -->



<!-- 1. skill
- id
- name
- goal_id
- created_at
- updated_at -->
<!--

1. action
- id
- name
- skill_id -->


<!-- 1. favorite_goal
- id
- user_id
- goal_id -->


<!-- 1. favorite_users
- id
- user_id
- favorite_user_id -->


<!-- 1. likesテーブル
- id
- user_id
- post_id -->

<!-- 1. referencesテーブル
- id
- user_id
- date
- exec_time
- memo



1.  action_referencesテーブル
- id
- action_id
- reference_id -->

