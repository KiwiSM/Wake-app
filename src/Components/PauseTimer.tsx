import React from "react";
import { Link } from "react-router-dom";
import useTimer from 'easytimer-react-hook';

export default function PauseTimer() {
    const [timer, isTargetAchieved] = useTimer({});
    timer.start({});

    return (
            <section>
                <h1>Pause</h1>
                <Link to={"/SetTimer"}>
                    <button>Next page</button>
                </Link>
            </section>
    );
}