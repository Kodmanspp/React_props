import {title} from "./MainInfo.module.scss";
function MainInfo({fullname, age, desiredPosition}){
    return (
        <main>
            <h1 className={title} >Main Info</h1>
            <p>Full Name: {fullname}</p>
            <p>age: {age}</p>
            <p>desired position: {desiredPosition}</p>
        </main>
    )
}

export default MainInfo; 