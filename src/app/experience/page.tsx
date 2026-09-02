'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeft, Calendar, CheckCircle2, FileText, Briefcase, GraduationCap } from 'lucide-react';
import { portfolioData } from '@/data/portfolioData';
import { useLanguage } from '@/context/LanguageContext';
import { PdfModal } from '@/components/ui/PdfModal';
import { ImageLightbox } from '@/components/ui/ImageLightbox';

export default function ExperiencePage() {
  const { language, t } = useLanguage();
  const [selectedPdf, setSelectedPdf] = useState<{ url: string; title: string } | null>(null);
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
            {t.experience.tag}
          </div>
          <h1 className="text-3xl sm:text-5xl font-black tracking-tight text-[var(--text-primary)]">
            {t.experience.title}
          </h1>
          <p className="text-sm sm:text-base text-[var(--text-muted)] max-w-2xl">
            {portfolioData.education[language]} • IPK {portfolioData.gpa}
          </p>
        </div>

        {/* Experience List */}
        <div className="space-y-12">
          {portfolioData.experience.map((exp) => (
            <div
              key={exp.id}
              className="p-6 sm:p-10 rounded-3xl glass-card border border-[var(--border-subtle)] space-y-8"
            >
              {/* Top Banner */}
              <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 pb-6 border-b border-[var(--border-subtle)]">
                <div>
                  <span className="px-3 py-1 rounded-full text-xs font-bold bg-teal-500/10 text-teal-400 border border-teal-500/20 uppercase tracking-wider">
                    {exp.type[language]}
                  </span>
                  <h2 className="text-2xl sm:text-3xl font-black text-[var(--text-primary)] mt-3">
                    {exp.role[language]}
                  </h2>
                  <p className="text-base font-bold text-teal-500 mt-1">
                    {exp.company}
                  </p>
                </div>

                <div className="flex items-center gap-2 text-xs font-semibold text-[var(--text-muted)] bg-[var(--bg-pill)] px-4 py-2 rounded-xl border border-[var(--border-subtle)] w-fit shrink-0">
                  <Calendar className="w-4 h-4 text-teal-400" />
                  <span>{exp.period[language]}</span>
                </div>
              </div>

              {/* Narrative & Highlights */}
              <div className="space-y-6">
                <p className="text-sm sm:text-base text-[var(--text-secondary)] leading-relaxed text-justify">
                  {exp.detail[language]}
                </p>

                <div className="space-y-3">
                  <h3 className="text-xs font-bold uppercase tracking-wider text-[var(--text-muted)]">
                    {t.experience.keyResponsibilities}
                  </h3>
                  <ul className="space-y-2.5">
                    {exp.highlights[language].map((hl, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-[var(--text-secondary)]">
                        <CheckCircle2 className="w-4 h-4 text-teal-500 shrink-0 mt-0.5" />
                        <span>{hl}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Photo Galleries */}
              {exp.photos.length > 0 && (
                <div className="space-y-3 pt-4 border-t border-[var(--border-subtle)]">
                  <h3 className="text-xs font-bold uppercase tracking-wider text-[var(--text-muted)] text-center sm:text-left">
                    {t.experience.documentation}
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 max-w-sm sm:max-w-none mx-auto">
                    {exp.photos.map((photo, pIdx) => (
                      <div
                        key={pIdx}
                        onClick={() => setLightboxData({ images: exp.photos, initialIndex: pIdx })}
                        className="relative aspect-[16/10] w-full rounded-2xl overflow-hidden cursor-pointer group border border-[var(--border-subtle)] bg-slate-950/70 shadow-md"
                      >
                        <Image
                          src={photo}
                          alt={`Dokumentasi ${exp.company} - ${pIdx + 1}`}
                          fill
                          className="object-cover object-center group-hover:scale-105 transition-transform duration-300"
                          sizes="(max-width: 640px) 90vw, (max-width: 1024px) 50vw, 33vw"
                        />
                        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                          <span className="px-3.5 py-1.5 rounded-full text-xs font-bold bg-black/80 text-white backdrop-blur-md border border-white/20">
                            Lihat Foto
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Documents */}
              {exp.documents.length > 0 && (
                <div className="space-y-4 pt-4 border-t border-[var(--border-subtle)]">
                  <h3 className="text-xs font-bold uppercase tracking-wider text-[var(--text-muted)]">
                    Dokumen Verifikasi & Sertifikat Resmi
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {exp.documents.map((doc, dIdx) => (
                      <div
                        key={dIdx}
                        className="p-4 rounded-2xl glass-panel flex items-center justify-between gap-3 border border-[var(--border-subtle)]"
                      >
                        <div className="flex items-center gap-3 min-w-0">
                          <div className="p-2.5 rounded-xl bg-teal-500/10 text-teal-400 shrink-0">
                            <FileText className="w-5 h-5" />
                          </div>
                          <span className="text-xs sm:text-sm font-bold text-[var(--text-primary)] truncate">
                            {doc.title[language]}
                          </span>
                        </div>
                        <button
                          onClick={() => setSelectedPdf({ url: doc.file, title: doc.title[language] })}
                          className="px-3 py-1.5 rounded-lg text-xs font-bold bg-teal-500 hover:bg-teal-400 text-white transition-colors shrink-0"
                        >
                          Buka PDF
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              )}
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
