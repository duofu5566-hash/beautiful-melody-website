# bfmedi.com 访问和 WhatsApp 点击统计

网站已经预埋 Google Analytics 4 统计代码。

## 可以统计什么

- 每天访问人数：在 GA4 里看 `Users` / `Active users`
- 每天页面访问量：在 GA4 里看 `Views`
- WhatsApp 点击次数：在 GA4 事件里看 `whatsapp_click`
- 可按页面查看：事件参数 `page_path`
- 可看点击的是哪个按钮：事件参数 `event_label`

## 启用步骤

1. 打开 Google Analytics，创建 GA4 Property。
2. 创建 Web data stream，网站填 `https://bfmedi.com/`。
3. 复制 Measurement ID，格式类似 `G-XXXXXXXXXX`。
4. 把 `analytics.js` 和 `public/analytics.js` 里的：

```js
const GA_MEASUREMENT_ID = "G-RSWZGCXPY1";
```

替换成你的真实 ID。

5. 提交并部署后，访问 GA4 的 Realtime 页面检查是否有数据。

## GA4 里怎么看 WhatsApp 点击

路径：

Reports -> Engagement -> Events -> `whatsapp_click`

建议把 `whatsapp_click` 标记为 Key event，这样后续广告投放可以用作询盘转化。
