import type { Bilingual } from "./i18n/types";

export interface SiteCopy {
  title: string;
  shortName: string;
  description: string;
  school: string;
  university: string;
  institute: string;
  address: string;
  addressLocality: string;
}

export const SITE = {
  url: "https://laserdiagnostics.github.io/oerf-lab-website",
  email: "cweiwei@sjtu.edu.cn",
  since: 2015,
  content: {
    en: {
      title: "OERF Lab — Optical & Extreme Reaction Flow",
      shortName: "OERF Lab",
      description:
        "Optical & Extreme Reaction Flow (OERF) Lab at Shanghai Jiao Tong University. We develop advanced optical diagnostics, computational imaging, ultrafast spectroscopy, and reacting flow simulations for extreme environment energy and propulsion systems.",
      school: "School of Mechanical Engineering",
      university: "Shanghai Jiao Tong University",
      institute: "Institute of Turbomachinery",
      address: "800 Dongchuan Road, Minhang, Shanghai 200240, China",
      addressLocality: "Shanghai",
    },
    zh: {
      title: "OERF Lab — 光学与极端反应流实验室",
      shortName: "OERF Lab",
      description:
        "上海交通大学光学与极端反应流实验室，面向极端环境能源与动力系统开展先进光学诊断、计算成像、超快光谱和反应流模拟研究。",
      school: "机械与动力工程学院",
      university: "上海交通大学",
      institute: "叶轮机械研究所",
      address: "中国上海市闵行区东川路 800 号，邮编 200240",
      addressLocality: "上海",
    },
  } satisfies Bilingual<SiteCopy>,
};
