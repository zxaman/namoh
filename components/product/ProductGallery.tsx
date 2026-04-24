'use client';

import { useState } from 'react';
import Image from 'next/image';
import styles from './ProductGallery.module.css';
import { cn } from '@/utils/cn';

interface ProductGalleryProps {
  images: string[];
  name: string;
}

export default function ProductGallery({ images, name }: ProductGalleryProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const displayImages = images.length > 0 ? images : [`https://picsum.photos/seed/placeholder/600/600`];

  return (
    <div className={styles.gallery}>
      <div className={styles.mainImage}>
        <Image
          src={displayImages[activeIndex]}
          alt={`${name} — Image ${activeIndex + 1}`}
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          style={{ objectFit: 'cover' }}
          priority
        />
      </div>

      {displayImages.length > 1 && (
        <div className={styles.thumbnails}>
          {displayImages.map((img, i) => (
            <button
              key={i}
              className={cn(styles.thumb, i === activeIndex && styles.thumbActive)}
              onClick={() => setActiveIndex(i)}
              aria-label={`View image ${i + 1}`}
            >
              <Image
                src={img}
                alt={`${name} thumbnail ${i + 1}`}
                fill
                sizes="72px"
                style={{ objectFit: 'cover' }}
              />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
