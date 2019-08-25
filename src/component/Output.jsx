import React from 'react';

const Output = (props) => {
    let { num,num2,op } = props.values;
    
    switch(op){
        case "+": return( <div>{ num + num2 }</div> );
        case "-": return( <div>{ num - num2 }</div> );
        case "*": return( <div>{ num * num2 }</div> );
        case "/": return( <div>{ num / num2 }</div> );
        case "":  return(0);
        default: return( <div>Invalid Operator</div>);
    }
}
 
export default Output;