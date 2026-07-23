# OERF Lab 主页招生栏目实施方案

## 1. 目标

在现有 Astro 双语主页新增“加入我们 / Join OERF”栏目，用四张招生漫画表达团队氛围和科研成长过程，并用原生 HTML 完整呈现招生对象、专业要求、培养机会、申请材料和联系方式。

本文件只确定实施方案；当前阶段不修改主页代码、不部署 GitHub。

## 2. 当前站点与素材审查

### 站点现状

- 技术栈：Astro 5，英文默认路由 `/`，中文路由 `/zh/`。
- 当前主页顺序：Hero → Our Team → Research Areas → Latest Highlights → Footer。
- 主页内容由 `src/views/HomeView.astro` 统一渲染，中英文共享结构。
- 国际化文案集中在 `src/i18n/`，全局样式集中在 `src/styles/global.css`。
- 项目不包含 `.openai/hosting.json`，继续沿用现有 GitHub Pages/Astro 部署方式。

### 漫画素材

| 文件 | 尺寸 | 用途 | 审查结论 |
| --- | ---: | --- | --- |
| `01-page-start-with-the-question.png` | 1086×1448 | 白板拆解问题 | 可用，构图清楚 |
| `02-page-debug-it-together.png` | 1086×1448 | 故障、排查、夜间重搭 | 可用；记录纸有少量图形化标记，上线前再复核 |
| `03-page-research-and-life.png` | 1086×1448 | 午餐氛围、论文接收 | 可用，人物与氛围自然 |
| `04-page-show-the-result.png` | 1086×1448 | 结果、蓝焰、开放的门 | 可用，收束明确 |
| `characters.png` | 1536×1024 | 人物身份参考 | 不发布到网站，仅保留为制作档案 |

四张主页图片均为标准 3:4。角色参考图虽然是 3:2，但不进入网站，不影响主页排版。

## 3. 栏目位置与阅读逻辑

推荐放在 `Latest Highlights` 之后、`Footer` 之前，成为主页最后一个主要内容区：

1. Hero：说明团队是谁。
2. Our Team：说明与谁共事。
3. Research Areas：说明研究什么。
4. Latest Highlights：证明研究成果。
5. Join OERF：展示团队日常、培养方式和申请入口。

栏目锚点统一使用 `id="join-us"`：

- 英文：`/oerf-lab-website/#join-us`
- 中文：`/oerf-lab-website/zh/#join-us`

不在顶部 Navbar 增加新菜单项，避免桌面导航过密。Footer 的 Quick Links 增加“Join Us / 加入我们”，直接跳转到当前语言主页的 `#join-us`。

## 4. 页面视觉结构

### 4.1 栏目标题

中文：

- 标题：`加入我们`
- 副标题：`带着问题来，和我们一起做出答案。`

英文：

- 标题：`Join OERF`
- 副标题：`Start with a question. Build the answer with a rigorous and supportive team.`

### 4.2 快速招生信息条

为避免手机用户滑过四张漫画后才看到申请信息，在栏目标题之后、漫画之前放置一条始终可见的快速信息条。桌面和移动端 DOM 顺序保持一致，不使用 CSS 视觉重排。

中文：

> 常年招收博士后、博士、硕士、研究助理和本科实习生。申请材料为个人简历，成绩单可选附。

英文：

> Year-round opportunities for postdoctoral researchers, Ph.D. and Master's students, research assistants, and undergraduate interns. Please send a CV; a transcript is optional.

信息条提供“查看完整招生要求 / View full recruitment details”锚点，跳转到漫画之后的 `#recruitment-details`。不设置单一“立即邮件”按钮，因为联系人有四个，不能替用户默认选择收件人。

### 4.3 四张漫画卡片

采用桌面 2×2、移动端单列结构，不使用轮播、横向滑动或灯箱。漫画本身不设置点击链接，避免误跳转和错误链接。

每张卡片的固定顺序：

1. 卡片标题；
2. 两行简短 HTML 对白；
3. 紧贴对白的完整漫画图片；
4. 可选的一行辅助说明。

对白必须在图片上方，不覆盖图片。

