import React from "react";
import Input from "./Input";
function Form({ onSubmit, handleChange, textInput, val }) {
  return (
    <form onSubmit={onSubmit} id="add-form">
      <Input
        id="num"
        ariaLabel="input"
        onChange={handleChange}
        type="number"
        reference={textInput}
        val={val}
        placeholder="Wartość"
      />
      <button class="submit" onClick={onSubmit}>
        Zmień
      </button>
    </form>
  );
}
export default Form;
