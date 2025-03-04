const buttonAjouter = document.querySelector(".buttonAjouter");
const buttonSupprimer = document.querySelector(".buttonSupprimer");

const section = document.querySelector("#section1");
function ajouterCard () {
	let image = document.querySelector("#image");
	let titre = document.querySelector("#titre");
	let text= document.querySelector("#text");
	const divCard = document.createElement("div");
	divCard.append(text,titre,image);
	divCard.style.display = "flex"
	divCard.style.flexDirection = "column"
	section.appendChild(divCard);
}