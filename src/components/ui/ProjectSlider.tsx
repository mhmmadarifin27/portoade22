'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';

interface ProjectSliderProps {
  slides: string[];
  alt: string;
  onImageClick?: () => void;
  className?: string;
  autoPlay?: boolean;
}

export const ProjectSlider: React.FC<ProjectSliderProps> = ({
  slides,
  alt,
  onImageClick,
  className = '',
  autoPlay = true,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (!autoPlay || slides.length <= 1) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % slides.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [autoPlay, slides.length]);

  if (!slides || slides.length === 0) return null;

  return (
    <div className={`relative overflow-hidden rounded-2xl group ${className}`}>
      <div 
        className="relative w-full aspect-[16/10] sm:aspect-video cursor-pointer bg-slate-950/80 flex items-center justify-center"
        onClick={onImageClick}
      >
        {slides.map((slide, index) => (
          <div
            key={slide}
            className={`absolute inset-0 flex items-center justify-center p-1 transition-opacity duration-500 ease-in-out ${
              index === currentIndex ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'
            }`}
          >
            <Image
              src={slide}
              alt={`${alt} - Slide ${index + 1}`}
              fill
              className="object-contain object-center transition-transform duration-300 group-hover:scale-[1.02]"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              priority={index === 0}
            />
          </div>
        ))}
      </div>

      {slides.length > 1 && (
        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 z-20 flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/70 backdrop-blur-md border border-white/15 pointer-events-auto">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={(e) => {
                e.stopPropagation();
                setCurrentIndex(i);
              }}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                i === currentIndex ? 'w-5 bg-teal-400' : 'w-1.5 bg-white/40 hover:bg-white/80'
              }`}
              aria-label={`Slide ${i + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
};
