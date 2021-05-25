import React, { useState, useEffect} from 'react';
import List from '../List/List';

export default function RatesList (props){
    
    // const date = format(props.date, 'yyyy-MM-dd');
    // const {data} = useFetch(`http://api.exchangeratesapi.io/v1/${date}?access_key=c24d7d37337c132cbf80093380586e7c`);
    //const [url, setUrl] = useState();
    //console.log(data, error, loading);
    const {data} = props;
    const [rates, setRates] = useState();
    const [showingRates, setShowingRates] = useState();
    
    useEffect(()=>{
        if(data){
            //setRates(data.rates.filter(rates => !showingRates.includes(rates)));
            setRates(data.rates);
            // setShowingRates(data.rates.filter(rates => ))
        }
        
    }, [data, rates]);
    
    console.log(rates);
    // const seeMore = () => {
    //     let newarr = [...showingRates];
    //     for(var i = 0; (i <= 3 && i < rates.length);) {
    //         newarr.push(rates[0])
    //         rates.splice(0, 1);
    //         i++;
    //     };
    //     setShowingRates(newarr);
    //     //console.log({rates, showingRates});
    // };

    return(
        <div>
            {/* {showingRates && <List list={rates}/>} */}
            {rates && <List list={rates}/>}
            {/* <button className="btn2" onClick={seeMore}>Ver más cotizaciones</button> */}
        </div>
    )
};