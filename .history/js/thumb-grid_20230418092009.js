// import { games } from "./games.js";

// document.addEventListener("DOMContentLoaded", () => {
//   const thumbsContainer = document.getElementById("thumb-grid");
//   const hideThumbsContainer = document.getElementById("thumb-container");
//   const hideThumbs = document.getElementById("hide-thumbs");

//   games.forEach((game) => {
//     // Check if the game is in the wishlisted games array
//     if (wishlistedGames.includes(parseInt(game.id))) {
//       // If the game is wishlisted, set its isWishlisted value to 1
//       game.isWishlisted = 1;
//     }
//   });

//   function loadAsset(url) {
//     return new Promise((resolve, reject) => {
//       const img = new Image();
//       img.src = url;
//       img.onload = () => resolve(img);
//       img.onerror = (error) => reject(error);
//     });
//   }

//   async function loadAssets(assets) {
//     for (const asset of assets) {
//       try {
//         await loadAsset(asset);
//       } catch (error) {
//         console.error(`Error loading asset '${asset}':`, error);
//       }
//     }
//   }

//   async function init() {
//     // Load all the cover images
//     const coverImages = games.map((game) => game.coverImage);
//     await loadAssets(coverImages);

//     // Generate the HTML for the game
//     const html = games
//       .map((game) => {
//         return `
//         <div class="thumb-box">
//           <div class="thumbTitle">${game.itemName}</div>
//           <span class="thumbInfo">${game.platformShort} | ${game.type} Version</span>
//           <div class="thumb-cover">
//             <a href="details.html?id=${parseInt(game.id)}" class="thumbs-list">
//               <img class="thumb-image" src=${game.coverImage} alt="${game.itemName} ${game.platform} | ${game.type} Version">
//             </a>
//           </div>
//         </div>`;
//       })
//       .join("");

//     thumbsContainer.innerHTML = html;
//   }

//   init();

//   //Show/Hide thumbnails
//   hideThumbs.addEventListener("click", function () {
//     if (hideThumbs.innerHTML === "Hide Thumbnails") {
//       hideThumbs.innerHTML = "Show Thumbnails";
//       hideThumbsContainer.classList.add("hide");
//     } else {
//       hideThumbs.innerHTML = "Hide Thumbnails";
//       hideThumbsContainer.classList.remove("hide");
//     }
//   });
// });

import { games } from "./games.js";
document.addEventListener("DOMContentLoaded", () => {
  const thumbsContainer = document.getElementById("thumb-grid");
  const hideThumbsContainer = document.getElementById("thumb-container");
  const hideThumbs = document.getElementById("hide-thumbs");

  games.forEach((game) => {
    // Check if the game is in the wishlisted games array
    if (wishlistedGames.includes(parseInt(game.id))) {
      // If the game is wishlisted, set its isWishlisted value to 1
      game.isWishlisted = 1;
    };
  });

  setTimeout(() => {
    // Generate the HTML for the game
    const html = games
    .map((game) => {

      return `
      <div class="thumb-box">
        <div class="thumbTitle">${game.itemName}</div>
        <span class="thumbInfo">${game.platformShort} | ${ game.type } Version</span>
        <div class="thumb-cover">
          <a href="details.html?id=${parseInt(game.id)}" class="thumbs-list">
            <img class="thumb-image" src=${game.coverImage} alt="${game.itemName} ${game.platform} | ${game.type} Version">
          </a>
        </div>
      </div>`;
    })
      .join("");

    thumbsContainer.innerHTML = html;
  }, 1000);

  //Show/Hide thumbnails
  hideThumbs.addEventListener("click", function () {
    if (hideThumbs.innerHTML === "Hide Thumbnails") {
      hideThumbs.innerHTML = "Show Thumbnails";
      hideThumbsContainer.classList.add("hide");
    } else {
      hideThumbs.innerHTML = "Hide Thumbnails";
      hideThumbsContainer.classList.remove("hide");
    }
  });
});