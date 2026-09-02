import type { Metadata, Viewport } from 'next';
import './globals.css';
import { ThemeProvider } from '@/context/ThemeContext';
import { LanguageProvider } from '@/context/LanguageContext';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';

export const metadata: Metadata = {
  metadataBase: new URL('https://adekurniawan.vercel.app'),
  title: 'Ade Kurniawan | Portofolio IT Support & Web Development',
  description:
    'Portofolio resmi Ade Kurniawan, S.Kom. Profesional di bidang IT Support, Full-Stack Web Development, Data Administration, dan Human Resources.',
  keywords: [
    'Ade Kurniawan',
    'Portofolio Ade Kurniawan',
    'IT Support Palembang',
    'Web Developer Laravel',
    'Next.js Portfolio',
    'Data Administration',
    'Human Resources',
    'Pertamina Internasional RU III',
  ],
  authors: [{ name: 'Ade Kurniawan' }],
  creator: 'Ade Kurniawan',
  openGraph: {
    type: 'website',
    locale: 'id_ID',
    url: 'https://adekurniawan.vercel.app',
    title: 'Ade Kurniawan | Portofolio IT Support & Web Development',
    description:
      'Portofolio profesional Ade Kurniawan — Berpengalaman dalam pengembangan web, dukungan IT, dan administrasi data.',
    siteName: 'Ade Kurniawan Portfolio',
    images: [
      {
        url: '/images/about/ade-kurniawan-profile.png',
        width: 800,
        height: 1000,
        alt: 'Ade Kurniawan Profile',
      },
    ],
  },
  icons: {
    icon: '/favicon.ico',
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#090d16' },
  ],
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" suppressHydrationWarning>
      <body className="antialiased min-h-screen flex flex-col bg-[var(--bg-primary)] text-[var(--text-primary)] selection:bg-teal-500 selection:text-white">
        <ThemeProvider>
          <LanguageProvider>
            <Navbar />
            <main className="flex-1">
              {children}
            </main>
            <Footer />
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
