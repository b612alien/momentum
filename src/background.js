const images = ["1.webp", "2.webp", "3.jpeg", "4.avif", "5.jpg", "5.jpeg"];

const chosenImage = images[Math.floor(Math.random() * images.length)];

const bgImage = document.createElement("img");

bgImage.src = `src/img/${chosenImage}`;

document.body.appendChild(bgImage);