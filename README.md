# 4章：Docker Compose を利用して複数のコンテナーを起動する

本ブランチでは4章の記載内容にフォーカスするため、
2章で利用したサンプルコードは格納していません。

2章で案内のDockerイメージを作成後の状態で、
本ブランチのファイルを利用して本文中に案内のコマンドを実行してください。

# §4.3： Docker Compose ファイルを用いて複数コンテナー起動を簡略化する

* リスト4.4, Docker-Composeの設定ファイル
    * [docker-compose.yml](./docker-compose.yml)

上記に追加で、以下のファイルを作成して格納します（※gitignore対象としているため個別作成）。

* .env

```.env
ENV_TEST=hogefugapiyo
```

以下、本文中のコマンドをメモします。

```
docker compose up -d
```

```
docker compose down
```


