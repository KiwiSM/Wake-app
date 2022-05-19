import React from "react";
import useTimer from 'easytimer-react-hook';

export default function PauseTimer() {
    const [timer, isTargetAchieved] = useTimer({});
    timer.start({});

    return (
            <section>
                <h1>Take your time</h1>
            </section>
    );
}