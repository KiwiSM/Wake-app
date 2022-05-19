import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import useTimer from 'easytimer-react-hook';

export default function SetTimer() {
    const [timer, isTargetAchieved] = useTimer({});
    timer.start({});

    return (
            <section>
                <h1>Set timer</h1>
                <Link to={"/AnalogTimer"}>
                    <button>Next page</button>
                </Link>
                <h1>{timer.getTimeValues().toString()}</h1>
            </section>
    );
}