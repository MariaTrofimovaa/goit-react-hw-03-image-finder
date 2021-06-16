import React, { Component } from "react";
import PropTypes from "prop-types";
import styles from "./Modal.module.css";

class Modal extends Component {
  componentDidMount() {
    window.addEventListener("keydown", this.handleEscape);
    const body = document.querySelector("body");
    body.style.overflow = "hidden";
  }

  componentWillUnmount() {
    window.removeEventListener("keydown", this.handleEscape);
    const body = document.querySelector("body");
    body.style.overflow = "auto";
  }

  handleEscape = (e) => {
    if (e.code === "Escape") {
      this.props.onClose();
    }
  };

  onHandleClick = () => this.props.onClose();

  handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      this.props.onClose();
    }
  };

  render() {
    return (
      <div className={styles.Overlay} onClick={this.handleBackdropClick}>
        <div className={styles.Modal}>{this.props.children}</div>
      </div>
    );
  }
}

Modal.propTypes = {
  onClose: PropTypes.func.isRequired,
};

export default Modal;
