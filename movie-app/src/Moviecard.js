import { Component } from "react";

export default class MovieCard extends Component {
  constructor() {
    super();
    this.state = {
      title: "The Avengers",
      plot: "Super natural powers shown in the movie",
      price: 199,
      stars: 0,
    };
    this.addStars = this.addStars.bind(this);
    this.removeStars = this.removeStars.bind(this);
  }

  addStars() {
    if(this.state.stars>=5){
      return;
    }
    this.setState((prevState) => ({
      stars: prevState.stars + 0.5,
    }));
  }

  removeStars() {
    if(this.state.stars<=0){
      return;
    }
    this.setState((prevState) => ({
      stars: prevState.stars - 0.5,
    }));
  }

  render() {
    const { title, plot, price, stars } = this.state;
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
                <button className="favourite-btn">Favorite</button>
                <button className="cart-btn">Add</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
