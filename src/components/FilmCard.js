import React from "react";
import { DeleteButton, InputField, EditButton } from "./InputAndButtonFunc";

export default class FilmCard extends React.Component {
  state = {
    nameToEdit: "",
    genreToEdit: "",
    yearToEdit: "",
    ratingToEdit: ""
  };

  handleChangeNameEdit = e => {
    this.setState({ nameToEdit: e.target.value });
  };
  handleChangeGenreEdit = e => {
    this.setState({ genreToEdit: e.target.value });
  };
  handleChangeYearEdit = e => {
    this.setState({ yearToEdit: e.target.value });
  };
  handleChangeRatingEdit = e => {
    this.setState({ ratingToEdit: e.target.value });
  };

  render() {
    return (
      <div className="films-item">
        <div className="films-item-edit">
          <DeleteButton delete={this.props.onDeleteClick} />
          {this.props.isEditing ? (
            <>
              <div>
                <InputField
                  holder="Film Name"
                  value={this.state.nameToEdit}
                  change={this.handleChangeNameEdit}
                />
              </div>
              <div>
                <InputField
                  holder="Film Genre"
                  value={this.state.genreToEdit}
                  change={this.handleChangeGenreEdit}
                />
              </div>

              <div>
                <InputField
                  holder="Year"
                  value={this.state.yearToEdit}
                  change={this.handleChangeYearEdit}
                />
              </div>

              <div>
                <InputField
                  holder="Rating"
                  value={this.state.ratingToEdit}
                  change={this.handleChangeRatingEdit}
                />
              </div>
            </>
          ) : (
            <div>
              <div>{this.props.film.name}</div>
              <div>Жанр: {this.props.film.genre}</div>
              <div>Год выпуска: {this.props.film.year}</div>
              <div>Моя оценка: {this.props.film.rating}</div>
            </div>
          )}
          <EditButton
            edit={() =>
              this.props.isEditing
                ? this.props.onSaveChangesClick({
                    name: this.state.nameToEdit,
                    genre: this.state.genreToEdit,
                    year: this.state.yearToEdit,
                    rating: this.state.ratingToEdit,
                    id: this.props.film.id
                  })
                : this.props.onEditClick(this.props.film)
            }
          />
        </div>
      </div>
    );
  }
}
