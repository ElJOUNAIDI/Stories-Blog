import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./page/home";
import SinglePage from "./page/singlePage";
import Post from "./post/post";
import TopBar from "./topBar/TopBar";
import Footer from "./Footer/Footer";
import Apropos from "./page/apropos";
import Contact from "./page/contact";
import { useEffect, useState } from "react";

export default function App() {
  const [articles, setArticles] = useState([]); // État pour stocker les articles

  const addArticle = (newArticle) => {
    setArticles((prev) => [...prev, newArticle]); // Ajouter un nouvel article
  };
    useEffect(() => {
    const fetchArticles = async () => {
      const apiKey = "0a49f9ba359643d194b1a91083d318a4";
      try {
        const response = await fetch(
          `https://newsapi.org/v2/everything?domains=wsj.com&apiKey=${apiKey}`
        );
        const data = await response.json();
        const apiArticles = data.articles || [];
        const storedArticles = JSON.parse(localStorage.getItem("articles")) || [];
        
        // Combiner les articles de l'API et du localStorage
        setArticles((prev) => [...prev, ...apiArticles, ...storedArticles]);
      } catch (error) {
        console.error("Erreur lors de la récupération des articles :", error);
      }
    };

    fetchArticles();
  }, []);
  return (
    <BrowserRouter>
        <TopBar addArticle={addArticle} />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Apropos" element={<Apropos />} />
            <Route path="/blog" element={<Post articles={articles} />} />
            <Route path="/Contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
    </BrowserRouter>
  );
}
