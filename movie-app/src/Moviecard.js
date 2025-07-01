import { Component } from "react";

export default class MovieCard extends Component {
  

  addStars=() =>{
    // if (this.state.stars >= 5) {
    //   return;
    // }
    this.setState((prevState) => ({
      stars: prevState.stars + 0.5,
    }));
  }

  removeStars=()=> {
    // if (this.state.stars <= 0) {
    //   return;
    // }
    this.setState((prevState) => ({
      stars: prevState.stars - 0.5,
    }));
  }

  handleFavouriteButton=()=> {
    this.setState({ isFavourite: !this.state.isFavourite });
  }

  handleCartButton=() =>{
    this.setState({ isAdded: !this.state.isAdded });
  }

  render() {
    const { title, plot, price, stars, isFavourite, isAdded } = this.props.movies;
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
                  onClick={this.removeStars}
                />
                <img
                  src="https://cdn-icons-png.flaticon.com/128/1828/1828884.png"
                  className="stars"
                />
                <img
                  src="https://cdn-icons-png.flaticon.com/128/3524/3524388.png"
                  className="str-btn"
                  alt="increase"
                  onClick={this.addStars}
                />
                <span>{stars}</span>
              </div>
              <div className="button">
                <button
                  className={
                    isFavourite ? "unfavourite-btn" : "favourite-btn"
                  }
                  onClick={this.handleFavouriteButton}
                >
                  {isFavourite ? "Unfavourite" : "Favourite"}
                </button>
                <button
                  className={isAdded ? "removecart-btn" : "cart-btn"}
                  onClick={this.handleCartButton}
                >
                  {isAdded ? "Remove from cart" : "Add to Cart"}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
