

import * as React from "react";
import * as ReactDom from "react-dom";
import * as Caml_option from "bs-platform/lib/es6/caml_option.js";

function Index$App(Props) {
  var message = Props.message;
  return React.createElement("div", undefined, React.createElement("span", undefined, message));
}

var App = {
  make: Index$App
};

var $$Document = {};

var root = document.getElementById("root");

if (root !== undefined) {
  ReactDom.render(React.createElement(Index$App, {
            message: "Hello React"
          }), Caml_option.valFromOption(root));
} else {
  console.log("Could not find #root element. Are you sure you setup index.html correctly?");
}

export {
  App ,
  $$Document ,
  root ,
  
}
/* root Not a pure module */
