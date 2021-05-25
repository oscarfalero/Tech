import React, { useState, useEffect } from 'react';
import Select from "react-select";
import {useFetch} from "../../hooks/useFetch";


export default function SelectList (props) {
    const {data} = useFetch("http://api.exchangeratesapi.io/v1/symbols?access_key=c24d7d37337c132cbf80093380586e7c");
    // const {data} = props;
    // console.log(data, error, loading);
    //const [selected, setSelected] = useState(props.baseSelected);
    const [symbols, setSymbols] = useState([]);

    useEffect(()=>{
        if(data){
            setSymbols(Object.keys(data.symbols));
        }
        
    }, [data]);

    const options = symbols.map(v => ({
        label: v,
        value: v
    }));

    return(
        <Select 
            placeholder={props.baseSelected}
            value={options.filter(obj => obj.value === props.baseSelected)}
            options={options}
            onChange={e => props.handleSelectorChange(e.value)}
        />
    )
};