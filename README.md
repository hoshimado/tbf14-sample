# 4章：Docker Compose を利用して複数のコンテナーを起動する

本ブランチでは4章の記載内容にフォーカスするため、
2章で利用したサンプルコードは格納していません。

2章で案内のDockerイメージを作成後の状態で、
本ブランチのファイルを利用して本文中に案内のコマンドを実行してください。

# §4.1：リバースプロキシの準備

* リスト4.1, Nginxの設定ファイル
    * nginx / [default.conf](./nginx/default.conf)

以下、本文中のコマンドをメモします。

```
docker network create my-network

docker container run --name nginx-container -p 8080:80 -v %CD%/nginx:/etc/nginx/conf.d --network my-network -d nginx:1.24.0-alpine-slim

docker container run --name app-container --expose 3000 --network my-network -d hoshimado/node16-webapp:0.0.1
```

## ブラウザー出のアクセスに失敗するとき

ブラウザーで「`http://localhost:8080/`」にアクセスしても期待したページが表示されない場合があります。
その場合は、1つ名の「`docker container run --name nginx-container`」の動作が停止していないか確認してください。
停止していた場合は、コンテナーを再起動してください。



