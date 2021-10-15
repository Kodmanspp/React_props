import React from "react";
import style from "./DesiredCompensation.module.scss"
class DesiredCompensation extends React.Component {
    render() {
        const {
            usd,
            kgs,
            rateUsd,
            rateKgs
        } = this.props.compensation;
        return (
            <section>
                <h4 className={style.text}>Desired compensation: {kgs} KGS / {usd} USD (hourly rate: {rateKgs} KGS / {rateUsd} USD)</h4>
            
            </section>
        )
    }
    
}
export default DesiredCompensation;