'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Users, Calendar, ArrowRight, Image as ImageIcon } from 'lucide-react';
import { portfolioData } from '@/data/portfolioData';
import { useLanguage } from '@/context/LanguageContext';
import { ImageLightbox } from '@/components/ui/ImageLightbox';

export const OrganizationSection = () => {
  const { language, t } = useLanguage();
  const [lightboxData, setLightboxData] = useState<{ images: string[]; initialIndex: number } | null>(null);

  return (
    <section id="organisasi" className="py-20 px-4 sm:px-6 relative">
      <div className="max-w-6xl mx-auto space-y-12">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-3">
            <div className="tag-badge">
              {t.organization.tag}
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-[var(--text-primary)]">
              {t.organization.title}
            </h2>
            <p className="text-sm sm:text-base text-[var(--text-muted)] max-w-2xl">
              {t.organization.subtitle}
            </p>
          </div>

          <Link
            href="/organization"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold bg-[var(--bg-pill)] hover:bg-[var(--bg-pill-hover)] text-[var(--text-primary)] border border-[var(--border-subtle)] transition-all shrink-0 hover:scale-105"
          >
            <span>Selengkapnya</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Organization Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {portfolioData.organizations.map((org, orgIdx) => (
            <div
              key={org.id}
              className="p-6 sm:p-8 rounded-3xl glass-card flex flex-col justify-between space-y-6 border border-[var(--border-subtle)]"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between gap-2">
                  <span className="px-3 py-1 rounded-full text-[10px] font-mono font-bold bg-[var(--bg-pill)] text-[var(--text-muted)] border border-[var(--border-subtle)]">
                    {org.period[language]}
                  </span>
                  <span className="text-teal-400 font-bold text-xs flex items-center gap-1">
                    <Users className="w-3.5 h-3.5" />
                    {org.photos.length} Foto
                  </span>
                </div>

                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-[var(--text-primary)]">
                    {org.role[language]}
                  </h3>
                  <p className="text-xs sm:text-sm font-semibold text-teal-500">
                    {org.organization}
                  </p>
                </div>

                <p className="text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed text-justify">
                  {org.summary[language]}
                </p>
              </div>

              {/* Photo Preview Strip */}
              {org.photos.length > 0 && (
                <div className="space-y-2 pt-2 border-t border-[var(--border-subtle)]">
                  <div className="grid grid-cols-3 gap-2">
                    {org.photos.slice(0, 3).map((photo, pIdx) => (
                      <div
                        key={pIdx}
                        onClick={() => setLightboxData({ images: org.photos, initialIndex: pIdx })}
                        className="relative aspect-square rounded-xl overflow-hidden cursor-pointer group border border-[var(--border-subtle)] bg-slate-900/50"
                      >
                        <Image
                          src={photo}
                          alt={`Dokumentasi ${org.organization} - ${pIdx + 1}`}
                          fill
                          className="object-cover group-hover:scale-110 transition-transform duration-300"
                          sizes="(max-width: 768px) 33vw, 20vw"
                        />
                        {pIdx === 2 && org.photos.length > 3 && (
                          <div className="absolute inset-0 bg-black/70 flex items-center justify-center text-white text-xs font-bold">
                            +{org.photos.length - 3}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Lightbox Modal */}
        {lightboxData && (
          <ImageLightbox
            isOpen={!!lightboxData}
            onClose={() => setLightboxData(null)}
            images={lightboxData.images}
            initialIndex={lightboxData.initialIndex}
          />
        )}
      </div>
    </section>
  );
};