| 页 | 中文标题与对白 | English title and dialogue |
| --- | --- | --- |
| 1 | **从问题开始**；“我之前没做过实验。” / “巧了，我博一也不会。先把问题拆开。” | **Start with a question**; “I haven't done experiments before.” / “Neither had I in my first year. Let's break the problem down.” |
| 2 | **一起把问题拆开**；“这条信号不对。” / “别急，我们一起从光路开始查。” | **Debug it together**; “This signal doesn't look right.” / “No rush. We'll trace it from the optical path together.” |
| 3 | **认真科研，也认真生活**；“论文接收了，今晚加菜。” / “高质量成果会打开更大的世界。” | **Good science, good company**; “The paper is accepted. Let's celebrate over dinner.” / “Good research can open a much bigger world.” |
| 4 | **把结果讲清楚**；“这次，结果讲清楚了。” / “带上简历，来聊聊你想解决的问题。” | **Show your results**; “This time, the results are clear.” / “Bring your CV and tell us what problem you want to solve.” |

#### 图片 alt 文本

| 页 | 中文 alt | English alt |
| --- | --- | --- |
| 1 | 两名科研人员在白板前拆解问题，一人画草图，一人用箭头标注步骤 | Two researchers at a whiteboard breaking down a problem into steps |
| 2 | 实验信号出现故障，两人分别检查光路和数据，并在夜间重新搭建装置 | Two researchers checking the optical path and data after a signal failure, then rebuilding the setup at night |
| 3 | 实验室公共区的午餐日常，以及论文接收后的轻松小庆祝 | Lunch in the lab common area and a small celebration after a paper is accepted |
| 4 | 研究人员展示清晰数据，受控蓝色火焰稳定燃烧，实验室门敞开 | A researcher presenting clear data beside a stable blue flame and an open laboratory door |

alt 只描述画面，不复述对白、不写“漫画图片”、不承载招生条件。

### 4.4 详细招生信息区

漫画之后增加 `<div id="recruitment-details">` 结构化信息卡片，避免把长段落塞进图片。快速信息条允许用户直接跳到此处。

#### 招生对象 / Opportunities

中文：

- 博士后；
- 致远荣誉博士、申请考核博士、联合培养博士；
- 专硕、学硕及联合培养硕士；
- 研究助理；
- 本科实习生。

英文：

- Postdoctoral researchers;
- Zhiyuan Honors Ph.D., application-assessment Ph.D., and joint-training Ph.D. candidates;
- Professional, academic, and joint-training Master's students;
- Research assistants;
- Undergraduate interns.

#### 专业背景 / Backgrounds

欢迎力学、工程热物理、数学、机械、光学工程、物理及相关理工科专业的同学联系我们。本校机械专业学生如对课题组感兴趣，请在申请考核面试前联系团队。

We welcome applicants from mechanics, engineering thermophysics, mathematics, mechanical engineering, optical engineering, physics, and related science and engineering disciplines. SJTU mechanical engineering students interested in the group should contact us before the application-assessment interview.

#### 我们看重 / What we value

想象力、执行力、解决问题的能力，以及在逆境中重新推进工作的能力。没有相关研究经历也没关系。

We value imagination, execution, problem-solving, and the ability to regain momentum when things go wrong. Prior research experience is not required.

#### 培养与发展 / Training and development

本科实习生如产生高质量研究成果，将有机会获得面向剑桥、牛津、帝国理工、哈佛、MIT 等世界名校的推荐与深造支持。博士生有机会参与与国外知名教授（包括诺贝尔奖得主等）的共同培养与科研合作。

Undergraduate interns who produce high-quality research may receive recommendation and development support for further study at institutions such as Cambridge, Oxford, Imperial College London, Harvard, and MIT. Ph.D. students may have opportunities for joint training and research collaboration with internationally renowned professors, including Nobel laureates.

该段继续使用“有机会 / may”表述，不写成保证录取或保证联合培养。

#### 申请方式 / How to apply

请发送个人简历；如有成绩单，可一并附上。

Please send a CV. A transcript may be attached if available.

四个邮箱分别显示为可点击的 `mailto:` 链接，不合并成一个不稳定的多收件人链接：

- `cweiwei@sjtu.edu.cn`
- `nl9j@sjtu.edu.cn`
- `shijie.xu@sjtu.edu.cn`
- `yutaozheng@sjtu.edu.cn`

### 4.5 移动端内容顺序

移动端保持以下顺序：栏目标题 → 快速招生信息条 → 四张漫画 → 详细招生信息 → 四个邮箱。

