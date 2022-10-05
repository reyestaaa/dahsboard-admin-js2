import "./App.css";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import DashboardPage from "../src/pages/dashboard/dashboard"

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Navigate to="dashboard"></Navigate>} />
        <Route exact path="/dashboard" element={<DashboardPage></DashboardPage>}></Route>
      </Routes>
    </Router>
  );
}

export default App;
