import { Component } from "react";

export default class MovieCard extends Component {
  render() {
    return (
      <div className="main">
        <div className="movie-card">
          <div className="left">
            <img src="/Images/avengers.jpg" alt="Movie Poster" />
          </div>
          <div className="right">
            
              <div className="title">The Avengers</div>
              <div className="plot">
                Super natural power shown in the movie
              </div>
              <div className="price">Rs: 199</div>
            
            <div className="footer">
              <div className="rating">8.9</div>
              <div className="star-dis">
                stars
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
