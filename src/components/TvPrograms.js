import React, { useEffect, useState } from 'react';

Hej
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
        <h1 class="channel-title">
            SVT 1
            </h1>
                <ul class="program-list">
                <li class="program-list__item">
                13:00<br/>
                    Vinterstudion
                </li>
                <li class="program-list__item">
                13:30<br/>
                    Alpint: VM
                </li>
                <li class="program-list__item">
                14:30<br/>
                    Vinterstudion
                </li>
            </ul>
    </div >
    )
}
