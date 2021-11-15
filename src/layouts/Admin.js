import { Routes, Route } from "react-router-dom";

import AdminNavbar from "../components/Common/Navbar/AdminNavbar";
import Sidebar from "../components/Common/Sidebar/Sidebar";

import Dashboard from "../views/admin/Dashboard";
import Event from "../views/admin/Event";

const Admin = () => {
  return (
    <>
      <Sidebar />
      <div className="relative md:ml-64 bg-gray-100 h-screen">
        <AdminNavbar />
        <div>
          <Routes>
            <Route path="/admin/dashboard" exact element={<Dashboard />} />
            <Route path="/admin/events" exact element={<Event />} />
          </Routes>
        </div>
      </div>
    </>
  );
};

export default Admin;
