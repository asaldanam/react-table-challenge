import { lazy, Suspense } from 'react';

interface Props {
  module: Parameters<typeof lazy>[0];
}

/** Abstracts React.lazy and Suspense with fallback */
const ModuleLoader = ({ module }: Props) => {
  const Component = lazy(module);
  return (
    <Suspense fallback={null}>
      <Component />
    </Suspense>
  );
};

export default ModuleLoader;
