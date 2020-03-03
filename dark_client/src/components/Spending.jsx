import React, { useEffect, useState } from "react";
import * as d3 from "d3";
import * as venn from "venn.js";
export const Spending = (props) => {

    const [sets, setSets] = useState([
        { sets: ["I"], size: 1000, label: "IMPORTANT: Plan" },
        { sets: ["U"], size: 200, label: "URGENT: Delegate Next" },
        { sets: ["S"], size: 1000, label: "FIT: Make Time" },
        { sets: ["I", "U"], size: 300, label: "Delegate Now" },
        { sets: ["S", "U"], size: 300, label: "Do Next" },
        { sets: ["S", "I"], size: 300, label: "Schedule" },
        { sets: ["S", "I", "U"], size: 80, label: "Do Now" }
    ]);
    useEffect(() => {

        let chart = venn.VennDiagram();
        d3.select("#venn").datum(sets).call(chart);
    }, [sets]);

    return (
        <div id="venn" style={{ textAlign: "center" }}>
        </div>
    );
};