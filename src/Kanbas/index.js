// import {Link} from "react-router-dom";
// import Nav from "../Nav";
import "../index.css";
import { Route, Routes, Navigate, useLocation } from "react-router";
import KanbasNavigation from "./KanbasNavigation";
import Courses from "./Courses";
import Account from "./Account";
import Dashboard from "./Dashboard";

function Kanbas() {
  const location = useLocation();
  return (
    <div className="d-flex">
      <div style={{ marginRight: '30px' }}>
      <KanbasNavigation />
      </div>
      <div>
        <Routes>
          <Route path="/" element={<Navigate to="Dashboard" />} />
          <Route path="Account" element={<Account />} />
          <Route path="Dashboard" element={<Dashboard />} />
          <Route path="Courses/:courseId/*" element={<Courses />} />
          <Route path="Calendar" element={<h1>Calendar</h1>} />
        </Routes>
      </div>
    </div>
  );
}
export default Kanbas;