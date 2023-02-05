import { Loader } from 'components/Loader/Loader';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

const Movies = () => {
  return (
    <Suspense fallback={<Loader loading={true} />}>
      <Outlet />
    </Suspense>
  );
};

export default Movies;
