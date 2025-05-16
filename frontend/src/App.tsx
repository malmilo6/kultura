import { HeroBanner } from "./components/HeroBanner";
import { EventHighlights } from "./components/EventHighlights";
import {AboutGrid} from "./components/AboutGrid.tsx";
import {VenueSection} from "./components/VenueSection.tsx";
import {HotelsSection} from "./components/HotelsSection.tsx";
import {ContactsSection} from "./components/ContactSection.tsx";
import {Footer} from "./components/Footer.tsx";


import { useState } from "react";
import { UserFormModal } from "./components/UserFormModal";
import "./styles/modal.css";

function App() {
    const [showForm, setShowForm] = useState(false);

    return (
        <>
            <div className={showForm ? "app-container blurred" : "app-container"}>
                <HeroBanner />
                <EventHighlights />
                <AboutGrid />
                <VenueSection />
                <HotelsSection />
                <ContactsSection />
                <Footer />
            </div>

            {showForm && <UserFormModal onClose={() => setShowForm(false)} />}
        </>
    );
}

export default App;
