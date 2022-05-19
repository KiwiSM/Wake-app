import React from "react";
import { Link } from "react-router-dom";

export default function Loading() {
    return (
            <section>
                <h1>Take your time</h1>
                <Link to={"/SetTimer"}>
                    <button>Next page</button>
                </Link>
            </section>
    );
}