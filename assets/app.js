const buttonAjouter = document.querySelector(".buttonAjouter");
const buttonSupprimer = document.querySelector(".buttonSupprimer");

const section = document.querySelector("#section1");
const image = section.querySelector("#image");
const titre = section.querySelector("#titre");
const description = section.querySelector("#description");
const container = section.querySelector(".container");
const containerImg = section.querySelector(".container-img");

function ajouterCard() {
      const card = document.querySelector("div");
      card.classList.add("card");
      const imgContainer = document.querySelector("div");
      imgContainer.classList.add("container-img");
      card.appendChild(imgContainer);
      const img = document.querySelector("img");
      img.src = image.value;
      imgContainer.appendChild(img);
      const titreCard = document.createElement("h3");
      titreCard.textContent = titre.value;
      card.appendChild(titreCard);
      const p = document.createElement("p");
      p.textContent = description.value;
      card.appendChild(p);
      container.appendChild(card);
}

buttonAjouter.addEventListener("click", function (e) {
      e.preventDefault();
      ajouterCard();
});

// function deleteCard() {
//       const card = document.querySelector(".cardPlus");
//       console.log(card);
//       section.removeChild(card);
// }
// const form = document.querySelector("form");

// form.addEventListener("reset", function () {
//       console.log("Le formulaire a été réinitialisé.");
// });
