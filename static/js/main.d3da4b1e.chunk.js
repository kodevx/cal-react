(window["webpackJsonpcal-app"]=window["webpackJsonpcal-app"]||[]).push([[0],{10:function(e,t,n){e.exports=n(17)},15:function(e,t,n){},16:function(e,t,n){},17:function(e,t,n){"use strict";n.r(t);var a=n(0),l=n.n(a),c=n(3),o=n.n(c),u=(n(15),n(7)),r=n(4),i=n(5),s=n(8),m=n(6),p=n(1),b=n(9),d=function(e){var t=e.values,n=t.num,a=t.num2;switch(t.op){case"+":return l.a.createElement("div",null,n+a);case"-":return l.a.createElement("div",null,n-a);case"*":return l.a.createElement("div",null,n*a);case"/":return l.a.createElement("div",null,n/a);case"":return 0;default:return l.a.createElement("div",null,"Invalid Operator")}},h=(n(16),function(e){function t(e){var n;return Object(r.a)(this,t),(n=Object(s.a)(this,Object(m.a)(t).call(this,e))).state={number:[],num:0,num2:0,op:""},n.handleInput=n.handleInput.bind(Object(p.a)(n)),n}return Object(b.a)(t,e),Object(i.a)(t,[{key:"handleInput",value:function(e){var t=this.state.number;this.setState({number:[].concat(Object(u.a)(t),[e])})}},{key:"getNum",value:function(){var e,t=this.state.number,n=0,a=0,l=10;for(console.log("Number : ",t);Number.isInteger(t[n]);)n++;for(this.setState({op:t[n]}),n--;n>=0;)a<=0?(e=t[n],a++):(e+=l*t[n],l*=10),n--;this.setState({num:e})}},{key:"getNum2",value:function(){for(var e,t,n=this.state.number,a=0,l=0,c=10;Number.isInteger(n[a]);)a++;for(e=n.length,e--;e>a;)l<=0?(t=n[e],l++):(t+=c*n[e],c*=10),e--;this.setState({num2:t}),this.setState({number:[]})}},{key:"resetValue",value:function(){var e={number:[],num:0,num2:0,op:""};console.log(e),this.setState(e)}},{key:"render",value:function(){var e=this,t=this.state,n=t.number,a=t.num,c=t.num2,o=t.op;return console.log("Number Array: ",n),console.log("First Number: ",a),console.log("Second Number: ",c),console.log("Operator: ",o),l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"opt-blk"},n,l.a.createElement("div",null,l.a.createElement(d,{values:{number:n,num:a,num2:c,op:o}}))),l.a.createElement("div",{className:"num-pad"},l.a.createElement("div",{className:"cnt-blk"},l.a.createElement("button",{onClick:function(){e.handleInput(parseInt("7"))}},"7"),l.a.createElement("button",{onClick:function(){e.handleInput(parseInt("8"))}},"8"),l.a.createElement("button",{onClick:function(){e.handleInput(parseInt("9"))}},"9"),l.a.createElement("button",{onClick:function(){e.handleInput("+")},className:"optr"},"+")),l.a.createElement("div",{className:"cnt-blk"},l.a.createElement("button",{onClick:function(){e.handleInput(parseInt("4"))}},"4"),l.a.createElement("button",{onClick:function(){e.handleInput(parseInt("5"))}},"5"),l.a.createElement("button",{onClick:function(){e.handleInput(parseInt("6"))}},"6"),l.a.createElement("button",{onClick:function(){e.handleInput("-")},className:"optr"},"-")),l.a.createElement("div",{className:"cnt-blk"},l.a.createElement("button",{onClick:function(){e.handleInput(parseInt("3"))}},"3"),l.a.createElement("button",{onClick:function(){e.handleInput(parseInt("2"))}},"2"),l.a.createElement("button",{onClick:function(){e.handleInput(parseInt("1"))}},"1"),l.a.createElement("button",{onClick:function(){e.handleInput("*")},className:"optr"},"*")),l.a.createElement("div",{className:"cnt-blk"},l.a.createElement("button",{onClick:function(){e.resetValue()}},"C"),l.a.createElement("button",{onClick:function(){e.handleInput(parseInt("0"))}},"0"),l.a.createElement("button",{onClick:function(){e.getNum(),e.getNum2()}}," = "),l.a.createElement("button",{onClick:function(){e.handleInput("/")},className:"optr"},"/")))))}}]),t}(a.Component));var f=function(){return l.a.createElement(h,null)};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(l.a.createElement(f,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[10,1,2]]]);
//# sourceMappingURL=main.d3da4b1e.chunk.js.map