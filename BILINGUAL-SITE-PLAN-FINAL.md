# OERF Lab 中英文双语网站实施方案（定稿）

> 修订日期：2026-07-23  
> 适用项目：Astro 5.18.1、`@astrojs/sitemap` 3.7.2、GitHub Pages  
> 目标：保留现有英文 URL，在 `/zh/` 下提供完整中文版本，并让两种语言共用组件和核心数据。

## 1. 已确定的技术决策

### 1.1 URL 结构

- 英文继续使用无语言前缀的现有 URL。
- 中文统一增加 `/zh/` 前缀。
- 不根据浏览器语言强制跳转。
- `x-default` 指向英文页面。

| 页面 | 英文 | 中文 |
| --- | --- | --- |
| 主页 | `/` | `/zh/` |
| Research | `/research/` | `/zh/research/` |
| Team | `/team/` | `/zh/team/` |
| Publications | `/publications/` | `/zh/publications/` |
| Contact | `/contact/` | `/zh/contact/` |
| 成员详情 | `/team/{id}/` | `/zh/team/{id}/` |

完整部署地址分别为：

- `https://laserdiagnostics.github.io/oerf-lab-website/`
- `https://laserdiagnostics.github.io/oerf-lab-website/zh/`

### 1.2 路由方案：Astro 内置 i18n + 本地化薄路由

采用 Astro 内置 i18n routing，不使用自建中间件，也不使用 `[lang]` 覆盖全部页面。

```js
// astro.config.mjs
export default defineConfig({
  site: "https://laserdiagnostics.github.io",
  base: "/oerf-lab-website",
  i18n: {
    defaultLocale: "en",
    locales: ["en", "zh"],
    routing: {
      prefixDefaultLocale: false,
    },
  },
});
```

需要特别说明：Astro i18n 不会把一个 `src/pages/index.astro` 自动复制生成 `/` 和 `/zh/`。Astro 仍然采用文件路由，非默认语言需要 `src/pages/zh/` 目录。内置 i18n 提供的是 locale 识别、标准 URL 生成函数和路由规则。

为了避免复制两套页面代码，页面文件只保留路由职责，实际页面内容移入共用 View：

```text
src/
  i18n/
    types.ts
    ui.ts
    routes.ts
    helpers.ts
  views/
    HomeView.astro
    ResearchView.astro
    TeamView.astro
    MemberView.astro
    PublicationsView.astro
    ContactView.astro
  pages/
    index.astro
    research.astro
    team.astro
    publications.astro
    contact.astro
    team/
      [id].astro
    zh/
      index.astro
      research.astro
      team.astro
      publications.astro
      contact.astro
      team/
        [id].astro
```

英文和中文路由文件都只负责调用同一个 View。所有成员详情改成动态静态路由 `[id].astro`，通过共用的 `getMemberStaticPaths()` 生成，现有成员 URL 保持不变，新增成员时无需再手工创建两个详情页面。

动态路由参数 `id` 必须直接对应 `Member.id`，并把 `Member.id` 视为稳定、不可随意修改的公开 URL slug。当前 `cai-weiwei`、`liu-ning`、`xu-shijie`、`zheng-yutao` 已与现有文件名和线上 URL 一致。路径生成逻辑固定为：

```ts
export function getMemberStaticPaths() {
  return members.map((member) => ({
    params: { id: member.id },
    props: { member },
  }));
}
```

如果未来确需修改成员 `id`，必须同时配置旧 URL 到新 URL 的重定向，不能直接更名导致既有链接失效。

### 1.3 不采用的方案

| 方案 | 不采用原因 |
| --- | --- |
| 手工复制整套中文页面 | 页面结构会逐渐分叉，维护成本最高。 |
| 全站 `[lang]` 动态路由 | 默认英文需要保持无前缀，路由和 `getStaticPaths()` 更复杂。 |
| 自写 i18n 中间件 | 当前静态站没有必要重复实现 Astro 已提供的 locale 和 URL 能力。 |

## 2. `site`、`base` 与绝对 URL

当前配置为：

