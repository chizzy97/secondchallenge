import React from "react";
import ReactDOM from "react-dom";

var fname = "chizzy";
var lname = "david";

ReactDOM.render(
  <div>
    <h1>Hello {`${fname} ${lname}`} </h1>
    <p>Your Lucky Number is {Math.floor(Math.random() * 10)}</p>
  </div>,
  document.getElementById("root")
);
