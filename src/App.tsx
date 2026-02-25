import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/layout/Navbar";
import Sidebar from "./components/layout/Sidebar";
import ChallengeView from "./pages/ChallengeView";
import Gallery from "./pages/Gallery";
import Home from "./pages/Home";

function App() {
  return (
    <>
      <div className="bg-jdbase overflow-x-hidden ">
        <Navbar />
        <Sidebar />
        {/* Home Contents */}
        <main className="ml-13 w-7/9 p-10 min-h-screen h-full">
          <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/challenge" element={<ChallengeView />}/>
            <Route path="/gallery" element={<Gallery />}/>
          </Routes>
        </main>
      </div>
    </>
  );
}

export default App;
