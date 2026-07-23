# 中英文双语方案 — 批评建议

## 总体评价

方案在宏观思路上是对的（`/zh/` 子路径、共用组件数据、不分叉两份代码），但作为实施方案来说太泛了，读起来像通用 i18n 指南，而不是针对你当前 Astro 5.x + GitHub Pages 项目的具体施工方案。下面按问题严重程度排列。

---

## P0 — 不谈没法开工

### 1. 没提 Astro 5.x 自带的 i18n routing

方案全文没有任何地方提到 Astro 5.x 有内置的**实验性 i18n 路由**。当前项目用的是 Astro ^5.0.0，这个版本原生支持：

```js
// astro.config.mjs
export default defineConfig({
  i18n: {
    defaultLocale: "en",
    locales: ["en", "zh"],
    routing: {
      prefixDefaultLocale: false,  // en 不加前缀，zh 加 /zh/
    },
  },
});
```

配好之后：
- `Astro.currentLocale` 在任何页面和组件里直接可用，不需要自己传参
- `src/pages/index.astro` 自动生成 `/` 和 `/zh/` 两个页面
- `src/pages/research.astro` 自动生成 `/research/` 和 `/zh/research/`
- 语言切换链接可以用 `Astro.url` + locale 自动构造

方案里把路由、语言检测、页面生成分开讨论，但 Astro 的 i18n 模式是把这三件事一次解决的。**如果不打算用 Astro i18n，需要明确说明理由；如果用，整个方案的路由部分要重写。**

### 2. 没解释路由怎么落到文件结构上

方案说"创建 `/zh/` 页面结构"，但 Astro 是基于文件路由的。当前页面结构是：

```
src/pages/
  index.astro
  research.astro
  team.astro
  publications.astro
  contact.astro
  team/
    cai-weiwei.astro
    liu-ning.astro
    xu-shijie.astro
    zheng-yutao.astro
```

有三种实现方式，方案一个都没选：

| 方式 | 做法 | 优缺点 |
|------|------|--------|
| **Astro i18n routing** | 配 `astro.config.mjs`，文件不改 | 最推荐，但需要改组件取语言的方式 |
| **动态路由 `[lang]`** | `src/pages/[lang]/index.astro` + `getStaticPaths` | 要写 getStaticPaths，组件传参繁琐 |
| **手动复制文件** | `src/pages/zh/index.astro` 等 | 最差，两份文件后期必然不同步 |

**方案必须明确选一种，并给出具体文件操作清单。**

### 3. site 配置有坑

当前 `astro.config.mjs`：

```js
site: "https://laserdiagnostics.github.io",
base: "/oerf-lab-website",
```

`site` 没带 base 路径。加上 `/zh/` 后，canonical URL 需要是 `https://laserdiagnostics.github.io/oerf-lab-website/zh/research/`。如果不处理好 `site` + `base` 的组合，每个页面 `<link rel="canonical">` 和 `hreflang` 的 URL 都会出错。方案完全没提这个。

---

## P1 — 数据结构设计需要具体化

### 4. `{ en, zh }` 方案的迁移量被低估

方案建议每个字段改成 `{ en: "...", zh: "..." }`，但看看现有数据结构：

**members.ts** — 已经有一点中英文意识但不完整：
- `nameZh` 已有
- 但 `title`（职称）、`biography`、`researchInterests`、`education.degree`、`honors` 全是纯英文字符串
- 如果改成双语，`Member` 接口会从 15 个字段膨胀到约 25 个

**research.ts** — 完全不支持双语：
- `title`、`summary`、`description`、`highlights[]`、`imageAlt` 全是纯英文字符串
- 每个 ResearchArea 需要约 6 个额外中文字段

**config.ts** — 需要双语：
- `title`, `description`, `shortName`, `school`, `university`, `institute`, `address` 都需要中文版

**总结**：大约 4 个数据文件、50+ 个字段需要双语化。方案应该附一个迁移对照表，至少把 `Member` 和 `ResearchArea` 两个核心接口的新设计列出来，不然改到一半才发现结构不合理。

### 5. Publications 页面的"不翻译标题"决策是对的，但没说怎么标记

245 篇论文标题保留英文是正确的，但方案没提怎么在中文版 Publications 页面区分"这是原文标题，不需要翻译"和"这个标签/按钮文字需要翻译"。需要明确：

- 组件里哪些 text prop 来自数据（不改），哪些来自 UI（翻译）
- `PublicationCard.astro` 当前全是英文，需要支持传入语言参数

---

## P2 — 技术细节缺失

### 6. Font 问题一个字没提

当前网站只用了一个字体：

```html
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700" rel="stylesheet" />
```

