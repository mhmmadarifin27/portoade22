'use client';

import React from 'react';
import Image from 'next/image';
import { portfolioData } from '@/data/portfolioData';
import { useLanguage } from '@/context/LanguageContext';

export const SkillsSection = () => {
  const { language, t } = useLanguage();

  // Combine and partition skills into two balanced continuous ribbons
  const row1 = [
    ...portfolioData.skills[0].skills, // Data & Office Productivity
    ...portfolioData.skills[1].skills, // Database & System Operations
  ];

  const row2 = [
    ...portfolioData.skills[2].skills, // Web Development
    ...portfolioData.skills[3].skills, // Design & Supporting Tools
  ];

  // Duplicate arrays for seamless infinite loop
  const duplicatedRow1 = [...row1, ...row1];
  const duplicatedRow2 = [...row2, ...row2];

  return (
    <section id="keahlian" className="py-20 px-4 sm:px-6 relative bg-[var(--bg-secondary)]/30 overflow-hidden">
      <div className="max-w-6xl mx-auto space-y-12">
        {/* Header */}
        <div className="space-y-3 text-center max-w-2xl mx-auto">
          <div className="tag-badge mx-auto">
            {t.skills.tag}
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-[var(--text-primary)]">
            {t.skills.title}
          </h2>
          <p className="text-sm sm:text-base text-[var(--text-muted)]">
            {t.skills.subtitle}
          </p>
        </div>

        {/* Infinite Auto-Scrolling Marquee Ribbons */}
        <div className="space-y-4 sm:space-y-6 pt-2 marquee-mask overflow-hidden">
          {/* Row 1: Scrolling Left */}
          <div className="animate-marquee flex items-center gap-3 sm:gap-4 py-1">
            {duplicatedRow1.map((skill, index) => (
              <div
                key={`r1-${skill.name}-${index}`}
                className="inline-flex items-center gap-3 px-5 py-3 rounded-2xl glass-card border border-[var(--border-subtle)] bg-[var(--bg-card)] shrink-0 hover:border-teal-500/50 hover:bg-[var(--bg-card-hover)] transition-all cursor-default group"
              >
                <div className="relative w-8 h-8 flex items-center justify-center rounded-xl bg-[var(--bg-pill)] p-1.5 shrink-0 group-hover:scale-110 transition-transform">
                  {skill.iconSrc ? (
                    <Image
                      src={skill.iconSrc}
                      alt={`Logo ${skill.name}`}
                      width={28}
                      height={28}
                      className="object-contain max-h-6 max-w-6"
                      unoptimized={true}
                    />
                  ) : (
                    <div className="w-5 h-5 rounded-full bg-teal-400/20" />
                  )}
                </div>
                <div className="flex flex-col">
                  <span className="text-xs sm:text-sm font-bold text-[var(--text-primary)] whitespace-nowrap">
                    {skill.name}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Row 2: Scrolling Left with offset / slower speed */}
          <div className="animate-marquee-slow flex items-center gap-3 sm:gap-4 py-1">
            {duplicatedRow2.map((skill, index) => (
              <div
                key={`r2-${skill.name}-${index}`}
                className="inline-flex items-center gap-3 px-5 py-3 rounded-2xl glass-card border border-[var(--border-subtle)] bg-[var(--bg-card)] shrink-0 hover:border-teal-500/50 hover:bg-[var(--bg-card-hover)] transition-all cursor-default group"
              >
                <div className="relative w-8 h-8 flex items-center justify-center rounded-xl bg-[var(--bg-pill)] p-1.5 shrink-0 group-hover:scale-110 transition-transform">
                  {skill.iconSrc ? (
                    <Image
                      src={skill.iconSrc}
                      alt={`Logo ${skill.name}`}
                      width={28}
                      height={28}
                      className="object-contain max-h-6 max-w-6"
                      unoptimized={true}
                    />
                  ) : (
                    <div className="w-5 h-5 rounded-full bg-teal-400/20" />
                  )}
                </div>
                <div className="flex flex-col">
                  <span className="text-xs sm:text-sm font-bold text-[var(--text-primary)] whitespace-nowrap">
                    {skill.name}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
