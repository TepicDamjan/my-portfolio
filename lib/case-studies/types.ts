export type CaseStudyMeta = {
  role: string;
  year: string;
  type: string;
};

export type CaseStudySection = {
  label: string;
  title: string;
  body: string;
};

export type CaseStudyFeature = {
  title: string;
  description: string;
};

export type CaseStudyFlowStep = {
  step: string;
  title: string;
  description: string;
};

export type CaseStudyImage = {
  src: string;
  alt: string;
  caption?: string;
};

export type CaseStudy = {
  slug: string;
  title: string;
  tagline: string;
  gradient: string;
  meta: CaseStudyMeta;
  stack: string[];
  images?: {
    hero: CaseStudyImage;
    screens?: CaseStudyImage[];
  };
  overview: {
    problem: CaseStudySection;
    solution: CaseStudySection;
  };
  features: CaseStudyFeature[];
  flow: CaseStudyFlowStep[];
  technical: CaseStudySection;
  learnings: CaseStudySection;
};
