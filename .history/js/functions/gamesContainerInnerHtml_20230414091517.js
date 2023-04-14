
function
return `
      <div class="container game-cards" data-filter="${game.platform}-${game.type}">
        <div class="items ${game.itemName}">
          <div class="psnleft game-title">
            <h2 class="h4 type">${game.itemName}</h2>
            <span class="gametitle-info">${game.platformShort} | ${game.type} Version</span>
          </div>
          <div class="game-cover">
            <a href="details.html?id=${parseInt(game.id)}" class="results-list">
            <img class="game-img" src=${game.coverImage} alt="${game.itemName} ${game.platform} | ${game.type} Version">
            </a>
          </div>
          <div class="small psnleft release-date">Release Date:</div>
          <div class="small psnleft reldate">${game.releaseDate}</div>
          <div class="small psnleft">Type:</div>
          <div class="small psncenter type-ico">
            <img src="${typeIcon}" alt="${game.type}">
          </div>
          <div class="small psnleft type-text">${game.type}</div>
          <div class="small psnleft region">Region:</div>
          <div class="small psncenter region-ico">
            <img src="images/ico_europe.svg" alt="Region | Europe">
          </div>
          <div class="small psnleft region-text">${game.region}</div>
          <div class="small psnleft platform">Platform:</div>
          <div class="small psncenter platform-ico">
            <img src="images/ico_psn.svg" alt="Playstation 5">
          </div>
          <div class="small psnleft platform-text">${game.platform}</div>
          <div class="psnleft gsrating">Gamespot Rating:</div>
          <div class="psnright rating">${game.gamespotRating}</div>
          <div class="small psnleft readreview">
            <a href="https://www.gamespot.com/games/reviews/">Read review</a>
          </div>
          <div class="togglewishlist add-to-wishlist">
            <span class="small psnright" href="wishlist.html">
              <img class="remove small psnright add-to-wishlist wishlist-icon ${
                game.isWishlisted === 1 ? "fas" : "far"
              }" src="${heartIcon}" alt="Add to wishlist" data-id="${parseInt(game.id)}">
            </span>
          </div>
          <div class="price psnright">
            <span class="dollar yellow">.</span>
            <span class="price currentPrice">${parseFloat(game.currentPrice)}</span>
          </div>
          <div class="price__before psnright">
            <span class="dollar yellow">.</span>${parseFloat(game.beforePrice)}
          </div>
        </div>
        <div class="psn__buttons">
          <div class="cta add-to-cart" data-id="${parseInt(game.id)}">Add to cart</div>
          <a href="details.html?id=${parseInt(game.id)}" class="results-list" role="button">
            <div class="cta">View Details</div>
          </a>
        </div>
      </div>
      `;