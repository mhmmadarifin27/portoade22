import React from 'react';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeft, ExternalLink, CheckCircle2, Layers, Calendar, Tag, Sparkles } from 'lucide-react';
import { portfolioData } from '@/data/portfolioData';
import { ProjectSlider } from '@/components/ui/ProjectSlider';

interface ProjectDetailProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return portfolioData.projects.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({ params }: ProjectDetailProps) {
  const { slug } = await params;
  const project = portfolioData.projects.find((p) => p.slug === slug);
  if (!project) return { title: 'Proyek Tidak Ditemukan' };

  return {
    title: `${project.name.id} | Ade Kurniawan Portofolio`,
    description: project.description.id,
  };
}

export default async function ProjectDetailPage({ params }: ProjectDetailProps) {
  const { slug } = await params;
  const project = portfolioData.projects.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  // Related projects
  const otherProjects = portfolioData.projects.filter((p) => p.slug !== slug).slice(0, 3);

  return (
    <div className="pt-28 pb-20 px-4 sm:px-6 min-h-screen">
      <div className="max-w-4xl mx-auto space-y-10">
        {/* Back Link */}
        <div>
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 text-xs font-bold text-teal-500 hover:text-teal-400 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Kembali ke Semua Proyek</span>
          </Link>
        </div>

        {/* Project Header */}
        <div className="space-y-4">
          <div className="flex flex-wrap items-center gap-3 text-xs font-semibold">
            <span className="px-3 py-1 rounded-full bg-teal-500/10 text-teal-400 border border-teal-500/20 uppercase tracking-wider font-bold">
              {project.type.id}
            </span>
            <span className="flex items-center gap-1 text-[var(--text-muted)] font-mono">
              <Calendar className="w-3.5 h-3.5" />
              {project.year}
            </span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-black tracking-tight text-[var(--text-primary)] leading-tight">
            {project.name.id}
          </h1>

          <p className="text-base sm:text-lg text-[var(--text-secondary)] leading-relaxed">
            {project.description.id}
          </p>
        </div>

        {/* Main Screenshot Slideshow */}
        <div className="rounded-3xl overflow-hidden border border-[var(--border-subtle)] shadow-2xl bg-slate-900/60">
          <ProjectSlider slides={project.slides} alt={project.name.id} autoPlay={true} />
        </div>

        {/* Two Column Details Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          {/* Main Content Column */}
          <div className="md:col-span-8 space-y-8">
            {/* Impact Box */}
            <div className="p-6 rounded-2xl bg-teal-950/30 border border-teal-500/30 space-y-2">
              <h3 className="text-xs font-bold uppercase tracking-wider text-teal-400 flex items-center gap-2">
                <Sparkles className="w-4 h-4" />
                Dampak & Hasil Solusi
              </h3>
              <p className="text-sm sm:text-base text-teal-100 font-medium leading-relaxed">
                {project.impact.id}
              </p>
            </div>

            {/* Key Features */}
            {project.features && (
              <div className="p-6 rounded-2xl glass-card space-y-4 border border-[var(--border-subtle)]">
                <h3 className="text-sm font-bold uppercase tracking-wider text-[var(--text-primary)] flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-teal-400" />
                  Fitur Utama & Fungsionalitas Sistem
                </h3>
                <ul className="space-y-2.5">
                  {project.features.id.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-[var(--text-secondary)]">
                      <span className="w-1.5 h-1.5 rounded-full bg-teal-400 mt-2 shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          {/* Sidebar / Meta Column */}
          <div className="md:col-span-4 space-y-6">
            {/* Tech Stack Card */}
            <div className="p-6 rounded-2xl glass-card space-y-4 border border-[var(--border-subtle)]">
              <h3 className="text-xs font-bold uppercase tracking-wider text-[var(--text-muted)] flex items-center gap-2">
                <Layers className="w-4 h-4 text-teal-400" />
                Teknologi yang Digunakan
              </h3>
              <div className="flex flex-wrap gap-2">
                {project.stack.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 rounded-xl text-xs font-semibold bg-[var(--bg-pill)] text-[var(--text-primary)] border border-[var(--border-subtle)]"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Live Demo Action */}
            <div className="p-6 rounded-2xl glass-card space-y-3 border border-[var(--border-subtle)] text-center">
              <h4 className="font-bold text-sm text-[var(--text-primary)]">Demo Langsung</h4>
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl font-bold text-xs bg-gradient-to-r from-teal-500 to-cyan-600 hover:from-teal-400 hover:to-cyan-500 text-white shadow-lg shadow-teal-500/20 transition-all hover:scale-[1.02]"
              >
                <ExternalLink className="w-4 h-4" />
                <span>Buka Demo Aplikasi</span>
              </a>
              <p className="text-[10px] text-[var(--text-muted)] leading-normal">
                Catatan: URL demo dikonfigurasi untuk lingkungan lokal/staging.
              </p>
            </div>
          </div>
        </div>

        {/* Other Projects Recommendations */}
        <div className="pt-12 border-t border-[var(--border-subtle)] space-y-6">
          <h3 className="text-xl font-bold text-[var(--text-primary)]">
            Proyek Lainnya yang Menarik
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {otherProjects.map((other) => (
              <Link
                key={other.slug}
                href={`/projects/${other.slug}`}
                className="p-4 rounded-2xl glass-card space-y-2 border border-[var(--border-subtle)] group hover:border-teal-500/40 transition-all"
              >
                <span className="text-[10px] font-bold text-teal-400 uppercase tracking-wider">
                  {other.type.id}
                </span>
                <h4 className="font-bold text-sm text-[var(--text-primary)] group-hover:text-teal-400 transition-colors line-clamp-1">
                  {other.name.id}
                </h4>
                <p className="text-xs text-[var(--text-muted)] line-clamp-2">
                  {other.description.id}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
