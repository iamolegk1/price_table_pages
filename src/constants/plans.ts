import { IPricingPlan } from '../types';

export const PLANS: IPricingPlan[] = [
  {
    id: 1,
    name: 'Free',
    price: 0,
    interval: 'month',
    features: ['Word Definitions', 'Up to 10 Lists'],
  },
  {
    id: 2,
    name: 'Monthly',
    price: 3.99,
    interval: 'month',
    features: [
      'Word Definitions',
      'Unlimited Lists',
      'Directly add words from any site using Chrome Extension',
    ],
  },
  {
    id: 3,
    name: 'Yearly',
    price: 29.99,
    interval: 'year',
    features: [
      'Word Definitions',
      'Unlimited Lists',
      'Directly add words from any site using Chrome Extension',
    ],
  },
  {
    id: 4,
    name: 'Lifetime ',
    price: 99,
    interval: 'lifetime',
    features: [
      'Word Definitions',
      'Unlimited Lists',
      'Directly add words from any site using Chrome Extension',
    ],
  },
];
