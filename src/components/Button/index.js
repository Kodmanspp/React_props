import React from "react";
import button from "./Button.module.scss"; 
class Button extends React.Component {
    render(){
        return(
            <button className={button.button}>send</button>
        )
    }
}
export default Button; 