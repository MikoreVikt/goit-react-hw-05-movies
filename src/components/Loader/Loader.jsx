import { PacmanLoader } from 'react-spinners';

export const Loader = ({ loading }) => {
  return (
    <PacmanLoader
      color="#740101ba"
      cssOverride={{
        position: 'fixed',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
      }}
      loading={loading}
      size={40}
      speedMultiplier={1}
      aria-label="Loading Spinner"
    />
  );
};
