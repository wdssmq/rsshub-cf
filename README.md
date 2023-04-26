# Cloudflare Worker 反代 RSSHub

## 使用 Wrangler CLI 开发

### 安装 wrangler

```bash
# npm install -g wrangler
pnpm install -g wrangler
# yarn global add wrangler

```

### 登录

```bash
# 登录
wrangler login
# 查看登录状态
wrangler whoami
# 登出
wrangler logout

```

**· 远程 VPS 中登录**

执行登录命令并在浏览器中授权后，会跳转到一个`localhost`链接，复制该链接然后新开一个终端窗口，执行以下命令以完成登录；

```bash
curl <LOCALHOST_URL>
```

文档链接：「[Using wrangler login on a remote machine](https://developers.cloudflare.com/workers/wrangler/commands/#using-wrangler-login-on-a-remote-machine)」

## 初始配置

### 克隆项目并安装依赖

```bash
git clone git@github.com:wdssmq/rsshub-cf.git rsshub-cf
cd rsshub-cf
pnpm install

```

### 运行 / 发布

执行命令后可以按 \[`b`\] 键打开浏览器，\[`d`\] 键打开开发者工具，\[`l`\] 键开启本地模式，\[`c`\] 键清空控制台，\[`x`\] 键退出；

默认可能会超时报错，所以建议切换本地模式；

> ✘ [ERROR] Error while creating remote dev session: TypeError: fetch failed

```bash
# 调试运行
npm start

# │ [b] open a browser, [d] open Devtools, [l] turn on local mode, [c] clear console, [x] to exit

```

```bash
# 发布
npm run deploy

```


## 参考文档

Environment variables · Cloudflare Workers docs
https://developers.cloudflare.com/workers/platform/environment-variables/#add-secrets-to-your-project

Commands · Cloudflare Workers docs
https://developers.cloudflare.com/workers/wrangler/commands/#secret

