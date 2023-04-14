function toggleWishlistedHeart(delay) {
  let game
  let heartIcon = game.isWishlisted === 1 ? "images/ico_heart.svg" : "images/ico_heart_+.svg";
  setTimeout(() => {
    const wishlistIcons = document.querySelectorAll(".wishlist-icon");
    wishlistIcons.forEach(function (wishlistIcon) {
      wishlistIcon.addEventListener("click", function () {
        heartIcon = this.classList.contains("far") ? "images/ico_heart.svg" : "images/ico_heart_+.svg";
        this.src = heartIcon;
        this.classList.toggle("far");
        this.classList.toggle("fas");
      });
    });
  }, delay);
};

export { toggleWishlistedHeart };
// Call the function with a delay of 1000 milliseconds (1 second)
// toggleWishlistedHeart(1000);
