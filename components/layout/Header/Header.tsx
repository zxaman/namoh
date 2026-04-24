import TopInfoBar from '@/components/layout/TopInfoBar/TopInfoBar';
import Navbar from '@/components/layout/Navbar/Navbar';
import CategoryNav from '@/components/layout/CategoryNav/CategoryNav';

export default function Header() {
  return (
    <header id="site-header">
      <TopInfoBar />
      <Navbar />
      <CategoryNav />
    </header>
  );
}
