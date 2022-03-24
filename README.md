# automatic_detergent_supply
DIY External automatic detergent supply system.

## 確認方法

1. 起動
    ```powershell
    > docker-compose up -d
    ```

1. アクセス  
http://localhost:49160/test  

1. 終了
    ```powershell
    > docker-compose down
    ```

## テスト
1. テスト実行
> npm run test
1. Coverage計測
> npm run test-coverage

1. docker内でテスト実行
> docker-compose run myapp npm run test

  1. 結合テスト
> docker-compose up -d
> docker exec -it my-node-app npm run test -- integrationServer.spec.ts
※docker-compose up でexpress起動しているので、axiosでリクエスト投げるテスト記述に変更すること

docker execでやるなら結合テスト
docker-compose runでやるなら単体テスト
かも