不采用折叠、默认隐藏后两张漫画或额外 JavaScript，原因是：

- 四张图共同构成完整成长叙事，不应默认隐藏；
- 折叠会增加键盘操作、ARIA 状态和无脚本降级成本；
- 快速信息条已经保证招生对象、材料和详情入口进入首屏附近；
- 漫画继续使用 lazy loading，减少初始下载压力。

## 5. 视觉样式方案

在现有 `:root` 中增加语义变量，不在组件规则里散落硬编码颜色：

| 用途 | CSS 变量 | 浅色模式值 |
| --- | --- | --- |
| 栏目背景 | `--color-recruitment-bg` | `#f9f6f0` |
| 对白区背景 | `--color-recruitment-dialogue` | `#f0f3f7` |
| 林澄提示色 | `--color-recruitment-student` | `#0a2540` |
| 周岚提示色 | `--color-recruitment-partner` | `#ed8936` |
| 邮箱标签背景 | `--color-recruitment-email` | `#e8ede8` |

- 栏目背景使用 `var(--color-recruitment-bg)`，与漫画暖色调衔接，同时与现有浅灰 `section-alt` 区分。
- 标题、正文和按钮继续使用现有海军蓝与蓝色强调色，不引入新的品牌体系。
- 漫画卡片为白色背景、细边框、现有圆角和卡片阴影。
- 对白区使用 `var(--color-recruitment-dialogue)`；海军蓝细色条代表林澄，暖橙只作为周岚的小面积提示色。
- 图片完整显示，保持 3:4，不裁切、不使用 `object-fit: cover`。
- 漫画卡片不做悬停放大，避免读图时产生晃动。
- 招生信息卡桌面 2×2，平板两列，手机单列。
- 邮箱采用可换行的按钮/标签布局，防止窄屏溢出。

当前网站没有 dark mode，本次只实现浅色模式。新增颜色全部通过 CSS 变量集中管理；未来加入深色主题时只需覆盖这些变量，不改组件结构。

## 6. 图片资产处理

不直接把四张约 2 MB 的 PNG 发布到网站。实施时：

1. 保留 `comic/oerf-recruitment/` 下原始 PNG，不覆盖、不移动。
2. 转换副本为 WebP，建议质量约 82，保留 1086×1448 尺寸。
3. 输出到：

   - `public/images/recruitment/start-with-the-question.webp`
   - `public/images/recruitment/debug-it-together.webp`
   - `public/images/recruitment/research-and-life.webp`
   - `public/images/recruitment/show-the-result.webp`

4. 单张建议控制在约 500 KB 以内，四张合计尽量不超过 2 MB。
5. 图片添加固定 `width="1086"`、`height="1448"`、`loading="lazy"` 和 `decoding="async"`，防止布局跳动。

## 7. 代码组织

### 新增文件

- `src/data/recruitment.ts`
  - 保存四张图片文件名、卡片 ID、中英文标题、对白、辅助说明和 alt 文本。
  - 保存完整中英文招生信息与四个邮箱。

接口草稿遵循项目现有 `Bilingual<T>` 类型：

```ts
import type { Bilingual } from "../i18n/types";

export interface RecruitmentComicCopy {
  title: string;
  dialogue: [string, string];
  alt: string;
  note?: string;
}

export interface RecruitmentComicCard {
  id: string;
  image: string;
  width: 1086;
  height: 1448;
  content: Bilingual<RecruitmentComicCopy>;
}

export interface RecruitmentLocaleCopy {
  title: string;
  subtitle: string;
  quickSummary: string;
  detailsLink: string;
  opportunities: string[];
  backgrounds: string;
  values: string;
  training: string;
  howToApply: string;
}

export interface RecruitmentData {
  cards: RecruitmentComicCard[];
  content: Bilingual<RecruitmentLocaleCopy>;
  emails: readonly string[];
}
```
- `src/components/RecruitmentSection.astro`
  - 接收 `locale`，渲染栏目标题、漫画卡片、招生信息和联系入口。

### 修改文件

- `src/views/HomeView.astro`
  - 引入 `RecruitmentSection`。
  - 在 `Latest Highlights` 之后渲染 `<RecruitmentSection locale={locale} />`。
- `src/styles/global.css`
  - 新增 `.recruitment-*` 样式和响应式规则。
