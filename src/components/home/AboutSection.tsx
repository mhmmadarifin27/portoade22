'use client';

import React from 'react';
import Image from 'next/image';
import { Server, Code, Database, Users, GraduationCap, Award } from 'lucide-react';
import { portfolioData } from '@/data/portfolioData';
import { useLanguage } from '@/context/LanguageContext';

export const AboutSection = () => {
  const { language, t } = useLanguage();

  const getPillarIcon = (iconName: string) => {
    switch (iconName) {
      case 'Server':
        return <Server className="w-6 h-6 text-teal-400" />;
      case 'Code':
        return <Code className="w-6 h-6 text-cyan-400" />;
      case 'Database':
        return <Database className="w-6 h-6 text-indigo-400" />;
      case 'Users':
        return <Users className="w-6 h-6 text-amber-400" />;
      default:
        return <Award className="w-6 h-6 text-teal-400" />;
    }
  };

  return (
    <section id="tentang" className="py-20 px-4 sm:px-6 relative">
      <div className="max-w-6xl mx-auto space-y-16">
        {/* Section Header */}
        <div className="space-y-3">
          <div className="tag-badge">
            {t.about.tag}
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-[var(--text-primary)]">
            {t.about.title}
          </h2>
          <p className="text-sm sm:text-base text-[var(--text-muted)] max-w-2xl">
            {t.about.subtitle}
          </p>
        </div>

        {/* Profile + Story Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Portrait Photo with Aesthetic Frame */}
          <div className="lg:col-span-5 relative group">
            <div className="relative aspect-[4/5] max-w-md mx-auto rounded-3xl overflow-hidden shadow-2xl border border-[var(--border-subtle)] bg-gradient-to-tr from-teal-500/20 to-indigo-500/10">
              <Image
                src="/images/about/ade-kurniawan-profile.png"
                alt="Foto Profil Ade Kurniawan"
                fill
                className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                sizes="(max-width: 768px) 100vw, 500px"
                priority
              />
            </div>
          </div>

          {/* Bio Story & Core Interests */}
          <div className="lg:col-span-7 space-y-6">
            <div className="space-y-4 text-sm sm:text-base text-[var(--text-secondary)] leading-relaxed text-justify">
              <p>
                {portfolioData.about[language]}
              </p>
            </div>

            {/* Core Interests Tags */}
            <div className="space-y-3">
              <h4 className="text-xs font-bold uppercase tracking-wider text-[var(--text-muted)]">
                {t.about.interestsTitle}
              </h4>
              <div className="flex flex-wrap gap-2">
                {portfolioData.interests[language].map((interest) => (
                  <span
                    key={interest}
                    className="px-3 py-1.5 rounded-full text-xs font-semibold bg-[var(--bg-pill)] hover:bg-[var(--bg-pill-hover)] text-[var(--text-secondary)] border border-[var(--border-subtle)] transition-colors"
                  >
                    {interest}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* 4 Pillars Grid */}
        <div className="space-y-6 pt-6">
          <div className="space-y-1">
            <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-[var(--text-primary)]">
              {t.pillars.title}
            </h3>
            <p className="text-xs sm:text-sm text-[var(--text-muted)]">
              {t.pillars.subtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {portfolioData.pillars.map((pillar, idx) => (
              <div key={idx} className="p-6 rounded-2xl glass-card space-y-3 flex flex-col justify-between">
                <div className="space-y-3">
                  <div className="p-3 rounded-xl bg-[var(--bg-pill)] w-fit border border-[var(--border-subtle)]">
                    {getPillarIcon(pillar.iconName)}
                  </div>
                  <h4 className="font-bold text-base text-[var(--text-primary)]">
                    {pillar.title[language]}
                  </h4>
                  <p className="text-xs sm:text-sm text-[var(--text-muted)] leading-relaxed">
                    {pillar.desc[language]}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
