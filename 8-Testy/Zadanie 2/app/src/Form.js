import React from "react";
import Input from "./Input";
function Form({ onClick, handleChange, textInput, val }) {
  return (
    <form id="add-form">
      <label for ="num">value</label>
      <Input
      dataTestId= "content-input"
        id="num"
        ariaLabel="input"
        onChange={handleChange}
        type="number"
        reference={textInput}
        val={val}
        placeholder="Wartość"
      />
      <button className="click" data-testid="click" onClick={onClick}>
        Zmien
      </button>
    </form>
  );
}
export default Form;
