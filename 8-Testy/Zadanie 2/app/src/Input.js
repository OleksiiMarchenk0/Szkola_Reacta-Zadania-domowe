import React from "react";

function Input({id,dataTestId,ariaLabel,onChange,type,reference,val,placeholder}) {
  return (
    <input data-testid={dataTestId} aria-label={ariaLabel} id= {id} onChange={onChange} type= {type} ref={reference} value={val} placeholder={placeholder} />
  );
}

export default Input;
