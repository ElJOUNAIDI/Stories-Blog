import React from "react";
import { useState, useEffect } from "react";
export default function Home() {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const apiKey = "0a49f9ba359643d194b1a91083d318a4"; // Remplacez par votre clé API
   // Fonction pour obtenir la date au format YYYY-MM-DD
  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const response = await fetch(
          `https://newsapi.org/v2/everything?domains=wsj.com&apiKey=${apiKey}`
        );
        const data = await response.json();
        setArticles(data.articles.slice(0, 6)); // Récupérer seulement 6 articles
      } catch (error) {
        console.error("Erreur lors de la récupération des articles :", error);
      } finally {
        setLoading(false);
      }
    };

    fetchArticles();
    // Delay de 1 seconde avant de mettre fin au chargement
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="d-flex justify-content-center align-items-center vh-100">
        <div className="text-center">
          <div className="spinner-border" role="status">
            <span className="visually-hidden">Chargement...</span>
          </div>
          <h3 className="mt-3">Chargement en cours, veuillez patienter...</h3>
        </div>
      </div>
    );
  }
  return (
    <>
      <main>
        <section className="hero">
          <div className="container justify-content-center align-items-center">
            <div className="row">
              <div className="text_info col-12">
                <h1 className="text-center">
                  <strong>Stories</strong> , Blog
                </h1>
                <p className="text-center">Inspirez-vous avec nos derniers articles et histoires</p>
              </div>
            </div>
          </div>
        </section>
        <section className="stories">
          <div className="container">
            <div className="row info justify-content-center gap-3">
              {articles.map((article, index) => (
                <div key={index} className="col-12 col-md-4 col-lg-3 ">
                  <div className="card ">
                    <div className="card-body">
                      <h5 className="card-title">{article.title}</h5>
                      <p className="card-text">{article.description}</p>
                      <a
                        href={article.url}
                        className="btn btn-primary"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Lire l'article
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
