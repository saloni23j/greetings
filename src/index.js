import "./index.css";
import React from "react";
import ReactDOM from "react-dom";

let curDate = new Date();
curDate = curDate.getHours();
let greetings  = '';
const cssStyle = {}; 

if(curDate >= 1 && curDate <= 12)
{
  greetings = 'Good Morning';
  cssStyle.color = "Green";
}
else if(curDate >= 13 && curDate <= 15){
  greetings = 'Good Afternoon';
  cssStyle.color = "Orange";
}
else if(curDate >= 16 && curDate <= 20){
  greetings = 'Good Evening';
  cssStyle.color = "Blue"
}
else{
  greetings = 'Good Night'
  cssStyle.color = "Red";
}


ReactDOM.render(
  <>
  <div>
  <h1>Hello, <span style = {cssStyle}>{greetings}</span></h1>
  </div>
  </>,

//<h1>Hello, {greetings}</h1>,
document.getElementById('root')

);