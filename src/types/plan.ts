export interface IPricingPlan {
  id: number;
  name: string;
  price: number;
  interval: 'month' | 'year' | 'lifetime';
  features: string[];
}
