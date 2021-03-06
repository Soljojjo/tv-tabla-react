import React, { useEffect, useState } from 'react';
import Sidebar from './Sidebar';
import moment from 'moment';

const TvPrograms = () => {

    const url = "https://tv-api-p2x2o.ondigitalocean.app/SVT 1.json"
    const [programs, setPrograms] = useState([]);

    useEffect(async () => {
        if (programs.length === 0) {
            const response = await fetch(url);
            const data = await response.json();
            setPrograms(data);
        }
    })


// Can only return one object, encapsulated in a DIV here
return (
    < div >
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gridGap: 20 }}>
            <div> <Sidebar /> </div>
            <div><h1 className="channel-title">SVT 1</h1>
                <ul className="program-list">
                    {programs.map((program) => (
                        <li className="program-list__item">
                            <div className="program-list__time">
                                {moment(program.start).format("HH:mm")}
                            </div>
                            { program.name}
                        </li>
                    ))}
                </ul>
            </div>
            <div></div>
        </div>
    </div >
);
};
export default TvPrograms;




/* BEFORE:
const TvPrograms = () => {
const [programs, setPrograms] = useState([]);

useEffect(() => {
    const fetchPrograms = async () => {
        const programData = await fetch(
            "https://tv-api-p2x2o.ondigitalocean.app/SVT 1.json"
        );
        setPrograms(await programData.json());
    };
    if (!programs.length) {
        fetchPrograms();
    }
});
*/