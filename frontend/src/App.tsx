import { Routes, Route } from "react-router-dom";
import { useState }      from "react";
import { MainPage }      from "./pages/MainPage";
import { QRLanding }     from "./pages/QRLanding";
import { UserFormModal } from "./components/UserFormModal";
import "./styles/modal.css";

function App() {
  const [showForm, setShowForm] = useState(false);

  return (
    <>
      <div className={showForm ? "app-container blurred" : "app-container"}>
        <Routes>
          <Route path="/"   element={<MainPage />} />
          <Route path="/qr" element={<QRLanding />} />
        </Routes>
      </div>

      {showForm && <UserFormModal onClose={() => setShowForm(false)} />}
    </>
  );
}

export default App;