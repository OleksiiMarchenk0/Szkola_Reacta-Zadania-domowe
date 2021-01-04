import React from "react";
import Input from "./Input";
function Form({ onClick, handleChange, textInput, val }) {
  return (
    <form id="add-form">
      <label for ="num">value</label>
      <Input
        id="num"
        ariaLabel="input"
        onChange={handleChange}
        type="number"
        reference={textInput}
        val={val}
        placeholder="Wartość"
      />
      <button className="click" onClick={onClick}>
        Zmien
      </button>
    </form>
  );
}
export default Form;
