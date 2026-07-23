# 中英文双语方案 — 第二轮批评建议

> 审查日期：2026-07-23  
> 审查对象：BILINGUAL-SITE-PLAN.md 修订版（2026-07-23）

## 逐条回溯：上一版 14 条批评的处理情况

| # | 上一版批评 | 新版处理 | 状态 |
|---|-----------|---------|:--:|
| 1 | 没提 Astro 5.x i18n routing | 1.2 节明确采用 Astro 内置 i18n routing，配 config + 文件结构 | ✅ |
| 2 | 没解释路由怎么落到文件结构 | 1.2 节给出完整 `src/` 目录结构，选型（薄路由+共用View）并附否定方案理由 | ✅ |
| 3 | site 配置有坑 | 第2节详细说明 site+base+URL 拼接规则和检查清单 | ✅ |
| 4 | 数据结构迁移量被低估 | 第4节完整对照表 + Member/ResearchArea/SITE 三个新接口设计 | ✅ |
| 5 | Publications 不翻译标题的标记问题 | 4.5 节清晰划分学术元数据 vs UI 词典 | ✅ |
| 6 | Font 问题 | 第8节自托管 Inter + 系统中文字体栈，完整方案 | ✅ |
| 7 | sitemap 不支持 i18n alternates | 第7节确认 3.7.2 已支持，给出配置 | ✅ |
| 8 | hreflang 标签放在哪 | 第6节 BaseLayout 统一负责，Props + 生成逻辑 | ✅ |
| 9 | 语言切换器逻辑 | 第5节 route manifest + getRelativeLocaleUrl，明确不回退 | ✅ |
| 10 | build 输出结构变化 | 第10节完整 dist/ 结构图 + GitHub Pages 兼容性 | ✅ |
| 11 | "四位老师"写死人数 | 阶段E改成"所有已录入团队成员" | ✅ |
| 12 | TypeScript 类型约束 | 3.1 节 Bilingual<T> 泛型 + localize 函数 | ✅ |
| 13 | 缺少 CI 检查 | 第11节完整 check-i18n + check-built-links 规格 | ✅ |
| 14 | Google Fonts 被墙 | 第8节移除运行时依赖 + 自托管 | ✅ |

**14 条全部处理完毕。** 这个修订版的施工能力已经远超第一版，可以直接进入实施。

---

下面进入第二轮审查，聚焦新版自身的新问题。严重程度整体低于第一轮。

---

## P1 — 实施前需要确认

### 1. 成员详情页从独立文件转为 `[id].astro` 的 URL 兼容性没说透

当前 4 个成员详情页是独立文件：

```
src/pages/team/
  cai-weiwei.astro    → /team/cai-weiwei/
  liu-ning.astro      → /team/liu-ning/
  xu-shijie.astro     → /team/xu-shijie/
  zheng-yutao.astro   → /team/zheng-yutao/
```

每个文件硬编码 `members.find(m => m.id === "cai-weiwei")`。

方案 1.2 节说"改成动态静态路由 `[id].astro`，现有成员 URL 保持不变"。这个转换确实能做到——因为 members 数据中 `id` 字段值恰好等于文件名 slug。但方案没有明确写出来这个隐含前提：**`member.id` 必须等于 URL slug**。

建议在 1.2 节或 4.2 节补充一句话：动态路由参数 `id` 直接对应 `Member.id`，`getStaticPaths()` 遍历 `members` 数组用 `params: { id: member.id }` 生成所有路径。

### 2. `MemberCopy` 接口少了 `nameZh` 的归处

当前 members 数据中已有 `nameZh` 字段。新版 `Member` 接口把显示姓名放进 `MemberCopy.displayName`，但没有说明：

- 英文 `displayName` 的格式（"Weiwei Cai"？"Cai Weiwei"？）
- 中文 `displayName` 是否沿用现有的 `nameZh` 值
- `nameZh` 字段是迁移进 `content.zh.displayName` 还是删除

Member 数据文件是这次迁移工程量最大的部分，接口字段的对应关系写清楚可以避免实施时反复翻旧代码对照。

---

## P2 — 实施细节可以更精确

### 3. Navbar 的 active 状态逻辑在 locale 环境下会出错

当前 Navbar 用 `Astro.url.pathname` 做 active 判断：

```js
currentPath === link.href || currentPath.startsWith(link.href)
```

英文页面：`/oerf-lab-website/research/` 匹配 `link.href = "/oerf-lab-website/research/"`  
中文页面：`/oerf-lab-website/zh/research/` **不会匹配**上面的 link.href

加上 locale 后，中文 Navbar 的链接 target 会是 `/zh/research/`，但 active 比较逻辑需要同时处理带 base 和不带 base 的情况。方案第 5 节讲了 route manifest 和 URL helper，但没有提到 Navbar 组件本身需要改造。

建议在阶段 D 中显式列出一条：改造 Navbar，使其接收 `locale` prop，用路由 manifest 生成链接并用 `getRelativeLocaleUrl` 构造当前语言的目标 URL。

### 4. `check-built-links.mjs` 的实现复杂度被低估

