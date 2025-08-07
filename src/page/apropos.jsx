import React from "react";

export default function Apropos() {
  return (
    <>
      <section className="apropos">
        <div className="container">
          <h1 className="text-center titre">A propos</h1>
          <div className="row">
            <div className="col-12">
              <img src="..." className="img-fluid" alt="" />
              <div className="card p-4">
                <p className="text-center">
                  À propos de SimpleBlog SimpleBlog est une application de blog
                  conçue pour permettre aux utilisateurs de lire et de publier
                  des articles de manière simple et efficace. Avec une interface
                  intuitive créée avec React, l'application offre diverses
                  fonctionnalités pour enrichir l'expérience utilisateur. 🧑‍💻 Ce
                  que vous pouvez faire Consulter les articles : Parcourez la
                  liste des articles disponibles pour découvrir des contenus
                  variés. Lire les détails : Cliquez sur un article pour en lire
                  l'intégralité. Ajouter un nouvel article : Remplissez un
                  formulaire simple pour publier vos propres articles.
                  Validation des formulaires : Recevez un message d'erreur si
                  vous essayez de soumettre un formulaire vide.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
