import dynamic from "next/dynamic";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import WhatsAppButton from "@/components/WhatsAppButton";

const CoreBusinessAreas = dynamic(
  () => import("@/components/CoreBusinessAreas"),
  { loading: () => <SectionSkeleton /> }
);
const BusinessSectors = dynamic(() => import("@/components/BusinessSectors"), {
  loading: () => <SectionSkeleton />,
});
const AboutSection = dynamic(() => import("@/components/AboutSection"), {
  loading: () => <SectionSkeleton />,
});
const CurrentProjects = dynamic(() => import("@/components/CurrentProjects"), {
  loading: () => <SectionSkeleton />,
});
const ProjectGallery = dynamic(() => import("@/components/ProjectGallery"), {
  loading: () => <SectionSkeleton />,
});
const WhyChooseUs = dynamic(() => import("@/components/WhyChooseUs"), {
  loading: () => <SectionSkeleton />,
});
const FutureDevelopmentPipeline = dynamic(
  () => import("@/components/FutureDevelopmentPipeline"),
  { loading: () => <SectionSkeleton /> }
);
const GlobalReach = dynamic(() => import("@/components/GlobalReach"), {
  loading: () => <SectionSkeleton />,
});
const StatsSection = dynamic(() => import("@/components/StatsSection"), {
  loading: () => <SectionSkeleton />,
});
const OurApproach = dynamic(() => import("@/components/OurApproach"), {
  loading: () => <SectionSkeleton />,
});
const FounderSection = dynamic(() => import("@/components/FounderSection"), {
  loading: () => <SectionSkeleton />,
});
const CompanyProfileSection = dynamic(
  () => import("@/components/CompanyProfileSection"),
  { loading: () => <SectionSkeleton /> }
);
const PartnershipCTA = dynamic(() => import("@/components/PartnershipCTA"), {
  loading: () => <SectionSkeleton />,
});
const ContactSection = dynamic(() => import("@/components/ContactSection"), {
  loading: () => <SectionSkeleton />,
});
const Footer = dynamic(() => import("@/components/Footer"));

function SectionSkeleton() {
  return <div className="h-24 animate-pulse bg-section-bg lg:h-48" aria-hidden="true" />;
}

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <AboutSection />
        <CoreBusinessAreas />
        <BusinessSectors />
        <CurrentProjects />
        <WhyChooseUs />
        <FutureDevelopmentPipeline />
        <ProjectGallery />
        <GlobalReach />
        <StatsSection />
        <OurApproach />
        <FounderSection />
        <CompanyProfileSection />
        <PartnershipCTA />
        <ContactSection />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
