import React, { Component } from 'react';
import '../styles.css';
class Cal extends Component {
    constructor(props){
     super(props);
     this.state = {
      number: [0],
      num: 0,
      num2: 0,
      op: ""
    }
    this.handleInput = this.handleInput.bind(this);
    }


    handleInput(num){
        let { number } = this.state;
        this.setState({ number: [...number,num]  });
    }


    getNum(){
        let { number } = this.state;
        let j = 0,cnt = 0,tens=10,num;
        console.log("Number : ",number);
        
        while(Number.isInteger(number[j])){
          j++;
        }
        
        this.setState({ op:number[j] });
        j--;
        
        while(j>=0){
            if(cnt<=0){
              num = number[j];
              cnt++;
            }
            else{
              num = num + (tens * number[j]);
              tens = tens * 10;
            } 
           j--;    
        }
       this.setState({ num });
    }


    getNum2(){
        let { number } = this.state;
        let tns,n,i,j = 0,cnt = 0,num2,tens=10;
        
        while(Number.isInteger(number[j])){
            j++;
        }

        i = number.length; i--;
        
        while(i>j){
            if(cnt<=0){
              num2 = number[i];
              cnt++;
            }else{
              num2 = num2 + (tens * number[i]);
              tens = tens * 10;
            }
           i--;
        }
        this.setState({ num2 });
    }

      render() { 
        let { number,num,num2,op } = this.state;
        console.log("Number Array: ",number);
        console.log("First Number: ",num);
        console.log("Second Number: ",num2);
        console.log("Operator: ",op);

        return ( 
            <React.Fragment>
            <div className="container">
              <div className="opt-blk">{number}</div>
                <div className="num-pad">
                  <div className="cnt-blk">
                  <button onClick={ ()=>{ this.handleInput(parseInt("7")); } }>7</button>
                  <button onClick={ ()=>{ this.handleInput(parseInt("8")); } }>8</button>
                  <button onClick={ ()=>{ this.handleInput(parseInt("9")); } }>9</button>
                  <button onClick={ ()=>{ this.handleInput("+"); } } className="optr">+</button>
                  </div>
                  
                  <div className="cnt-blk">
                  <button onClick={ ()=>{ this.handleInput(parseInt("4")); } }>4</button>
                  <button onClick={ ()=>{ this.handleInput(parseInt("5")); } }>5</button>
                  <button onClick={ ()=>{ this.handleInput(parseInt("6")); } }>6</button>
                  <button onClick={ ()=>{ this.handleInput("-"); } } className="optr">-</button>
                  </div>

                  <div className="cnt-blk">
                  <button onClick={ ()=>{ this.handleInput(parseInt("3")); } }>1</button>
                  <button onClick={ ()=>{ this.handleInput(parseInt("2")); } }>2</button>
                  <button onClick={ ()=>{ this.handleInput(parseInt("1")); } }>3</button>
                  <button onClick={ ()=>{ this.handleInput("*"); } } className="optr">*</button>
                  </div>
                  
                  <div className="cnt-blk">
                  <button onClick={ ()=>{  } }>C</button>  
                  <button onClick={ ()=>{ this.handleInput(parseInt("0")); } }>0</button>
                  <button onClick={ ()=>{ this.getNum(); this.getNum2(); } }> = </button>
                  <button onClick={ ()=>{ this.handleInput("/"); } } className="optr">/</button>
                  </div> 
                </div>
            </div> 
            </React.Fragment>
        );
      }
}
 
export default Cal;