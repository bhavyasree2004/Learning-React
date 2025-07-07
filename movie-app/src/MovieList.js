import { Component } from "react";
import MovieCard from "./Moviecard";

export default class MovieList extends Component {


  render() {
    const { movies,addStars,removeStars,handleCartButton,handleFavButton } = this.props;
    return (
      <div>
        {movies.map((movie) => (
          <MovieCard
            movies={movie}
            addStars={() => addStars(movie)}
            removeStars={() => removeStars(movie)}
            handleCartButton={() => handleCartButton(movie)}
            handleFavButton={() => handleFavButton(movie)
            }
          />
        ))}
      </div>
    );
  }
}