```js
site: "https://laserdiagnostics.github.io",
base: "/oerf-lab-website",
```

这一组合本身是有效的。当前构建生成的 sitemap 已正确包含 `/oerf-lab-website/`。实施双语时继续保留该组合，不把 base 重复写入 `astro.config.mjs` 的 `site`。

风险来自页面中手工拼接 URL。修订规则如下：

- 站内资源继续使用 `import.meta.env.BASE_URL`。
- locale 页面 URL 使用 `astro:i18n` 的 `getRelativeLocaleUrl()`。
- canonical 和 `hreflang` 使用 `getAbsoluteLocaleUrl()`。
- 禁止在组件中直接拼接 `site + base + locale + path`。
- 构建后检查所有 canonical 均以 `https://laserdiagnostics.github.io/oerf-lab-website/` 开头，且不得出现重复的 `/oerf-lab-website/oerf-lab-website/` 或 `/zh/zh/`。

## 3. 语言与类型系统

### 3.1 基础类型

```ts
// src/i18n/types.ts
export const locales = ["en", "zh"] as const;
export type Locale = (typeof locales)[number];
export type Bilingual<T> = Record<Locale, T>;

export function localize<T>(value: Bilingual<T>, locale: Locale): T {
  return value[locale];
}
```

`Bilingual<T>` 在编译期强制每个本地化数据同时包含 `en` 和 `zh`，缺少任何一种语言都不能通过 TypeScript 检查。

### 3.2 UI 词典

导航、按钮、栏目标题、可访问性标签等短文本集中放入 `src/i18n/ui.ts`：

```ts
export const ui: Bilingual<UIStrings> = {
  en: {
    home: "Home",
    research: "Research",
    team: "Team",
    publications: "Publications",
    contact: "Contact",
    readPaper: "Read the paper",
    viewPaper: "View paper",
    researchInterests: "Research Interests",
    biography: "Biography",
    education: "Education",
    honorsAwards: "Honors & Awards",
    journalPublications: "Journal Publications",
    latestHighlights: "Latest Highlights",
    moreSelectedWork: "More selected work",
    email: "Email",
    address: "Address",
    contactUs: "Contact Us",
    pageNotFound: "Page Not Found",
    backHome: "Back to home",
    toggleMenu: "Toggle menu",
    languageSwitchShort: "中文",
    switchLanguage: "切换到中文",
  },
  zh: {
    home: "主页",
    research: "研究方向",
    team: "团队成员",
    publications: "论文成果",
    contact: "联系我们",
    readPaper: "阅读论文",
    viewPaper: "查看论文",
    researchInterests: "研究方向",
    biography: "个人简介",
    education: "教育经历",
    honorsAwards: "荣誉与奖项",
    journalPublications: "期刊论文",
    latestHighlights: "最新成果",
    moreSelectedWork: "更多代表性工作",
    email: "电子邮箱",
    address: "地址",
    contactUs: "联系我们",
    pageNotFound: "页面未找到",
    backHome: "返回主页",
    toggleMenu: "展开或收起导航菜单",
    languageSwitchShort: "EN",
    switchLanguage: "Switch to English",
  },
};
```

这只是初始必需键集合。实施时先从现有页面扫描全部用户可见字符串，补齐强类型 `UIStrings`，包括 Contact 页实际存在的字段标签和无障碍标签。组件只通过 `t(locale, key)` 或 `ui[locale]` 读取 UI 文本，不在模板内散落 `locale === "zh"` 判断。

## 4. 数据模型迁移

不把每个接口膨胀成大量 `titleEn`、`titleZh` 字段，而是分离“语言无关数据”和“本地化内容”。

### 4.1 迁移范围对照表

