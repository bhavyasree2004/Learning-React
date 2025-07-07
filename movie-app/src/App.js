import MovieList from "./MovieList";
import Navbar from "./Navbar";
import React from "react";
import { movies } from "./MovieData";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      movies: movies,
      cartCount: 0,
    };
  }

  handleIncStar=(movie)=> {
    const { movies } = this.state;
    const mid = movies.indexOf(movie);
    if (movies[mid].star >= 5) {
      return;
    }
    movies[mid].star += 0.5;
    this.setState({ movies });
  }

  handleDecStar=(movie)=> {
    const { movies } = this.state;
    const mid = movies.indexOf(movie);
    if (movies[mid].star <= 0) {
      return;
    }
    movies[mid].star -= 0.5;
    this.setState({ movies });
  }

  handleCartButton=(movie)=> {
    var { movies,cartCount } = this.state;
    const mid = movies.indexOf(movie);
    
    if(movies[mid].isInCart){
      cartCount--;
      movies[mid].isInCart = !movies[mid].isInCart;
    }
    else{
      cartCount++;
      movies[mid].isInCart = !movies[mid].isInCart;
    }
    this.setState({ movies,cartCount });
  }

  handleFavButton=(movie)=> {
    const { movies} = this.state;
    const mid = movies.indexOf(movie);
    movies[mid].fav = !movies[mid].fav;
    this.setState({ movies });
  }

  render() {
    const { movies,cartCount } = this.state;
    return (
      <>
        <Navbar cartCount={cartCount}/>
        <MovieList
          movies={movies}
          addStars={this.handleIncStar}
          removeStars={this.handleDecStar}
          handleCartButton={this.handleCartButton}
          handleFavButton={this.handleFavButton}
        />
      </>
    );
  }
}

export default App;
