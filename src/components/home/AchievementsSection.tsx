'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Award, Trophy, ArrowRight, FileText, Eye } from 'lucide-react';
import { portfolioData } from '@/data/portfolioData';
import { useLanguage } from '@/context/LanguageContext';
import { PdfModal } from '@/components/ui/PdfModal';

export const AchievementsSection = () => {
  const { language, t } = useLanguage();
  const [selectedPdf, setSelectedPdf] = useState<{ url: string; title: string } | null>(null);

  return (
    <section id="pencapaian" className="py-20 px-4 sm:px-6 relative bg-[var(--bg-secondary)]/30">
      <div className="max-w-6xl mx-auto space-y-12">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-3">
            <div className="tag-badge">
              {t.achievements.tag}
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-[var(--text-primary)]">
              {t.achievements.title}
            </h2>
            <p className="text-sm sm:text-base text-[var(--text-muted)] max-w-2xl">
              {t.achievements.subtitle}
            </p>
          </div>

          <Link
            href="/achievements"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold bg-[var(--bg-pill)] hover:bg-[var(--bg-pill-hover)] text-[var(--text-primary)] border border-[var(--border-subtle)] transition-all shrink-0 hover:scale-105"
          >
            <span>Selengkapnya</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Achievements Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {portfolioData.achievements.map((item) => (
            <div
              key={item.id}
              className="p-6 rounded-3xl glass-card flex flex-col justify-between space-y-5 border border-[var(--border-subtle)] group"
            >
              <div className="space-y-4">
                {/* Preview Thumbnail */}
                <div
                  onClick={() => setSelectedPdf({ url: item.file, title: item.title[language] })}
                  className="relative aspect-[4/3] rounded-2xl overflow-hidden cursor-pointer border border-[var(--border-subtle)] bg-slate-900/60"
                >
                  <Image
                    src={item.preview}
                    alt={`Sertifikat ${item.title[language]}`}
                    fill
                    className="object-cover object-top group-hover:scale-105 transition-transform duration-300"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-bold bg-teal-500 text-white shadow-lg backdrop-blur-sm">
                      <Eye className="w-3.5 h-3.5" />
                      Pratinjau Dokumen
                    </span>
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="flex items-center justify-between gap-2">
                    <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold bg-amber-500/10 text-amber-500 border border-amber-500/20">
                      {item.year}
                    </span>
                    <span className="text-[10px] font-semibold text-[var(--text-muted)] truncate max-w-[150px]">
                      {item.institution}
                    </span>
                  </div>

                  <h3 className="text-base font-bold text-[var(--text-primary)] group-hover:text-teal-400 transition-colors line-clamp-2">
                    {item.title[language]}
                  </h3>

                  <p className="text-xs text-[var(--text-secondary)] leading-relaxed line-clamp-3">
                    {item.description[language]}
                  </p>
                </div>
              </div>

              {/* Action Button */}
              <div className="pt-3 border-t border-[var(--border-subtle)]">
                <button
                  onClick={() => setSelectedPdf({ url: item.file, title: item.title[language] })}
                  className="w-full flex items-center justify-center gap-2 py-2 rounded-xl text-xs font-bold bg-[var(--bg-pill)] hover:bg-[var(--bg-pill-hover)] text-teal-500 border border-[var(--border-subtle)] transition-all"
                >
                  <FileText className="w-3.5 h-3.5" />
                  <span>{t.achievements.viewProof}</span>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* PDF Modal */}
        {selectedPdf && (
          <PdfModal
            isOpen={!!selectedPdf}
            onClose={() => setSelectedPdf(null)}
            pdfUrl={selectedPdf.url}
            title={selectedPdf.title}
          />
        )}
      </div>
    </section>
  );
};
