import { Spin } from 'antd';
import { lazy, Suspense } from 'react';

const ItemsWrapper = lazy(/* webpackChunkName: "Items.module" */ () => import('./view'));

/** Items module */
export default function Items() {
  return (
    <Suspense fallback={<Spin />}>
      <ItemsWrapper />
    </Suspense>
  );
}
