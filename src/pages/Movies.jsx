import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

const Movies = () => (
  <Suspense fallback={null}>
    <Outlet />
  </Suspense>
);

export default Movies;
