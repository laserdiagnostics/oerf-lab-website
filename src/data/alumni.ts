import type { Bilingual } from "../i18n/types";

export interface AlumniCopy {
  displayName: string;
  degreeLine: string;
  currentTitle: string;
  institution: string;
  department: string;
  email: string;
  researchAreas: string[];
  bio: string;
  highlights: string[];
  education: string[];
  sourceLabel: string;
}

export interface AlumniProfile {
  id: string;
  photo?: string;
  sourceUrl: string;
  content: Bilingual<AlumniCopy>;
}

export const alumniProfiles: AlumniProfile[] = [
  {
    id: "yu-tao",
    photo: "/images/alumni/yu-tao.webp",
    sourceUrl: "https://yqgdxy.buaa.edu.cn/info/1018/6746.htm",
    content: {
      en: {
        displayName: "Tao Yu",
        degreeLine: "Ph.D., Shanghai Jiao Tong University",
        currentTitle: "Professor, Doctoral Supervisor",
        institution: "Beihang University",
        department: "School of Instrumentation and Optoelectronic Engineering",
        email: "taoyu2@buaa.edu.cn",
        researchAreas: ["Laser spectroscopy", "Computational optical imaging"],
        bio:
          "Prof. Tao Yu is a professor and doctoral supervisor at Beihang University. He received his Ph.D. from Shanghai Jiao Tong University and conducted joint doctoral training at Friedrich-Alexander University Erlangen-Nurnberg, followed by postdoctoral research at KAUST, McGill University, and Stanford University.",
        highlights: [
          "National-level Young Talent (Overseas), 2024",
          "Research focuses on quantitative gas concentration and temperature measurements under demanding conditions",
          "Published more than 20 SCI papers in journals including Optics Letters, Optics Express, Applied Physics Letters, and Combustion and Flame",
          "Youth Editorial Board member of Measurement: Energy",
        ],
        education: [
          "B.S., Jilin University",
          "Ph.D., Shanghai Jiao Tong University",
          "Joint doctoral training, Friedrich-Alexander University Erlangen-Nurnberg",
        ],
        sourceLabel: "Beihang profile",
      },
      zh: {
        displayName: "于涛",
        degreeLine: "上海交通大学博士",
        currentTitle: "教授，博士生导师",
        institution: "北京航空航天大学",
        department: "仪器科学与光电工程学院",
        email: "taoyu2@buaa.edu.cn",
        researchAreas: ["激光光谱技术", "光学计算成像技术"],
        bio:
          "于涛教授现任北京航空航天大学仪器科学与光电工程学院教授、博士生导师。本科毕业于吉林大学，博士毕业于上海交通大学，博士期间曾在德国埃尔朗根-纽伦堡大学联合培养，博士毕业后先后在沙特阿卜杜拉国王科技大学、加拿大麦吉尔大学和美国斯坦福大学从事博士后研究。",
        highlights: [
          "2024 年获国家级青年人才（海外）",
          "聚焦复杂条件下气体组分浓度与温度的定量测量方法",
          "在 Optics Letters、Optics Express、Applied Physics Letters、Combustion and Flame 等期刊发表 SCI 论文 20 余篇",
          "Elsevier Measurement: Energy 期刊青年编委",
        ],
        education: [
          "吉林大学，本科",
          "上海交通大学，博士",
          "德国埃尔朗根-纽伦堡大学，联合培养博士生",
        ],
        sourceLabel: "北航主页",
      },
    },
  },
  {
    id: "huang-jianqing",
    photo: "/images/alumni/huang-jianqing.jpg",
    sourceUrl: "https://aerospace.xmu.edu.cn/info/2143/58843.htm",
    content: {
      en: {
        displayName: "Jianqing Huang",
        degreeLine: "Ph.D., Shanghai Jiao Tong University",
        currentTitle: "Assistant Professor",
        institution: "Xiamen University",
        department: "School of Aerospace Engineering",
        email: "jianqing.huang@xmu.edu.cn",
        researchAreas: ["Combustion diagnostics", "Flow visualization", "Computational imaging", "Intelligent algorithms"],
        bio:
          "Dr. Jianqing Huang is an assistant professor at Xiamen University. He received his B.Eng. from Harbin Institute of Technology and his Ph.D. from Shanghai Jiao Tong University under the supervision of Prof. Weiwei Cai. He was jointly trained at Lund University and later conducted postdoctoral research at the University of Hong Kong.",
        highlights: [
          "Joined Xiamen University in January 2025",
          "Former Hong Kong Scholar postdoctoral fellow at the University of Hong Kong",
          "Published representative work in Journal of Fluid Mechanics, Combustion and Flame, ACS Photonics, and Cell Reports Physical Science",
          "Research integrates combustion, optics, and artificial intelligence for complex reacting-flow diagnostics",
        ],
        education: [
          "B.Eng., Harbin Institute of Technology, 2013-2017",
          "Ph.D., Shanghai Jiao Tong University, 2017-2022",
          "Joint doctoral training, Lund University, 2019-2021",
        ],
        sourceLabel: "Xiamen University profile",
      },
      zh: {
        displayName: "黄建青",
        degreeLine: "上海交通大学博士",
        currentTitle: "助理教授",
        institution: "厦门大学",
        department: "航空航天学院",
        email: "jianqing.huang@xmu.edu.cn",
        researchAreas: ["燃烧诊断", "流动显示", "计算成像", "智能算法"],
        bio:
          "黄建青博士现任厦门大学航空航天学院助理教授。本科毕业于哈尔滨工业大学，博士毕业于上海交通大学，师从蔡伟伟教授；博士期间在瑞典隆德大学联合培养，后在香港大学电子系从事“香江学者”博士后研究。",
        highlights: [
          "2025 年 1 月加入厦门大学航空航天学院",
          "曾获中国博士后科学基金会“香江学者计划”支持",
          "代表作发表于 Journal of Fluid Mechanics、Combustion and Flame、ACS Photonics、Cell Reports Physical Science 等期刊",
          "形成燃烧学、光学、人工智能交叉的复杂燃烧流动诊断研究方向",
        ],
        education: [
          "哈尔滨工业大学，工学学士，2013-2017",
          "上海交通大学，工学博士，2017-2022",
          "瑞典隆德大学，联合培养，2019-2021",
        ],
        sourceLabel: "厦门大学主页",
      },
    },
  },
  {
    id: "liu-hecong",
    photo: "/images/alumni/liu-hecong-portrait.png",
    sourceUrl: "https://faculty.scut.edu.cn/dl/lhc3/main.htm",
    content: {
      en: {
        displayName: "Hecong Liu",
        degreeLine: "Ph.D., Shanghai Jiao Tong University",
        currentTitle: "Associate Professor",
        institution: "South China University of Technology",
        department: "School of Electric Power",
        email: "hecongliu@scut.edu.cn",
        researchAreas: ["Optical diagnostics", "Combustion diagnostics", "Electric-field-assisted combustion", "Metal combustion", "Microwave plasma synthesis"],
        bio:
          "Dr. Hecong Liu is an associate professor at the School of Electric Power, South China University of Technology. He received his bachelor's, master's, and doctoral degrees from Shanghai Jiao Tong University, and conducted postdoctoral research at the University of Duisburg-Essen and City University of Hong Kong before joining SCUT.",
        highlights: [
          "Humboldt postdoctoral fellowship awardee, 2023",
          "Published more than 40 papers, including 18 first- or corresponding-author papers",
          "Research focuses on flame emission tomography, background-oriented schlieren tomography, laser diagnostics, and advanced combustion processes",
          "Youth Editorial Board member of Measurement: Energy",
        ],
        education: [
          "B.S., Shanghai Jiao Tong University, 2012-2016",
          "M.S., Shanghai Jiao Tong University, 2016-2019",
          "Ph.D., Shanghai Jiao Tong University, 2019-2022",
        ],
        sourceLabel: "SCUT faculty profile",
      },
      zh: {
        displayName: "刘何聪",
        degreeLine: "上海交通大学博士",
        currentTitle: "副教授",
        institution: "华南理工大学",
        department: "电力学院",
        email: "hecongliu@scut.edu.cn",
        researchAreas: ["光学诊断", "燃烧诊断", "电场辅助燃烧", "金属燃烧", "微波等离子体合成"],
        bio:
          "刘何聪博士现任华南理工大学电力学院副教授。本科、硕士和博士均毕业于上海交通大学机械与动力工程学院，之后先后在德国杜伊斯堡-埃森大学和香港城市大学开展博士后研究，2026 年加入华南理工大学。",
        highlights: [
          "2023 年获德国洪堡学者博士后奖学金",
          "发表论文 40 余篇，其中第一/通讯作者论文 18 篇",
          "研究方向包括火焰自发辐射层析成像、背景纹影层析成像、激光诊断及先进燃烧过程",
          "Measurement: Energy 期刊青年编委",
        ],
        education: [
          "上海交通大学，学士，2012-2016",
          "上海交通大学，硕士，2016-2019",
          "上海交通大学，博士，2019-2022",
        ],
        sourceLabel: "华南理工大学主页",
      },
    },
  },
  {
    id: "peng-fan",
    photo: "/images/alumni/peng-fan.png",
    sourceUrl: "https://cae.nuaa.edu.cn/2025/0714/c18728a380062/page.htm",
    content: {
      en: {
        displayName: "Fan Peng",
        degreeLine: "Ph.D., Shanghai Jiao Tong University",
        currentTitle: "Lecturer, Master's Supervisor",
        institution: "Nanjing University of Aeronautics and Astronautics",
        department: "College of Automation Engineering",
        email: "peng_fan@nuaa.edu.cn",
        researchAreas: ["Metal combustion", "Combustion optical diagnostics", "Three-dimensional tomography", "Computational imaging", "Machine learning for combustion diagnostics"],
        bio:
          "Dr. Fan Peng joined the College of Automation Engineering at Nanjing University of Aeronautics and Astronautics in June 2025. Her research focuses on energetic metal-particle combustion diagnostics, computational imaging, and machine-learning-enabled flow visualization and combustion diagnostics.",
        highlights: [
          "Joined NUAA in June 2025",
          "Published or accepted 15 papers in journals including Combustion and Flame and Measurement",
          "Works on light-field imaging, linear and nonlinear tomography, holographic imaging, and machine learning for diagnostics",
          "Leads a start-up project on combustion diagnostics and mechanisms of micron-scale impure iron powders",
        ],
        education: [
          "B.Eng., North China Electric Power University, 2012-2016",
          "M.Eng., North China Electric Power University, 2016-2019",
          "Ph.D., Shanghai Jiao Tong University, 2020-2025",
        ],
        sourceLabel: "NUAA faculty profile",
      },
      zh: {
        displayName: "彭范",
        degreeLine: "上海交通大学博士",
        currentTitle: "讲师，硕士生导师",
        institution: "南京航空航天大学",
        department: "自动化学院",
        email: "peng_fan@nuaa.edu.cn",
        researchAreas: ["金属燃烧", "燃烧光学诊断", "三维层析成像", "计算成像", "机器学习燃烧诊断"],
        bio:
          "彭范博士于 2025 年 6 月加入南京航空航天大学自动化学院，主要从事含能金属颗粒燃烧诊断技术、计算成像以及机器学习在流动显示和燃烧诊断中的理论方法与工程应用研究。",
        highlights: [
          "2025 年 6 月加入南京航空航天大学自动化学院",
          "发表/录用论文 15 篇，涵盖 Combustion and Flame、Measurement 等领域内 Top 期刊",
          "研究内容包括光场成像、线性层析、非线性层析、全息成像及机器学习诊断",
          "主持微米级含杂质铁粉燃烧诊断技术及燃烧机理研究校启动经费项目",
        ],
        education: [
          "华北电力大学（北京），学士，2012-2016",
          "华北电力大学（北京），硕士，2016-2019",
          "上海交通大学，博士，2020-2025",
        ],
        sourceLabel: "南京航空航天大学主页",
      },
    },
  },
];