Inter 是纯拉丁字体，**不含中文字符**。中文页面会 fallback 到系统默认字体（Windows 上是微软雅黑，macOS 是苹方），英文页面的 Inter 和中文字体混排效果会很差。方案应该至少提一句：是引入思源黑体/Noto Sans SC，还是接受系统 fallback。

### 7. `@astrojs/sitemap` 不支持 i18n alternates

当前用的是 `@astrojs/sitemap` 3.x，它生成的 sitemap.xml 不会包含 `hreflang` alternate 链接。方案要求"sitemap 中的双语页面记录"，但没有指定用哪个工具/插件来实现。实际有两个选择：

- 升级到 `@astrojs/sitemap` 的 i18n 配置（如果 3.x 支持）
- 手写 sitemap 生成逻辑

**方案应该给出具体做法，不是列个需求就完了。**

### 8. hreflang 标签放在哪、怎么生成

方案展示了 hreflang 的 HTML 片段（第 201-203 行），但没说是写在 BaseLayout 里动态生成，还是每个页面手动硬编码。如果是动态生成，需要清楚：

- 怎么从当前页面路径反推对应语言页面的路径
- 哪些页面有 1:1 对应关系，哪些没有
- `x-default` 指向英文还是中文

这几个问题的答案直接影响 Layout 组件的代码量。

### 9. 语言切换器"无对应页面回首页"的逻辑没说怎么实现

方案说"如果某个页面暂时没有对应译文，则回到对应语言的主页"。这个逻辑需要一张**语言映射表**，否则切换器不知道：

- 当前在 `/team/cai-weiwei/`，切换到中文时，中文路径是 `/zh/team/cai-weiwei/`（有对应）还是 `/zh/`（无对应）？
- 反过来，中文某个页面切英文时怎么办？

这张映射表应该作为方案的一部分列出来，避免开发时临时拍脑袋。

### 10. 没提 `npm run build` 后的输出结构变化

加 `/zh/` 后，`dist/` 目录会从：

```
dist/
  index.html
  research/index.html
  team/index.html
  ...
```

变成：

```
dist/
  index.html
  research/index.html
  team/index.html
  zh/
    index.html
    zh/research/index.html
    zh/team/index.html
    ...
```

方案应该验证这个结构兼容当前的 GitHub Pages 部署流程（是否用 gh-pages 分支、是否用 GitHub Actions）。

---

## P3 — 措辞和范围问题

### 11. "四位老师"写死了人数

方案第 241 行说"翻译 Team 页面和四位老师的信息"，但团队可能增加成员。应改成"所有已录入团队成员"。

### 12. 第 221 行 TypeScript 类型约束没展开

```
每个可翻译字段必须同时具有 en 和 zh。
```

这是个好规则，但需要 TypeScript 类型来强制执行。可以设计一个 `Bilingual<T>` 泛型：

```ts
type Bilingual<T> = { en: T; zh: T };
```

然后 `title: Bilingual<string>` 就能在编译期拦住漏填的情况。方案没提，应该补充。

### 13. 缺少 CI/构建检查

方案提到了"部署前运行构建检查"，但没说具体检查什么。建议至少加两条：

```json
"scripts": {
  "check:i18n": "检查所有 Bilingual 字段是否完整",
  "check:links": "检查 hreflang 链接是否双向对应"
}
```

### 14. Google Fonts 被墙

`fonts.googleapis.com` 在国内加载很慢或打不开。中文版面向国内用户的话，字体加载策略需要重新考虑（自托管字体文件或改用国内 CDN）。方案完全没涉及。

---

## 说得对的地方（值得保留）

- `/zh/` 而不是 `zh.xxx.com` 子域名 — 对 GitHub Pages 最友好
- 不强制浏览器语言跳转 — 对已有英文用户和 SEO 都安全
- 论文标题保留英文 — 学术网站的正确做法
- 科研图片不翻译 — 避免重绘引入科学误差
- 三阶段实施 — 节奏合理

---

## 建议补充的内容

| 缺失项 | 优先级 |
|--------|--------|
| Astro i18n routing 配置方案 + 是否启用的决策 | P0 |
| 三种路由实现方式选型 + 理由 | P0 |
| `Member` 和 `ResearchArea` 新接口设计 | P1 |
| `Bilingual<T>` 类型定义 | P1 |
| 语言映射表（每个页面的 en/zh 对应关系） | P1 |
| 中文字体方案 | P2 |
| Sitemap + hreflang 的具体实现方式 | P2 |
| `dist/` 输出结构变化 + GitHub Pages 兼容性 | P2 |
| Google Fonts 国内访问方案 | P3 |
| CI 检查脚本 | P3 |
