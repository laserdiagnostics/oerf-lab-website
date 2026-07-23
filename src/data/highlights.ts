import type { Bilingual } from "../i18n/types";

export interface HighlightCopy {
  alt: string;
  summary: string;
  metricLabels: [string, string, string];
}

export interface FeaturedHighlightConfig {
  id: string;
  image: string;
  mediaClass: string;
  paperUrl?: string;
  metricValues: [string, string, string];
  content: Bilingual<HighlightCopy>;
}

export const featuredHighlightConfigs: FeaturedHighlightConfig[] = [
  {
    id: "zhao-nature-electronics-2026",
    image: "memristor-spectrometer-2026.webp",
    mediaClass: "",
    metricValues: ["125 ns", "6.7 nJ", "576 Kb"],
    content: {
      en: {
        alt: "Conceptual visualization of in situ spectral reconstruction on a memristor chip",
        summary:
          "A fully integrated memristor chip reconstructs spectra directly in the analogue domain, eliminating off-chip data transfer while supporting high-fidelity spectral and hyperspectral imaging.",
        metricLabels: ["per spectrum", "energy per spectrum", "2T2R memristor array"],
      },
      zh: {
        alt: "忆阻器芯片原位光谱重构概念图",
        summary:
          "全集成忆阻器芯片在模拟域直接完成光谱重构，减少片外数据传输，同时支持高保真光谱与高光谱成像。",
        metricLabels: ["单次光谱重构时间", "单次光谱重构能耗", "2T2R 忆阻器阵列"],
      },
    },
  },
  {
    id: "liu-nature-synthesis-2026",
    image: "evd-nanomaterials-synthesis-2026.webp",
    mediaClass: "featured-highlight-media-contain",
    metricValues: ["~3,000 K", "10²¹–10²²", "~0.3 s"],
    content: {
      en: {
        alt: "Electrified vapour deposition of multi-element nanomaterials at atmospheric pressure",
        summary:
          "An electrified carbon-paper heater generates an ultrahigh-temperature, high-flux atomic vapour at atmospheric pressure, enabling rapid deposition of multi-element nanomaterials and thin films on a cooler substrate.",
        metricLabels: ["heater temperature", "atoms cm⁻² s⁻¹ vapour flux", "stable vapour formation"],
      },
      zh: {
        alt: "大气压条件下多元素纳米材料电气化气相沉积",
        summary:
          "电加热碳纸在大气压下产生超高温、高通量原子蒸气，并在较冷基底上快速沉积多元素纳米材料与薄膜。",
        metricLabels: ["加热器温度", "原子 cm⁻² s⁻¹ 蒸气通量", "稳定蒸气形成时间"],
      },
    },
  },
  {
    id: "cui-science-advances-2025",
    image: "tunable-optoelectronic-interface-2025-v4.webp",
    mediaClass: "featured-highlight-media-diagram",
    metricValues: ["5 × 5 µm", "~0.19 nm", "~2.45 nm"],
    content: {
      en: {
        alt: "Laboratory visualization of a tunable van der Waals optoelectronic interface for spectral sensing",
        summary:
          "An electrically tunable InSe/NbTe2 van der Waals interface converts diverse optical spectra into distinguishable electrical responses for wavelength sensing and material identification.",
        metricLabels: ["device footprint", "free-space accuracy", "on-chip accuracy"],
      },
      zh: {
        alt: "用于光谱感知的可调范德华光电界面实验示意图",
        summary:
          "电可调 InSe/NbTe2 范德华界面将不同光谱转换为可区分的电响应，实现波长感知和材料识别。",
        metricLabels: ["器件尺寸", "自由空间测量精度", "片上测量精度"],
      },
    },
  },
  {
    id: "liu-nature-2023",
    image: "stable-atmospheric-pressure-plasma-2023.webp",
    mediaClass: "featured-highlight-media-contain",
    paperUrl: "https://www.nature.com/articles/s41586-023-06694-1",
    metricValues: ["8,000 K", "~42 V", "≥10 min"],
    content: {
      en: {
        alt: "Stable atmospheric-pressure plasma generated between carbon-fibre-tip-enhanced electrodes",
        summary:
          "Carbon-fibre-tip-enhanced electrodes merge microspark discharges into a uniform and stable atmospheric-pressure plasma, enabling extreme-temperature materials synthesis in seconds.",
        metricLabels: ["maximum temperature", "breakdown voltage", "stable operation"],
      },
      zh: {
        alt: "碳纤维尖端增强电极之间产生的稳定大气压等离子体",
        summary:
          "碳纤维尖端增强电极将微火花放电融合为均匀、稳定的大气压等离子体，可在数秒内完成极端温度材料合成。",
        metricLabels: ["最高温度", "击穿电压", "稳定运行时间"],
      },
    },
  },
];
