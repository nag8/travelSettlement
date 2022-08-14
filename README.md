# travelSettlement

## 使用方法
configシートの以下を変更

- token
- DB_id

### token
https://www.notion.so/my-integrations

以下の権限を持つintegrationを作成して、該当のページに招待する
- コンテンツ情報
  - コンテンツを読み取る
- ユーザー情報
  - メールアドレスなしでユーザー情報を読み取る

## 仕様

- pay_forにユーザー情報があるデータが対象となります
- payerに情報がなければエラーとなります
- amountに情報がなければエラーとなります
