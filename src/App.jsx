import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Header.jsx";
import Content from "./Content.jsx";
import Footer from "./Footer.jsx";
import Projects from "./Projects.jsx";
function App() {
  return (
    <BrowserRouter>
      <div className="lg:p-24 lg:mx-auto md:p-24 md:w-full h-screen lg:w-6/12 m-5 px-6 md:flex flex-col justify-between">
        <Header />

        <Routes>
          <Route path="/" element={<Content />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
