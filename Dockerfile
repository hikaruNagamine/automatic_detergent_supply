From node:lts-slim

RUN apt-get update && apt-get -y install \
    python3 \
    make \
    g++

# アプリケーションディレクトリを作成する
# WORKDIR /opt/app

# アプリケーションの依存関係をインストールする
# ワイルドカードを使用して、package.json と package-lock.json の両方が確実にコピーされるようにします。
# 可能であれば (npm@5+)
# COPY package*.json ./
# COPY tsconfig.json ./

# RUN npm install -g
# 本番用にコードを作成している場合
# RUN npm install --only=production

# アプリケーションのソースをバンドルする
# COPY . .
# RUN chmod 744 ./startup.sh

# EXPOSE 8080

# CMD ["npm", "run", "startup"]