| 数据文件 | 保持共享、不翻译 | 需要双语化 |
| --- | --- | --- |
| `src/config.ts` | `url`、`email`、`since` | `title`、`shortName`、`description`、`school`、`university`、`institute`、`address` |
| `src/data/members.ts` | `id`、`photo`、`email`、`order` | 显示姓名、职称、简介、教育经历、研究兴趣、荣誉 |
| `src/data/research.ts` | `id`、图片文件、宽高、`memberIds` | 标题、摘要、介绍、标签、图片替代文本 |
| `src/data/publications.ts` | 标题、作者、期刊、年份、卷页、DOI、成员关系 | 不修改核心论文数据；只翻译组件 UI 和 Highlight 说明 |
| Highlight 配置 | DOI、图片、指标数值、Publication ID | 成果概述、指标名称、图片替代文本 |

### 4.2 Member 接口

```ts
export interface EducationCopy {
  degree: string;
  institution: string;
  period: string;
}

export interface MemberCopy {
  displayName: string;
  title: string;
  biography: string;
  education: EducationCopy[];
  researchInterests: string[];
  honors: string[];
}

export interface Member {
  id: string;
  photo: string;
  email: string;
  order: number;
  content: Bilingual<MemberCopy>;
}
```

字段迁移规则：

- 当前 `name` 迁移到 `content.en.displayName`，保持 `Weiwei Cai` 这类现有英文展示顺序。
- 当前 `nameZh` 迁移到 `content.zh.displayName`，保持 `蔡伟伟` 等现有中文姓名。
- 迁移完成后删除旧的顶层 `name` 和 `nameZh`，避免出现两个姓名来源。
- Navbar、TeamCard、MemberView、Publication 的成员匹配均通过 `Member.id`，不能依赖显示姓名。

教育时间虽然通常不变，仍放进 `EducationCopy`，避免中英文教育记录数量或表达方式变化时依赖数组位置拼接。

### 4.3 ResearchArea 接口

```ts
export interface ResearchAreaCopy {
  title: string;
  summary: string;
  description: string;
  highlights: string[];
  imageAlt: string;
}

export interface ResearchArea {
  id: string;
  image: string;
  imageWidth: number;
  imageHeight: number;
  memberIds: string[];
  content: Bilingual<ResearchAreaCopy>;
}
```

### 4.4 SITE 配置

```ts
export interface SiteCopy {
  title: string;
  shortName: string;
  description: string;
  school: string;
  university: string;
  institute: string;
  address: string;
}

export const SITE = {
  url: "https://laserdiagnostics.github.io/oerf-lab-website",
  email: "cweiwei@sjtu.edu.cn",
  since: 2015,
  content: { en: { /* ... */ }, zh: { /* ... */ } } satisfies Bilingual<SiteCopy>,
};
```

### 4.5 Publications 的翻译边界

`Publication` 接口和 245 篇论文记录不增加中文标题字段。以下内容属于原始学术元数据，保持英文：

- 论文标题
- 作者姓名
- 期刊名称
- 年份、卷期、页码
- DOI 和论文页面链接

以下内容属于 UI，由词典提供：

- Publications / 论文成果
- Journal Publications / 期刊论文
- DOI、View paper / 查看论文
- Cover Paper 等 Highlight 标签
- 页面介绍和“按年份排列”说明

`PublicationCard.astro`、`PublicationList.astro` 和 `HighlightBadge.astro` 接收 `locale: Locale`，但 `pub.title` 等原始数据不经过翻译函数。

## 5. 页面路由映射与语言切换

建立一个集中式 route manifest，而不是让 Navbar 根据字符串猜测对应路径：

```ts
export const staticRoutes = {
  home: "",
  research: "research",
  team: "team",
  publications: "publications",
  contact: "contact",
} as const;

export function memberRoute(id: string) {
  return `team/${id}`;
}
```

对应关系：

| route key | 英文 | 中文 | 是否必须双向存在 |
| --- | --- | --- | --- |
| `home` | `/` | `/zh/` | 是 |
| `research` | `/research/` | `/zh/research/` | 是 |
| `team` | `/team/` | `/zh/team/` | 是 |
| `publications` | `/publications/` | `/zh/publications/` | 是 |
| `contact` | `/contact/` | `/zh/contact/` | 是 |
| `member:{id}` | `/team/{id}/` | `/zh/team/{id}/` | 对所有已录入成员必须存在 |

