import { AboutSection } from "@/components/about-section";
import { ContactSection } from "@/components/contact-section";
import { ExperienceSection } from "@/components/experience-section";
import { Footer } from "@/components/footer";
import { HeroSection } from "@/components/hero-section";
import { MobileNav } from "@/components/mobile-nav";
import { ProjectsSection } from "@/components/projects-section";
import { ResumeSection } from "@/components/resume-section";
import { SidebarNav } from "@/components/sidebar-nav";
import { SkillsSection } from "@/components/skills-section";

export default function Home() {
  return (
    <div className="min-h-screen">
      <MobileNav />
      <div className="mx-auto grid w-full max-w-7xl grid-cols-1 px-5 md:px-8 lg:grid-cols-[18rem_1fr] lg:gap-10">
        <SidebarNav />
        <main id="main-content" className="pb-12 pt-24 md:pt-28 lg:pt-0">
          <HeroSection />
          <AboutSection />
          <ExperienceSection />
          <ProjectsSection />
          <SkillsSection />
          <ResumeSection />
          <ContactSection />
          <Footer />
        </main>
      </div>
    </div>
  );
}