- `src/i18n/ui.ts`
  - 新增 `joinUs: "Join Us" / "加入我们"`，供 Footer 使用。
  - 新增 `recruitmentDetails: "View recruitment details" / "查看招生详情"`，供 Team 页面按钮使用。
- `src/components/Footer.astro`
  - Quick Links 增加当前语言主页 `#join-us` 锚点。
- `src/views/TeamView.astro`
  - 采用单一入口方案：保留 Join Us 板块，但只显示一句引导语和一个按钮。
  - 现有按钮由 Contact 页面改为跳转到当前语言主页 `#join-us`。
- `src/i18n/pages.ts`
  - 将 Team 页 `joinParagraphs` 缩减为一句：`了解更多招生信息、培养机会和申请方式。`
  - 英文对应：`Explore recruitment opportunities, training pathways, and application details.`
  - 不在 Team 页重复招生类别、院校、材料和邮箱。
- `CHANGELOG.md`
  - 记录新增双语招生栏目、漫画资产与页脚入口。

### 明确不修改

- 不新增独立招生路由。
- 不增加 Navbar 顶部菜单项。
- 不修改四张漫画原图。
- 不把 `characters.png` 发布到 `public/`。
- 不在图片上覆盖任何 HTML/CSS 对白。
- 本阶段不推送或部署 GitHub。

## 8. 可访问性与 SEO

- 栏目使用 `<section id="join-us" aria-labelledby="join-us-title">`。
- 每张漫画用 `<article>`，对话和图片存在明确的 DOM 阅读顺序。
- 中英文分别提供准确 alt，描述画面而不是重复对白。
- 邮箱链接保留完整可见地址，不能只写“Email us”。
- 所有正文维持可选择、可复制的 HTML 文本。
- 不把关键信息仅用颜色或图片表达。
- 如更新主页 meta description，只增加“year-round recruitment / 常年招生”的简短信息，不堆砌院校名称。
- 保留 `BaseLayout.astro` 现有 `ResearchOrganization` JSON-LD。本次不添加 `JobPosting`，因为栏目同时覆盖多个长期培养层次，缺少单一岗位所需的职责、日期和薪酬等信息；正式发布具体岗位时再单独增加结构化数据。

## 9. 实施与备份策略

1. 实施前确认 `git status`，不处理现有 `outputs/` 和其他用户文件。
2. 新建工作分支 `agent/recruitment-homepage`。
3. 原始漫画保留在 `comic/`，网站只使用转换后的副本。
4. 完成后先本地验证和截图，不立即部署。
5. 用户确认本地页面后，再单独提交并部署 GitHub。

## 10. 验收标准

### 自动检查

- `npm run verify` 全部通过。
- 英文 `/` 与中文 `/zh/` 均构建成功。
- 四张 WebP 均能从最终 base path 加载。
- 页面中不存在失效图片路径或错误内部链接。
- 四个 `mailto:` 地址与用户提供内容完全一致。

### 桌面与移动端检查

- 1440 px：漫画为稳定 2×2，卡片高度和间距协调。
- 1024 px：不出现文字挤压和图片裁切。
- 768 px 与 390 px：漫画按单列顺序 1→4 展示，无横向滚动。
- 390 px：栏目标题后立即出现快速招生信息条和详情锚点，不需要先滑过漫画才能得知招生对象与材料。
- 对白在图片之前并与图片同属一张卡片。
- 邮箱可以换行，不溢出屏幕。
- 页脚锚点分别跳转到正确语言版本的 `#join-us`。

### 内容检查

- 招生类别、专业背景、材料要求和四个邮箱完整。
- 海外推荐和国际共同培养使用机会性表述，不表达录取保证。
- 在 390 px 和 1440 px 两个断点下分别截图；第二页记录纸上的标记不得包含任何可识别为汉字、英文字母、单词或句子的字形。
- 图片不设置外链，不重复此前论文图片链接错误。

## 11. 推荐实施顺序

1. 转换并检查四张 WebP。
2. 建立 `recruitment.ts` 双语数据源。
3. 创建 `RecruitmentSection.astro`。
4. 接入 `HomeView.astro`。
5. 添加样式和响应式规则。
6. 更新 Footer 与 Team 页面入口。
7. 运行完整验证。
8. 打开本地英文、中文主页进行截图和人工检查。
9. 用户确认后再提交与部署。