每个 View 或 BaseLayout 接收稳定的 `routeKey`/`routePath`，语言切换器调用：

```ts
getRelativeLocaleUrl(targetLocale, routePath)
```

本项目计划一次性提供所有现有页面的中英文对应版本，因此正常情况下不回退主页。如果未来确实出现单语页面，必须在 route manifest 中显式标记 `availableLocales`；只有明确缺失时才回退目标语言主页。

### 5.1 Navbar 链接与 active 状态

当前 Navbar 用 `Astro.url.pathname.startsWith(link.href)` 判断 active，在 `/zh/` 和 GitHub Pages base 并存时容易失配。改造后 Navbar 接收：

```ts
interface Props {
  locale: Locale;
  activeRoute: keyof typeof staticRoutes | "member";
}
```

- 导航目标由 route manifest + `getRelativeLocaleUrl(locale, routePath)` 生成。
- active 状态使用稳定的 route key 比较，不再比较完整 pathname。
- 成员详情页面统一把 Team 标为 active。
- 语言切换器使用当前 `routePath` 生成目标语言 URL。
- 移动端菜单的文字、`aria-label` 和语言切换入口均从 UI 词典读取。

语言切换器始终显示**目标语言**而不是当前语言，这是明确的交互约定：

- 英文页面显示 `中文`，无障碍标签为“切换到中文”。
- 中文页面显示 `EN`，无障碍标签为 “Switch to English”。
- 链接的 `lang` 和 `hreflang` 属性标记目标语言。

这样用户看到的是“点击后将前往哪种语言”，不能在实施时改成显示当前语言。

这样 active 状态不依赖是否存在 `/oerf-lab-website/` base 或 `/zh/` 前缀。

### 5.2 GitHub Pages 双语 404

当前项目没有自定义 404。新增 `src/pages/404.astro` 生成根级 `dist/404.html`。GitHub Pages 对任意不存在的英文或中文路径都会使用这一份文件，因此不能依赖构建时的 `Astro.currentLocale` 生成两份 404。

404 页面同时内置 en/zh 两组简短内容，页面加载时用最小内联脚本读取浏览器当前 `window.location.pathname`：

- 路径在 `${BASE_URL}zh/` 下时显示中文内容、中文导航，并把 `<html lang>` 设为 `zh-CN`。
- 其他路径显示英文内容和英文导航。
- 页面在脚本执行前提供可理解的双语 fallback，不能出现空白。
- 返回主页、Research、Team 等链接仍通过已知 base 和 locale helper 预生成，不在客户端猜测 GitHub Pages base。

由于 404 不应被索引，页面增加 `robots="noindex"`；构建后分别模拟英文和中文不存在路径检查返回内容与导航。

## 6. BaseLayout、canonical 与 hreflang

`BaseLayout.astro` 统一负责语言和 SEO，页面不得自行硬编码 alternate 标签。

新增 Props：

```ts
interface Props {
  locale: Locale;
  routePath: string;
  title: string;
  description?: string;
}
```

由 BaseLayout 动态生成：

- `<html lang="en">` 或 `<html lang="zh-CN">`
- 当前页面 canonical
- `hreflang="en"`
- `hreflang="zh-CN"`
- `hreflang="x-default"`，指向英文页面
- 对应的 Open Graph URL、locale、标题和描述
- Open Graph 图片绝对 URL

逻辑示意：

```ts
const enUrl = getAbsoluteLocaleUrl("en", routePath);
const zhUrl = getAbsoluteLocaleUrl("zh", routePath);
const canonical = locale === "zh" ? zhUrl : enUrl;
```

语言切换链接与 `hreflang` 必须使用同一个 route manifest 和 URL helper，防止两套逻辑不一致。

### 6.1 Open Graph 图片决策

第一阶段中英文共用一张不依赖语言文字的实验室品牌图，避免维护两套社交分享图片。当前 BaseLayout 引用了尚不存在的 `/og-image.png`，实施时必须补齐真实资源，例如：

```text
public/images/og/oerf-lab-share.webp  # 1200 × 630
```

