'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import styles from './SearchBar.module.css';
import Input from '@/components/ui/Input/Input';
import { SearchIcon } from '@/components/icons/Icons';

export default function SearchBar() {
  const [query, setQuery] = useState('');
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      router.push(`/search?q=${encodeURIComponent(query.trim())}`);
    }
  };

  return (
    <div className={styles.searchWrap} id="search-bar">
      <form
        onSubmit={handleSubmit}
        role="search"
        aria-label="Search products"
      >
        <Input
          variant="search"
          type="search"
          placeholder="Search kitchen equipment, brands, tools..."
          value={query}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => setQuery(e.target.value)}
          icon={<SearchIcon className="w-4 h-4" />}
          aria-label="Search products and brands"
        />
      </form>
    </div>
  );
}

