import type { Bilingual, Locale } from "../i18n/types";

export interface ResearchAreaCopy {
  title: string;
  summary: string;
  description: string;
  highlights: string[];
  imageAlt: string;
}

export interface ResearchArea {
  id: string;
  image: string;
  imageWidth: number;
  imageHeight: number;
  memberIds: string[];
  content: Bilingual<ResearchAreaCopy>;
}

export function getResearchCopy(area: ResearchArea, locale: Locale): ResearchAreaCopy {
  return area.content[locale];
}

export const researchAreas: ResearchArea[] = [
  {
    id: "optical-diagnostics",
    image: "extreme-reaction-flow-diagnostics-2024.webp",
    imageWidth: 1672,
    imageHeight: 941,
    memberIds: ["cai-weiwei", "zheng-yutao"],
    content: {
      en: {
        title: "Extreme Reaction Flow Diagnostics",
        imageAlt:
          "Multi-view laser-induced incandescence experiment and three-dimensional soot-flame reconstructions",
        summary:
          "Advanced optical and laser-based diagnostics for probing high-temperature, high-pressure reacting flows in aero-engines and hypersonic vehicles.",
        description:
          "Our team develops and applies cutting-edge optical diagnostic techniques to probe extreme reaction flows. We employ planar laser-induced fluorescence (PLIF), tomographic absorption spectroscopy, background-oriented schlieren (BOS), and holographic imaging to measure temperature, species concentration, and flow dynamics in harsh environments. These techniques are applied to study combustion phenomena in aero-engines, hypersonic propulsion systems, and next-generation power generation.",
        highlights: [
          "High-speed PLIF and volumetric emission tomography",
          "Endoscopic tomography for transient flame 3D structure",
          "Background-oriented schlieren for 3D refractive index fields",
          "In situ measurements in extreme temperature/pressure conditions",
        ],
      },
      zh: {
        title: "极端反应流诊断",
        imageAlt: "多视角激光诱导炽光实验系统及烟炱火焰三维重构结果",
        summary: "面向航空发动机与高超声速飞行器中的高温、高压反应流，发展先进光学与激光诊断技术。",
        description:
          "团队发展并应用前沿光学诊断技术研究极端反应流。利用平面激光诱导荧光（PLIF）、吸收光谱层析、背景纹影（BOS）和全息成像等方法，在严苛环境中测量温度、组分浓度和流动动力学，并将其用于航空发动机、高超声速推进系统和新一代动力装置中的燃烧问题。",
        highlights: [
          "高速 PLIF 与体积发射层析成像",
          "瞬态火焰三维结构内窥层析诊断",
          "三维折射率场背景纹影重构",
          "极端温度与压力条件下的原位测量",
        ],
      },
    },
  },
  {
    id: "computational-imaging",
    image: "computational-imaging-miniature-spectrometers.webp",
    imageWidth: 1672,
    imageHeight: 941,
    memberIds: ["cai-weiwei"],
    content: {
      en: {
        title: "Computational Imaging & Miniature Spectrometers",
        imageAlt:
          "Multidimensional light-field encoding and computational reconstruction using miniature spectrometer mechanisms",
        summary:
          "Light-field imaging, linear/nonlinear tomography, and miniature computational spectrometers for high-dimensional optical sensing.",
        description:
          "We pioneer computational imaging techniques that synergize optical hardware with advanced reconstruction algorithms. Our work includes light-field imaging for 3D flame reconstruction, nonlinear tomographic methods for enhanced spatial resolution, and miniature computational spectrometers that achieve laboratory-grade performance in compact form factors. These technologies enable new capabilities for high-speed, multi-dimensional optical sensing in both scientific and industrial applications.",
        highlights: [
          "Miniaturized spectrometers with tunable van der Waals junctions (Science)",
          "Light-field and holographic imaging for reactive flow diagnostics",
          "AI-driven multidimensional light-field reconstruction",
          "High-speed snapshot spectral cameras",
        ],
      },
      zh: {
        title: "计算成像与微型光谱仪",
        imageAlt: "利用微型光谱调制机制实现多维光场编码与计算重构",
        summary: "面向高维光学感知，研究光场成像、线性与非线性层析以及微型计算光谱仪。",
        description:
          "团队发展光学硬件与先进重构算法协同设计的计算成像技术，包括用于火焰三维重构的光场成像、提升空间分辨率的非线性层析方法，以及在紧凑体积内实现实验室级性能的微型计算光谱仪，为科学研究和工业应用提供高速、多维光学感知能力。",
        highlights: [
          "基于可调范德华结的微型光谱仪（Science）",
          "反应流诊断中的光场与全息成像",
          "人工智能驱动的多维光场重构",
          "高速快照式光谱相机",
        ],
      },
    },
  },
  {
    id: "ultrafast-spectroscopy",
    image: "ultrafast-laser-plasma-energy-conversion.webp",
    imageWidth: 1536,
    imageHeight: 1024,
    memberIds: ["liu-ning"],
    content: {
      en: {
        title: "Ultrafast Laser Spectroscopy & Plasma Energy Conversion",
        imageAlt:
          "Ultrafast laser spectroscopy setup with plasma emission, interferometry and Thomson-scattering diagnostics",
        summary:
          "Femtosecond laser spectroscopy, plasma-assisted energy conversion, and ultrahigh-temperature materials synthesis.",
        description:
          "We employ ultrafast laser techniques to probe nonequilibrium plasma chemistry, combustion kinetics, and energy conversion processes at fundamental timescales. Our research spans femtosecond cavity-enhanced absorption spectroscopy for sensitive combustion species detection, plasma-assisted ammonia synthesis and oxidation, and ultrahigh-temperature materials synthesis using stable atmospheric-pressure plasma. These efforts bridge fundamental photophysics with practical energy and propulsion applications.",
        highlights: [
          "Stable atmospheric-pressure plasma for extreme-temperature synthesis (Nature)",
          "Electrified vapour deposition at ultrahigh temperature (Nature Synthesis Cover)",
          "Femtosecond UV laser absorption spectroscopy for temperature and OH",
          "Plasma-assisted ammonia synthesis and combustion kinetics",
        ],
      },
      zh: {
        title: "超快激光光谱与等离子体能量转化",
        imageAlt: "结合等离子体发射、干涉与汤姆孙散射诊断的超快激光光谱实验系统",
        summary: "研究飞秒激光光谱、等离子体辅助能量转化及超高温材料合成。",
        description:
          "团队利用超快激光技术，在基础时间尺度上研究非平衡等离子体化学、燃烧动力学和能量转化过程。研究涵盖高灵敏燃烧组分检测的飞秒腔增强吸收光谱、等离子体辅助氨合成与氧化，以及稳定大气压等离子体驱动的超高温材料合成，连接基础光物理与能源动力应用。",
        highlights: [
          "用于极端温度合成的稳定大气压等离子体（Nature）",
          "超高温电气化气相沉积（Nature Synthesis 封面）",
          "温度与 OH 测量的飞秒紫外激光吸收光谱",
          "等离子体辅助氨合成与燃烧动力学",
        ],
      },
    },
  },
  {
    id: "reacting-flow-simulation",
    image: "reacting-flow-simulation-data-assimilation.webp",
    imageWidth: 1672,
    imageHeight: 941,
    memberIds: ["xu-shijie"],
    content: {
      en: {
        title: "Reacting Flow Simulation & Data Assimilation",
        imageAlt:
          "TDLAS tomography measurements assimilated into a reacting-flow CFD model to reduce prediction uncertainty",
        summary:
          "High-fidelity CFD, machine learning-augmented combustion modeling, and data assimilation for turbulent reacting flows.",
        description:
          "Our team develops efficient, high-accuracy numerical methods for simulating reacting flows. We combine large-eddy simulation (LES) with detailed chemical kinetics, augmented by machine learning models to reduce computational cost while maintaining fidelity. Data assimilation techniques integrate experimental measurements with numerical simulations for enhanced prediction. These tools are applied to low-carbon combustion technologies, spray combustion, flash boiling, and pollutant formation in gas turbines and internal combustion engines.",
        highlights: [
          "High-fidelity LES of spray combustion and flash boiling",
          "Machine learning-augmented combustion simulation",
          "Data assimilation for turbulent reacting flows",
          "Low-carbon ammonia/hydrogen combustion technologies",
        ],
      },
      zh: {
        title: "反应流模拟与数据同化",
        imageAlt: "将 TDLAS 层析测量同化到反应流 CFD 模型中以降低预测不确定性",
        summary: "研究高保真 CFD、机器学习增强燃烧建模及湍流反应流数据同化。",
        description:
          "团队发展高效、高精度的反应流数值模拟方法，将大涡模拟（LES）与详细化学动力学相结合，并利用机器学习模型在保持精度的同时降低计算成本；通过数据同化融合实验测量与数值模拟，提高预测能力。这些方法应用于低碳燃烧、喷雾燃烧、闪沸以及燃气轮机和内燃机中的污染物生成研究。",
        highlights: [
          "喷雾燃烧与闪沸的高保真大涡模拟",
          "机器学习增强燃烧模拟",
          "湍流反应流数据同化",
          "低碳氨燃料与氢燃料燃烧技术",
        ],
      },
    },
  },
];