BaseLayout 必须在内部落实默认值，页面不传 `ogImage` 时也始终输出有效图片。`ogImage` 仅用于少数页面覆盖默认图，不能把默认值责任交给调用页面：

```ts
interface Props {
  // 其他页面元数据……
  ogImage?: string;
}

const DEFAULT_OG_IMAGE = "/images/og/oerf-lab-share.webp";
const ogImagePath = Astro.props.ogImage ?? DEFAULT_OG_IMAGE;
const ogImageUrl = getAbsoluteAssetUrl(ogImagePath);
```

BaseLayout 使用 `ogImageUrl` 输出 `og:image`，URL helper 必须包含 GitHub Pages base。共享默认文件是构建检查的必需资源；缺失时 `npm run verify` 直接失败。如果未来确有中文文字版分享图，可在页面元数据中用本地化路径覆盖，但任何页面都不得输出不存在的图片地址。

## 7. Sitemap 具体方案

当前安装的 `@astrojs/sitemap` 3.7.2 已支持 i18n alternate，无需手写 sitemap，也无需为这一功能立即更换插件。

```js
integrations: [
  sitemap({
    i18n: {
      defaultLocale: "en",
      locales: {
        en: "en",
        zh: "zh-CN",
      },
    },
  }),
],
```

构建后必须检查：

- sitemap 包含英文和中文所有静态 URL。
- 每组对应页面包含 `xhtml:link` alternate。
- URL 均包含 `/oerf-lab-website/` base。
- 中文 URL 只出现一次 `/zh/`。
- HTML 中继续保留 `x-default`；sitemap 由插件生成 en/zh alternates。

## 8. 字体与国内访问

当前 BaseLayout 依赖 Google Fonts 的 Inter。Google Fonts 在中国大陆可能加载失败，而且 Inter 不包含中文字形。

采用以下方案：

1. 移除运行时对 `fonts.googleapis.com` 和 `fonts.gstatic.com` 的依赖。
2. 将 Inter 的拉丁字体 WOFF2 自托管到 `public/fonts/`，同时保存字体许可证。
3. 中文优先使用操作系统字体，避免引入体积很大的完整中文 WebFont。
4. CSS 使用中英文混排字体栈：

```css
font-family:
  "Inter Local",
  -apple-system,
  BlinkMacSystemFont,
  "Segoe UI",
  "PingFang SC",
  "Hiragino Sans GB",
  "Microsoft YaHei",
  "Noto Sans CJK SC",
  sans-serif;
```

如果后续确认必须统一中文视觉，再对思源黑体/Noto Sans SC 做字形子集化；第一阶段不加载完整中文字体文件。

## 9. 图片策略

- 中英文页面共用科研配图和团队照片。
- `imageAlt` 使用 `Bilingual<string>` 内容。
- 论文中的正式图表、坐标轴和科研标注不为翻译而重绘。
- 如果未来需要中文版科研图，必须另存新文件，不能覆盖英文原图。
- 继续使用 WebP 和固有宽高，避免布局跳动。

## 10. 构建产物与 GitHub Pages

增加中文路由后，关键构建产物应为：

```text
dist/
  index.html
  research/index.html
  team/index.html
  publications/index.html
  contact/index.html
  team/{id}/index.html
  zh/
    index.html
    research/index.html
    team/index.html
    publications/index.html
    contact/index.html
    team/{id}/index.html
```

不得出现 `dist/zh/zh/`。

现有 GitHub Actions 在 push 到 `main` 后执行 `npm ci`、`npm run build` 并上传整个 `dist/` 到 GitHub Pages。中文目录仍在同一个 `dist/` 内，因此部署机制不需要改变，只需扩展验证步骤。

## 11. 自动检查与 CI

增加以下脚本：

```json
{
  "scripts": {
    "check:types": "astro check",
    "check:i18n": "node scripts/check-i18n.mjs",
    "check:html": "node scripts/check-built-html.mjs",
    "check:links": "node scripts/check-built-links.mjs",
    "verify": "npm run check:types && npm run check:i18n && npm run build && npm run check:html && npm run check:links"
  }
}
```

