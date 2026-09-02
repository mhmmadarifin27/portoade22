'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeft, Award, Eye, FileText } from 'lucide-react';
import { portfolioData } from '@/data/portfolioData';
import { useLanguage } from '@/context/LanguageContext';
import { PdfModal } from '@/components/ui/PdfModal';

export default function AchievementsPage() {
  const { language, t } = useLanguage();
  const [selectedPdf, setSelectedPdf] = useState<{ url: string; title: string } | null>(null);

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
            {t.achievements.tag}
          </div>
          <h1 className="text-3xl sm:text-5xl font-black tracking-tight text-[var(--text-primary)]">
            {t.achievements.title}
          </h1>
          <p className="text-sm sm:text-base text-[var(--text-muted)] max-w-2xl">
            {t.achievements.subtitle}
          </p>
        </div>

        {/* Achievements List */}
        <div className="space-y-8">
          {portfolioData.achievements.map((item) => (
            <div
              key={item.id}
              className="p-6 sm:p-8 rounded-3xl glass-card border border-[var(--border-subtle)] flex flex-col md:flex-row items-center gap-8 group"
            >
              {/* Preview Thumbnail */}
              <div
                onClick={() => setSelectedPdf({ url: item.file, title: item.title[language] })}
                className="relative w-full md:w-72 aspect-[4/3] rounded-2xl overflow-hidden cursor-pointer border border-[var(--border-subtle)] bg-slate-900/60 shrink-0"
              >
                <Image
                  src={item.preview}
                  alt={`Sertifikat ${item.title[language]}`}
                  fill
                  className="object-cover object-top group-hover:scale-105 transition-transform duration-300"
                  sizes="(max-width: 768px) 100vw, 300px"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-bold bg-teal-500 text-white shadow-lg backdrop-blur-sm">
                    <Eye className="w-3.5 h-3.5" />
                    Pratinjau Dokumen
                  </span>
                </div>
              </div>

              {/* Information */}
              <div className="flex-1 space-y-4">
                <div className="flex items-center gap-2">
                  <span className="px-3 py-1 rounded-full text-xs font-mono font-bold bg-amber-500/10 text-amber-500 border border-amber-500/20">
                    Tahun {item.year}
                  </span>
                  <span className="text-xs font-semibold text-[var(--text-muted)]">
                    {item.institution}
                  </span>
                </div>

                <h2 className="text-xl sm:text-2xl font-black text-[var(--text-primary)] group-hover:text-teal-400 transition-colors">
                  {item.title[language]}
                </h2>

                <p className="text-sm text-[var(--text-secondary)] leading-relaxed text-justify">
                  {item.description[language]}
                </p>

                <div className="pt-2">
                  <button
                    onClick={() => setSelectedPdf({ url: item.file, title: item.title[language] })}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold bg-teal-500 hover:bg-teal-400 text-white transition-all shadow-md shadow-teal-500/20"
                  >
                    <FileText className="w-3.5 h-3.5" />
                    <span>{t.achievements.viewProof}</span>
                  </button>
                </div>
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
    </div>
  );
}
