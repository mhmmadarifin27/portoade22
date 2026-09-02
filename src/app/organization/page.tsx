'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeft, Users, Calendar } from 'lucide-react';
import { portfolioData } from '@/data/portfolioData';
import { useLanguage } from '@/context/LanguageContext';
import { ImageLightbox } from '@/components/ui/ImageLightbox';

export default function OrganizationPage() {
  const { language, t } = useLanguage();
  const [lightboxData, setLightboxData] = useState<{ images: string[]; initialIndex: number } | null>(null);

  return (
    <div className="pt-28 pb-20 px-4 sm:px-6 min-h-screen">
      <div className="max-w-5xl mx-auto space-y-12">
        {/* Breadcrumb */}
        <div>
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-xs font-bold text-teal-500 hover:text-teal-400 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Kembali ke Beranda</span>
          </Link>
        </div>

        {/* Page Header */}
        <div className="space-y-3">
          <div className="tag-badge">
            {t.organization.tag}
          </div>
          <h1 className="text-3xl sm:text-5xl font-black tracking-tight text-[var(--text-primary)]">
            {t.organization.title}
          </h1>
          <p className="text-sm sm:text-base text-[var(--text-muted)] max-w-2xl">
            {t.organization.subtitle}
          </p>
        </div>

        {/* Organization List */}
        <div className="space-y-12">
          {portfolioData.organizations.map((org) => (
            <div
              key={org.id}
              className="p-6 sm:p-10 rounded-3xl glass-card border border-[var(--border-subtle)] space-y-8"
            >
              <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 pb-6 border-b border-[var(--border-subtle)]">
                <div>
                  <span className="px-3 py-1 rounded-full text-xs font-bold bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 uppercase tracking-wider">
                    Kepemimpinan & Organisasi
                  </span>
                  <h2 className="text-2xl sm:text-3xl font-black text-[var(--text-primary)] mt-3">
                    {org.role[language]}
                  </h2>
                  <p className="text-base font-bold text-teal-500 mt-1">
                    {org.organization}
                  </p>
                </div>

                <div className="flex items-center gap-2 text-xs font-semibold text-[var(--text-muted)] bg-[var(--bg-pill)] px-4 py-2 rounded-xl border border-[var(--border-subtle)] w-fit shrink-0">
                  <Calendar className="w-4 h-4 text-teal-400" />
                  <span>{org.period[language]}</span>
                </div>
              </div>

              {/* Narrative Story */}
              <div className="space-y-4">
                <h3 className="text-xs font-bold uppercase tracking-wider text-[var(--text-muted)]">
                  Deskripsi & Peran Kontribusi
                </h3>
                <p className="text-sm sm:text-base text-[var(--text-secondary)] leading-relaxed text-justify">
                  {org.narrative[language]}
                </p>
              </div>

              {/* Photo Masonry Gallery */}
              {org.photos.length > 0 && (
                <div className="space-y-3 pt-4 border-t border-[var(--border-subtle)]">
                  <h3 className="text-xs font-bold uppercase tracking-wider text-[var(--text-muted)]">
                    Galeri Dokumentasi Kegiatan ({org.photos.length} Foto)
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-sm sm:max-w-none mx-auto">
                    {org.photos.map((photo, pIdx) => (
                      <div
                        key={pIdx}
                        onClick={() => setLightboxData({ images: org.photos, initialIndex: pIdx })}
                        className="relative aspect-[16/10] sm:aspect-square w-full rounded-2xl overflow-hidden cursor-pointer group border border-[var(--border-subtle)] bg-slate-950/70 shadow-md"
                      >
                        <Image
                          src={photo}
                          alt={`Dokumentasi ${org.organization} - ${pIdx + 1}`}
                          fill
                          className="object-cover object-center group-hover:scale-105 transition-transform duration-300"
                          sizes="(max-width: 640px) 90vw, (max-width: 1024px) 33vw, 25vw"
                        />
                        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                          <span className="px-3 py-1.5 rounded-full text-xs font-bold bg-black/80 text-white backdrop-blur-md border border-white/20">
                            Perbesar Foto
                          </span>
                        </div>
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
    </div>
  );
}
