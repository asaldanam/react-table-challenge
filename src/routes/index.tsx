import ModuleLoader from 'shared/ModuleLoader';

const Router = () => {
  // DISCLAIMER:
  // I would usually add here the application router with some router guard abstraction for authenticated applications.
  // Since the challenge only requires one view, I directly instance the only one available here.
  return (
    <>
      <ModuleLoader module={() => import(/* webpackChunkName: "Home.module" */ './Home')} />
    </>
  );
};

export default Router;
