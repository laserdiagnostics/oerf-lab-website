import type { Bilingual } from "../i18n/types";

export interface RecruitmentComicCopy {
  title: string;
  dialogue: [string, string];
  alt: string;
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
  quickLabel: string;
  quickSummary: string;
  detailsLink: string;
  speakerLabels: [string, string];
  detailsTitle: string;
  detailsSubtitle: string;
  opportunitiesTitle: string;
  opportunities: string[];
  backgroundsTitle: string;
  backgrounds: string;
  valuesTitle: string;
  values: string;
  trainingTitle: string;
  training: string;
  howToApplyTitle: string;
  howToApply: string;
  contactTitle: string;
  contactSubtitle: string;
}

export interface RecruitmentData {
  cards: RecruitmentComicCard[];
  content: Bilingual<RecruitmentLocaleCopy>;
  emails: string[];
}

export const recruitmentData: RecruitmentData = {
  cards: [
    {
      id: "start-with-the-question",
      image: "start-with-the-question.webp",
      width: 1086,
      height: 1448,
      content: {
        en: {
          title: "Start with a question",
          dialogue: [
            "I haven't done experiments before.",
            "Neither had I in my first year. Let's break the problem down.",
          ],
          alt: "Two researchers at a whiteboard breaking down a problem into steps",
        },
        zh: {
          title: "从问题开始",
          dialogue: ["我之前没做过实验。", "巧了，我博一也不会。先把问题拆开。"],
          alt: "两名科研人员在白板前拆解问题，一人画草图，一人用箭头标注步骤",
        },
      },
    },
    {
      id: "debug-it-together",
      image: "debug-it-together.webp",
      width: 1086,
      height: 1448,
      content: {
        en: {
          title: "Debug it together",
          dialogue: [
            "This signal doesn't look right.",
            "No rush. We'll trace it from the optical path together.",
          ],
          alt: "Two researchers checking the optical path and data after a signal failure, then rebuilding the setup at night",
        },
        zh: {
          title: "一起把问题拆开",
          dialogue: ["这条信号不对。", "别急，我们一起从光路开始查。"],
          alt: "实验信号出现故障，两人分别检查光路和数据，并在夜间重新搭建装置",
        },
      },
    },
    {
      id: "research-and-life",
      image: "research-and-life.webp",
      width: 1086,
      height: 1448,
      content: {
        en: {
          title: "Good science, good company",
          dialogue: [
            "The paper is accepted. Let's celebrate over dinner.",
            "Good research can open a much bigger world.",
          ],
          alt: "Researchers sharing lunch and celebrating a paper acceptance in the lab common area",
        },
        zh: {
          title: "认真科研，也认真生活",
          dialogue: ["论文接收了，今晚加菜。", "高质量成果会打开更大的世界。"],
          alt: "实验室公共区的午餐日常，以及论文接收后的轻松小庆祝",
        },
      },
    },
    {
      id: "show-the-result",
      image: "show-the-result.webp",
      width: 1086,
      height: 1448,
      content: {
        en: {
          title: "Show your results",
          dialogue: [
            "This time, the results are clear.",
            "Bring your CV and tell us what problem you want to solve.",
          ],
          alt: "A researcher presenting clear data beside a stable blue flame and an open laboratory door",
        },
        zh: {
          title: "把结果讲清楚",
          dialogue: ["这次，结果讲清楚了。", "带上简历，来聊聊你想解决的问题。"],
          alt: "研究人员展示清晰数据，受控蓝色火焰稳定燃烧，实验室门敞开",
        },
      },
    },
  ],
  content: {
    en: {
      title: "Join OERF",
      subtitle: "Start with a question. Build the answer with a rigorous and supportive team.",
      quickLabel: "Open positions",
      quickSummary:
        "Year-round opportunities for postdoctoral researchers, Ph.D. and Master's students, research assistants, and undergraduate interns. Please send a CV; a transcript is optional.",
      detailsLink: "View recruitment details",
      speakerLabels: ["Prospective applicant", "Lab member"],
      detailsTitle: "Recruitment details",
      detailsSubtitle: "Who we welcome, how we work, and how to get in touch.",
      opportunitiesTitle: "Opportunities",
      opportunities: [
        "Postdoctoral researchers",
        "Zhiyuan Honors Ph.D., application-assessment Ph.D., and joint-training Ph.D. candidates",
        "Professional, academic, and joint-training Master's students",
        "Research assistants",
        "Undergraduate interns",
      ],
      backgroundsTitle: "Academic backgrounds",
      backgrounds:
        "We welcome applicants from mechanics, engineering thermophysics, mathematics, mechanical engineering, optical engineering, physics, and related science and engineering disciplines. SJTU mechanical engineering students interested in the group should contact us before the application-assessment interview.",
      valuesTitle: "What we value",
      values:
        "We value imagination, execution, problem-solving, and the ability to regain momentum when things go wrong. Prior research experience is not required.",
      trainingTitle: "Training and development",
      training:
        "Undergraduate interns who produce high-quality research may receive recommendation and development support for further study at institutions such as Cambridge, Oxford, Imperial College London, Harvard, and MIT. Ph.D. students may have opportunities for joint training and research collaboration with internationally renowned professors, including Nobel laureates.",
      howToApplyTitle: "How to apply",
      howToApply: "Please send a CV. A transcript may be attached if available.",
      contactTitle: "Contact the faculty",
      contactSubtitle: "Choose the faculty member whose research direction best matches your interests.",
    },
    zh: {
      title: "加入我们",
      subtitle: "带着问题来，和我们一起做出答案。",
      quickLabel: "常年招收",
      quickSummary:
        "常年招收博士后、博士、硕士、研究助理和本科实习生。申请材料为个人简历，成绩单可选附。",
      detailsLink: "查看招生详情",
      speakerLabels: ["申请者", "团队成员"],
      detailsTitle: "招生详情",
      detailsSubtitle: "了解招生类别、专业背景、培养机会与申请方式。",
      opportunitiesTitle: "招生类别",
      opportunities: [
        "博士后",
        "致远荣誉博士、申请考核博士、联合培养博士",
        "专硕、学硕及联合培养硕士",
        "研究助理",
        "本科实习生",
      ],
      backgroundsTitle: "专业背景",
      backgrounds:
        "欢迎力学、工程热物理、数学、机械、光学工程、物理及相关理工科专业的同学联系我们。本校机械专业学生如对课题组感兴趣，请在申请考核面试前联系团队。",
      valuesTitle: "我们看重",
      values:
        "想象力、执行力、解决问题的能力，以及在逆境中重新推进工作的能力。没有相关研究经历也没关系。",
      trainingTitle: "培养与发展",
      training:
        "本科实习生如产生高质量研究成果，将有机会获得面向剑桥、牛津、帝国理工、哈佛、MIT 等世界名校的推荐与深造支持。博士生有机会参与与国外知名教授（包括诺贝尔奖得主等）的共同培养与科研合作。",
      howToApplyTitle: "申请方式",
      howToApply: "请发送个人简历；如有成绩单，可一并附上。",
      contactTitle: "联系教师",
      contactSubtitle: "请根据研究兴趣选择合适的教师联系。",
    },
  },
  emails: [
    "cweiwei@sjtu.edu.cn",
    "nl9j@sjtu.edu.cn",
    "shijie.xu@sjtu.edu.cn",
    "yutaozheng@sjtu.edu.cn",
  ],
};
