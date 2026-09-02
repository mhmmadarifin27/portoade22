import { HeroSection } from '@/components/home/HeroSection';
import { AboutSection } from '@/components/home/AboutSection';
import { SkillsSection } from '@/components/home/SkillsSection';
import { ProjectsSection } from '@/components/home/ProjectsSection';
import { ExperienceSection } from '@/components/home/ExperienceSection';
import { OrganizationSection } from '@/components/home/OrganizationSection';
import { AchievementsSection } from '@/components/home/AchievementsSection';
import { CertificatesSection } from '@/components/home/CertificatesSection';
import { ContactSection } from '@/components/home/ContactSection';

export default function Home() {
  return (
    <div className="space-y-6">
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <ExperienceSection />
      <OrganizationSection />
      <AchievementsSection />
      <CertificatesSection />
      <ContactSection />
    </div>
  );
}
