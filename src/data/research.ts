export interface ResearchArea {
  id: string;
  title: string;
  summary: string;
  description: string;
  highlights: string[];
  memberIds: string[];
}

export const researchAreas: ResearchArea[] = [
  {
    id: "optical-diagnostics",
    title: "Extreme Reaction Flow Diagnostics",
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
    memberIds: ["cai-weiwei", "zheng-yutao"],
  },
  {
    id: "computational-imaging",
    title: "Computational Imaging & Miniature Spectrometers",
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
    memberIds: ["cai-weiwei"],
  },
  {
    id: "ultrafast-spectroscopy",
    title: "Ultrafast Laser Spectroscopy & Plasma Energy Conversion",
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
    memberIds: ["liu-ning"],
  },
  {
    id: "reacting-flow-simulation",
    title: "Reacting Flow Simulation & Data Assimilation",
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
    memberIds: ["xu-shijie"],
  },
];
