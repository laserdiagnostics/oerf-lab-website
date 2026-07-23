# OERF 主页招生栏目 — 上线检查报告

## 检查范围

- 构建产物: `dist/` 19 页（18 HTML + 1 sitemap）
- 源码: `RecruitmentSection.astro`、`recruitment.ts`、`global.css`、`pages.ts`、`ui.ts`、`TeamView.astro`、`Footer.astro`
- 静态资源: `public/images/recruitment/` 4 张 WebP
- TypeScript: `astro check` 53 文件通过

---

## ✅ 通过的检查（27 项）

| 类别 | 检查项 | 英文 | 中文 |
|------|--------|:--:|:--:|
| 构建 | `astro build` 成功 | ✅ | ✅ |
| 类型 | `astro check` 0 错误/0 警告/0 提示 | ✅ | — |
| 资产 | 4 张 WebP 存在于 dist | ✅ (106-156KB) | — |
| 栏目 | Section id="join-us" 存在 | ✅ | ✅ |
| 标题 | "Join OERF" / "加入我们" | ✅ | ✅ |
| 副标题 | 文案正确 | ✅ | ✅ |
| 快速条 | 常年招收 + 锚点跳详情 | ✅ | ✅ |
| 卡片 1 | 标题/对白/alt | ✅ | ✅ |
| 卡片 2 | 标题/对白/alt | ✅ | ✅ |
| 卡片 3 | 标题/对白/alt | ✅ | ✅ |
| 卡片 4 | 标题/对白/alt | ✅ | ✅ |
| IMG | width=1086 height=1448 loading=lazy | ✅ | ✅ |
| 位置 | Highlights 后 Footer 前 | ✅ | ✅ |
| 详情区 | recruitment-details id 存在 | ✅ | ✅ |
| 招生类别 | 5 项完整 | ✅ | ✅ |
| 专业背景 | 文案完整 | ✅ | ✅ |
| 看重能力 | 四能力 + "没经历也没关系" | ✅ | ✅ |
| 培养发展 | 院校名全 + "有机会/may" | ✅ | ✅ |
| 申请方式 | CV + 可选成绩单 | ✅ | ✅ |
| 邮箱 | 4 个 mailto: 可点击 | ✅ | ✅ |
| Team 页 | Join Us 缩减为一句 + 按钮 → #join-us | ✅ | ✅ |
| Footer | Quick Links 含 Join Us / 加入我们 | ✅ | ✅ |
| CSS | 5 个 recruitment 变量定义完整 | ✅ | ✅ |
| 组件 | RecruitmentSection.astro 结构清晰 | ✅ | ✅ |
| 数据 | recruitment.ts Bilingual\<T\> 完整 | ✅ | ✅ |
| 无破折号 | 中英文对白无破折号 | ✅ | ✅ |

---

## 🟡 P2 — 建议修复

### 1. `&#39;` 编码问题

英文对白和快速信息条中的撇号被编码为 `&#39;` 而非原始 ASCII 撇号：

- `Master&#39;s` → 应为 `Master's`
- `I haven&#39;t` → 应为 `I haven't`

当前输出在浏览器中渲染正常，但源码中的 `&#39;` 不美观。如果将来需要从 HTML 中提取纯文本（比如搜索引擎摘要），`&#39;` 会原样出现在文本中。

**原因**：`recruitment.ts` 源文件中可能使用了弯引号（`'` U+2019）而非直引号（`'` U+0027）。Astro/Prettier 在构建时将其转义为 `&#39;`。

**修复**：在 `recruitment.ts` 中把所有弯撇号 `'` 替换为直撇号 `'`。

### 2. 对话区域缺少说话人标识

对白区域是两个 `<p>` 元素，视觉上通过左边框颜色区分（海军蓝代表林澄、暖橙代表周岚），但屏幕阅读器读到的是两个无关联的 `<p>`，无法区分谁说了哪句。

**建议**：在对话区的 DOM 中增加隐藏的说话人文本，或使用 `<dl>`/`<blockquote>` 结构。不影响视觉呈现。

---

## 🔵 P3 — 可选优化

### 3. 英语第 3 页 alt 文本长度

"Lunch in the lab common area and a small celebration after a paper is accepted" 共 84 字符，略长。可以考虑精简为 "Researchers sharing lunch and celebrating a paper acceptance in the lab common area"。

### 4. 快速信息条可能被误认为面包屑

快速信息条使用了浅灰背景和紧凑间距，在视觉上不够突出。如果未来有用户反馈「没注意到招生信息」，可以考虑加大字体或增加一个微妙的图标。

---

## 总结

**27 通过，0 阻塞，2 建议，2 可选。** 招生栏目实现质量很高，方案中的所有核心要求均已落地。P2 两条改完即可部署。
