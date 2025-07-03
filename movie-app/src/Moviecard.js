import { Component } from "react";

export default class MovieCard extends Component {
  render() {
    const { title, plot, price, star, fav, isInCart } = this.props.movies;
    const { addStars, removeStars, handleCartButton, handleFavButton } =
      this.props;

    return (
      <div className="main">
        <div className="movie-card">
          <div className="left">
            <img src="/Images/avengers.jpg" alt="Movie Poster" />
          </div>
          <div className="right">
            <div className="title">{title}</div>
            <div className="plot">{plot}</div>
            <div className="price">Rs: {price}</div>

            <div className="footer">
              <div className="rating">8.9</div>
              <div className="star-dis">
                <img
                  src="https://cdn-icons-png.flaticon.com/128/9146/9146915.png"
                  className="str-btn"
                  alt="decrease"
                  onClick={removeStars}
                />
                <img
                  src="https://cdn-icons-png.flaticon.com/128/1828/1828884.png"
                  className="stars"
                />
                <img
                  src="https://cdn-icons-png.flaticon.com/128/3524/3524388.png"
                  className="str-btn"
                  alt="increase"
                  onClick={addStars}
                />
                <span>{star}</span>
              </div>
              <div className="button">
                <button
                  className={fav ? "unfavourite-btn" : "favourite-btn"}
                  onClick={handleFavButton}
                >
                  {fav ? "Unfavourite" : "Favourite"}
                </button>
                <button
                  className={isInCart ? "removecart-btn" : "cart-btn"}
                  onClick={handleCartButton}
                >
                  {isInCart ? "Remove from cart" : "Add to Cart"}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
