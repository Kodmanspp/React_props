import React from "react";
import Education from "./components/Education.js"
import MainInfo from "./components/MainInfo.js";
import Expirience from "./components/Expirience";
import Hobbies from "./components/Hobbies";
import DesiredCompensation from "./components/DesiredCompensation";

import Button from "./components/Button";

import "./App.scss"

function App() {
    const personalData = {
        fullName: "Kodirov Baiaman",
        hobbies: [
            "Games",
            "Ranobe",
            "Manga",
        ],
        birthYear: 2001,
        desiredPosition: "full-stack developer",
        univercity: "it-academy",
        graduationYear: 2021,
        lastWorkPlace: "couruer at Buffet",
        lastWorkYears: "2020-2021",
        skils: ["HTML", "CSS", "JS"],
        desiredCompensation: { compensation: 55000, currency: "KGS" },
    }


    function getJobExp(lastWorkYears) {
        let res = lastWorkYears.split("-");
        return Number(res[1]) - Number(res[0])
    }
    function getCompensationRate(data) {
        const workTime = 20 * 8;
        let result = {};
        const {
            compensation,
            currency,
        } = data;

        if (currency === "USD") {
            const usd = compensation / workTime;
            const kgs = usd * 85;

            result.usd = compensation;
            result.kgs = compensation * 85;

            result.rateUsd = usd.toFixed(2);
            result.rateKgs = kgs.toFixed(0);

            result.kgs = result.kgs.toFixed(2);
        }
        else if (currency === "KGS") {
            const kgs = compensation / workTime;
            const usd = kgs / 85;

            result.kgs = compensation;
            result.usd = compensation / 85;

            result.rateUsd = usd.toFixed(2);
            result.rateKgs = kgs.toFixed(0);

            result.usd = result.usd.toFixed(2);

        }
        return result;
    }

    const data = (
        <div className="App">
            <nav>
                <ul>
                    <li>Home</li>
                    <li>about</li>
                    <li>Works</li>
                    <li>Contacts</li>
                </ul>
            </nav>

            <MainInfo
                fullname={personalData.fullName}
                age={new Date().getFullYear() - personalData.birthYear}
                desiredPosition={personalData.desiredPosition}
            />
            <Education
                univercity={personalData.univercity}
                graduationYear={personalData.graduationYear}
            />
            <Expirience
                lastWorkPlace={personalData.lastWorkPlace}
                Expirience={getJobExp(personalData.lastWorkYears)}
                skils={personalData.skils}
            />
            <Hobbies
                hobbies={personalData.hobbies}
            />
            <DesiredCompensation
                compensation={getCompensationRate(personalData.desiredCompensation)}
            />
            <Button />
            <button className="btn">Hello</button>
        </div>
    );
    return data;
}

export default App;
