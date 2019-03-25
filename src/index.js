alert("Hello Webpack");
import React from "react";
import ReactDOM from "react-dom";

//react JSX 寫法
class MyHead extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return <h3 > Hello React JSX < /h3>; 
    }
}

ReactDOM.render( < MyHead / > , document.querySelector("#root"));