q# テーブル定義書

reach
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
|     | reach_id | unsignedInteger |      |         | ◯   |        |      | reach table |

actions
| PK  | COLUMN       | TYPE            | NULL | DEFAULT | FK  | UNIQUE | AUTO | COMMENT     |
| --- | ------------ | --------------- | ---- | ------- | --- | ------ | ---- | ----------- |
| ◯   | id           | unsignedInteger |      |         |     |        | ◯    |             |
|     | name         | string(50)      |      |         |     |        |      | action name |
|     | skill_id     | unsignedInteger |      |         | ◯   |        |      | skill table |
|     | reach_id     | unsignedInteger |      |         | ◯   |        |      | reach table |
|     | is_completed | boolean         |      | 0       |     |        |      |             |

journal
| PK  | COLUMN      | TYPE            | NULL | DEFAULT | FK  | UNIQUE | AUTO | COMMENT        |
| --- | ----------- | --------------- | ---- | ------- | --- | ------ | ---- | -------------- |
| ◯   | id          | unsignedInteger |      |         |     |        | ◯    |                |
|     | reach_id    | unsignedInteger |      |         | ◯   |        |      | reach table    |
|     | skill_id    | unsignedInteger |      |         | ◯   |        |      | skill table    |
|     | date        | date            |      |         |     |        |      |                |
|     | description | text            |      |         |     |        |      | furikaeri memo |

action_journal
| PK  | COLUMN     | TYPE            | NULL | DEFAULT | FK  | UNIQUE | AUTO | COMMENT       |
| --- | ---------- | --------------- | ---- | ------- | --- | ------ | ---- | ------------- |
| ◯   | id         | unsignedInteger |      |         |     |        | ◯    |               |
|     | action_id  | unsignedInteger |      |         | ◯   |        |      | actions table |
|     | journal_id | unsignedInteger |      |         | ◯   |        |      | journal table |

comments
| PK  | COLUMN  | TYPE            | NULL | DEFAULT | FK  | UNIQUE | AUTO | COMMENT     |
| --- | ------- | --------------- | ---- | ------- | --- | ------ | ---- | ----------- |
| ◯   | id      | unsignedInteger |      |         |     |        | ◯    |             |
|     | user_email |string(254) |      |         | ◯   |        |      |  |
|     | reach_id | unsignedInteger |      |         | ◯   |        |      | reach table |
|     | comment | text            |      |         |     |        |      | comment     |

favorite_reaches
| PK  | COLUMN  | TYPE            | NULL | DEFAULT | FK  | UNIQUE | AUTO | COMMENT     |
| --- | ------- | --------------- | ---- | ------- | --- | ------ | ---- | ----------- |
| ◯   | id      | unsignedInteger |      |         |     |        | ◯    |             |
|     | user_email | string(254) |      |         | ◯   |        |      |   |
|     | reach_id | unsignedInteger |      |         | ◯   |        |      | goals table |
