import { Route, Routes } from "react-router-dom";
import LandigPage from "../features/landingpage/LandingPage";

function AppRoutes() {
    return (
        <Routes>
            <Route path="/" element={<LandigPage />} />
        </Routes>
    );
}

export default AppRoutes;