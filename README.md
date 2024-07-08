# Reane
[マンダラチャートコミュニケーションアプリ　【REANE】](https://reane.site/) 

![banner](https://github.com/y3kh6s03/Reane/assets/129368661/af1744a9-4332-4d49-82a2-b32fbda01efa)

## サービスのURL
Googleアカウントを利用したログインで、特別な登録不要で簡単にご利用いただけます。<br>

[https://reane.site/](https://reane.site/) 
<br><br><br>

## 1. 概要
未経験の分野、新しい目標達成に必要な行動を具体化し、取り組みをサポートするアプリケーションです。<br>
私は今まで経営企画として、事業計画を立案し、実行してきました。新しいことへのチャレンジをするときには、情報を精査し、計画を立案し、行動やチェックを繰り返してひたすら成功に向けて軌道修正をしながら進んできました。
経験則に伴う情報がないときには情報の精査、正確な情報を判断することもむずかしいものです。<br>
これは事業ではなく個人としても同様の課題でもあるなと感じていました。<br>

このアプリは同じ目標を立て、行動している人たちがどのような計画を実行しているかというロールモデルを見つけ、自分の計画を立案して目標達成に向けた行動につなげることができるアプリケーションです。
<br><br>
![mok](https://github.com/SayuriOkuyama/VegEvery/assets/129368661/5416edb7-3a1e-4060-8c77-c968f8b52cd9)
<br><br>

## 2. 機能一覧
|ログインページ  |トップページ  |
| --- | --- |
|![login](https://github.com/y3kh6s03/Reane/assets/129368661/9490fcd3-8a75-43cb-97d6-2f9abee7651b)|![top](https://github.com/y3kh6s03/Reane/assets/129368661/56960e07-54ec-4f77-afc5-24f0507d82f8)|
| アカウントは、Google アカウントでログインが可能です。その他に登録などはなにも必要ありません。|トップページでは、ロールモデルとなる全ユーザーのチャートの概要を一覧で閲覧することができます。<br>ナビゲーションメニューからアプリ主要機能のロールモデル一覧、チャート作成画面、自分のチャートの閲覧が可能です。|

|チャート作成ページ  |My Chartページ  |
| --- | --- |
|![create](https://github.com/y3kh6s03/Reane/assets/129368661/30ecfd19-3891-4249-845b-03e0ecc89411)|![My Chart](https://github.com/y3kh6s03/Reane/assets/129368661/eb0dd46a-b229-4545-b656-a603e7fdeba7)|
| チャート作成ページでは、目標(Reach)、目標に必要な要素（Skill）、要素に必要な行動(Action)を入力していきます。<br>作成後も必要に応じてそれぞれの項目を修正、追加、削除が可能です。|My Chart画面では目標(Reach)と要素（Skill）を一覧で表示しています。<br>また行動の進捗の達成度も可視化しています。要素を追加したいときには、モーダルを表示され、簡単に追加することが可能です。|

|行動一覧ページ  |振り返り入力ページ  |
| --- | --- |
|![action](https://github.com/y3kh6s03/Reane/assets/129368661/4a2f3382-2fe8-47c3-b90d-0aee0c63ce29)|![journal](https://github.com/y3kh6s03/Reane/assets/129368661/b08e9a10-11e6-4d0a-a1f2-a4d3a613863b)|
| 要素に設定した行動一覧を確認することができます。<br>行動済みや実施済みとなった行動にはチェックを入れることで進捗管理ができます。<br>取り組みを進める中で、行動の追加削除も画面遷移不要で実施することが可能です。|取り組みの振り返りや気づき、感じたことを記入することができます。|

<br><br>
## 3. 使用技術一覧
| カテゴリ          | 使用技術
| ----------------- | --------------------------------------------------   |
| フロントエンド          | TypeScript, React^18.2, Next.js 14.2, Sass                |
| バックエンド           | Laravel 10                          |
| ライブラリ          | CSS Modules, Redux, axios, React-hook-form, next-auth.js, |
| インフラ    | Vercel(フロントエンド) ,AWS（EC2, RDS, CloudCloudFront など）, |
| Database          | MySQL                                           |
| Environment setup | Docker                                               |
| CI/CD             | GitHub Actions                                       |
| 　デザインツール            | Figma, drew.io                                         |
| 開発ツール           | ESLint(eslint-config-airbnb), Prettier, Jest, Git, GitHub |

<br><br>
## 4. ER図

## 5. インフラ構成図
![infraMap drawio](https://github.com/y3kh6s03/Reane/assets/129368661/615e8bba-1e07-4e13-a669-c939f85049ff)
## 6. 画面遷移図
![Reana](https://github.com/y3kh6s03/Reane/assets/129368661/7453725a-564d-40cf-afaa-f810a9f4d016)
