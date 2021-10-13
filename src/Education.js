import React from "react";

class Education extends React.Component{
    render(){
        return(
            <section>
                <h2>Education</h2>
                <p>Facility name: {this.props.univercity}</p>
                <p>Graduaction year: {this.props.graduationYear}</p>
            </section>
        )
    }
    
}
export default Education;