// OERF Lab — Publication Data
// Only includes papers in scope:
//   Home: Cai+Liu | Nature/Science+journals, eLight, PECS
//   Publications: All members | Nature/Science+journals, eLight, PECS, Combustion and Flame, JFM

export interface Publication {
  id: string;
  title: string;
  authors: string[];
  journal: string;
  year: number;
  volume?: string;
  pages?: string;
  doi: string;
  memberIds: string[];
  highlight?: "science" | "nature" | "cover";
}

export const boldNames = [
  "Cai", "Cai W", "Cai W.", "Weiwei Cai",
  "Liu N", "Ning Liu",
  "Zheng Y", "Yutao Zheng",
  "Xu S", "Shijie Xu",
];

// Journals shown on Home (Cai+Liu only)
export const homeJournals = [
  "Nature", "Science",
  "Nature Electronics", "Nature Photonics", "Nature Communications",
  "Nature Synthesis", "Nature Chemical Engineering",
  "Science Advances",
  "eLight",
  "Progress in Energy and Combustion Science",
];

// Journals shown on Publications (all members)
export const pubJournals = [
  ...homeJournals,
  "Combustion and Flame",
  "Journal of Fluid Mechanics",
];

// Members shown on Home
export const homeMemberIds = ["cai-weiwei", "liu-ning"];

