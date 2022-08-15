import {
    BrowserRouter as Router,
    Routes,
    Route
} from "react-router-dom";
import { Banho } from "./pages/Banho";
import { Consultas } from "./pages/Consultas";
import { Index } from "./pages/Index";
import { Produtos } from "./pages/Produtos";
import { Sobre } from "./pages/Sobre";
import { TaxiDog } from "./pages/Taxi";

export function AppRoutes() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Index />} />
                <Route path="/produtos" element={<Produtos />} />
                <Route path="/sobre" element={<Sobre />} />
                <Route path="/banho" element={<Banho />} />
                <Route path="/taxidog" element={<TaxiDog />} />
                <Route path="/consultas" element={<Consultas />} />
            </Routes>
        </Router>
    )
}

