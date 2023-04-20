import { PricingPlan } from '../pricing-plan';

import { IPricingPlan } from '../../types';

import styles from './list-pricing-plans.module.css';

interface ListPricingPlansProps {
  plans: IPricingPlan[];
}

export const ListPricingPlans: React.FC<ListPricingPlansProps> = ({
  plans,
}) => {
  return (
    <div className={styles.container}>
      {plans.map((plan) => (
        <PricingPlan key={plan.id} plan={plan} />
      ))}
    </div>
  );
};
