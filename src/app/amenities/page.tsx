'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function AmenitiesPage() {
  const router = useRouter();

  useEffect(() => {
    // Redirect to home page with amenities section anchor
    router.replace('/#amenities');
  }, [router]);

  return null; // No content to render while redirecting
}
