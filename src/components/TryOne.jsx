import React, { useEffect, useState } from 'react'

function TryOne() {

    const [active, setActive] = useState("red");

    useEffect(() => {
        let timeOut;
        if (active === "red") {
            timeOut = setTimeout(() => setActive("yellow"), 4000);
        } else if (active === "yellow") {
            timeOut = setTimeout(() => setActive("green"), 500);
        } else {
            timeOut = setTimeout(() => setActive("red"), 3000);
        }

        return () => clearTimeout(timeOut);
    }, [active]);

    return (
        <>
            <div className='flex flex-col items-center space-y-2 bg-gray-800 p-4 rounded-lg w-24'>
                <div className={`w-16 h-16 rounded-full ${active === "red" ? "bg-red-500" : "bg-red-50"} `}></div>
                <div className={`w-16 h-16 rounded-full ${active === "yellow" ? "bg-yellow-500" : "bg-yellow-50"} `}></div>
                <div className={`w-16 h-16 rounded-full ${active === "green" ? "bg-green-500" : "bg-green-50"} `}></div>
                <div className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg">Reset</div>
            </div >
        </>
    )
}

export default TryOne