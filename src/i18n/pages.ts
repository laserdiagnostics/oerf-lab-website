import type { Bilingual } from "./types";

export interface HomeCopy {
  metaTitle: string;
  metaDescription: string;
  heroTitle: string;
  heroSubtitle: string;
  heroTagline: string;
  exploreResearch: string;
  meetTeam: string;
  teamTitle: string;
  teamSubtitle: string;
  researchTitle: string;
  researchSubtitle: string;
  highlightsTitle: string;
  highlightsSubtitle: string;
}

export interface ResearchPageCopy {
  metaTitle: string;
  heroTitle: string;
  heroSubtitle: string;
  heroTagline: string;
  overviewTitle: string;
  overviewSubtitle: string;
  detailsTitle: string;
  detailsSubtitle: string;
}

export interface TeamPageCopy {
  metaTitle: string;
  heroTitle: string;
  heroSubtitle: string;
  heroTagline: string;
  facultyTitle: string;
  facultySubtitle: string;
  joinTitle: string;
  joinSubtitle: string;
  joinParagraphs: string[];
}

export interface PublicationsPageCopy {
  metaTitle: string;
  heroTitle: string;
  heroSubtitle: string;
  heroTagline: string;
  sectionTitle: string;
  sectionSubtitle: string;
}

export interface ContactPageCopy {
  metaTitle: string;
  heroTitle: string;
  heroSubtitle: string;
  heroTagline: string;
  infoTitle: string;
  infoSubtitle: string;
  locationTitle: string;
  locationSubtitle: string;
}

export interface PageCopy {
  home: HomeCopy;
  research: ResearchPageCopy;
  team: TeamPageCopy;
  publications: PublicationsPageCopy;
  contact: ContactPageCopy;
}

