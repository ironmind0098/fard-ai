export type YearsInBusiness = "under1" | "1to5" | "5to15" | "above15";
export type TeamSize = "1to3" | "4to10" | "above10";
export type SalesModel = "in_person" | "online" | "hybrid";
export type CustomerType = "b2c" | "b2b" | "both";
export type TargetMarket = "local" | "nationwide";

export type WebsiteStatus = "none" | "old_no_traffic" | "active_pro";
export type SocialStatus = "active_instagram" | "semi_active" | "none";
export type AdsExperience = "none" | "instagram_only" | "google_and_seo";

export type DiscoveryChannel = "reputation" | "passersby" | "instagram" | "google";
export type WebsiteRequestFreq = "yes_sometimes" | "yes_often" | "no";
export type PrimaryGoal = "local_customers" | "new_markets" | "brand_trust";

export interface AssessmentInput {
  businessName: string;
  ownerName?: string;
  industry: string;
  city: string;
  targetMarket: TargetMarket;
  yearsInBusiness: YearsInBusiness;
  teamSize: TeamSize;
  salesModel: SalesModel;
  customerType: CustomerType;

  websiteStatus: WebsiteStatus;
  socialStatus: SocialStatus;
  adsExperience: AdsExperience;

  discoveryChannel: DiscoveryChannel;
  websiteRequestFreq: WebsiteRequestFreq;
  primaryGoal: PrimaryGoal;

  instagramHandle?: string;
  competitors?: string;
}

export type TrafficLightLevel = "green" | "yellow" | "red";

export interface TrafficLightItem {
  id: string;
  label: string;
  level: TrafficLightLevel;
  statusText: string;
  note: string;
}

export interface CompetitorCard {
  name: string;
  tag: string;
  strength: string;
  weaknessOrGap: string;
  ourOpportunity: string;
}

export interface RoadmapPhase {
  phase: string;
  timeframe: string;
  title: string;
  focus: string;
  actions: string[];
}

export interface KeywordGapItem {
  keyword: string;
  intent: "خرید فوری" | "اطلاعاتی";
  competition: "کم" | "متوسط" | "زیاد";
  competitorPresent: boolean;
}

export interface OpportunityEstimate {
  monthlySearchesMin: number;
  monthlySearchesMax: number;
  contactRateMin: number; // percent
  contactRateMax: number; // percent
  note: string;
}

export interface AssessmentReport {
  keywordGap: KeywordGapItem[];
  opportunity: OpportunityEstimate;
  isSampleDemo: boolean;
  archetypeTitle: string;
  businessSummary: {
    name: string;
    ownerOrManager?: string;
    industry: string;
    city: string;
    yearsLabel: string;
    teamLabel: string;
    instagramHandle?: string;
    websiteLabel: string;
  };
  score: number;
  scoreBadge: string;
  scoreSummary: string;
  trafficLights: TrafficLightItem[];
  phase1Recommendation: {
    badge: string;
    headline: string;
    rationale: string;
    whyNotHeavyStore: string;
    recommendedFunnel: string[];
  };
  strengths: string[];
  improvementAreas: string[];
  competitors: CompetitorCard[];
  roadmap: RoadmapPhase[];
  moneyKeywords: string[];
}

export interface LeadInfo {
  fullName: string;
  mobile: string;
  socialOrWhatsapp?: string;
}
