import React from "react";
import { Link } from "react-router-dom";
import useTimer from 'easytimer-react-hook';

export default function AlarmTimer() {
    const [timer, isTargetAchieved] = useTimer({});
    timer.start({});
    
    return (
            <section>
                <h1>Alarm</h1>
                <Link to={"/PauseTimer"}>
                    <button>Next page</button>
                </Link>
            </section>
    );
}