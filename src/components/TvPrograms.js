import React, { useEffect, useState } from 'react';


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
    // Can only return one object, encapsulated in a DIV here
    return (
        < div >
            <h1 className="channel-title">SVT 1</h1>
            <ul className="program-list">
                {programs.map((program) => (
                    <li className="program-list__item">
                        {program.start}
                        <br />
                        {program.name}
                    </li>
                ))}
            </ul>
        </div >
    );
};
export default TvPrograms;
