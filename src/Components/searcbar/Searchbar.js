import React from "react";
import PropTypes from "prop-types";
import styles from "./Searchbar.module.css";

const Searchbar = ({ onHandleSubmit, onHandleChange, query }) => {
  return (
    <header className={styles.Searchbar}>
      <form className={styles.SearchForm} onSubmit={onHandleSubmit}>
        <button type="submit" className={styles.SearchFormButton}>
          <span className={styles.SearchFormButtonLabel}>Search</span>
        </button>

        <input
          className={styles.SearchFormInput}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          value={query}
          onChange={onHandleChange}
        />
      </form>
    </header>
  );
};

Searchbar.propTypes = {
  onHandleSubmit: PropTypes.func.isRequired,
  onHandleChange: PropTypes.func.isRequired,
  query: PropTypes.string.isRequired,
};

export default Searchbar;
