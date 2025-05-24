import { HeroBanner }        from "../components/HeroBanner";
import { EventHighlights }   from "../components/EventHighlights";
import { AboutGrid }         from "../components/AboutGrid";
import { VenueSection }      from "../components/VenueSection";
import { HotelsSection }     from "../components/HotelsSection";
import { ContactsSection }   from "../components/ContactSection";
import { Footer }            from "../components/Footer";

export const MainPage = () => (
  <>
    <HeroBanner />
    <EventHighlights />
    <AboutGrid />
    <VenueSection />
    <HotelsSection />
    <ContactsSection />
    <Footer />
  </>
);