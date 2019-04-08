alert("Hello Webpack");
import ReactDOM from "react-dom";
import React from "react";



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