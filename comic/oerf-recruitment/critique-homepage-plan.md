# 主页招生栏目实施方案 — 批评与修改建议

## 总体评价

方案结构完整，位置选择正确（Highlights 后 Footer 前），视觉策略（暖米色底 + 不裁图 + 对白在图上）和资产处理（PNG→WebP, lazy load）都很到位。代码组织清晰，验收标准具体。以下是需要修改的问题。

---

## 🔴 P0 — 必须改

### 1. 英文对白里出现了两个破折号

第 2 页和第 3 页的英文对白：

> "No rush—we'll trace it from the optical path together."
> "The paper is accepted—let's celebrate over dinner."

这个项目从公众号文章到招生漫画，三轮审查一直在清破折号。中文版 Zero，英文版冒出来两个。改成逗号或分号：

> "No rush. We'll trace it from the optical path together."
> "The paper is accepted. Let's celebrate over dinner."

### 2. 第 1 页英文标题语法和用词问题

"Start with the question" 有歧义（具体哪个 question？），而且表格里中文标题是四个字「从问题开始」，英文也应该简洁。建议改成：

> **Start with a question**

同样，第 4 页 "Make the result clear" 三个用词斟酌：

- "result" 用单数像在说一个特定结果，复数 "results" 更自然
- "make clear" 偏中文直译，英语母语者更常说 "show your results" 或 "present your findings"

建议改成：

> **Show your results**

---

## 🟡 P1 — 强烈建议改

### 3. 图片 alt 文本没有定义

方案第 8 节说「每张漫画用 `<article>`」「中英文分别提供准确 alt，描述画面而不是重复对白」。但全文没给出任何一条 alt 文本。等到实施时现想，容易写出「A comic about lab life」这种废话。

**建议**：在方案里或 `recruitment.ts` 数据结构里预填四组中英文 alt。示例：

| 页 | 中文 alt | English alt |
|----|---------|-------------|
| 1 | 两名科研人员在白板前拆解问题，一人画草图，一人用箭头标注步骤 | Two researchers at a whiteboard breaking down a problem into steps |
| 2 | 实验信号出现故障，两人分别检查光路和数据，夜间重新搭建成功 | Signal failure, collaborative debugging, and rebuilding the setup at night |
| 3 | 实验室公共区午餐日常和论文接收后的小庆祝 | Lunch in the lab common area and a restrained celebration after paper acceptance |
| 4 | 研究人员展示清晰数据结果，身后受控火焰稳定燃烧，实验室门敞开 | Researcher presenting clean data, a stable flame, and an open lab door |

### 4. Team 页面现有 Join Us 内容与新版主页招生栏目会打架

`pages.ts` 里已经有一套 `joinTitle / joinSubtitle / joinParagraphs`，当前用在 Team 页面。方案第 7 节说把 Team 的 Join Us 按钮改为跳转 `#join-us`，但没提那套旧文案要不要改。

现在的 Team 页面 Join Us 副标题是「我们长期欢迎优秀学生与科研人员加入团队」，跟主页漫画+详细招生信息比，显得重复且单薄。一个用户先看到 Team 页的简单招募，点按钮跳到主页又看一遍更详细的招募，体验割裂。

**建议**：两种处理方式：

- **方案 A（推荐）**：Team 页面保留 Join Us 板块但大幅缩减内容。只放一句引导语 + 一个跳转按钮，`joinParagraphs` 改为一句话：「了解更多招生信息、培养机会和申请方式。」所有细节导向主页 `#join-us`。
- **方案 B**：保留现有 Team 页面 Join Us 不变，但主页招生栏目做信息增量（完整类别、培养机会、材料要求），不重复 Team 页已有的简明介绍。

推荐 A，因为单一入口体验更好。

### 5. 数据文件 `recruitment.ts` 的 TypeScript 接口没有定义

方案第 7 节说新建 `src/data/recruitment.ts` 保存漫画数据和中英文招生信息，但没给接口。实施时如果结构设计得不好，后面改起来麻烦。

**建议**：在方案中给出接口草稿：

```ts
export interface ComicCard {
  id: string;
  image: string;         // WebP filename
  width: number;
  height: number;
  alt: { en: string; zh: string };
  title: { en: string; zh: string };
  dialogue: { en: [string, string]; zh: [string, string] };
  note?: { en: string; zh: string };
}

export interface RecruitmentInfo {
  opportunities: { en: string[]; zh: string[] };
  backgrounds: { en: string; zh: string };
  values: { en: string; zh: string };
  training: { en: string; zh: string };
  howToApply: { en: string; zh: string };
  emails: string[];
}
```

