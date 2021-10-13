const Hobbies = ({hobbies}) =>{
    return (
        <section>
            <h3>Hobbies</h3>
            <ul>
                {
                    hobbies.map((item,index) => (<li key={index} >{item}</li>))
                }
            </ul>
        </section>
    )
}
export default Hobbies;