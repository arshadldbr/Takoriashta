
export interface Course {
  id: string;
  category: string;
  title: string;
  description: string[];
  outcome: string;
}

export interface Service {
  title: string;
  description: string;
  icon: string;
}

export enum CourseCategory {
  AI_TECH = "AI, TECH & DIGITAL POWER SKILLS",
  CREATIVE = "CREATIVE & FREELANCING SKILLS",
  LANGUAGE = "LANGUAGE, WRITING & EXPRESSION",
  MIND = "MIND, DISCIPLINE & SELF-CONTROL",
  CIVIL_DEFENCE = "CIVIL DEFENCE & REAL-WORLD TRAINING"
}
