import { FC } from 'react';

import { IPricingPlan } from '../../types';

import styles from './pricing-plan.module.css';

interface PricingPlanProps {
  plan: IPricingPlan;
}

export const PricingPlan: FC<PricingPlanProps> = ({ plan }) => {
  let priceSuffix = '';
  if (plan.interval === 'month') {
    priceSuffix = '/mo';
  } else if (plan.interval === 'year') {
    priceSuffix = '/year';
  } else if (plan.interval === 'lifetime') {
    priceSuffix = 'one time';
  }

  return (
    <div className={styles.pricingPlan}>
      {plan.interval === 'year' && (
        <span className={styles.popular}>popular</span>
      )}
      <h2>{plan.name}</h2>
      <p className={styles.price}>
        {plan.price}
        <span className={styles.priceSuffix}>{priceSuffix}</span>
      </p>
      <ul className={styles.features}>
        {plan.features.map((feature, index) => (
          <li key={index}>{feature}</li>
        ))}
      </ul>
      <button className={styles.signUpButton}>Sign up Today</button>
    </div>
  );
};
