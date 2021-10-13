const Expirience = (props) => {
    const {
        lastWorkPlace,
        Expirience,
        skils,
    } = props;

    return (
        <section>
            <h2>Job Expirience</h2>
            <p>last workplace {lastWorkPlace} </p>
            <p>Expirience in {Expirience} yaers</p>
            <p> Skils {skils.length}</p>
            <ul>
                {
                    skils.map((item,index) => (<li key={index} >{item}</li>))
                }
            </ul>
        </section >
    )
}

export default Expirience;