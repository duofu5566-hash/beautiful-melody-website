# Beautiful Melody / bfmedi.com Cloudflare Pages 上线清单

这个网站适合用 Cloudflare Pages 部署。它是静态英文品牌官网，不需要先购买传统服务器。

## 推荐购买

1. 域名：优先 `.com`
2. DNS / CDN / SSL：Cloudflare
3. 网站托管：Cloudflare Pages
4. 代码仓库：GitHub，推荐用于后续自动更新

## 购买域名时注意

- 域名尽量短、专业、容易拼写。
- 不建议域名里直接使用过强的医疗治疗承诺词。
- 如果目标客户是海外，优先考虑 Cloudflare、Namecheap、GoDaddy 等海外域名注册商。
- 如果在阿里云购买域名，也可以后续把 DNS 托管切到 Cloudflare。

## 上线方式 A：GitHub 自动部署

适合长期维护。以后修改网站后，只要更新 GitHub，Cloudflare Pages 会自动发布新版。

1. 创建 GitHub 账号。
2. 新建一个仓库，例如 `beautiful-melody-website`。
3. 把 `C:\yimei` 里的文件上传到仓库。
4. 登录 Cloudflare。
5. 进入 `Workers & Pages`。
6. 创建 Pages 项目，选择连接 GitHub 仓库。
7. 项目设置：
   - Framework preset: `None`
   - Build command: 留空
   - Build output directory: `/`
8. 发布后，Cloudflare 会给一个临时域名，例如 `beautiful-melody.pages.dev`。

官方参考：

- Cloudflare Pages Git 集成：https://developers.cloudflare.com/pages/get-started/git-integration/
- Cloudflare 静态 HTML 部署：https://developers.cloudflare.com/pages/framework-guides/deploy-anything/

## 上线方式 B：直接上传

适合最快上线，不想先弄 GitHub。

1. 登录 Cloudflare。
2. 进入 `Workers & Pages`。
3. 选择 Pages 的 Direct Upload。
4. 上传 `C:\yimei` 文件夹里的全部文件。
5. 发布后得到一个 `pages.dev` 临时域名。

官方参考：

- Cloudflare Pages Direct Upload：https://developers.cloudflare.com/pages/get-started/direct-upload/

## 绑定自定义域名

域名购买后，需要做两件事。

第一步：把域名加入 Cloudflare。

1. 在 Cloudflare 添加你的域名。
2. Cloudflare 会分配两条 nameserver。
3. 到你的域名购买平台，把原 nameserver 改成 Cloudflare 提供的两条。
4. 等待生效，通常几分钟到 24 小时不等。

官方参考：

- Cloudflare nameserver 说明：https://developers.cloudflare.com/dns/zone-setups/reference/nameserver-assignment/

第二步：在 Cloudflare Pages 里绑定域名。

1. 进入你的 Pages 项目。
2. 打开 `Custom domains`。
3. 添加 `www.bfmedi.com`。
4. 添加根域名 `bfmedi.com`。
5. 等待 Cloudflare 自动签发 HTTPS 证书。

## 发布前需要替换

- 品牌名：`Beautiful Melody`
- 域名：`bfmedi.com`
- 邮箱：`duofu5566@gmail.com`
- WhatsApp：`+852 5573 4489`
- 真实产品分类
- 公司介绍
- 证书和资质说明
- 隐私政策页面

## 我接下来需要你提供

买好后发我：

1. GitHub 仓库地址
2. Cloudflare Pages 项目名
3. Cloudflare 里是否已经能看到 `bfmedi.com`
4. 是否需要把 `www.bfmedi.com` 自动跳转到 `bfmedi.com`

