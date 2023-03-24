
import React, { useEffect, useState } from 'react';

const Watch = () => {
    const [steps,setSteps] = useState(0);
    const IncreaseStep=()=>{
        setSteps(steps + 1);
    }
    useEffect(()=>{
        console.log(steps);
    },[steps]);
    return (
        <div>
            <h2>This is my Smart Watch!!</h2>
            <p>Steps: {steps}</p>
            <button onClick={IncreaseStep}>De Dour...</button>
        </div>
    );
};

export default Watch;