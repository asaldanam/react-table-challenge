import ModuleLoader from 'shared/utils/ModuleLoader';

const Items = () => (
  <ModuleLoader module={() => import(/* webpackChunkName: "Items.module" */ './view')} />
);

export default Items;
