export interface Education {
  degree: string;
  institution: string;
  period: string;
}

export interface Member {
  id: string;
  name: string;
  nameZh: string;
  title: string;
  photo: string;
  email: string;
  education: Education[];
  researchInterests: string[];
  honors: string[];
  biography: string;
  order: number;
}

export const members: Member[] = [
  {
    id: "cai-weiwei",
    name: "Weiwei Cai",
    nameZh: "蔡伟伟",
    title: "Professor",
    photo: "/images/team/cai-weiwei.jpg",
    email: "cweiwei@sjtu.edu.cn",
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
    order: 1,
  },
  {
    id: "liu-ning",
    name: "Ning Liu",
    nameZh: "刘宁",
    title: "Associate Professor",
    photo: "/images/team/liu-ning.jpg",
    email: "nl9j@sjtu.edu.cn",
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
    order: 2,
  },
  {
    id: "zheng-yutao",
    name: "Yutao Zheng",
    nameZh: "郑聿韬",
    title: "Assistant Professor",
    photo: "/images/team/zheng-yutao.jpg",
    email: "yutaozheng@sjtu.edu.cn",
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
      "Shanghai Magnolia (白玉兰) Young Talent Project",
      "Shanghai Pujiang Talent Program (2024)",
    ],
    biography:
      "Yutao Zheng is an Assistant Professor at the Institute of Turbomachinery, School of Mechanical Engineering, Shanghai Jiao Tong University. He received his Ph.D. from the University of Cambridge (2023) and previously worked as an engineer at AECC Commercial Aircraft Engine Co. (2016–2019). His research focuses on developing high spatiotemporal resolution laser diagnostics for turbulent combustion, multi-physics 3D reconstruction of reactive flows, and aero-optics. Dr. Zheng's work has been published in leading journals including Combustion and Flame, Proceedings of the Combustion Institute, and Experiments in Fluids.",
    order: 4,
  },
  {
    id: "xu-shijie",
    name: "Shijie Xu",
    nameZh: "许世杰",
    title: "Associate Professor",
    photo: "/images/team/xu-shijie.jpg",
    email: "shijie.xu@sjtu.edu.cn",
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
      "Best Presentation Award, Int'l Conference on Energy and AI (2021)",
      "Håkan Hansson Foundation Award, Lund University (2020)",
      "SJTU Outstanding Class Advisor (2025)",
    ],
    biography:
      "Shijie Xu is an Associate Professor at the Institute of Turbomachinery, School of Mechanical Engineering, Shanghai Jiao Tong University. He received his Ph.D. from Lund University, Sweden (2021), and was an EU Marie Curie Fellow at the University of Birmingham (2023–2024). His research centers on high-fidelity numerical simulation of reacting flows, machine learning-augmented combustion modeling, and data assimilation for turbulent reactive systems. Dr. Xu has published over 44 journal papers and serves as a reviewer for leading journals including Combustion and Flame, Proceedings of the Combustion Institute, and Fuel.",
    order: 3,
  },
];