方案第 11 节给这个脚本列了 7 项检查需求：canonical、hreflang、dist 文件对照、站内链接、图片路径、重复 base、245 篇论文渲染。从零实现所有这些检查需要一个 HTML 解析器（cheerio/jsrdom）+ 文件树遍历逻辑 + 双语路径映射表。

方案没有说明用什么工具解析 HTML，也没有给出脚本的实现策略。建议至少指定解析库（推荐 `cheerio`，轻量且无浏览器依赖），并把检查项按"构建时断言"和"运行后扫描"分层，降低单脚本复杂度。

### 5. 404 和错误页面没有双语化方案

方案覆盖了 5 个主页面 + 成员详情页面，但完全没有提 404 页面。当前项目很可能有一个 `src/pages/404.astro`（或依赖 GitHub Pages 默认 404）。双语化后：

- 英文 404 应该提示"Page Not Found"并提供英文导航
- 中文 404 应该提示"页面未找到"并提供中文导航
- 或者一个页面根据 URL 前缀判断语言

这个遗漏虽小，但上线后用户在中文路径遇到 404 看到纯英文错误页会体验不好。建议阶段 D 增加一条：创建或修改 404 页面支持双语。

### 6. OG 图片只提了文字没提图片

第 6 节 BaseLayout 提到了"对应的 Open Graph URL、locale、标题和描述"，但没有提 `og:image`。当前网站如果有 og:image（社交分享卡），需要决定：中英文页面用同一张图还是分别用不同的图。如果分别用，og:image 的 URL 也需要随 locale 变化。

### 7. 阶段 A "保留现有备份"表述可以更精确

> "- 保留现有备份，不把 backups/ 提交到 Git"

如果备份是 Git 分支则不需要 `backups/` 目录，如果是文件级备份则不需要提 Git。建议明确为："在开发分支上工作，main 分支保留当前稳定版本作为回滚点"，删掉 `backups/` 那句话。

---

## P3 — 小修小补

### 8. `@astrojs/check` 版本号未锁定

方案说"需要新增 `@astrojs/check`"，但没给版本号。该包需要与 `astro` 主版本匹配。当前 Astro 5.18.1，应安装 `@astrojs/check@^0.9`（截至 2026 年 7 月的最新兼容版本）。建议在方案中注明。

### 9. 第 3.2 节 UI 词典缺少实际会用到的键

当前 UI 词典只列了 8 个键（home、research 等），但实际页面中还有大量 UI 字符串需要翻译：

- "Research Interests" / "研究方向"（成员详情页）
- "Biography" / "个人简介"
- "Honors & Awards" / "荣誉与奖项"
- "Journal Publications" / "期刊论文"
- "Latest Highlights" / "最新成果"
- "Read the paper" / "阅读论文"
- Contact 页面的 form labels

建议把这些也放进 UI 词典的初始草稿中，方便翻译者一次性完成。

### 10. 中英文标点符号规范未提及

中英文混排最容易被忽视的是标点问题。中文正文应使用全角标点（，。、""），英文使用半角（, . ""）。方案没有提，但翻译阶段需要统一规范。建议在阶段 E 增加一条：统一标点符号约定（中文路径用全角，数字和英文专有名词保留半角）。

---

## 值得肯定的改进

新版方案在结构完整性、技术决策清晰度、风险控制三个维度上都达到了可施工的标准。特别值得肯定的点：

- **Section 1.3 "不采用的方案"** — 这种"否定清单"在技术方案中非常少见但极为有价值，它告诉实施者"我们认真考虑过其他选项，不是拍脑袋选的"。减少实施中的怀疑和反复。
- **Section 4.5 Publications 翻译边界** — 用表格明确划分"属于学术元数据，保持英文"和"属于 UI，由词典提供"，这种边界在实施中能避免大量的"这个要不要翻"的纠结。
- **Section 11 CI 检查** — check-i18n + check-built-links 的双层验证思路很好，比上一版只有一句"部署前运行构建检查"实用了太多。

---

## 建议补充的内容（第二轮）

| 补充项 | 优先级 | 对应节 |
|--------|:------:|--------|
| `member.id` 与 URL slug 的映射关系 | P1 | 1.2 / 4.2 |
| `nameZh` 字段迁移目标 | P1 | 4.2 |
| Navbar locale 适配 | P2 | 阶段 D |
| `check-built-links.mjs` 实现策略（解析库选择） | P2 | 11 |
| 404 页面双语化 | P2 | 阶段 D |
| OG image 双语化决策 | P2 | 6 |
| 备份策略精确化 | P3 | 阶段 A |
| `@astrojs/check` 版本号 | P3 | 11 |
| UI 词典完整键列表 | P3 | 3.2 |
| 中英文标点规范 | P3 | 阶段 E |

---

## 总结

第一轮 14 条批评全部被处理，这个修订版的质量提升非常显著。第二轮发现的问题集中在实施边界条件（Navbar active 状态、成员 URL 兼容性、404 页面、OG image）和脚本实现细节（check-built-links），没有 P0 级别的阻塞项。

建议在新版方案末尾增加第二轮 10 条补充后即可定稿开干。
