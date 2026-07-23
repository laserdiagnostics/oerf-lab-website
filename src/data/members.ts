import type { Bilingual, Locale } from "../i18n/types";

export interface EducationCopy {
  degree: string;
  institution: string;
  period: string;
}

export interface MemberCopy {
  displayName: string;
  alternateName: string;
  title: string;
  education: EducationCopy[];
  researchInterests: string[];
  honors: string[];
  biography: string;
}

export interface Member {
  id: string;
  photo: string;
  email: string;
  order: number;
  content: Bilingual<MemberCopy>;
}

export function getMemberCopy(member: Member, locale: Locale): MemberCopy {
  return member.content[locale];
}

export const members: Member[] = [
  {
    id: "cai-weiwei",
    photo: "/images/team/cai-weiwei.jpg",
    email: "cweiwei@sjtu.edu.cn",
    order: 1,
    content: {
      en: {
        displayName: "Weiwei Cai",
        alternateName: "蔡伟伟",
        title: "Professor",
        education: [
          { degree: "Ph.D.", institution: "Clemson University, USA", period: "2007–2010" },
          { degree: "B.S.", institution: "Zhejiang University, China", period: "2003–2007" },
        ],
        researchInterests: [
          "Extreme reaction flow diagnostics",
          "Computational imaging (light-field, tomography, holography)",
          "Miniature computational spectrometers",
          "Machine learning for flow visualization & combustion",
        ],
        honors: [
          "Stanford World's Top 2% Scientists (6 consecutive years, 2020–2025)",
          "40th International Combustion Symposium Distinguished Paper Award (2025)",
          "Wu Zhonghua Outstanding Young Scholar Award (2023)",
          "SAOT Young Researcher Award, Germany (2018)",
          "EU Marie Curie Fellow, University of Cambridge (2013)",
          "National Overseas High-Level Talent Program (Youth, 2016)",
        ],
        biography:
          "Weiwei Cai is a Professor at the Institute of Turbomachinery, School of Mechanical Engineering, Shanghai Jiao Tong University. He leads the Optical & Extreme Reaction Flow (OERF) Lab. His research bridges advanced optical diagnostics, computational imaging, and machine learning for extreme environment energy and propulsion systems. Prof. Cai has published over 100 papers in top-tier journals including Science, Nature Photonics, Nature Electronics, Science Advances, Nature Communications, Progress in Energy and Combustion Science, and Journal of Fluid Mechanics. He serves on the editorial boards of Measurement Science and Technology, Infrared and Laser Engineering, and Acta Optica Sinica, among others.",
      },
      zh: {
        displayName: "蔡伟伟",
        alternateName: "Weiwei Cai",
        title: "教授",
        education: [
          { degree: "博士", institution: "美国克莱姆森大学", period: "2007–2010" },
          { degree: "学士", institution: "浙江大学", period: "2003–2007" },
        ],
        researchInterests: [
          "极端反应流诊断",
          "计算成像（光场、层析与全息成像）",
          "微型计算光谱仪",
          "流动显示与燃烧中的机器学习方法",
        ],
        honors: [
          "斯坦福全球前 2% 顶尖科学家（2020–2025，连续 6 年）",
          "第 40 届国际燃烧会议杰出论文奖（2025）",
          "吴仲华优秀青年学者奖（2023）",
          "德国 SAOT 青年研究者奖（2018）",
          "欧盟玛丽·居里学者，剑桥大学（2013）",
          "国家海外高层次人才计划青年项目（2016）",
        ],
        biography:
          "蔡伟伟，上海交通大学机械与动力工程学院叶轮机械研究所教授，光学与极端反应流实验室负责人。主要研究先进光学诊断、计算成像及机器学习在极端环境能源与动力系统中的应用。在 Science、Nature Photonics、Nature Electronics、Science Advances、Nature Communications、Progress in Energy and Combustion Science 和 Journal of Fluid Mechanics 等期刊发表论文 100 余篇，并担任 Measurement Science and Technology、《红外与激光工程》和《光学学报》等期刊编委。",
      },
    },
  },
  {
    id: "liu-ning",
    photo: "/images/team/liu-ning.jpg",
    email: "nl9j@sjtu.edu.cn",
    order: 2,
    content: {
      en: {
        displayName: "Ning Liu",
        alternateName: "刘宁",
        title: "Associate Professor",
        education: [
          { degree: "Ph.D.", institution: "University of Virginia, USA", period: "2018–2020" },
          { degree: "Ph.D. (transferred)", institution: "Virginia Tech, USA", period: "2015–2017" },
          { degree: "M.S.", institution: "University of Chinese Academy of Sciences", period: "2012–2015" },
          { degree: "B.S.", institution: "Shandong University, China", period: "2008–2012" },
        ],
        researchInterests: [
          "Ultrafast laser spectroscopy",
          "Plasma energy conversion",
          "3D tomography for reactive flows",
          "Joule-heating rapid synthesis",
        ],
        honors: [
          "Xiaomi Young Scholar (2026)",
          "R&D 100 Awards (2025)",
          "Nature Synthesis Cover Paper (2026)",
          "John Bell McGaughy Graduate Fellowship, UVA (2019)",
          "Pratt Fellowship, Virginia Tech (2015, 2016)",
        ],
        biography:
          "Ning Liu is an Associate Professor at the Institute of Turbomachinery, School of Mechanical Engineering, Shanghai Jiao Tong University. Previously, he was an Assistant Professor at City University of Hong Kong (2024–2025) and an Associate Research Scholar at Princeton University (2022–2024). His research focuses on ultrafast laser diagnostics, plasma-assisted energy conversion, and advanced 3D tomographic imaging for reactive flows. Dr. Liu is a co-author of a Nature paper on stable atmospheric-pressure plasma for extreme-temperature synthesis and a Nature Synthesis cover paper on electrified vapour deposition. He serves on the Youth Editorial Boards of The Innovation and Ultrafast Science.",
      },
      zh: {
        displayName: "刘宁",
        alternateName: "Ning Liu",
        title: "副教授",
        education: [
          { degree: "博士", institution: "美国弗吉尼亚大学", period: "2018–2020" },
          { degree: "博士阶段学习（后转学）", institution: "美国弗吉尼亚理工大学", period: "2015–2017" },
          { degree: "硕士", institution: "中国科学院大学", period: "2012–2015" },
          { degree: "学士", institution: "山东大学", period: "2008–2012" },
        ],
        researchInterests: [
          "超快激光光谱",
          "等离子体能量转化",
          "反应流三维层析成像",
          "焦耳热快速合成",
        ],
        honors: [
          "小米青年学者（2026）",
          "R&D 100 Awards（2025）",
          "Nature Synthesis 封面论文（2026）",
          "弗吉尼亚大学 John Bell McGaughy 研究生奖学金（2019）",
          "弗吉尼亚理工大学 Pratt Fellowship（2015、2016）",
        ],
        biography:
          "刘宁，上海交通大学机械与动力工程学院叶轮机械研究所副教授。曾任香港城市大学助理教授（2024–2025）和普林斯顿大学副研究学者（2022–2024）。主要研究超快激光诊断、等离子体辅助能量转化及反应流先进三维层析成像。作为共同作者在 Nature 发表稳定大气压等离子体极端温度合成研究，并在 Nature Synthesis 发表电气化气相沉积封面论文。现任 The Innovation 与 Ultrafast Science 青年编委。",
      },
    },
  },
  {
    id: "zheng-yutao",
    photo: "/images/team/zheng-yutao.jpg",
    email: "yutaozheng@sjtu.edu.cn",
    order: 4,
    content: {
      en: {
        displayName: "Yutao Zheng",
        alternateName: "郑聿韬",
        title: "Assistant Professor",
        education: [
          { degree: "Ph.D.", institution: "University of Cambridge, UK", period: "2019–2023" },
          { degree: "M.S.", institution: "Purdue University, USA", period: "2015–2016" },
          { degree: "B.S.", institution: "Shanghai Jiao Tong University, China", period: "2011–2015" },
        ],
        researchInterests: [
          "Multi-physics 3D combustion diagnostics",
          "Turbulent combustion theory and experiments",
          "Aero-optics",
          "Laser diagnostics for reacting flows",
        ],
        honors: [
          "Shanghai Magnolia Young Talent Project",
          "Shanghai Pujiang Talent Program (2024)",
        ],
        biography:
          "Yutao Zheng is an Assistant Professor at the Institute of Turbomachinery, School of Mechanical Engineering, Shanghai Jiao Tong University. He received his Ph.D. from the University of Cambridge (2023) and previously worked as an engineer at AECC Commercial Aircraft Engine Co. (2016–2019). His research focuses on developing high spatiotemporal resolution laser diagnostics for turbulent combustion, multi-physics 3D reconstruction of reactive flows, and aero-optics. Dr. Zheng's work has been published in leading journals including Combustion and Flame, Proceedings of the Combustion Institute, and Experiments in Fluids.",
      },
      zh: {
        displayName: "郑聿韬",
        alternateName: "Yutao Zheng",
        title: "助理教授",
        education: [
          { degree: "博士", institution: "英国剑桥大学", period: "2019–2023" },
          { degree: "硕士", institution: "美国普渡大学", period: "2015–2016" },
          { degree: "学士", institution: "上海交通大学", period: "2011–2015" },
        ],
        researchInterests: [
          "多物理场三维燃烧诊断",
          "湍流燃烧理论与实验",
          "气动光学",
          "反应流激光诊断",
        ],
        honors: ["上海市白玉兰人才计划", "上海市浦江人才计划（2024）"],
        biography:
          "郑聿韬，上海交通大学机械与动力工程学院叶轮机械研究所助理教授，2023 年获英国剑桥大学博士学位，曾于中国航发商用航空发动机有限责任公司担任工程师（2016–2019）。主要研究湍流燃烧高时空分辨率激光诊断、反应流多物理场三维重构及气动光学，相关成果发表于 Combustion and Flame、Proceedings of the Combustion Institute 和 Experiments in Fluids 等期刊。",
      },
    },
  },
  {
    id: "xu-shijie",
    photo: "/images/team/xu-shijie.jpg",
    email: "shijie.xu@sjtu.edu.cn",
    order: 3,
    content: {
      en: {
        displayName: "Shijie Xu",
        alternateName: "许世杰",
        title: "Associate Professor",
        education: [
          { degree: "Ph.D.", institution: "Lund University, Sweden", period: "2017–2021" },
          { degree: "M.S.", institution: "Huazhong University of Science & Technology", period: "2014–2017" },
          { degree: "B.S.", institution: "Huazhong University of Science & Technology", period: "2010–2014" },
        ],
        researchInterests: [
          "Reacting flow simulation (high-fidelity CFD)",
          "Machine learning for combustion modeling",
          "Data assimilation for turbulent reacting flows",
          "Low-carbon clean combustion technologies",
          "Spray combustion, flash boiling, and pollutant formation",
        ],
        honors: [
          "EU Marie Skłodowska-Curie Postdoctoral Fellowship (2022)",
          "Shanghai Youth Science & Technology Talent Sailing Program (2024)",
          "Best Presentation Award, International Conference on Energy and AI (2021)",
          "Håkan Hansson Foundation Award, Lund University (2020)",
          "SJTU Outstanding Class Advisor (2025)",
        ],
        biography:
          "Shijie Xu is an Associate Professor at the Institute of Turbomachinery, School of Mechanical Engineering, Shanghai Jiao Tong University. He received his Ph.D. from Lund University, Sweden (2021), and was an EU Marie Curie Fellow at the University of Birmingham (2023–2024). His research centers on high-fidelity numerical simulation of reacting flows, machine learning-augmented combustion modeling, and data assimilation for turbulent reactive systems. Dr. Xu has published over 44 journal papers and serves as a reviewer for leading journals including Combustion and Flame, Proceedings of the Combustion Institute, and Fuel.",
      },
      zh: {
        displayName: "许世杰",
        alternateName: "Shijie Xu",
        title: "副教授",
        education: [
          { degree: "博士", institution: "瑞典隆德大学", period: "2017–2021" },
          { degree: "硕士", institution: "华中科技大学", period: "2014–2017" },
          { degree: "学士", institution: "华中科技大学", period: "2010–2014" },
        ],
        researchInterests: [
          "反应流高保真数值模拟",
          "面向燃烧建模的机器学习",
          "湍流反应流数据同化",
          "低碳清洁燃烧技术",
          "喷雾燃烧、闪沸与污染物生成",
        ],
        honors: [
          "欧盟玛丽·斯克沃多夫斯卡-居里博士后项目（2022）",
          "上海市青年科技英才扬帆计划（2024）",
          "国际能源与人工智能会议最佳报告奖（2021）",
          "隆德大学 Håkan Hansson 基金奖（2020）",
          "上海交通大学优秀班主任（2025）",
        ],
        biography:
          "许世杰，上海交通大学机械与动力工程学院叶轮机械研究所副教授，2021 年获瑞典隆德大学博士学位，曾于英国伯明翰大学开展欧盟玛丽·居里学者研究（2023–2024）。主要研究反应流高保真数值模拟、机器学习增强燃烧建模及湍流反应系统数据同化。已发表期刊论文 44 余篇，并担任 Combustion and Flame、Proceedings of the Combustion Institute 和 Fuel 等期刊审稿人。",
      },
    },
  },
];