export const pageCopy: Bilingual<PageCopy> = {
  en: {
    home: {
      metaTitle: "Home",
      metaDescription:
        "OERF Lab - Optical & Extreme Reaction Flow research group at Shanghai Jiao Tong University. Pioneering optical diagnostics, computational imaging, ultrafast spectroscopy, and reacting flow simulation.",
      heroTitle: "Optical & Extreme Reaction Flow",
      heroSubtitle: "OERF Lab",
      heroTagline:
        "Pioneering optical diagnostics, computational imaging, and reacting flow science for extreme environment energy and propulsion systems at Shanghai Jiao Tong University.",
      exploreResearch: "Explore Research",
      meetTeam: "Meet Our Team",
      teamTitle: "Our Team",
      teamSubtitle:
        "A cross-disciplinary team of faculty members at the Institute of Turbomachinery, School of Mechanical Engineering.",
      researchTitle: "Research Areas",
      researchSubtitle:
        "We develop and apply advanced optical and computational techniques to understand and control extreme reaction flows.",
      highlightsTitle: "Latest Highlights",
      highlightsSubtitle: "Selected high-impact research achievements from our team.",
    },
    research: {
      metaTitle: "Research",
      heroTitle: "Research",
      heroSubtitle: "Our Research Areas",
      heroTagline:
        "We tackle fundamental and applied challenges at the intersection of optics, combustion, plasma physics, and computational science.",
      overviewTitle: "Research Overview",
      overviewSubtitle:
        "Our work spans four interconnected research directions, combining advanced experimental diagnostics with high-fidelity numerical simulation.",
      detailsTitle: "Detailed Research Areas",
      detailsSubtitle: "Our research integrates experiment, theory, and computation.",
    },
    team: {
      metaTitle: "Team",
      heroTitle: "Our Team",
      heroSubtitle: "Team Members",
      heroTagline:
        "A cross-disciplinary group of researchers with expertise spanning optical diagnostics, combustion science, plasma physics, and computational fluid dynamics.",
      facultyTitle: "Faculty Members",
      facultySubtitle:
        "Led by Prof. Weiwei Cai, our team brings together complementary expertise from world-leading institutions.",
      joinTitle: "Join Us",
      joinSubtitle: "We are always looking for motivated students and researchers.",
      joinParagraphs: [
        "The OERF Lab recruits Ph.D. students, Master's students, and undergraduate interns year-round. Doctoral students have opportunities for co-training with renowned international collaborators. Outstanding candidates may receive recommendation letters for top universities worldwide.",
        "Prospective students and visiting scholars are welcome to contact individual faculty members directly via email.",
      ],
    },
    publications: {
      metaTitle: "Publications",
      heroTitle: "Publications",
      heroSubtitle: "Journal Publications",
      heroTagline:
        "Journal publications from the OERF Lab team. Team member names are highlighted in bold.",
      sectionTitle: "Journal Publications",
      sectionSubtitle:
        "Collected from the Google Scholar profiles of Weiwei Cai, Yutao Zheng, Ning Liu, and Shijie Xu; grouped by publication year.",
    },
    contact: {
      metaTitle: "Contact",
      heroTitle: "Contact Us",
      heroSubtitle: "Get in Touch",
      heroTagline:
        "Interested in joining our team, collaboration opportunities, or learning more about our research? We would love to hear from you.",
      infoTitle: "Contact Information",
      infoSubtitle: "Visit or reach out to us.",
      locationTitle: "Location",
      locationSubtitle: "We are located on the Minhang campus of Shanghai Jiao Tong University.",
    },
  },
  zh: {
    home: {
      metaTitle: "主页",
      metaDescription:
        "上海交通大学光学与极端反应流实验室（OERF Lab），面向极端环境能源与动力系统开展先进光学诊断、计算成像、超快光谱和反应流模拟研究。",
      heroTitle: "光学与极端反应流",
      heroSubtitle: "OERF Lab",
      heroTagline:
        "面向极端环境能源与动力系统，发展先进光学诊断、计算成像与反应流科学。",
      exploreResearch: "探索研究方向",
      meetTeam: "认识我们的团队",
      teamTitle: "我们的团队",
      teamSubtitle: "上海交通大学机械与动力工程学院叶轮机械研究所的交叉学科教师团队。",
      researchTitle: "研究方向",
      researchSubtitle: "发展先进光学与计算方法，认识并调控极端反应流动。",
      highlightsTitle: "最新成果",
      highlightsSubtitle: "团队具有代表性的高影响力研究进展。",
    },
    research: {
      metaTitle: "研究方向",
      heroTitle: "研究方向",
      heroSubtitle: "我们的研究领域",
      heroTagline: "围绕光学、燃烧、等离子体物理与计算科学的交叉前沿，研究基础与应用问题。",
      overviewTitle: "研究概览",
      overviewSubtitle: "四个相互关联的研究方向，将先进实验诊断与高保真数值模拟紧密结合。",
      detailsTitle: "研究方向详述",
      detailsSubtitle: "融合实验、理论与计算，推动极端反应流研究。",
    },
    team: {
      metaTitle: "团队成员",
      heroTitle: "我们的团队",
      heroSubtitle: "团队成员",
      heroTagline: "汇聚光学诊断、燃烧科学、等离子体物理和计算流体力学等领域的交叉研究力量。",
      facultyTitle: "教师团队",
      facultySubtitle: "团队由蔡伟伟教授领衔，成员具有国际化研究经历和互补的专业背景。",
      joinTitle: "加入我们",
      joinSubtitle: "我们长期欢迎优秀学生与科研人员加入团队。",
      joinParagraphs: [
        "OERF Lab 常年招收博士研究生、硕士研究生和本科实习生。博士生有机会与国际知名合作团队开展联合培养，表现优秀者可获得申请国际一流大学的推荐支持。",
        "欢迎有意向的学生和访问学者通过电子邮件直接联系相关教师。",
      ],
    },
    publications: {
      metaTitle: "论文成果",
      heroTitle: "论文成果",
      heroSubtitle: "期刊论文",
      heroTagline: "汇集 OERF Lab 团队成员发表的期刊论文，团队成员姓名以粗体显示。",
      sectionTitle: "期刊论文",
      sectionSubtitle: "论文来源于团队成员的 Google Scholar 主页，并按发表年份排列。",
    },
    contact: {
      metaTitle: "联系我们",
      heroTitle: "联系我们",
      heroSubtitle: "取得联系",
      heroTagline: "无论你希望加入团队、开展合作，还是进一步了解我们的研究，都欢迎与我们联系。",
      infoTitle: "联系信息",
      infoSubtitle: "欢迎来访或通过电子邮件联系我们。",
      locationTitle: "地理位置",
      locationSubtitle: "实验室位于上海交通大学闵行校区。",
    },
  },
};
