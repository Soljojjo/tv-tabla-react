import React, { useEffect, useState } from 'react';
import Sidebar from './Sidebar';


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
            <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gridGap: 20 }}>
                <div>Column 1 < Sidebar />  </div>


                <div>Column 2<h1 className="channel-title">SVT 1</h1>
                    <ul className="program-list">
                        {programs.map((program) => (
                            <li className="program-list__item">
                                {program.start}
                                <br />
                                {program.name}
                            </li>
                        ))}
                    </ul></div>

                <div>Column 3</div>
            </div>


        </div >
    );
};
export default TvPrograms;


