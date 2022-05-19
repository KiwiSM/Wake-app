import React from "react";
import { Link } from "react-router-dom";
import useTimer from 'easytimer-react-hook';

export default function DigitalTimer() {
    const [timer, isTargetAchieved] = useTimer({});
    timer.start({});

    return (
            <section>
                <h1>Digital clock</h1>
                <Link to={"/VisualTimer"}>
                    <button>Next page</button>
                </Link>
            </section>
    );
}