import React from "react";
import ImageList from "./components/ImageList";
import "./styles.css";

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      images: [],
      imageUrl: "",
    };
  }
  setImageUrl = (e) => {
    //event handler to set the url of the image
    this.setState({ imageUrl: e.target.value });
  };
  // Function to add image to local storage
  addImageToLS = () => {
    localStorage.setItem(
      "images",
      JSON.stringify([...this.state.images, this.state.imageUrl])
    );
  };

  // Function to get images from the local storage
  getImagesFromLS = () => {
    const images = localStorage.getItem("images");
    if (!images) {
      localStorage.setItem("images", []);
      return [];
    }

    return JSON.parse(images);
  };

  onAddImage = (e) => {
    //function to add a new image
    e.preventDefault();
    if (
      this.state.imageUrl.length >= 5 &&
      this.state.imageUrl === this.state.imageUrl.trim()
    ) {
      this.addImageToLS();
      this.setState((prevState) => {
        return {
          images: [...prevState.images, this.state.imageUrl],
          imageUrl: "",
        };
      });
    }
  };

  // Use appropriate lifecycle method to retrieve images from local storage when the app mounts
  // Step1: Fetch images from local storage
  // Step2: Update state with retrieved images
  componentDidMount() {
    const images = this.getImagesFromLS();
    this.setState({ images });
  }

  render() {
    return (
      <>
        <form onSubmit={this.onAddImage}>
          <input
            type="text"
            placeholder="Image URL"
            value={this.state.imageUrl}
            onChange={this.setImageUrl}
          />
          <button>Add Image</button>
        </form>
        <ImageList images={this.state.images} />
      </>
    );
  }
}
