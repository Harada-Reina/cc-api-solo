# ソロプロジェクト

商品を管理するための "Products" というデータベースに商品を管理する "Product" というテーブルを作成しました。
"Product" テーブルには、「ID」と「名前」を持っています。

また、初期データとしていくつか登録されています。
[ちいかわ クッキーチャームコット3](https://www.bandai.co.jp/candy/products/2024/4570117910883000.html)

## GET（一覧取得）  /products

商品一覧を取得します。

## GET（ID を指定して取得）  /products/:id

ID を指定して、任意の商品を取得します。

## POST（新規作成）  /products

新規商品を登録します。

## PATCH（更新）  /products/:id

指定した ID の商品を更新します。
(名称しかないので、名称のみ)

## DELETE（削除）  /products/:id

指定した ID の商品を削除します。
