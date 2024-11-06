import { Suspense } from 'react';
import InfoWrapper from '../../components/InfoWrapper';
import LoadingSpinner from '../../components/LoadingSpinner';

export default function Info() {
  return (
    <Suspense fallback={<LoadingSpinner />}>
      <InfoWrapper />
    </Suspense>
  );
}