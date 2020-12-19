import React from "react";

function Input({id,onChange,type,reference,val,placeholder}) {
  return (
    <input  aria-label="cost-input" id= {id} onChange={onChange} type= {type} ref={reference} value={val} placeholder={placeholder} />
  );
}

export default Input;
