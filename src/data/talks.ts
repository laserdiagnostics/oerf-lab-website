import type { Bilingual } from "../i18n/types";

export interface TalkItem {
  bvid: string;
  title: Bilingual<string>;
  description: Bilingual<string>;
  coverUrl: string;
  date: string;
  duration: string; // e.g. "16:49"
}

export interface TalksLocaleCopy {
  sectionTitle: string;
  sectionSubtitle: string;
}

export interface TalksData {
  talks: TalkItem[];
  content: Bilingual<TalksLocaleCopy>;
}

export const talksData: TalksData = {
  talks: [
    {
      bvid: "BV1cUjW61EjY",
      title: {
        en: "Background-Oriented Schlieren CT — 2026 Light Conference",
        zh: "背景纹影 CT — 2026 Light Conference 报告",
      },
      description: {
        en: "Invited talk at the 2026 Light Conference on background-oriented schlieren computed tomography for 3D flow field diagnostics.",
        zh: "在 2026 Light Conference 上关于背景纹影 CT 三维流场诊断的邀请报告。",
      },
      coverUrl:
        "http://i1.hdslb.com/bfs/archive/98bfd2398b1db5a875ca73eb2f0c2eac06931160.jpg",
      date: "2026-06-21",
      duration: "16:49",
    },
  ],
  content: {
    en: {
      sectionTitle: "Talks & Presentations",
      sectionSubtitle:
        "Selected invited talks and conference presentations that share our research with the wider community.",
    },
    zh: {
      sectionTitle: "学术报告",
      sectionSubtitle:
        "精选邀请报告与会议演讲，与国内外同行分享交流。",
    },
  },
};
