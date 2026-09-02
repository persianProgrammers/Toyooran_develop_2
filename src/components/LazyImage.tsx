import React, { useState } from 'react';
import { Image as ImageIcon } from 'lucide-react';

export const LazyImage = ({ src, alt, className, imgClassName }: { src: string, alt?: string, className?: string, imgClassName?: string }) => {
  const [isLoaded, setIsLoaded] = useState(false);
  return (
    <div className={`relative overflow-hidden bg-slate-200 ${className || ''}`}>
      {!isLoaded && (
        <div className="absolute inset-0 flex items-center justify-center">
          <ImageIcon className="w-8 h-8 text-slate-400 animate-pulse" />
        </div>
      )}
      <img
        src={src}
        alt={alt || ''}
        loading="lazy"
        onLoad={() => setIsLoaded(true)}
        className={`transition-all duration-700 ${imgClassName || 'w-full h-full object-cover'} ${isLoaded ? 'opacity-100 blur-0 scale-100' : 'opacity-0 blur-sm scale-105'}`}
      />
    </div>
  );
};
