import "./styles.css";
import React from "react";
import Image from "./components/Image";

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      photos: [], // State to store fetched photos
      loading: false, // State to manage loading status
    };
  }

  // Use the required lifecycle methods here
  // Make an API call to fetch images and update state accordingly
  // Ensure that loading is set to true before the API request and false after data is fetched

  componentDidMount() {
    this.setState({ loading: true });
    fetch("https://jsonplaceholder.typicode.com/photos")
      .then((response) => response.json())
      .then((photos) => this.setState({ photos, loading: false }));
  }

  render() {
    // Display loading status here
    // If loading is true, display the message "Loading..."
    if (this.state.loading) {
      return <p>Loading...</p>;
    } else {
      return (
        <div className="App">
          {this.state.photos.map((photo) => {
            return <Image key={photo.id} photo={photo} />;
          })}
        </div>
      );
    }
  }
}
