import Banner from "./components/banner";
import LenisScroll from "./components/lenis-scroll";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import HeroSection from "./sections/hero-section";
import HowItWorksSection from "./sections/how-it-works-section";
import MeetOurTeamSection from "./sections/meet-our-team-section";
import OurTestimonialsSection from "./sections/our-testimonials-section";
import OurPricingSection from "./sections/our-pricing-section";
import FaqSection from "./sections/faq-section";
import CallToActionSection from "./sections/call-to-action-section";
import TrendingContentSection from "./sections/TrendingContentSection";
import ProcessSection from "./sections/ProcessSection";
import PopularProgramsSection from "./sections/PopularProgramsSection";
import AboutContactSection from "./sections/AboutContactSection";
import FloatingWhatsAppButton from "./sections/FloatingWhatsAppButton";

export default function App() {
    return (
        <>
            <LenisScroll />
            {/* <Banner /> */}
            <Navbar />
            <main className='px-4'>
                <HeroSection />
                <HowItWorksSection />
                <MeetOurTeamSection />
                <OurTestimonialsSection />
                <OurPricingSection />
                <ProcessSection />
                <PopularProgramsSection />
                <FaqSection />
                <AboutContactSection />
                <FloatingWhatsAppButton />
                {/* <CallToActionSection /> */}
            </main>
            <Footer />
        </>
    );
}
