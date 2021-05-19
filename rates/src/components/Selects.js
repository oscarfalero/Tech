import React, { useState } from 'react';
import SelectList from "./SelectList"

const Selects = () => {
    
    const[moneda,setMoneda] = useState("");
    
    return(
        <div>
            <SelectList 
                moneda="Moneda" 
                url="" 
                handleChange={(e) => {
                    setMoneda(e.target.value);
                    }}
            />
            <pre>
                <code>
                    {moneda}
                </code>
            </pre>
        </div>
    )
}

export default Selects;