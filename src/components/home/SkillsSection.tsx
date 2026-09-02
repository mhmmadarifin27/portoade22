'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { portfolioData } from '@/data/portfolioData';
import { useLanguage } from '@/context/LanguageContext';

export const SkillsSection = () => {
  const { language, t } = useLanguage();
  const [activeCategory, setActiveCategory] = useState<number | 'all'>('all');

  const allSkills = portfolioData.skills.flatMap((cat) => cat.skills);
  const displaySkills =
    activeCategory === 'all'
      ? allSkills
      : portfolioData.skills[activeCategory]?.skills || [];

  return (
    <section id="keahlian" className="py-20 px-4 sm:px-6 relative bg-[var(--bg-secondary)]/30">
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

        {/* Category Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2">
          <button
            onClick={() => setActiveCategory('all')}
            className={`px-4 py-2 rounded-full text-xs font-bold transition-all ${
              activeCategory === 'all'
                ? 'bg-teal-500 text-white shadow-md shadow-teal-500/25'
                : 'bg-[var(--bg-pill)] hover:bg-[var(--bg-pill-hover)] text-[var(--text-secondary)] border border-[var(--border-subtle)]'
            }`}
          >
            {t.skills.categories.all}
          </button>
          {portfolioData.skills.map((cat, idx) => (
            <button
              key={idx}
              onClick={() => setActiveCategory(idx)}
              className={`px-4 py-2 rounded-full text-xs font-bold transition-all ${
                activeCategory === idx
                  ? 'bg-teal-500 text-white shadow-md shadow-teal-500/25'
                  : 'bg-[var(--bg-pill)] hover:bg-[var(--bg-pill-hover)] text-[var(--text-secondary)] border border-[var(--border-subtle)]'
              }`}
            >
              {cat.name[language]}
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 sm:gap-4">
          {displaySkills.map((skill, index) => (
            <div
              key={`${skill.name}-${index}`}
              className="p-4 rounded-2xl glass-card flex flex-col items-center justify-center text-center gap-3 group hover:border-teal-500/40 transition-all hover:scale-105"
            >
              <div className="relative w-10 h-10 flex items-center justify-center rounded-xl bg-[var(--bg-pill)] group-hover:bg-[var(--bg-pill-hover)] transition-colors p-2">
                {skill.iconSrc ? (
                  <Image
                    src={skill.iconSrc}
                    alt={`Logo ${skill.name}`}
                    width={32}
                    height={32}
                    className="object-contain max-h-7 max-w-7 transition-transform group-hover:scale-110"
                    unoptimized={skill.iconSrc.startsWith('http')}
                  />
                ) : (
                  <div className="w-6 h-6 rounded-full bg-teal-400/20" />
                )}
              </div>
              <span className="text-xs sm:text-sm font-bold text-[var(--text-primary)]">
                {skill.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