锁定新增开发依赖：

```sh
npm install --save-dev --save-exact @astrojs/check@0.9.9 cheerio@1.2.0
```

`@astrojs/check` 0.9.9 与当前 TypeScript 5.x 配置兼容；Cheerio 1.2.0 要求 Node 20.18.1 以上，当前 GitHub Actions 使用 Node 22，满足要求。准确版本写入 `package.json` 和 `package-lock.json`，并在 GitHub Actions 中把单独的 `npm run build` 替换为 `npm run verify`。

`check-i18n.mjs` 检查：

- 所有 `Bilingual<T>` 数据同时存在 `en` 和 `zh`。
- UI 词典两种语言 key 完全一致。
- 所有已录入成员都存在双语内容。
- route manifest 中的页面标记完整。

构建后检查不全部堆进一个脚本。两个脚本共用 `scripts/lib/site-checks.mjs` 中的文件遍历、base 归一化和 route manifest 读取逻辑，HTML 使用 Cheerio 一次解析后执行断言。

`check-built-html.mjs` 负责页面语义与双语一致性：

- 每个英文页面存在对应中文文件，反向亦然。
- canonical 指向当前语言页面。
- en/zh/x-default `hreflang` 完整且双向对应。
- HTML `lang` 和 Open Graph locale 正确。
- 默认 `og:image` 指向实际存在的共享图片。
- Publications 两个语言页面均渲染 245 条论文记录。

`check-built-links.mjs` 负责文件和链接完整性：

- 所有站内链接考虑 GitHub Pages base 后均能落到构建文件。
- 图片和 favicon 路径有效。
- 不存在 `/zh/zh/` 或重复 base。

`check:i18n` 属于构建前源数据断言；`check:html` 和 `check:links` 属于构建后产物扫描。分层后任何失败都能给出明确的页面路径、元素类型和期望值。

## 12. 分阶段施工清单

### 阶段 A：安全准备

- 从最新 `main` 创建开发分支。
- 运行当前构建并保存基线页面截图或关键 DOM 指标。
- 记录开工时的稳定 commit hash；`main` 保持为首要回滚点，所有双语开发在独立分支进行。
- 现有本地文件备份只作为附加保险并继续被 `.gitignore` 排除，不承担版本回滚职责。

### 阶段 B：i18n 基础设施

- 修改 `astro.config.mjs`，启用 Astro i18n 和 sitemap i18n。
- 新建 `src/i18n/types.ts`、`ui.ts`、`routes.ts`、`helpers.ts`。
- 修改 BaseLayout、Navbar、Footer，增加 locale、canonical、`hreflang` 和语言切换器。
- 去除 Google Fonts 运行时依赖并自托管 Inter 拉丁字体。

### 阶段 C：数据迁移

- 迁移 `SITE` 为共享字段 + `Bilingual<SiteCopy>`。
- 迁移所有已录入成员为 `Bilingual<MemberCopy>`。
- 迁移 Research Areas 为 `Bilingual<ResearchAreaCopy>`。
- 迁移 Highlight 的介绍、指标标签和图片替代文本。
- 保持 Publications 核心数据结构和英文元数据不变。

### 阶段 D：共用 View 与路由

- 将现有页面主体提取到六个共用 View。
- 把英文页面改成薄路由。
- 新建 `src/pages/zh/` 中文薄路由。
- 将成员详情迁移到英文、中文两个 `[id].astro`，共用静态路径函数和 MemberView。
- 对所有站内链接改用 locale URL helper。
- 改造 Navbar：接收 `locale` 和 `activeRoute`，由 route manifest 生成链接和 active 状态。
- 新增一份可根据请求路径显示 en/zh 内容的 GitHub Pages 自适应 `404.astro`。

### 阶段 E：中文内容

