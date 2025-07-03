import { Component } from "react";
import MovieCard from "./Moviecard";

export default class MovieList extends Component {
  constructor() {
    super();
    this.state = {
      movies: [
        { 
          id:1,
          title: "The Avengers",
          plot: "Earth's mightiest heroes must come together and learn to fight as a team if they are going to stop the mischievous Loki and his alien army from enslaving humanity.",
          poster:
            "https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg",
          rating: "8.0",
          price: 99,
          star: 0,
          fav: false,
          isInCart: false,
        },
        {
          id:2,
          title: "The Dark Knight",
          plot: "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.",
          poster:
            "https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_SX300.jpg",
          rating: "9.0",
          price: 199,
          star: 0,
          fav: false,
          isInCart: false,
        },
        {
          id:3,
          title: "Iron Man",
          plot: "After being held captive in an Afghan cave, billionaire engineer Tony Stark creates a unique weaponized suit of armor to fight evil.",
          poster:
            "https://m.media-amazon.com/images/M/MV5BMTczNTI2ODUwOF5BMl5BanBnXkFtZTcwMTU0NTIzMw@@._V1_SX300.jpg",
          rating: "7.9",
          price: 139,
          star: 0,
          fav: false,
          isInCart: false,
        },
      ],
    };
  }

  handleIncStar(movie) {
    const { movies } = this.state;
    const mid = movies.indexOf(movie);
    if (movies[mid].star >= 5) {
      return;
    }
    movies[mid].star += 0.5;
    this.setState({ movies });
  }

  handleDecStar(movie) {
    const { movies } = this.state;
    const mid = movies.indexOf(movie);
    if (movies[mid].star <= 0) {
      return;
    }
    movies[mid].star -= 0.5;
    this.setState({ movies });
  }

  handleCartButton(movie) {
    const { movies } = this.state;
    const mid = movies.indexOf(movie);
    movies[mid].isInCart = !movies[mid].isInCart;
    this.setState({ movies });
  }

  handleFavButton(movie) {
    const { movies } = this.state;
    const mid = movies.indexOf(movie);
    movies[mid].fav = !movies[mid].fav;
    this.setState({ movies });
  }

  render() {
    const { movies } = this.state;
    return (
      <div>
        {movies.map((movie) => (
          <MovieCard
            movies={movie}
            addStars={() => this.handleIncStar(movie)}
            removeStars={() => this.handleDecStar(movie)}
            handleCartButton={() => this.handleCartButton(movie)}
            handleFavButton={() => this.handleFavButton(movie)
            }
          />
        ))}
      </div>
    );
  }
}
