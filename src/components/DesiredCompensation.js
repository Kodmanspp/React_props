import React from "react";

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
                <h4>Desired compensation: {kgs} KGS / {usd} USD (hourly rate: {rateKgs} KGS / {rateUsd} USD)</h4>
            
            </section>
        )
    }
    
}
export default DesiredCompensation;