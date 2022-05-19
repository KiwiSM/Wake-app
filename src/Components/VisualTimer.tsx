import React from "react";
import { Link } from "react-router-dom";
import useTimer from 'easytimer-react-hook';

export default function VisualTimer() {
    const [timer, isTargetAchieved] = useTimer({});
    timer.start({});

    return (
            <section>
                <h1>Visualizing</h1>
                <Link to={"/AlarmTimer"}>
                    <button>Next page</button>
                </Link>
            </section>
    );
}