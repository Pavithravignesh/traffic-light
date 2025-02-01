import { useState, useEffect } from "react";

const TrafficLight = () => {
    const [activeLight, setActiveLight] = useState("red");

    useEffect(() => {
        let timeout;
        if (activeLight === "red") {
            timeout = setTimeout(() => setActiveLight("yellow"), 5000);
        } else if (activeLight === "yellow") {
            timeout = setTimeout(() => setActiveLight("green"), 1000);
        } else {
            timeout = setTimeout(() => setActiveLight("red"), 4000);
        }

        return () => clearTimeout(timeout);
    }, [activeLight]);

    return (
        <div className="flex flex-col items-center space-y-2 bg-gray-800 p-4 rounded-lg w-24">
            <div
                className={`w-16 h-16 rounded-full ${activeLight === "red" ? "bg-red-500" : "bg-red-50"}`}
            />
            <div
                className={`w-16 h-16 rounded-full ${activeLight === "yellow" ? "bg-yellow-500" : "bg-yellow-50"}`}
            />
            <div
                className={`w-16 h-16 rounded-full ${activeLight === "green" ? "bg-green-500" : "bg-green-50"}`}
            />
            <button
                onClick={() => setActiveLight("green")}
                className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg"
            >
                Reset
            </button>
        </div>
    );
};

export default TrafficLight;