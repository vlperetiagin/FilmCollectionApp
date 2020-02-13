import React from "react";
export function DeleteButton(props) {
  return (
    <button className="film-delete" onClick={props.delete}>
      X
    </button>
  );
}
export function EditButton(props) {
  return (
    <button className="film-edit" onClick={props.edit}>
      Edit
    </button>
  );
}
export function InputField(props) {
  return (
    <input
      placeholder={props.holder}
      value={props.value}
      onChange={props.change}
    />
  );
}
