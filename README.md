# 1. 先確認有沒有安裝nvm，如果有的 *先解安裝*

# 2. 檢查nodejs 版本 :  14.17.1 or 14.17.2 版本

  - 用執行檔方式安裝 node 版本:14.17.1
https://nodejs.org/download/release/v14.17.1/
- x64.msi 版本

(註): 如果之前有安裝其他版本，先解除安裝，再另外安裝此版本

# 3. 安裝  webpack 全域版本
-  `npm install webpack@4.43.0 -g`
- `npm install webpack-cli@3.3.12 -g`

(註): 如果之前有安裝其他版本，先解除安裝，再另外安裝此版本



# 以下為套件相依版本整理

```json
"devDependencies": {
    "@babel/core": "^7.16.5",
    "@babel/preset-env": "^7.16.5",
    "babel-loader": "^8.2.2",
    "clean-webpack-plugin": "^3.0.0",
    "css-loader": "^5.1.3",
    "html-webpack-partials-plugin": "^0.7.0",
    "html-webpack-plugin": "^4.5.0",
    "mini-css-extract-plugin": "^1.3.9",
    "node-sass": "^5.0.0",
    "sass-loader": "^10.0.1",
    "style-loader": "^2.0.0",
    "webpack": "^4.43.0",
    "webpack-cli": "^3.3.12",
    "webpack-dev-server": "^3.11.3"
  },
```

