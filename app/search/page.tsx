import type { Metadata } from 'next';
import { Suspense } from 'react';
import SearchClient from './SearchClient';
import { SITE_NAME } from '@/constants';

export const metadata: Metadata = {
  title: `Search Products | ${SITE_NAME}`,
  description: 'Search our complete range of commercial kitchen equipment, refrigeration, bakery machines, and more.',
};

export default function SearchPage() {
  return (
    <Suspense fallback={<div style={{ padding: 64, textAlign: 'center' }}>Loading...</div>}>
      <SearchClient />
    </Suspense>
  );
}
