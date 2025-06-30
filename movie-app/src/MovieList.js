import { Component } from "react";
import MovieCard from "./Moviecard";

export default class MovieList extends Component {
  
  render() {
    return (
        <>
        <MovieCard/>
        <MovieCard/>
        <MovieCard/>
        </>
    );
  }
}
