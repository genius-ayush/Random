import React, { createContext, useContext, useState } from 'react';


const BulbContext = createContext("");

function BulbContextProvider({children}){
    const [bulbOn, setBulbOn] = useState(false);

    return <BulbContext.Provider value={{ bulbOn, setBulbOn }}>
        {children}
    </BulbContext.Provider>
}

function Relearn() {
     

    return (
        <BulbContextProvider >
            <Light />
        </BulbContextProvider>
    );
}

function Light() {
    return (
        <div className="w-full">
            <div className="mx-auto w-fit">                
                <Bulb />
                <Switch />
            </div>
        </div>
    );
}

function Bulb() {
    const { bulbOn } = useContext(BulbContext);
    return (
        <div className="mb-10 mt-10">
            {bulbOn ? "BulbOn" : "BulbOff"}
        </div>
    );
}

function Switch() {
    const { bulbOn, setBulbOn } = useContext(BulbContext);
    return (
        <div>
            <button 
                onClick={() => setBulbOn(!bulbOn)} 
                className="px-4 py-2 bg-blue-100 rounded-md"
            >
                Click Me
            </button>
        </div>
    );
}

export default Relearn;
