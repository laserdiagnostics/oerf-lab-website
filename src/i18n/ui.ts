import type { Bilingual, Locale } from "./types";

export interface UIStrings {
  home: string;
  research: string;
  team: string;
  publications: string;
  contact: string;
  joinUs: string;
  talks: string;
  quickLinks: string;
  connect: string;
  readPaper: string;
  viewPaper: string;
  viewAllPublications: string;
  researchInterests: string;
  biography: string;
  education: string;
  honorsAwards: string;
  keyFocusAreas: string;
  journalPublications: string;
  latestHighlights: string;
  moreSelectedWork: string;
  keyPerformanceMetrics: string;
  email: string;
  address: string;
  institute: string;
  school: string;
  university: string;
  teamMembers: string;
  contactUs: string;
  recruitmentDetails: string;
  viewOnGoogleMaps: string;
  pageNotFound: string;
  pageNotFoundDescription: string;
  backHome: string;
  toggleMenu: string;
  languageSwitchShort: string;
  switchLanguage: string;
  coverPaper: string;
  award: string;
}

export const ui: Bilingual<UIStrings> = {
  en: {
    home: "Home",
    research: "Research",
    team: "Team",
    publications: "Publications",
    contact: "Contact",
    joinUs: "Join us",
    talks: "Talks",
    quickLinks: "Quick Links",
    connect: "Connect",
    readPaper: "Read the paper",
    viewPaper: "View paper",
    viewAllPublications: "View all publications",
    researchInterests: "Research Interests",
    biography: "Biography",
    education: "Education",
    honorsAwards: "Honors & Awards",
    keyFocusAreas: "Key Focus Areas",
    journalPublications: "Journal Publications",
    latestHighlights: "Latest Highlights",
    moreSelectedWork: "More selected work",
    keyPerformanceMetrics: "Key performance metrics",
    email: "Email",
    address: "Address",
    institute: "Institute",
    school: "School",
    university: "University",
    teamMembers: "Team Members",
    contactUs: "Contact Us",
    recruitmentDetails: "Recruitment details",
    viewOnGoogleMaps: "View on Google Maps",
    pageNotFound: "Page Not Found",
    pageNotFoundDescription: "The page you requested could not be found.",
    backHome: "Back to home",
    toggleMenu: "Toggle menu",
    languageSwitchShort: "中文",
    switchLanguage: "切换到中文",
    coverPaper: "Cover Paper",
    award: "Award",
  },
  zh: {
    home: "主页",
    research: "研究方向",
    team: "团队成员",
    publications: "论文成果",
    contact: "联系我们",
    joinUs: "加入我们",
    talks: "学术报告",
    quickLinks: "快速链接",
    connect: "相关链接",
    readPaper: "阅读论文",
    viewPaper: "查看论文",
    viewAllPublications: "查看全部论文",
    researchInterests: "研究方向",
    biography: "个人简介",
    education: "教育经历",
    honorsAwards: "荣誉与奖项",
    keyFocusAreas: "重点研究内容",
    journalPublications: "期刊论文",
    latestHighlights: "最新成果",
    moreSelectedWork: "更多代表性工作",
    keyPerformanceMetrics: "关键性能指标",
    email: "电子邮箱",
    address: "地址",
    institute: "研究所",
    school: "学院",
    university: "学校",
    teamMembers: "团队成员",
    contactUs: "联系我们",
    recruitmentDetails: "查看招生详情",
    viewOnGoogleMaps: "在 Google 地图中查看",
    pageNotFound: "页面未找到",
    pageNotFoundDescription: "无法找到你请求的页面。",
    backHome: "返回主页",
    toggleMenu: "展开或收起导航菜单",
    languageSwitchShort: "EN",
    switchLanguage: "Switch to English",
    coverPaper: "封面论文",
    award: "获奖成果",
  },
};

export function t(locale: Locale): UIStrings {
  return ui[locale];
}
