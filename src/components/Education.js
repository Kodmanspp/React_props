import React from "react";
import style from "./Education.module.scss"; 
class Education extends React.Component{
    render(){
        return(
            <section>
                <h2 className={style.title} >Education</h2>
                <p>Facility name: {this.props.univercity}</p>
                <p>Graduaction year: {this.props.graduationYear}</p>
            </section>
        )
    }
    
}
export default Education;