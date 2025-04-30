// import "./App.css";
import Landing from "./Components/Landing";
import Events from "./Components/Events";
import Navbar from "./Components/Navbar";
import EventInfo from "./Components/EventInfo";
import RegistrationForm from "./Components/RegistrationForm";
import Team from "./Components/Team";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <div>
        <Routes>
          <Route path="/" element={<Landing></Landing>} />
          <Route path="/events" element={<Events></Events>} />
          <Route path="/event-registration" element={<RegistrationForm />} />
          <Route path="/eventInfo" element={<EventInfo></EventInfo>} />
          <Route path="/members" element={<Team></Team>} />
        </Routes>
      </div>
    </>
  );
}

export default App;
