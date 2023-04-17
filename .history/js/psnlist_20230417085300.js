import { games } from "./games.js";
import { toggleWishlistedHeart } from "./functions/toggleWishlistedHeart.js";
import { gamesContainerHtmlDefault } from "./variables/gamesContainerHtml-default.js";
const gamesContainer = document.getElementById("games-container");
export { gamesContainer };

// Get the array of wishlisted games from the local storage
const wishlistedGames = JSON.parse(localStorage.getItem("wishlist")) || [];

games.forEach((game) => {
  // Check if the game is in the wishlisted games array
  if (wishlistedGames.includes(parseInt(game.id))) {
    // If the game is wishlisted, set its isWishlisted value to 1
    game.isWishlisted = 1;
  };
});

setTimeout(() => {
  // Generate the HTML for all the games
  const html = games
  .map((game) => {
    // Determine which heart icon to display based on isWishlisted
    let heartIcon = parseInt(game.isWishlisted) === 1 ? "images/ico_heart.svg" : "images/ico_heart_+.svg";
    const typeIcon = game.type === "Key" ? "images/ico_key.svg" : "images/ico_disc.svg";

    toggleWishlistedHeart(1000);

    return games
  })
    .join("");

  gamesContainer.innerHTML = html;
}, 800);

setTimeout(() => {
  // Select all game containers
  const gameContainers = document.querySelectorAll(".game-cards");
  // Get the count of game containers
  const gameCount = gameContainers.length;
  // Select the element where you want to show the game count
  const gameCountElement = document.querySelector(".number-of-products");
  // Set the text content of the element to the game count
  gameCountElement.textContent = `Number of games on site: ${gameCount}`;
}, 1000);
