'use client'

import React, { Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import LoadingSpinner from '../../components/LoadingSpinner';
import InfoContent from '../../components/InfoContent';

export default function Info() {
  return (
    <Suspense fallback={<LoadingSpinner />}>
      <InfoWrapper />
    </Suspense>
  );
}

function InfoWrapper() {
  const searchParams = useSearchParams();
  const lang = searchParams.get('lang') || 'en';

  return <InfoContent lang={lang} />;
}