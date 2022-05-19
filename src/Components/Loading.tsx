import React from "react";
import { Link } from "react-router-dom";

export default function Loading() {
    return (
            <section>
                <h1>Take your time</h1>
                <Link to={"/SetTimer"}>
                    <button>Go to clock!</button>
                </Link>
            </section>
    );
}