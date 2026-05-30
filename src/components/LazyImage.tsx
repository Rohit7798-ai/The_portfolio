import React, { useState, useEffect, useRef } from 'react';

interface LazyImageProps {
  src: string;
  alt: string;
  className?: string;
  wrapperClassName?: string;
  loading?: 'lazy' | 'eager';
  fetchPriority?: 'high' | 'low' | 'auto';
  width?: number | string;
  height?: number | string;
}

const LazyImage: React.FC<LazyImageProps> = ({ 
  src, 
  alt, 
  className = '', 
  wrapperClassName = '',
  loading = 'lazy',
  fetchPriority = 'auto',
  width,
  height
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    if (loading === 'eager') {
      setIsInView(true);
      return;
    }

    if (!imgRef.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsInView(true);
            observer.disconnect();
          }
        });
      },
      { rootMargin: '100px' } // Load earlier to avoid lazy flickering
    );

    observer.observe(imgRef.current);

    return () => observer.disconnect();
  }, [loading]);

  return (
    <div className={`relative overflow-hidden ${wrapperClassName}`} style={{ width, height }}>
      {!isLoaded && (
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-100/40 to-teal-100/40 animate-pulse z-10" />
      )}
      <img
        ref={imgRef}
        src={isInView ? src : 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1 1"></svg>'}
        alt={alt}
        className={`${className} transition-opacity duration-300 ${
          isLoaded ? 'opacity-100' : 'opacity-0'
        }`}
        loading={loading}
        fetchPriority={fetchPriority}
        onLoad={() => setIsLoaded(true)}
        decoding="async"
        width={width}
        height={height}
      />
    </div>
  );
};

export default LazyImage;
