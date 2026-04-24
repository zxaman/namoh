import HeroSection from '@/components/sections/HeroSection/HeroSection';
import TrustStrip from '@/components/sections/TrustStrip/TrustStrip';
import CategoryShowcase from '@/components/sections/CategoryShowcase/CategoryShowcase';
import FeaturedProducts from '@/components/sections/FeaturedProducts/FeaturedProducts';

export default function Home() {
  return (
    <>
      <HeroSection />
      <TrustStrip />
      <CategoryShowcase />
      <FeaturedProducts />
    </>
  );
}
