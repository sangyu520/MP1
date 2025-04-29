'use client';

import Loader from '@/components/Loader';

export default function Loading() {
  return (
    <div className="flex items-center justify-center w-full min-h-screen bg-black">
      <Loader />
    </div>
  );
}