### 6. 手机端四张图叠起来很长

每张图 1086×1448，对应约 3:4。在 390px 手机屏幕上，一张图就占约 520px 高。加上标题、对白、间距，单张卡片轻松突破 600px。四张叠起来超过 2400px，用户要滑很久才能看到招生信息区。招生信息如果埋在漫画下面太深，可能很多人根本滑不到。

**建议**：考虑两种缓解方式：

- 在桌面端用 2×2 没问题的前提下，手机上引入一个很轻量的折叠/展开：四张图在手机上只默认展示第一张（完整），后三张点击展开。或者更简单的方案是手机端默认只展示前两张，加一个「展开全部」的按钮。
- 或者把四张图在手机端缩小到约 80% 宽度（而非 100%），让每张卡片短一点。但可能影响可读性。

如果觉得折叠太重，至少在手机端把招生信息前置：将招生信息区放在漫画卡片之前，让用户先看到「招什么人、怎么申请」，再往下滑看漫画感受氛围。目前的顺序是先漫画后信息，信息区容易被埋。

---

## 🟠 P2 — 建议优化

### 7. 「暖米色」和「左侧细色条」需要落地为 hex

方案第 5 节描述视觉样式时用了「很浅的暖米色」「浅蓝灰背景或左侧细色条」「海军蓝代表林澄，暖橙只作为提示色」。这些描述足够传达设计意图，但实施时需要具体值。

**建议**：给一个建议色板：

| 用途 | 建议值 | 说明 |
|------|--------|------|
| 栏目背景 | `#f9f6f0` | 暖米色，比现有 `section-alt` 更暖 |
| 对白区背景 | `#f0f3f7` | 浅蓝灰，与林澄海军蓝呼应 |
| 林澄提示色 | `#0A2540` | 海军蓝细色条，与角色色一致 |
| 周岚提示色 | `#ED8936` | 暖橙，仅做小面积点缀 |
| 邮件标签 | `#e8ede8` | 浅绿灰，与站点主题协调 |

### 8. 中文副标题「和一群认真而友善的人一起把它做成结果」略长

14 个字，断句不自然。建议简化：

> 从一个问题开始，和一群认真的人把它做出来。

或者更短的：

> 带着问题来，和我们一起做出答案。

### 9. 没有提 dark mode

虽然当前网站没有 dark mode，但 `global.css` 里有 CSS 变量体系。新增的 `.recruitment-*` 样式如果写死 hex 值，未来加 dark mode 时要全部返工。

**建议**：走项目现有的 CSS 变量体系。如果项目没有暖米色变量，可以新建一个 `--color-recruitment-bg` 变量，light mode 下是 `#f9f6f0`，dark mode 保留一个 fallback 值。或者至少在方案里标记「当前只实现 light mode，后续 dark mode 适配需单独处理」。

---

## 🔵 P3 — 可选微调

### 10. 第 3 页英文标题 "Research seriously. Live fully." 有点硬

两个副词结尾的祈使句叠在一起，读起来像标语口号。可以换个更自然的说法：

> **We do rigorous research. We also eat lunch together.**

或者更短的：

> **Good science, good company**

### 11. JSON-LD 结构化数据

招生栏目包含了丰富的结构化信息（岗位类型、联系方式、组织信息），适合加一段 `JobPosting` 或 `Organization` 的 JSON-LD。不过这个可以后续单独做，不是阻塞项。

### 12. 验收标准第 240 行

「第二页记录纸上的图形化标记在实际网页尺寸下不被误认为正文或可读声明」这个验收项很好，但怎么判断「不被误认」？建议改为可操作的标准：「在 390px 和 1440px 两个断点下截图，记录纸上的标记不包含任何可识别为文字的字形。」

---

## 总结：P0 必改清单

| # | 问题 | 修改方向 |
|---|------|---------|
| 1 | 英文对白有两个破折号 | 改为句号分隔 |
| 2 | 第 1/4 页英文标题语法别扭 | "Start with a question" / "Show your results" |

P0 两条改完、P1 四条处理完，方案就全部就绪可以实施。
