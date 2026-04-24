import type { Metadata } from 'next';
import PageHero from '@/components/shop/PageHero/PageHero';
import ShopClient from './ShopClient';
import { SITE_NAME } from '@/constants';

export const metadata: Metadata = {
  title: `Shop Commercial Kitchen Equipment | ${SITE_NAME}`,
  description:
    'Browse our complete range of commercial kitchen equipment, refrigeration, bakery machines, hotelware, and more. Trusted by 500+ hotels and restaurants across India.',
};

export default function ShopPage() {
  return (
    <>
      <PageHero
        title="Shop All Products"
        description="Discover premium commercial kitchen equipment for hotels, restaurants, cafes, and food businesses."
        image="https://picsum.photos/seed/shopall/1400/400"
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Shop' },
        ]}
      />
      <ShopClient />
    </>
  );
}
