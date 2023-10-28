import "./App.css";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import { Home, Email, Portfolio, NotFound } from "./pages/index";

const App: React.FC = () => {
  return (
    <div className="w-full h-screen font-mono">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/email" element={<Email />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}   

export default App;