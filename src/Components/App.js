import React, { Component } from "react";
import Searchbar from "./searcbar/Searchbar";
import Loader from "react-loader-spinner";
import ImageGallery from "./imageGallery/ImageGallery";
import Button from "./button/Button";
import Modal from "./modal/Modal";
import { fetchImages } from "../services/api";
import "../index.css";

class App extends Component {
  state = {
    pictures: [],
    searchQuery: "",
    page: 1,
    loading: false,
    showModal: false,
    largeImageURL: "",
    tags: "",
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevState.searchQuery !== this.state.searchQuery) {
      this.getPictures();

      if (prevState.page !== this.state.page) {
        window.scrollTo({
          top: document.documentElement.scrollHeight,
          behavior: "smooth",
        });
      }
    }
  }

  onChangeQuery = (query) => {
    this.setState({ searchQuery: query });
  };

  onHandleChange = ({ target }) => {
    const { value: query } = target;
    this.setState({ query });
  };

  clearSubmit = () => {
    this.setState({
      pictures: [],
      page: 1,
    });
  };

  onHandleSubmit = (e) => {
    e.preventDefault();
    this.onChangeQuery(this.state.query);
    this.setState({ pictures: [], page: 1, loading: true });

    this.clearSubmit();
  };

  getPictures = () => {
    const { searchQuery, page } = this.state;

    fetchImages({ searchQuery, page })
      .then((response) => {
        this.setState((prevState) => {
          return {
            pictures: [...prevState.pictures, ...response.data.hits],
            page: prevState.page + 1,
          };
        });
      })
      .finally(() => this.setState({ loading: false }));
  };

  onToggleModal = () => {
    this.setState((prevState) => ({
      showModal: !prevState.showModal,
    }));
  };

  onOpenModal = (event) => {
    this.setState({
      largeImageURL: event.target.dataset.img,
      tags: event.target.alt,
    });
    this.onToggleModal();
  };

  render() {
    const { pictures, loading, showModal, largeImageURL, tags } = this.state;

    return (
      <div className="App">
        <Searchbar
          onHandleChange={this.onHandleChange}
          onHandleSubmit={this.onHandleSubmit}
        />

        <div className="Loader"> {loading && <Loader />}</div>

        <ImageGallery pictures={pictures} onOpenModal={this.onOpenModal} />

        {pictures.length > 0 && !loading && (
          <Button onClick={this.getPictures} />
        )}

        {showModal && (
          <Modal onClick={this.onOpenModal} onClose={this.onToggleModal}>
            <img src={largeImageURL} alt={tags} />
          </Modal>
        )}
      </div>
    );
  }
}

export default App;
