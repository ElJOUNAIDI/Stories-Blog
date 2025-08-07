import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./page/home";
import SinglePage from "./page/singlePage";
import Post from "./post/post";
import TopBar from "./topBar/TopBar";
import Footer from "./Footer/Footer";
import Apropos from "./page/apropos";
import Contact from "./page/contact";

export default function App() {
  return (
    <BrowserRouter>
        <TopBar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Apropos" element={<Apropos />} />
            <Route path="/blog" element={<Post />} />
            <Route path="/Contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
    </BrowserRouter>
  );
}
