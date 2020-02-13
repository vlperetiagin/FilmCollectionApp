import React from "react";
import "./styles.css";
import Header from "./Header";
import { InputField } from "./components/InputAndButtonFunc.js";
import FilmCard from "./components/FilmCard";

export default class Kino extends React.Component {
  state = {
    title: "Film app",
    name: "",
    genre: "",
    year: "",
    rating: "",
    films: [],
    id: 1,
    filmIdToEdit: null
  };

  onFilmAdd = () => {
    let newFilm = {
      name: this.state.name,
      genre: this.state.genre,
      year: this.state.year,
      rating: this.state.rating,
      filmIdToEdit: null,
      id: this.state.id
    };
    this.setState({
      films: [...this.state.films, newFilm],
      id: this.state.id + 1,
      name: "",
      genre: "",
      year: "",
      rating: ""
    });
  };

  onSaveChangesClick = editedFilm => {
    const newFilms = this.state.films.map(i => {
      if (i.id === editedFilm.id) {
        i = editedFilm;
      }
      return i;
    });
    this.setState({ filmIdToEdit: null, films: newFilms });
  };

  onEditClick = item => {
    this.setState({
      filmIdToEdit: item.id
    });
  };

  onDeleteClick = index => {
    this.state.films.splice(index, 1);
    this.setState({
      films: this.state.films
    });
  };
  handleChangeName = e => {
    this.setState({ name: e.target.value });
  };
  handleChangeGenre = e => {
    this.setState({ genre: e.target.value });
  };
  handleChangeYear = e => {
    this.setState({ year: e.target.value });
  };
  handleChangeRating = e => {
    this.setState({ rating: e.target.value });
  };

  render() {
    return (
      <div className="Data" key={this.state.num - 1}>
        <Header title="Welcome to ur films list" />
        {this.renderForm()}
        <button className="add-button" onClick={this.onFilmAdd}>
          +
        </button>
        <div className="countt">
          Количество фильмов в коллекции: {this.state.films.length}
        </div>

        {this.state.films.map((item, index) => {
          return (
            <FilmCard
              key={item.id}
              isEditing={this.state.filmIdToEdit === item.id}
              film={item}
              onDeleteClick={() => this.onDeleteClick(index)}
              onEditClick={() => this.onEditClick(item)}
              onSaveChangesClick={this.onSaveChangesClick}
            />
          );
        })}
      </div>
    );
  }

  renderForm() {
    return (
      <>
        {" "}
        <InputField
          holder="Film name"
          value={this.state.name}
          change={this.handleChangeName}
        />
        <InputField
          holder="Film genre"
          value={this.state.genre}
          change={this.handleChangeGenre}
        />
        <InputField
          holder="Year"
          value={this.state.year}
          change={this.handleChangeYear}
        />
        <InputField
          holder="Your Rating"
          value={this.state.rating}
          change={this.handleChangeRating}
        />
      </>
    );
  }
}
