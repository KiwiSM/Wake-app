import React from "react";
import { Link } from "react-router-dom";
import useTimer from 'easytimer-react-hook';

export default function AnalogTimer() {
    const [timer, isTargetAchieved] = useTimer({});
    timer.start({});

    return (
            <section>
                <h1>Old school clock</h1>
                <Link to={"/DigitalTimer"}>
                    <button>Next page</button>
                </Link>
            </section>
    );
}