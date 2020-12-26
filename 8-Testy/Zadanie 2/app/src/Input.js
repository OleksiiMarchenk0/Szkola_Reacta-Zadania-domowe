import React from "react";

function Input({id,ariaLabel,onChange,type,reference,val,placeholder}) {
  return (
    <input aria-label={ariaLabel} id= {id} onChange={onChange} type= {type} ref={reference} value={val} placeholder={placeholder} />
  );
}

export default Input;
