function createGamesContainerHtml() {
  gamesContainer.innerHTML = `
  <div class="main__wrapper">
    <section class="product_details" aria-label="Product Details | Main Section">
      <h1>${game.itemName}</h1>
      <div class="details">
        <div class="image-mockup psn__wrapper psn__wrapper_wide">
          <div class="container game-cards" data-filter="${game.platform}-${game.type}">
            <div class="game-details">
              <div class="psnleft game-title">
                <h2 class="h4 yellow type">${game.platformShort} ${game.type} Version</h2>
              </div>
              <div class="game-cover">
                <a href=${
                  game.coverImage
                } target="_blank" alt="Click to open image in new window" aria-label="Click to open image in new window">
                  <img src=${game.coverImage} alt="${game.itemName} ${game.platform} | ${game.type} Version">
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
                <img src="images/ico_psn.svg" alt="${game.platform}">
              </div>
              <div class="small psnleft platform-text">${game.platform}</div>
              <div class="psnleft gsrating">Gamespot Rating:</div>
              <div class="psnright rating">${game.gamespotRating}</div>
              <div class="small psnleft readreview">
                <a href="https://www.gamespot.com/games/reviews/">Read review</a>
              </div>
              <div class="togglewishlist add-to-wishlist">
                <span class="small psnright">
                  <img class="remove small psnright add-to-wishlist wishlist-icon ${
                    game.isWishlisted === 1 ? "fas" : "far"
                  }" src="${heartIcon}" alt="Add to wishlist" data-id="${parseInt(game.id)}">
                </span>
              </div>
              <label for="quantity" class="ourprice psnright">Quantity:</label>
              <div class="number psnleft">
                <input class="howmany" type="number" id="quantity" name="quantity" value="1">
              </div>
              <div class="price psnright">
              <span class="dollar yellow">.</span>${game.currentPrice}
              </div>
              <a href="checkout.html" role="button" class="checkout-event psnright">Checkout</a>
              <div class="price__before psnright">
                <span class="dollar yellow">.</span>${game.beforePrice}
              </div>
            </div>
            <div class="psn__buttons">
              <div class="cta add-to-cart">Add to cart</div>
              <a href="cart.html" role="button">
                <div class="cta">Go to cart</div>
              </a>
            </div>
          </div>
          <div class="summary__wrapper">
            <p class="summary">
              ${game.productOverview}
            </p>
            <a href="images/gamedetails/forgelegenddetails2.jpg" aria-label="Click to see high resolution version">
              <span class="detail-image" role="img" aria-label="Glowing mushroms under big tree"></span>
            </a>
          </div>
        </div>
      </div>
      <div class="description">
        <h2 class="h4">Product Description</h2>
        <div class="divider"></div>
        <p>
          ${game.productDescription}
        </p>
        <div class="details-img">
          <a href="images/gamedetails/forgelegenddetails1.jpg" aria-label="Click to see high resolution version" target="_new">
            <img src="images/gamedetails/forgelegenddetails1_small.jpg" alt="Beautiful boat on a beach in Forge Legend">
          </a>
          <div class="plot">
            <h3 class="h6">Plot</h3>
            <p>
              ${game.productPlot}
            </p>
          </div>
        </div>
        <div class="gameplay">
          <h3 class="h6">Gameplay</h3>
          <p>
            ${game.productGameplay}
          </p>
        </div>
        <div class="features">
          <h3 class="h6">Key Features</h3>
          <p>
            ${game.productKeyFeatures}
          </p>
        </div>
      </div>
    </section>
  </div>
  `;
};