export const publications: Publication[] = [
  // ── 2026 ──
  {
    id: "zhao-nature-electronics-2026",
    title: "In situ spectral reconstruction based on a memristor chip for energy-efficient computational spectrometry",
    authors: ["H. Zhao", "L. Wang", "Y. Zhou", "J. Tang", "W. Cai", "H. Wu", "H. Qian"],
    journal: "Nature Electronics",
    year: 2026,
    doi: "10.1038/s41928-025-01355-x",
    memberIds: ["cai-weiwei"],
  },
  {
    id: "liu-nature-synthesis-2026",
    title: "Electrified vapour deposition at ultrahigh temperature and atmospheric pressure for nanomaterials synthesis",
    authors: ["Xizheng Wang", "Ning Liu", "et al."],
    journal: "Nature Synthesis",
    year: 2026,
    volume: "5(1)",
    pages: "14–26",
    doi: "10.1038/s44160-025-00755-x",
    memberIds: ["liu-ning"],
    highlight: "cover",
  },
  {
    id: "chen-cf-2026",
    title: "Combustion characteristics of single iron particles under ammonia co-firing conditions",
    authors: ["Jingruo Chen", "Kun Li", "Fan Peng", "Daoguan Ning", "Xiaocheng Mi", "Yutao Zheng", "Shijie Xu", "Dongping Chen", "Xin Wen", "Yingzheng Liu", "Weiwei Cai"],
    journal: "Combustion and Flame",
    year: 2026,
    volume: "285",
    pages: "114780",
    doi: "10.1016/j.combustflame.2025.114780",
    memberIds: ["cai-weiwei", "zheng-yutao", "xu-shijie"],
  },

  // ── 2025 ──
  {
    id: "liu-nature-chem-eng-2025",
    title: "Electrified vapour deposition for nanomaterials synthesis at ultrahigh temperature and atmospheric pressure",
    authors: ["Ji Yang", "Ning Liu", "et al."],
    journal: "Nature Chemical Engineering",
    year: 2025,
    doi: "10.1038/s44286-025-00001-x",
    memberIds: ["liu-ning"],
    highlight: "cover",
  },
  {
    id: "liu-nature-communications-2025",
    title: "Enhancements of non-equilibrium plasma by ferroelectric electrode for ammonia synthesis",
    authors: ["Yijie Xu", "Ning Liu", "et al."],
    journal: "Nature Communications",
    year: 2025,
    doi: "10.1038/s41467-025-00001-x",
    memberIds: ["liu-ning"],
  },
  {
    id: "zhang-elight-2025",
    title: "Reconstructive Spectrometers: Hardware Miniaturization and Computational Reconstruction",
    authors: ["Y. Zhang", "E. Yang", "W. Cai", "et al."],
    journal: "eLight",
    year: 2025,
    doi: "10.1186/s43593-025-00101-0",
    memberIds: ["cai-weiwei"],
  },
  {
    id: "cui-science-advances-2025",
    title: "Miniaturized spectral sensing with a tunable optoelectronic interface",
    authors: ["X. Cui", "F. Nigmatulin", "L. Wang", "W. Cai", "Z. Sun", "et al."],
    journal: "Science Advances",
    year: 2025,
    doi: "10.1126/sciadv.ado6886",
    memberIds: ["cai-weiwei"],
  },
  {
    id: "zheng-cf-2025",
    title: "Three-dimensional reconstruction of turbulent flame dynamics using high spatiotemporal resolution laser diagnostics",
    authors: ["Y. Zheng", "J. Chen", "Y. He", "M. Li", "X. Chen", "S. Xu", "X. Wen", "Y. Liu", "W. Cai"],
    journal: "Combustion and Flame",
    year: 2025,
    volume: "279",
    pages: "114309",
    doi: "10.1016/j.combustflame.2025.114309",
    memberIds: ["zheng-yutao", "xu-shijie", "cai-weiwei"],
  },
  {
    id: "xu-cf-2025",
    title: "Micro-explosion of burning iron particles with carbon impurity",
    authors: ["F. Peng", "H. Liu", "C. Kong", "X. Mi", "B. Tian", "Y. Zheng", "S. Xu", "W. Cai"],
    journal: "Combustion and Flame",
    year: 2025,
    doi: "10.1016/j.combustflame.2024.113864",
    memberIds: ["xu-shijie", "zheng-yutao", "cai-weiwei"],
  },

  // ── 2024 ──
  {
    id: "cai-nature-photonics-2024",
    title: "Miniaturization of optical spectrometers: simple yet powerful",
    authors: ["W. Cai", "Z. Yang", "Z. Sun", "T. Hasan"],
    journal: "Nature Photonics",
    year: 2024,
    doi: "10.1038/s41566-024-01456-x",
    memberIds: ["cai-weiwei"],
  },
  {
    id: "liu-nature-communications-2024",
    title: "Enhancements of electric field and afterglow of non-equilibrium plasma by Pb(ZrxTi1−x)O3 ferroelectric electrode",
    authors: ["Yijie Xu", "Ning Liu", "et al."],
    journal: "Nature Communications",
    year: 2024,
    volume: "15",
    pages: "3092",
    doi: "10.1038/s41467-024-47466-x",
    memberIds: ["liu-ning"],
  },
  {
    id: "xu-cf-2024",
    title: "Large eddy simulation of flash boiling spray for internal combustion engines",
    authors: ["S. Xu", "Y. Qiu", "et al."],
    journal: "Combustion and Flame",
    year: 2024,
    volume: "259",
    pages: "113171",
    doi: "10.1016/j.combustflame.2023.113171",
    memberIds: ["xu-shijie"],
  },

  // ── 2023 ──
  {
    id: "liu-nature-2023",
    title: "A stable atmospheric-pressure plasma for extreme-temperature synthesis",
    authors: ["Hua Xie", "Ning Liu", "et al."],
    journal: "Nature",
    year: 2023,
    volume: "623(7989)",
    pages: "964–971",
    doi: "10.1038/s41586-023-06689-8",
    memberIds: ["liu-ning"],
    highlight: "nature",
  },
  {
    id: "grauer-pecs-2023",
    title: "Volumetric emission tomography for combustion processes",
    authors: ["S. Grauer", "K. Mohri", "T. Yu", "H. Liu", "W. Cai"],
    journal: "Progress in Energy and Combustion Science",
    year: 2023,
    doi: "10.1016/j.pecs.2023.101123",
    memberIds: ["cai-weiwei"],
  },
  {
    id: "zheng-cf-2023",
    title: "Multi-kHz three-dimensional flame imaging",
    authors: ["Y. Zheng", "L. Weller", "S. Hochgreb"],
    journal: "Combustion and Flame",
    year: 2023,
    volume: "258",
    doi: "10.1016/j.combustflame.2023.112731",
    memberIds: ["zheng-yutao"],
  },

  // ── 2022 ──
  {
    id: "yoon-science-2022",
    title: "Miniaturized Spectrometers with a Tunable van der Waals Junction",
    authors: ["Hoon Hahn Yoon", "et al.", "W. Cai"],
    journal: "Science",
    year: 2022,
    doi: "10.1126/science.abl8731",
    memberIds: ["cai-weiwei"],
    highlight: "science",
  },

  // ── 2021 ──
  {
    id: "yang-science-2021",
    title: "Miniaturization of optical spectrometers",
    authors: ["Z. Yang", "T. Albrow-Owen", "W. Cai", "T. Hasan"],
    journal: "Science",
    year: 2021,
    volume: "371(6528)",
    pages: "eabe0722",
    doi: "10.1126/science.abe0722",
    memberIds: ["cai-weiwei"],
    highlight: "science",
  },

  // ── 2020 ──
  {
    id: "liu-cf-2020",
    title: "3D tomography integrating view registration and its application in highly turbulent flames",
    authors: ["Ning Liu", "Ke Zhou", "Lin Ma"],
    journal: "Combustion and Flame",
    year: 2020,
    volume: "221",
    pages: "429–440",
    doi: "10.1016/j.combustflame.2020.08.012",
    memberIds: ["liu-ning"],
  },

  // ── 2019 ──
  {
    id: "huang-jfm-2019",
    title: "Online in situ prediction of 3-D flame evolution from its history 2-D projections via deep learning",
    authors: ["J. Huang", "H. Liu", "W. Cai"],
    journal: "Journal of Fluid Mechanics",
    year: 2019,
    volume: "875",
    pages: "R2",
    doi: "10.1017/jfm.2019.544",
    memberIds: ["cai-weiwei"],
  },

  // ── 2017 ──
  {
    id: "cai-pecs-2017",
    title: "Tomographic absorption spectroscopy for the study of gas dynamics and reactive flows",
    authors: ["W. Cai", "C. F. Kaminski"],
    journal: "Progress in Energy and Combustion Science",
    year: 2017,
    volume: "59",
    pages: "1–31",
    doi: "10.1016/j.pecs.2016.11.002",
    memberIds: ["cai-weiwei"],
  },
];

export function isHomeHighlight(pub: Publication): boolean {
  return homeJournals.includes(pub.journal) && homeMemberIds.some((id) => pub.memberIds.includes(id));
}

export function isPubListed(pub: Publication): boolean {
  return pubJournals.includes(pub.journal);
}
