// Récupération des éléments HTML
const randomDogBtn = document.querySelector(".random-dog-btn");
const randomImgContainer = document.querySelector(".random-img-container");

// Fonction qui génère un chien aléatoire
const generateRandomDog = async () => {
  const response = await fetch("https://dog.ceo/api/breeds/image/random");
  const data = await response.json();
  const urlImage = data.message;
  randomImgContainer.innerHTML = `<img src="${urlImage}" alt="image du chien" />`;
};

// Evènement de clic sur le bouton
randomDogBtn.addEventListener("click", generateRandomDog);
