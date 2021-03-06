import React, { useState, useRef } from "react";
import Form from './Form';
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
  const onClick = (e) => {
    e.preventDefault();
    console.log(textInput.current.value);
    let value = parseInt(textInput.current.value,10);
    setCount(value);
    textInput.current.value='1';
  };
  const handleChange=(e)=>{
   setVal(e.target.value);
  }
  const [count, setCount] = useState(start);

  return (
    <div>
      <br />
      <Form onClick={onClick} handleChange={handleChange} textInput={textInput} val={val} />
      <button className="Reset" onClick={Reset}>Reset</button>
      <br />
      <br />
      <span data-testid="counter" className="counterVal">{`Count : ${count}`}</span>
      <button className="substract" onClick={handleSubstractButton}>-</button>
      <button className="add" onClick={handleAddButton}>+</button>
    </div>
  );
}

export default MyComponent;
