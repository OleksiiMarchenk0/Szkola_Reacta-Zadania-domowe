import React, { useState, useRef } from "react";
import Input from './Input';
MyComponent.defaultProps = {
  start: 0
}

function MyComponent({start}) {
 const [val,setVal]=useState(0);
  const textInput = useRef(null);
  const handleAddButton = () => {
    setCount(count + 1);
  };
  const Reset = () => {
    setCount(parseInt(start));
  };
  const handleSubstractButton = () => {
    setCount(count - 1);
  };
  const onSubmit = (e) => {
    e.preventDefault();
    let value = parseInt(textInput.current.value);
    setCount(value);
    textInput.current.value='';
  };
  const handleChange=(e)=>{
   setVal(e.target.value)
  }
  const [count, setCount] = useState(start);

  return (
    <div>
      <br />
      <form onSubmit={onSubmit}>
      <label for="num">Enter</label>
        <Input id="num" onChange={handleChange} type="text" reference={textInput} value={val} placeholder="Wartośc"/>
        <Input className="submit" type="submit" value="Zmień" />
      </form>
      <button className="Reset" onClick={Reset}>Reset</button>
      <br />
      <br />
      <span className="counterVal">{`Count : ${count}`}</span>
      <button className="substract" onClick={handleSubstractButton}>-</button>
      <button className="add" onClick={handleAddButton}>+</button>
    </div>
  );
}

export default MyComponent;