- 翻译主页、Research、Team、Publications 和 Contact。
- 翻译所有已录入团队成员信息，不写死人数。
- 统一术语、人名、单位和标点：中文正文使用全角中文标点，英文正文使用半角标点；数字、单位、URL、代码、DOI 和英文专有名词保留半角字符；中英文混排空格采用统一规则。
- 论文正式标题、作者、期刊和 DOI 保持原文。

### 阶段 F：验证与发布

- 运行 `npm run verify`。
- 检查 `dist/` 中英文目录结构和 sitemap。
- 在桌面端和移动端检查全部页面对。
- 验证语言切换保持对应页面。
- 检查线上 GitHub Pages 的英文旧 URL 和所有中文 URL。
- 更新 `CHANGELOG.md` 后提交部署。

## 13. 验收标准

- 所有现有英文 URL 保持有效。
- `/zh/` 下存在完整中文页面。
- 所有静态页面和所有已录入成员详情均有一一对应的双语路由。
- 语言切换器在当前对应页面之间切换，不错误返回主页。
- HTML `lang`、canonical、en/zh/x-default `hreflang` 正确。
- Navbar 在中英文所有主页面和成员详情页显示正确 active 状态。
- 英文和 `/zh/` 下的无效路径均显示对应语言 404，并提供有效返回链接。
- sitemap 包含正确的双语 alternate 和 GitHub Pages base。
- 所有页面的 `og:image` 指向实际存在的共享或本地化资源。
- Google Fonts 不再是页面显示的运行时依赖。
- 所有 `Bilingual<T>` 数据在 TypeScript 和自定义检查中完整。
- 两种语言的 Publications 页面都显示同一份 245 篇论文数据。
- 四个 Research Areas 和四篇 Latest Highlights 在两种语言中完整显示。
- 科研图片和论文链接不因翻译发生改变。
- 桌面端和移动端无横向溢出、遮挡、404 或控制台错误。
- `npm run verify` 和 GitHub Actions 全部通过。
- GitHub Pages 上线后英文根路径和中文 `/zh/` 均可访问。

## 14. 风险与回滚

| 风险 | 控制措施 |
| --- | --- |
| URL 重复 base 或重复 locale | 所有 URL 走 `astro:i18n` helper，并在构建后扫描。 |
| 中英文数据缺失 | `Bilingual<T>` + `check:i18n`。 |
| 两套路由文件结构分叉 | 路由文件保持极薄，页面主体只存在于共用 View。 |
| 中文字体加载慢 | 自托管拉丁字体，中文使用系统字体，无 Google Fonts 依赖。 |
| 论文数据被翻译或复制后不一致 | Publication 核心数据只维护一份且保持英文。 |
| GitHub Pages 中文路径 404 | 构建检查 `dist/zh/`，部署后逐页验证。 |
| Navbar 在中文路径无法正确高亮 | 用 `activeRoute` route key 判断，不再比较带 base/locale 的完整 pathname。 |
| 社交分享图 404 | 创建并扫描默认 OG 图片，所有页面输出绝对 URL。 |
| 中英文缺失路径显示错误语言 | 单一根级 404 根据运行时 pathname 切换，并对两类路径做浏览器测试。 |

出现严重问题时，回退到双语改造前的 Git commit；不通过手工删除部分中文文件来恢复，以免留下错误 alternate 或 sitemap。

## 15. 官方技术依据

- Astro i18n routing：<https://docs.astro.build/en/guides/internationalization/>
- Astro i18n API：<https://docs.astro.build/en/reference/modules/astro-i18n/>
- Astro sitemap i18n：<https://docs.astro.build/en/guides/integrations-guide/sitemap/#i18n>

## 16. 最终建议

采用 Astro 内置 i18n routing，但明确创建 `/zh/` 本地化薄路由；所有页面主体、组件和核心数据保持单一来源。数据层使用分组后的 `Bilingual<T>` 强制双语完整性，URL、canonical、语言切换和 `hreflang` 共用同一 route manifest。Sitemap 使用现有插件的 i18n 功能，字体改为无 Google 运行时依赖的自托管/系统方案，并通过 `npm run verify` 和 GitHub Actions 自动阻止漏翻译、错误 URL 和路由不对称。
