import ModuleLoader from 'shared/utils/ModuleLoader';
import ItemsWrapper from './view';

const Items = () => (
  <ModuleLoader module={() => import(/* webpackChunkName: "Items.module" */ './view')} />
);

export default Items;
