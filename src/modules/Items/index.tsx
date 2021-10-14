import ModuleLoader from 'shared/ModuleLoader';

const Items = () => (
  <ModuleLoader module={() => import(/* webpackChunkName: "Items.module" */ './view')} />
);

export default Items;
