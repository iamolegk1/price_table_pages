import { FC } from 'react';

import { ListPricingPlans } from '../../components/list-pricing-plans';

import { PLANS } from '../../constants';

import styles from './price-page.module.css';

export const PricePage: FC = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Google Chrome Extension Plans</h1>
      <ListPricingPlans plans={PLANS} />
    </div>
  );
};
